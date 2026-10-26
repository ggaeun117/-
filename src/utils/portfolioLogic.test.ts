import test from 'node:test';
import assert from 'node:assert/strict';
import { INITIAL_PORTFOLIO_ITEMS } from '../data/portfolioData';
import {
  filterAndSortPortfolio,
  computePortfolioStats,
  groupItemsByYear,
  extractPlainTextFromNotionProp,
} from './portfolioLogic';

test('computePortfolioStats accurately counts all 19 Notion items (12 career, 7 activity)', () => {
  const stats = computePortfolioStats(INITIAL_PORTFOLIO_ITEMS);
  assert.equal(stats.totalCount, 19);
  assert.equal(stats.careerCount, 12);
  assert.equal(stats.activityCount, 7);
  assert.deepEqual(stats.yearsCovered, [2026, 2025, 2024, 2023, 2022, 2021]);
  const assistantDirectorRole = stats.roleCounts.find((r) => r.role === '조연출');
  assert.ok(assistantDirectorRole, '조연출 role should exist');
  assert.equal(assistantDirectorRole.count, 10);
});

test('filterAndSortPortfolio filters by category and role accurately', () => {
  const careerOnly = filterAndSortPortfolio(INITIAL_PORTFOLIO_ITEMS, {
    category: 'career',
    role: 'all',
    year: 'all',
    searchQuery: '',
    sortBy: 'newest',
  });
  assert.equal(careerOnly.length, 12);
  assert.equal(careerOnly[0].year, 2026);

  const snsRoleItems = filterAndSortPortfolio(INITIAL_PORTFOLIO_ITEMS, {
    category: 'all',
    role: 'SNS 콘텐츠 제작',
    year: 'all',
    searchQuery: '',
    sortBy: 'newest',
  });
  assert.equal(snsRoleItems.length, 5);
  assert.ok(snsRoleItems.every((item) => item.category === 'activity'));
});

test('filterAndSortPortfolio filters by search query across title, subtitle, tasks, and achievements', () => {
  const madagascar = filterAndSortPortfolio(INITIAL_PORTFOLIO_ITEMS, {
    category: 'all',
    role: 'all',
    year: 'all',
    searchQuery: '마다가스카르',
    sortBy: 'newest',
  });
  assert.equal(madagascar.length, 1);
  assert.equal(madagascar[0].id, 'madagascar-moramora-2024');

  const immersive = filterAndSortPortfolio(INITIAL_PORTFOLIO_ITEMS, {
    category: 'all',
    role: 'all',
    year: 'all',
    searchQuery: '이머시브 사운드',
    sortBy: 'newest',
  });
  assert.equal(immersive.length, 2);
});

test('groupItemsByYear groups items in descending year order', () => {
  const grouped = groupItemsByYear(INITIAL_PORTFOLIO_ITEMS);
  assert.equal(grouped.length, 6);
  assert.equal(grouped[0].year, 2026);
  assert.equal(grouped[0].items.length, 1);
  assert.equal(grouped[1].year, 2025);
  assert.equal(grouped[1].items.length, 4);
  assert.equal(grouped[2].year, 2024);
  assert.equal(grouped[2].items.length, 7);
});

test('extractPlainTextFromNotionProp parses Notion rich text array segments', () => {
  const raw = [
    ['열정적인', [['h', 'purple']]],
    [' 도전자 '],
    ['박가은', [['h', 'purple']]],
    [' 입니다'],
  ];
  assert.equal(extractPlainTextFromNotionProp(raw), '열정적인 도전자 박가은 입니다');
});
