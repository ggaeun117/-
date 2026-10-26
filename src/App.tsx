/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useMemo, useState } from 'react';
import {
  INITIAL_PORTFOLIO_ITEMS,
  INITIAL_PROFILE_DATA,
  PortfolioItem,
  ProfileData,
} from './data/portfolioData';
import {
  FilterCriteria,
  ViewMode,
  computePortfolioStats,
  filterAndSortPortfolio,
} from './utils/portfolioLogic';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DatabaseExplorer } from './components/DatabaseExplorer';
import { CredentialsSection } from './components/CredentialsSection';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { BlueFolderIcon, ScriptStickerBadge } from './components/BehanceMotifs';

const DEFAULT_CRITERIA: FilterCriteria = {
  category: 'all',
  role: 'all',
  year: 'all',
  searchQuery: '',
  sortBy: 'newest',
};

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(INITIAL_PROFILE_DATA);
  const [items, setItems] = useState<PortfolioItem[]>(INITIAL_PORTFOLIO_ITEMS);
  const [criteria, setCriteria] = useState<FilterCriteria>(DEFAULT_CRITERIA);
  const [viewMode, setViewMode] = useState<ViewMode>('gallery');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatusMessage, setSyncStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetch('/api/notion/portfolio')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!active || !data) return;
        if (data.profile) setProfile(data.profile);
        if (Array.isArray(data.items) && data.items.length > 0) {
          setItems(data.items);
        }
      })
      .catch(() => {
        // Fallback to bundled Notion snapshot silently
      });
    return () => {
      active = false;
    };
  }, []);

  const stats = useMemo(() => computePortfolioStats(items), [items]);
  const featuredItems = useMemo(() => items.filter((item) => item.featured), [items]);
  const filteredItems = useMemo(
    () => filterAndSortPortfolio(items, criteria),
    [items, criteria]
  );

  const selectedProjectIndex = useMemo(
    () =>
      selectedProjectId
        ? filteredItems.findIndex((item) => item.id === selectedProjectId)
        : -1,
    [filteredItems, selectedProjectId]
  );

  const selectedProject = useMemo(() => {
    if (!selectedProjectId) return null;
    return items.find((item) => item.id === selectedProjectId) || null;
  }, [items, selectedProjectId]);

  const handleUpdateCriteria = (patch: Partial<FilterCriteria>) => {
    setCriteria((prev) => ({ ...prev, ...patch }));
  };

  const handleResetCriteria = () => {
    setCriteria(DEFAULT_CRITERIA);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryAndScroll = (category: 'all' | 'career' | 'activity') => {
    setCriteria({ ...DEFAULT_CRITERIA, category });
    handleNavigateSection('database');
  };

  const handleFilterByRoleFromCompetency = (role: string) => {
    setCriteria({
      ...DEFAULT_CRITERIA,
      role,
    });
    handleNavigateSection('database');
  };

  const handleSyncNotion = async () => {
    setIsSyncing(true);
    setSyncStatusMessage(null);
    try {
      const res = await fetch('/api/notion/sync', { method: 'POST' });
      if (!res.ok) throw new Error('Sync request failed');
      const data = await res.json();
      if (data.profile) setProfile(data.profile);
      if (Array.isArray(data.items) && data.items.length > 0) {
        setItems(data.items);
      }
      setSyncStatusMessage(
        `실시간 동기화 완료 (${data.items?.length || items.length}건 레코드 확인)`
      );
    } catch {
      setSyncStatusMessage('로컬 아카이브 스냅샷 최신 상태 유지 중');
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#F3EDE2] text-[#2D1614]">
      <Header
        onOpenContact={() => setIsContactOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      <main className="flex-1">
        <HeroSection
          profile={profile}
          stats={stats}
          featuredItems={featuredItems}
          isSyncing={isSyncing}
          syncStatusMessage={syncStatusMessage}
          onSyncNotion={handleSyncNotion}
          onExploreDatabase={() => handleNavigateSection('database')}
          onSelectCategoryAndScroll={handleSelectCategoryAndScroll}
          onSelectProject={(item) => setSelectedProjectId(item.id)}
        />

        <DatabaseExplorer
          items={items}
          filteredItems={filteredItems}
          stats={stats}
          criteria={criteria}
          viewMode={viewMode}
          onUpdateCriteria={handleUpdateCriteria}
          onResetCriteria={handleResetCriteria}
          onChangeViewMode={setViewMode}
          onSelectProject={(item) => setSelectedProjectId(item.id)}
        />

        <CredentialsSection
          profile={profile}
          onFilterByRole={handleFilterByRoleFromCompetency}
        />
      </main>

      <footer className="bg-[#2D1614] text-[#F3EDE2] border-t-2 border-[#2D1614] py-12">
        <div className="max-w-[1320px] mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <BlueFolderIcon className="w-7 h-6" />
              <p className="font-display font-black text-lg tracking-tight text-[#F3EDE2]">
                {profile.nameKo} ({profile.nameEn}) — portfolio 2025/2026
              </p>
              <ScriptStickerBadge
                text="thank you!"
                rotateClass="-rotate-3"
                className="bg-[#4A86B5] border-[#F3EDE2] scale-75"
              />
            </div>
            <p className="text-[#F3EDE2]/80">
              사단법인 공명 기획팀 · 중앙대학교 음악대학 및 예술경영(복수전공) 졸업 ·{' '}
              <a
                href={`mailto:${profile.email}`}
                className="text-[#8FC1E3] font-bold hover:underline underline-offset-4"
              >
                {profile.email}
              </a>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-bold text-[#F3EDE2]/90">
            <a
              href={profile.notionPublicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8FC1E3] underline underline-offset-4"
            >
              Notion 원본 데이터베이스
            </a>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="hover:text-[#8FC1E3] underline underline-offset-4 cursor-pointer"
            >
              연락처 및 협업 문의
            </button>
          </div>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
        hasPrev={selectedProjectIndex > 0}
        hasNext={selectedProjectIndex >= 0 && selectedProjectIndex < filteredItems.length - 1}
        onSelectPrev={() => {
          if (selectedProjectIndex > 0) {
            setSelectedProjectId(filteredItems[selectedProjectIndex - 1].id);
          }
        }}
        onSelectNext={() => {
          if (selectedProjectIndex >= 0 && selectedProjectIndex < filteredItems.length - 1) {
            setSelectedProjectId(filteredItems[selectedProjectIndex + 1].id);
          }
        }}
      />

      <ContactModal
        isOpen={isContactOpen}
        profile={profile}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
