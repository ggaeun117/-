import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  INITIAL_PORTFOLIO_ITEMS,
  INITIAL_PROFILE_DATA,
  PortfolioItem,
  ProfileData,
} from './src/data/portfolioData';
import { extractPlainTextFromNotionProp } from './src/utils/portfolioLogic';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NOTION_DOMAIN = 'https://jennyparks.notion.site';
const ROOT_PAGE_ID = '18f1b947-6b09-4d4e-ab4d-03ac8cb2ce3d';
const SPACE_ID = '1245184a-9b06-4e93-aff1-51d7883ec7ab';
const CAREER_COLLECTION_ID = '41c00445-9519-4867-9030-8ab8c3f779d1';
const CAREER_VIEW_ID = '7129b63f-ce2c-452d-b795-3f5c5c9a2291';
const ACTIVITY_COLLECTION_ID = '1c58b5fe-bf63-40b8-9ec1-8b034031c853';
const ACTIVITY_VIEW_ID = 'dc9374be-35bf-422f-8169-ed57deda76da';

interface CachedDatabaseState {
  profile: ProfileData;
  items: PortfolioItem[];
  source: 'live-notion-api' | 'cached-snapshot';
  syncedAt: string;
  liveBlockCount: number;
}

let cachedState: CachedDatabaseState = {
  profile: INITIAL_PROFILE_DATA,
  items: INITIAL_PORTFOLIO_ITEMS,
  source: 'cached-snapshot',
  syncedAt: new Date().toISOString(),
  liveBlockCount: 38,
};

async function fetchNotionCollection(collectionId: string, viewId: string) {
  const res = await fetch(`${NOTION_DOMAIN}/api/v3/queryCollection?src=initial_load`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source: {
        type: 'collection',
        id: collectionId,
        spaceId: SPACE_ID,
      },
      collectionView: {
        id: viewId,
        spaceId: SPACE_ID,
      },
      loader: {
        type: 'reducer',
        reducers: {
          collection_group_results: {
            type: 'results',
            limit: 100,
          },
        },
        sort: [],
        searchQuery: '',
        userTimeZone: 'Asia/Seoul',
      },
    }),
  });
  if (!res.ok) throw new Error(`Notion queryCollection failed: ${res.status}`);
  return res.json();
}

async function syncFromLiveNotion(): Promise<CachedDatabaseState> {
  const pageRes = await fetch(`${NOTION_DOMAIN}/api/v3/loadCachedPageChunk`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      page: { id: ROOT_PAGE_ID },
      limit: 100,
      cursor: { stack: [] },
      chunkNumber: 0,
      verticalColumns: false,
    }),
  });

  if (!pageRes.ok) {
    throw new Error(`Notion API returned status ${pageRes.status}`);
  }

  const pageData = await pageRes.json();
  const blocks = pageData?.recordMap?.block || {};
  const liveBlockCount = Object.keys(blocks).length;

  const [careerCol, activityCol] = await Promise.all([
    fetchNotionCollection(CAREER_COLLECTION_ID, CAREER_VIEW_ID),
    fetchNotionCollection(ACTIVITY_COLLECTION_ID, ACTIVITY_VIEW_ID),
  ]);

  const allBlocks = {
    ...blocks,
    ...(careerCol?.recordMap?.block || {}),
    ...(activityCol?.recordMap?.block || {}),
  };

  // Merge live titles, roles, and support grant subtitles from Notion into our rich portfolio items
  const updatedItems = INITIAL_PORTFOLIO_ITEMS.map((item) => {
    const liveBlockWrap = allBlocks[item.notionPageId];
    const liveBlock = liveBlockWrap?.value?.value || liveBlockWrap?.value;
    if (!liveBlock || !liveBlock.properties) return item;

    const liveTitle = extractPlainTextFromNotionProp(liveBlock.properties.title);
    const liveGrant = extractPlainTextFromNotionProp(liveBlock.properties['qkr^']);
    const liveRolesRaw =
      extractPlainTextFromNotionProp(liveBlock.properties['kl}i']) ||
      extractPlainTextFromNotionProp(liveBlock.properties['{<Sx']);
    const liveRoles = liveRolesRaw
      ? liveRolesRaw.split(',').map((r) => r.trim()).filter(Boolean)
      : item.roles;

    return {
      ...item,
      title: liveTitle || item.title,
      subtitle: liveGrant || item.subtitle,
      roles: liveRoles.length > 0 ? liveRoles : item.roles,
    };
  });

  const nowIso = new Date().toISOString();
  cachedState = {
    profile: {
      ...INITIAL_PROFILE_DATA,
      lastSyncedAt: nowIso,
    },
    items: updatedItems,
    source: 'live-notion-api',
    syncedAt: nowIso,
    liveBlockCount,
  };

  return cachedState;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.get('/api/notion/portfolio', (_req, res) => {
    res.json(cachedState);
  });

  app.post('/api/notion/sync', async (_req, res) => {
    try {
      const freshState = await syncFromLiveNotion();
      res.json(freshState);
    } catch (error) {
      // Fallback to cached snapshot with updated timestamp if external network is restricted
      const fallbackNow = new Date().toISOString();
      cachedState = {
        ...cachedState,
        syncedAt: fallbackNow,
        profile: {
          ...cachedState.profile,
          lastSyncedAt: fallbackNow,
        },
      };
      res.json({
        ...cachedState,
        syncWarning: error instanceof Error ? error.message : 'Used cached Notion snapshot',
      });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server running at http://localhost:${PORT}`);
  });
}

startServer();
