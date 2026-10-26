import React, { useState } from 'react';
import {
  Search,
  LayoutGrid,
  Table as TableIcon,
  Calendar,
  ArrowUpRight,
  RotateCcw,
  ExternalLink,
  Image as ImageIcon,
} from 'lucide-react';
import { PortfolioItem } from '../data/portfolioData';
import {
  CategoryFilter,
  FilterCriteria,
  PortfolioStats,
  SortMode,
  ViewMode,
  groupItemsByYear,
} from '../utils/portfolioLogic';
import {
  BlueFolderIcon,
  CursorArrowIcon,
  EspressoAsterisk,
} from './BehanceMotifs';

interface DatabaseExplorerProps {
  items: PortfolioItem[];
  filteredItems: PortfolioItem[];
  stats: PortfolioStats;
  criteria: FilterCriteria;
  viewMode: ViewMode;
  onUpdateCriteria: (patch: Partial<FilterCriteria>) => void;
  onResetCriteria: () => void;
  onChangeViewMode: (mode: ViewMode) => void;
  onSelectProject: (item: PortfolioItem) => void;
}

const ProjectThumbnail: React.FC<{
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  className?: string;
}> = ({ src, alt, title, subtitle, className = '' }) => {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`flex flex-col justify-between p-6 bg-[#EAE2D3] text-[#2D1614] ${className}`}
      >
        <span className="text-xs font-mono-tabular text-[#2D1614]/50">ARCHIVE RECORD</span>
        <div>
          <p className="font-bold text-sm text-[#2D1614] line-clamp-2">{title}</p>
          <p className="text-xs text-[#2D1614]/70 mt-1 line-clamp-1">{subtitle}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
};

export const DatabaseExplorer: React.FC<DatabaseExplorerProps> = ({
  items,
  filteredItems,
  stats,
  criteria,
  viewMode,
  onUpdateCriteria,
  onResetCriteria,
  onChangeViewMode,
  onSelectProject,
}) => {
  const hasActiveFilters =
    criteria.category !== 'all' ||
    criteria.role !== 'all' ||
    criteria.year !== 'all' ||
    criteria.searchQuery.trim().length > 0;

  const groupedByYear = groupItemsByYear(filteredItems);

  // Top 3 spotlight projects rendered in the Behance "project 1 / project 2 / project 3" split showcase style
  const spotlightProjects = filteredItems.slice(0, 3);

  return (
    <section id="database" className="py-16 border-b border-[#2D1614]/15">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* ============================================================
            PART 1: BEHANCE SECTION BANNER WITH FLOATING FOLDERS (behance-real-3.png)
        ============================================================ */}
        <div className="relative py-10 mb-12 flex flex-col items-center text-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-12 items-center gap-6">
            {/* Left Floating Folder Shortcuts */}
            <div className="hidden md:flex md:col-span-3 flex-col items-center gap-6">
              <button
                type="button"
                onClick={() => onUpdateCriteria({ category: 'career', role: 'all' })}
                className="group flex flex-col items-center cursor-pointer"
              >
                <BlueFolderIcon className="w-24 h-20 group-hover:-translate-y-1 transition-transform" />
                <span className="text-xs font-medium text-[#2D1614] mt-1">
                  career works ({stats.careerCount})
                </span>
              </button>
              <button
                type="button"
                onClick={() => onUpdateCriteria({ role: '조연출' })}
                className="group flex flex-col items-center cursor-pointer -ml-8"
              >
                <BlueFolderIcon className="w-24 h-20 group-hover:-translate-y-1 transition-transform" />
                <span className="text-xs font-medium text-[#2D1614] mt-1">
                  assistant director (10)
                </span>
              </button>
            </div>

            {/* Center Massive Display Heading */}
            <div className="md:col-span-6 flex flex-col items-center">
              <div className="relative inline-block">
                <h2 className="text-[clamp(3rem,7vw,5.75rem)] font-extrabold tracking-[-0.04em] text-[#2D1614] leading-none">
                  selected works
                </h2>
                <CursorArrowIcon className="w-11 h-11 absolute -bottom-3 -right-7" />
              </div>
              <p className="text-sm sm:text-base text-[#2D1614]/80 mt-4 max-w-md">
                노션 데이터베이스에 기록된 공연기획 · 조연출 · 국제문화교류 · 대외활동 프로젝트 아카이브 ({items.length}건)
              </p>
            </div>

            {/* Right Floating Folder Shortcuts */}
            <div className="hidden md:flex md:col-span-3 flex-col items-center gap-6">
              <button
                type="button"
                onClick={() => onUpdateCriteria({ category: 'activity', role: 'all' })}
                className="group flex flex-col items-center cursor-pointer"
              >
                <BlueFolderIcon className="w-24 h-20 group-hover:-translate-y-1 transition-transform" />
                <span className="text-xs font-medium text-[#2D1614] mt-1">
                  activities &amp; pr ({stats.activityCount})
                </span>
              </button>
              <button
                type="button"
                onClick={() => onUpdateCriteria({ role: 'SNS 콘텐츠 제작' })}
                className="group flex flex-col items-center cursor-pointer ml-8"
              >
                <BlueFolderIcon className="w-24 h-20 group-hover:-translate-y-1 transition-transform" />
                <span className="text-xs font-medium text-[#2D1614] mt-1">
                  social media (5)
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================
            PART 2: BEHANCE FEATURED CASE STUDIES ("project 1, 2, 3" - behance-real-4.png)
        ============================================================ */}
        {!hasActiveFilters && viewMode === 'gallery' && spotlightProjects.length > 0 && (
          <div className="space-y-16 mb-20">
            {spotlightProjects.map((project, idx) => (
              <article
                key={`spotlight-${project.id}`}
                className="rounded-3xl bg-[#EFE8DA] border border-[#2D1614]/15 p-6 sm:p-10"
              >
                {/* Top Strip: project N & category */}
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#2D1614] mb-6 pb-3 border-b border-[#2D1614]/10">
                  <span>project {idx + 1}</span>
                  <span>{project.year} · {project.roles.join(' / ')}</span>
                  <span>{project.category === 'career' ? 'performance & grant' : 'cultural pr'}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Bold Heading + About the project + Result */}
                  <div className="lg:col-span-6 space-y-5">
                    <div>
                      <p className="text-xs font-bold text-[#4A86B5] mb-1.5">
                        {project.subtitle}
                      </p>
                      <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#2D1614] leading-[1.15]">
                        {project.title}
                      </h3>
                    </div>

                    <div className="space-y-4 text-sm sm:text-base text-[#2D1614]/90 leading-relaxed">
                      <p>
                        <strong className="font-extrabold text-[#2D1614]">
                          주요 업무 (About the project):
                        </strong>{' '}
                        {project.tasks.join(' ')}
                      </p>
                      <p>
                        <strong className="font-extrabold text-[#2D1614]">
                          성과 및 기여 (Result):
                        </strong>{' '}
                        {project.achievements.join(' ')}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-[#F3EDE2] bg-[#2D1614] rounded-full hover:bg-[#432320] transition-colors cursor-pointer"
                      >
                        <span>상세 기록 및 포스터 보기 ({project.images.length}장)</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      {project.links[0] && (
                        <a
                          href={project.links[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#2D1614] hover:underline underline-offset-4"
                        >
                          <span>{project.links[0].label}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Visual Showcase Collage with Espresso Asterisk & "project N" Script Sticker */}
                  <div className="lg:col-span-6 relative">
                    <EspressoAsterisk className="w-11 h-11 absolute -top-5 -left-4 z-10" />

                    <div
                      onClick={() => onSelectProject(project)}
                      className="cursor-pointer rounded-2xl border-[3px] border-[#2D1614] bg-[#2D1614] p-2 shadow-lg overflow-hidden"
                    >
                      {project.images.length >= 2 ? (
                        <div className="grid grid-cols-2 gap-2 aspect-[16/11]">
                          {project.images.slice(0, 2).map((img) => (
                            <div key={img.id} className="relative overflow-hidden rounded-xl bg-stone-900 h-full">
                              <ProjectThumbnail
                                src={img.url}
                                alt={img.caption}
                                title={project.title}
                                subtitle={project.subtitle}
                                className="w-full h-full hover:scale-105 transition-transform duration-200"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="aspect-[16/11] rounded-xl overflow-hidden bg-stone-900">
                          <ProjectThumbnail
                            src={project.coverImage}
                            alt={project.title}
                            title={project.title}
                            subtitle={project.subtitle}
                            className="w-full h-full hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                      )}
                    </div>

                    {/* Tilted "project N" Script Sticker Badge at Bottom-Right */}
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-4 -right-2 z-10 -rotate-6 bg-[#2D1614] text-[#F3EDE2] px-5 py-1 rounded-full shadow-md select-none"
                    >
                      <span className="font-script text-3xl sm:text-4xl leading-none">
                        project {idx + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* ============================================================
            PART 3: FULL INTERACTIVE NOTION DATABASE EXPLORER (19 ITEMS)
        ============================================================ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
          <div>
            <p className="text-xs font-bold text-[#4A86B5] uppercase tracking-wider mb-1">
              All Notion Database Records
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#2D1614]">
              전체 프로젝트 데이터베이스 ({filteredItems.length}건)
            </h3>
          </div>

          {/* Interactive View Switcher */}
          <div
            role="group"
            aria-label="데이터베이스 보기 방식 선택"
            className="inline-flex items-center gap-1 p-1 bg-[#E5DEC9] border border-[#2D1614]/15 rounded-full self-start lg:self-auto"
          >
            <button
              type="button"
              onClick={() => onChangeViewMode('gallery')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'gallery'
                  ? 'bg-[#2D1614] text-[#F3EDE2]'
                  : 'text-[#2D1614]/75 hover:text-[#2D1614]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>갤러리 뷰</span>
            </button>
            <button
              type="button"
              onClick={() => onChangeViewMode('table')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-[#2D1614] text-[#F3EDE2]'
                  : 'text-[#2D1614]/75 hover:text-[#2D1614]'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>테이블 뷰</span>
            </button>
            <button
              type="button"
              onClick={() => onChangeViewMode('timeline')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'timeline'
                  ? 'bg-[#2D1614] text-[#F3EDE2]'
                  : 'text-[#2D1614]/75 hover:text-[#2D1614]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>타임라인 뷰</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="bg-[#FAF6EE] border-2 border-[#2D1614] rounded-2xl p-5 mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Filter Tabs */}
            <div
              role="group"
              aria-label="카테고리 필터"
              className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EAE2D3] rounded-xl"
            >
              {(
                [
                  { id: 'all', label: `전체 아카이브 (${items.length})` },
                  { id: 'career', label: `경력사항 · 사단법인 공명 (${stats.careerCount})` },
                  { id: 'activity', label: `교내·대외활동 (${stats.activityCount})` },
                ] as Array<{ id: CategoryFilter; label: string }>
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onUpdateCriteria({ category: tab.id })}
                  className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    criteria.category === tab.id
                      ? 'bg-[#2D1614] text-[#F3EDE2]'
                      : 'text-[#2D1614]/75 hover:text-[#2D1614]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input & Sort Selector */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
              <div className="relative flex-1 sm:w-72">
                <label htmlFor="portfolio-search" className="sr-only">
                  프로젝트, 지원사업명, 역할 검색
                </label>
                <Search className="w-4 h-4 text-[#2D1614]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="portfolio-search"
                  type="search"
                  value={criteria.searchQuery}
                  onChange={(e) => onUpdateCriteria({ searchQuery: e.target.value })}
                  placeholder="공연명, 지원사업명, 업무 키워드 검색..."
                  className="w-full pl-9 pr-3.5 py-2 text-xs bg-white border border-[#2D1614]/25 rounded-lg text-[#2D1614] placeholder:text-[#2D1614]/45 focus:outline-none focus:border-[#2D1614]"
                />
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <label
                  htmlFor="portfolio-sort"
                  className="text-xs font-semibold text-[#2D1614]/70 whitespace-nowrap"
                >
                  정렬
                </label>
                <select
                  id="portfolio-sort"
                  value={criteria.sortBy}
                  onChange={(e) => onUpdateCriteria({ sortBy: e.target.value as SortMode })}
                  className="px-3 py-2 text-xs font-semibold bg-white border border-[#2D1614]/25 rounded-lg text-[#2D1614] focus:outline-none focus:border-[#2D1614] cursor-pointer"
                >
                  <option value="newest">최신 연도순</option>
                  <option value="featured">주요 프로젝트 우선</option>
                  <option value="oldest">과거 연도순</option>
                  <option value="title">제목 가나다순</option>
                </select>
              </div>
            </div>
          </div>

          {/* Role & Year Filters */}
          <div className="pt-3 border-t border-[#2D1614]/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-[#2D1614]/60 mr-1.5 whitespace-nowrap">
                역할 필터:
              </span>
              <button
                type="button"
                onClick={() => onUpdateCriteria({ role: 'all' })}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  criteria.role === 'all'
                    ? 'bg-[#4A86B5] text-white'
                    : 'bg-[#EAE2D3] text-[#2D1614]/80 hover:bg-[#DFD5C3]'
                }`}
              >
                전체 역할
              </button>
              {stats.roleCounts.map((r) => (
                <button
                  key={r.role}
                  type="button"
                  onClick={() =>
                    onUpdateCriteria({ role: criteria.role === r.role ? 'all' : r.role })
                  }
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    criteria.role === r.role
                      ? 'bg-[#4A86B5] text-white'
                      : 'bg-[#EAE2D3] text-[#2D1614]/80 hover:bg-[#DFD5C3]'
                  }`}
                >
                  {r.role} ({r.count})
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-1.5 shrink-0">
              <span className="text-xs font-bold text-[#2D1614]/60 mr-1 whitespace-nowrap">
                연도:
              </span>
              <button
                type="button"
                onClick={() => onUpdateCriteria({ year: 'all' })}
                className={`px-2.5 py-1 text-xs font-mono-tabular font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  criteria.year === 'all'
                    ? 'bg-[#2D1614] text-[#F3EDE2]'
                    : 'bg-[#EAE2D3] text-[#2D1614]/80 hover:bg-[#DFD5C3]'
                }`}
              >
                전체
              </button>
              {stats.yearsCovered.map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() =>
                    onUpdateCriteria({ year: criteria.year === yr ? 'all' : yr })
                  }
                  className={`px-2.5 py-1 text-xs font-mono-tabular font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    criteria.year === yr
                      ? 'bg-[#2D1614] text-[#F3EDE2]'
                      : 'bg-[#EAE2D3] text-[#2D1614]/80 hover:bg-[#DFD5C3]'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-[#2D1614]/70">
            <div>
              조회 결과:{' '}
              <strong className="font-mono-tabular font-bold text-[#2D1614]">
                {filteredItems.length}건
              </strong>{' '}
              / 전체 {items.length}건
            </div>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={onResetCriteria}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#4A86B5] hover:underline underline-offset-4 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>필터 초기화</span>
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 ? (
          <div className="bg-[#FAF6EE] border-2 border-[#2D1614] rounded-2xl p-12 text-center">
            <p className="text-base font-bold text-[#2D1614] mb-1">
              선택한 조건에 일치하는 프로젝트가 없습니다.
            </p>
            <p className="text-sm text-[#2D1614]/70 mb-5">
              검색어나 직무·연도 필터를 변경하거나 초기화해 보세요.
            </p>
            <button
              type="button"
              onClick={onResetCriteria}
              className="px-4 py-2 text-xs font-bold text-[#F3EDE2] bg-[#2D1614] rounded-full hover:bg-[#432320] transition-colors cursor-pointer"
            >
              전체 프로젝트 다시 보기
            </button>
          </div>
        ) : viewMode === 'gallery' ? (
          /* 1. GALLERY GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group bg-[#FAF6EE] border-2 border-[#2D1614] rounded-2xl overflow-hidden flex flex-col justify-between hover:-translate-y-0.5 transition-transform"
              >
                <div>
                  <div className="relative overflow-hidden bg-[#2D1614] aspect-[4/3] w-full border-b-2 border-[#2D1614]">
                    <ProjectThumbnail
                      src={item.coverImage}
                      alt={item.title}
                      title={item.title}
                      subtitle={item.subtitle}
                      className="w-full h-full group-hover:scale-[1.03] transition-transform duration-200"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#2D1614]/70 mb-2">
                      <span className="font-mono-tabular font-bold text-[#2D1614]">
                        {item.year}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{item.category === 'career' ? '경력사항' : '교내·대외활동'}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#4A86B5] font-bold">
                        {item.roles.join(' / ')}
                      </span>
                    </div>

                    <h4 className="text-lg font-extrabold text-[#2D1614] leading-snug mb-1.5">
                      {item.title}
                    </h4>

                    <p className="text-xs font-semibold text-[#2D1614]/70 mb-3">
                      {item.subtitle}
                    </p>

                    <p className="text-sm text-[#2D1614]/80 leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-[#EFE8DA] border-t border-[#2D1614]/15 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-xs text-[#2D1614]/70 font-mono-tabular">
                    <span className="inline-flex items-center gap-1">
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>자료 {item.images.length}장</span>
                    </span>
                    {item.links.length > 0 && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="inline-flex items-center gap-1">
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>링크 {item.links.length}건</span>
                        </span>
                      </>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProject(item)}
                    aria-label={`${item.title} 상세 내용 보기`}
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-[#2D1614] hover:text-[#4A86B5] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>상세 기록 열기</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : viewMode === 'table' ? (
          /* 2. NOTION DATABASE TABLE VIEW */
          <div className="bg-[#FAF6EE] border-2 border-[#2D1614] rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#2D1614] bg-[#EAE2D3] text-xs font-bold text-[#2D1614]">
                    <th className="py-3.5 px-4 whitespace-nowrap">연도 · 일정</th>
                    <th className="py-3.5 px-4 whitespace-nowrap">분류</th>
                    <th className="py-3.5 px-4">이름 (프로젝트명)</th>
                    <th className="py-3.5 px-4">지원사업명 · 주관기관</th>
                    <th className="py-3.5 px-4">담당 역할</th>
                    <th className="py-3.5 px-4 whitespace-nowrap text-right">하위 페이지</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2D1614]/15 text-sm">
                  {filteredItems.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-[#EFE8DA] transition-colors"
                    >
                      <td className="py-3.5 px-4 font-mono-tabular text-xs text-[#2D1614]/80 whitespace-nowrap align-top">
                        <div className="font-bold text-[#2D1614]">{item.year}</div>
                        <div className="text-[#2D1614]/60">{item.schedule}</div>
                      </td>
                      <td className="py-3.5 px-4 text-xs font-semibold text-[#2D1614]/80 whitespace-nowrap align-top">
                        {item.category === 'career' ? '경력사항' : '교내·대외활동'}
                      </td>
                      <td className="py-3.5 px-4 align-top">
                        <div className="font-bold text-[#2D1614]">{item.title}</div>
                        <div className="text-xs text-[#2D1614]/65 mt-0.5 line-clamp-1">
                          {item.summary}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-[#2D1614]/80 align-top">
                        {item.subtitle}
                      </td>
                      <td className="py-3.5 px-4 text-xs text-[#4A86B5] font-bold align-top">
                        {item.roles.join(' · ')}
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap align-top">
                        <button
                          type="button"
                          onClick={() => onSelectProject(item)}
                          aria-label={`${item.title} 상세 페이지 열기`}
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-[#F3EDE2] bg-[#2D1614] hover:bg-[#432320] rounded-full transition-colors cursor-pointer"
                        >
                          <span>열기</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* 3. CHRONOLOGICAL TIMELINE VIEW */
          <div className="space-y-10">
            {groupedByYear.map((group) => (
              <div
                key={group.year}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 border-t border-[#2D1614]/15 first:border-t-0 first:pt-0"
              >
                <div className="lg:col-span-3">
                  <div className="sticky top-24">
                    <span className="text-4xl font-extrabold font-mono-tabular text-[#2D1614]">
                      {group.year}
                    </span>
                    <p className="text-xs text-[#2D1614]/65 mt-1 font-mono-tabular">
                      총 {group.items.length}건의 프로젝트 기록
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-9 space-y-4">
                  {group.items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#FAF6EE] border-2 border-[#2D1614] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#2D1614] bg-[#2D1614] shrink-0">
                          <ProjectThumbnail
                            src={item.coverImage}
                            alt={item.title}
                            title={item.title}
                            subtitle={item.subtitle}
                            className="w-full h-full"
                          />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#2D1614]/70 mb-1">
                            <span>{item.category === 'career' ? '경력사항' : '교내·대외활동'}</span>
                            <span aria-hidden="true">·</span>
                            <span className="font-mono-tabular">{item.schedule}</span>
                            <span aria-hidden="true">·</span>
                            <span className="text-[#4A86B5] font-bold">
                              {item.roles.join(' / ')}
                            </span>
                          </div>
                          <h4 className="text-base font-extrabold text-[#2D1614]">{item.title}</h4>
                          <p className="text-xs text-[#2D1614]/70 mt-0.5">{item.subtitle}</p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectProject(item)}
                        aria-label={`${item.title} 상세 보기`}
                        className="self-start sm:self-center inline-flex items-center gap-1 px-4 py-2 text-xs font-bold text-[#F3EDE2] bg-[#2D1614] hover:bg-[#432320] rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>상세 보기</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
