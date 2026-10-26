import React from 'react';
import { RefreshCw, Mail, Phone, ExternalLink } from 'lucide-react';
import { PortfolioItem, ProfileData } from '../data/portfolioData';
import { PortfolioStats } from '../utils/portfolioLogic';
import {
  BlueFolderIcon,
  BlueSparkleBullet,
  CursorArrowIcon,
  EspressoAsterisk,
  NotionBadgeIcon,
} from './BehanceMotifs';

interface HeroSectionProps {
  profile: ProfileData;
  stats: PortfolioStats;
  featuredItems: PortfolioItem[];
  isSyncing: boolean;
  syncStatusMessage: string | null;
  onSyncNotion: () => void;
  onExploreDatabase: () => void;
  onSelectCategoryAndScroll: (category: 'all' | 'career' | 'activity') => void;
  onSelectProject: (item: PortfolioItem) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  stats,
  featuredItems,
  isSyncing,
  syncStatusMessage,
  onSyncNotion,
  onExploreDatabase,
  onSelectCategoryAndScroll,
  onSelectProject,
}) => {
  const formattedSyncTime = new Date(profile.lastSyncedAt).toLocaleString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  const oecdProject = featuredItems.find((i) => i.id === 'oecd-30th-2026') || featuredItems[0];
  const dancingProject =
    featuredItems.find((i) => i.id === 'dancing-music-2025') || featuredItems[1];
  const madagascarProject =
    featuredItems.find((i) => i.id === 'madagascar-moramora-2024') || featuredItems[2];

  return (
    <section id="about" className="pt-6 pb-20 border-b border-[#2D1614]/15">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* ============================================================
            PART 1: BEHANCE 2025 DESKTOP FOLDER CANVAS HERO
        ============================================================ */}
        <div className="relative rounded-3xl bg-[#EFE8DA] border border-[#2D1614]/10 px-6 sm:px-12 pt-8 pb-14 mb-20 overflow-hidden">
          {/* Top 3-Zone Editorial Labels inside Canvas */}
          <div className="flex items-center justify-between text-xs sm:text-sm font-bold tracking-tight text-[#2D1614] mb-10 sm:mb-14">
            <span>arts management</span>
            <span>portfolio</span>
            <span>performance &amp; pr</span>
          </div>

          {/* Desktop Canvas Interactive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Floating Desktop Shortcuts */}
            <div className="lg:col-span-3 flex lg:flex-col items-center justify-around lg:justify-between gap-6 order-2 lg:order-1">
              {/* Notion App Icon + Career Works Folder */}
              <div className="flex flex-col items-center gap-3">
                <button
                  type="button"
                  onClick={onSyncNotion}
                  disabled={isSyncing}
                  aria-label="Notion 데이터베이스 실시간 동기화"
                  className="group flex flex-col items-center gap-1.5 cursor-pointer"
                >
                  <NotionBadgeIcon className="w-14 h-14 group-hover:-translate-y-1 transition-transform" />
                  <span className="text-[11px] font-mono-tabular text-[#2D1614]/70">
                    {isSyncing ? 'syncing...' : 'notion_db.app'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCategoryAndScroll('career')}
                  className="group flex flex-col items-center cursor-pointer mt-2"
                >
                  <BlueFolderIcon className="w-28 h-22 group-hover:-translate-y-1 transition-transform drop-shadow-xs" />
                  <span className="text-xs font-medium text-[#2D1614] mt-1">
                    career works ({stats.careerCount})
                  </span>
                </button>
              </div>

              {/* Bottom-Left File Thumbnail */}
              {dancingProject && (
                <button
                  type="button"
                  onClick={() => onSelectProject(dancingProject)}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <div className="w-24 h-28 rounded-md overflow-hidden border border-[#2D1614]/20 shadow-sm bg-white p-1 group-hover:-translate-y-1 transition-transform">
                    <img
                      src={dancingProject.coverImage}
                      alt={dancingProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xs"
                    />
                  </div>
                  <span className="text-[11px] font-mono-tabular text-[#2D1614]/80 mt-1.5">
                    dancing_music.jpg
                  </span>
                </button>
              )}
            </div>

            {/* Centerpiece Oversized Typography + Translucent Sky-Blue Folder */}
            <div className="lg:col-span-6 flex flex-col items-center text-center order-1 lg:order-2 py-4">
              <div className="relative inline-flex flex-col items-center">
                {/* Script Dusty-Blue Kicker overlapping top-left */}
                <span className="font-script text-[clamp(3.2rem,6.5vw,5.2rem)] text-[#5B8DB8] leading-none lg:-ml-36 -mb-5 sm:-mb-8 z-10 select-none">
                  Cultural Planner
                </span>

                {/* Massive Deep Espresso Lowercase Display Title */}
                <h1 className="text-[clamp(4.2rem,10.5vw,8.5rem)] font-extrabold tracking-[-0.05em] text-[#2D1614] leading-[0.9] select-none">
                  portfolio
                </h1>

                {/* Center Translucent Sky-Blue Folder Overlapping Bottom of "portfolio" */}
                <button
                  type="button"
                  onClick={onExploreDatabase}
                  aria-label="포트폴리오 아카이브 전체 탐색"
                  className="relative -mt-6 sm:-mt-10 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2D1614]"
                >
                  <BlueFolderIcon
                    translucent
                    className="w-56 sm:w-72 h-44 sm:h-56 drop-shadow-md group-hover:scale-[1.02] transition-transform"
                  />
                  {/* Oversized Pointer Cursor at Bottom-Right of Folder */}
                  <CursorArrowIcon className="w-12 h-12 sm:w-14 sm:h-14 absolute -bottom-2 -right-5 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                </button>

                {/* Italic Serif Year & Name Underneath */}
                <p className="font-editorial italic text-2xl sm:text-3xl text-[#2D1614] mt-3">
                  (2021 — 2026) · 박가은 Gaeun Park
                </p>
              </div>

              {/* Sync & Action Bar */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={onExploreDatabase}
                  className="px-5 py-2.5 text-xs font-bold text-[#F3EDE2] bg-[#2D1614] rounded-full hover:bg-[#432320] transition-colors cursor-pointer"
                >
                  아카이브 전체 보기 ({stats.totalCount}건)
                </button>
                <button
                  type="button"
                  onClick={onSyncNotion}
                  disabled={isSyncing}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-[#2D1614] bg-white/80 border border-[#2D1614]/20 rounded-full hover:bg-white transition-colors cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                  <span>{isSyncing ? '동기화 중...' : 'Notion 실시간 동기화'}</span>
                </button>
              </div>

              <div className="mt-3 text-[11px] text-[#2D1614]/65 font-mono-tabular">
                <span>Notion DB: {profile.notionPageId.slice(0, 8)}</span>
                <span className="mx-2">·</span>
                <span>최근 동기화: {formattedSyncTime}</span>
                {syncStatusMessage && (
                  <>
                    <span className="mx-2">·</span>
                    <span className="font-bold text-[#2D1614]">{syncStatusMessage}</span>
                  </>
                )}
              </div>
            </div>

            {/* Right Floating Desktop Shortcuts */}
            <div className="lg:col-span-3 flex lg:flex-col items-center justify-around lg:justify-between gap-6 order-3">
              {/* Top-Right File Thumbnail */}
              {oecdProject && (
                <button
                  type="button"
                  onClick={() => onSelectProject(oecdProject)}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <div className="w-24 h-28 rounded-md overflow-hidden border border-[#2D1614]/20 shadow-sm bg-white p-1 group-hover:-translate-y-1 transition-transform">
                    <img
                      src={oecdProject.coverImage}
                      alt={oecdProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xs"
                    />
                  </div>
                  <span className="text-[11px] font-mono-tabular text-[#2D1614]/80 mt-1.5">
                    oecd_30th_2026.jpg
                  </span>
                </button>
              )}

              {/* Middle-Right Blue Folder: Activities */}
              <button
                type="button"
                onClick={() => onSelectCategoryAndScroll('activity')}
                className="group flex flex-col items-center cursor-pointer"
              >
                <BlueFolderIcon className="w-28 h-22 group-hover:-translate-y-1 transition-transform drop-shadow-xs" />
                <span className="text-xs font-medium text-[#2D1614] mt-1">
                  activities &amp; pr ({stats.activityCount})
                </span>
              </button>

              {/* Bottom-Right File Thumbnail */}
              {madagascarProject && (
                <button
                  type="button"
                  onClick={() => onSelectProject(madagascarProject)}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <div className="w-24 h-28 rounded-md overflow-hidden border border-[#2D1614]/20 shadow-sm bg-white p-1 group-hover:-translate-y-1 transition-transform">
                    <img
                      src={madagascarProject.coverImage}
                      alt={madagascarProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xs"
                    />
                  </div>
                  <span className="text-[11px] font-mono-tabular text-[#2D1614]/80 mt-1.5">
                    moramora_poster.jpg
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ============================================================
            PART 2: BEHANCE "ABOUT ME" SECTION (behance-real-2.png MATCH)
        ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Dark-Espresso Framed Card with "about me" Script Sticker & Asterisk */}
          <div className="lg:col-span-5 flex relative pt-4">
            {/* Tilted "about me" Script Sticker Badge */}
            <div
              aria-hidden="true"
              className="absolute -top-2 -left-3 z-10 -rotate-6 bg-[#2D1614] text-[#F3EDE2] px-5 py-1.5 rounded-full shadow-md select-none"
            >
              <span className="font-script text-3xl sm:text-4xl leading-none tracking-wide">
                about me
              </span>
            </div>

            {/* Framed Profile & Credentials Summary Card (No portrait photo as requested) */}
            <div className="w-full bg-[#FAF6EE] border-[3px] border-[#2D1614] rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative">
              <div className="space-y-5 pt-3">
                <div className="flex items-baseline justify-between gap-4 border-b border-[#2D1614]/15 pb-4">
                  <div>
                    <p className="text-xs font-bold text-[#4A86B5] uppercase tracking-wider mb-1">
                      Profile Summary
                    </p>
                    <h2 className="text-xl font-extrabold text-[#2D1614]">
                      {profile.nameKo}{' '}
                      <span className="font-editorial font-normal text-[#2D1614]/70">
                        {profile.nameEn}
                      </span>
                    </h2>
                    <p className="text-xs text-[#2D1614]/70 mt-1">
                      공연기획 · 조연출 · 공공 예술지원사업 운영 · 국제문화교류
                    </p>
                  </div>
                  <span className="font-mono-tabular text-xs font-semibold text-[#2D1614]/70 shrink-0">
                    {profile.birthDate}
                  </span>
                </div>

                {/* Education Summary */}
                <div className="space-y-2 border-b border-[#2D1614]/15 pb-4">
                  <p className="text-xs font-bold text-[#2D1614]/60">Education (학력)</p>
                  <div className="space-y-1.5 text-xs text-[#2D1614]">
                    {profile.education.map((edu, idx) => (
                      <div key={idx} className="flex items-baseline justify-between gap-2">
                        <span className="font-semibold">
                          {edu.school} {edu.major}
                        </span>
                        <span className="font-mono-tabular text-[#2D1614]/60 shrink-0">
                          {edu.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Licenses Summary */}
                <div className="space-y-2 border-b border-[#2D1614]/15 pb-4">
                  <p className="text-xs font-bold text-[#2D1614]/60">
                    License &amp; Language (자격·어학)
                  </p>
                  <div className="space-y-1.5 text-xs text-[#2D1614]">
                    {profile.licenses.map((lic, idx) => (
                      <div key={idx} className="flex items-baseline justify-between gap-2">
                        <span className="font-semibold">{lic.name}</span>
                        <span className="font-mono-tabular text-[#4A86B5] font-bold shrink-0">
                          {lic.name.endsWith(lic.grade) ? lic.year : `${lic.year} · ${lic.grade}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Public Grant & Production Partners */}
                <div className="space-y-1.5 border-b border-[#2D1614]/15 pb-4">
                  <p className="text-xs font-bold text-[#2D1614]/60">
                    Major Grants &amp; Partners (주요 협력·지원 기관)
                  </p>
                  <p className="text-xs text-[#2D1614]/85 leading-relaxed font-medium">
                    한국문화예술위원회(ARKO) · 예술경영지원센터(KAMS) · 서울시(공연봄날) · 성동·용인·강남문화재단
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 text-xs">
                <div>
                  <p className="text-[#2D1614]/55 mb-0.5">현직 소속</p>
                  <p className="font-bold text-[#2D1614]">사단법인 공명 기획팀</p>
                </div>
                <div>
                  <p className="text-[#2D1614]/55 mb-0.5">재직 기간</p>
                  <p className="font-mono-tabular font-bold text-[#2D1614]">2024.03 ~ 현재</p>
                </div>
              </div>

              {/* Espresso Asterisk Sticker at Bottom-Right Corner */}
              <EspressoAsterisk className="w-12 h-12 absolute -bottom-5 -right-5" />
            </div>
          </div>

          {/* Right Column: Script Greeting, Bio, and Sky-Blue Star Specialization List */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              {/* Script Greeting matching "Hi, I'm Nastya!" */}
              <p className="font-script text-4xl sm:text-5xl text-[#2D1614] mb-2">
                Hi, I&apos;m Gaeun Park!
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D1614] mb-4">
                문화예술 기획자를 꿈꾸는 열정적인 도전자 박가은입니다.
              </h3>

              <p className="text-base text-[#2D1614]/85 leading-[1.7] mb-6">
                {profile.bio}
              </p>

              <p className="text-base font-bold text-[#2D1614] mb-4">What I specialize in:</p>

              <ul className="space-y-3.5 text-sm sm:text-base text-[#2D1614]/90">
                <li className="flex items-start gap-3">
                  <BlueSparkleBullet className="w-5 h-5 shrink-0 mt-1" />
                  <div>
                    <strong className="font-extrabold text-[#2D1614]">
                      Performance Production (공연 조연출 · 현장 진행)
                    </strong>{' '}
                    — 월드뮤직그룹 공명 정기·기획콘서트, 이머시브 사운드 무대, 렉처 콘서트 및
                    한국–OECD 가입 30주년 기념 공연 등 10건의 프로덕션 조연출 수행
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BlueSparkleBullet className="w-5 h-5 shrink-0 mt-1" />
                  <div>
                    <strong className="font-extrabold text-[#2D1614]">
                      Public Grant &amp; Tour Operations (공공 예술지원사업 · 지역투어 행정)
                    </strong>{' '}
                    — 한국문화예술위원회 창작주체, 예술경영지원센터 지역맞춤형 공연유통, 서울시
                    공연봄날, 신나는 예술여행(15개 중학교) 예산·정산·투어 총괄
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BlueSparkleBullet className="w-5 h-5 shrink-0 mt-1" />
                  <div>
                    <strong className="font-extrabold text-[#2D1614]">
                      International Exchange &amp; Cultural PR (국제교류 통역 · SNS 홍보 디자인)
                    </strong>{' '}
                    — 한-마다가스카르 국제교류공연 &lt;무라무라&gt; 현지 조연출·통역 및 성동·용인문화재단,
                    본다빈치 뮤지엄 홍보 콘텐츠 제작
                  </div>
                </li>
              </ul>
            </div>

            {/* Bottom 3-Column Experience & Contact Strip (Matching behance-real-2.png bottom) */}
            <div className="mt-8 pt-6 border-t border-[#2D1614]/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm">
              <div>
                <p className="text-base font-extrabold text-[#2D1614] mb-2">Experience</p>
                <div className="space-y-2">
                  <div>
                    <p className="font-mono-tabular text-[#2D1614]/70">2024.03 — Present</p>
                    <p className="font-bold text-[#2D1614]">사단법인 공명 기획팀</p>
                  </div>
                  <div>
                    <p className="font-mono-tabular text-[#2D1614]/70">2021 — 2023</p>
                    <p className="font-bold text-[#2D1614]">문화재단 홍보단 · 자문기획단</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-base font-extrabold text-[#2D1614] mb-2">Role &amp; License</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-[#2D1614]/80">공연 조연출 · 지원사업 담당자</p>
                    <p className="text-[#2D1614]/80">기획행정 · 공연진행 · 통역</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#4A86B5]">
                      문화예술교육사 2급 · TOEIC Speaking IH
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-base font-extrabold text-[#2D1614] mb-2">Contact</p>
                <div className="space-y-2">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-2 text-[#2D1614] hover:underline underline-offset-4"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#2D1614] text-[#F3EDE2] flex items-center justify-center shrink-0">
                      <Mail className="w-3 h-3" />
                    </span>
                    <span className="font-mono-tabular truncate">{profile.email}</span>
                  </a>
                  <div className="flex items-center gap-2 text-[#2D1614]">
                    <span className="w-5 h-5 rounded-full bg-[#2D1614] text-[#F3EDE2] flex items-center justify-center shrink-0">
                      <Phone className="w-3 h-3" />
                    </span>
                    <span className="font-mono-tabular">{profile.phone}</span>
                  </div>
                  <a
                    href={profile.notionPublicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#2D1614] hover:underline underline-offset-4"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#2D1614] text-[#F3EDE2] flex items-center justify-center shrink-0">
                      <ExternalLink className="w-3 h-3" />
                    </span>
                    <span className="truncate">jennyparks.notion.site</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
