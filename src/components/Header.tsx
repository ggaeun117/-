import React from 'react';

interface HeaderProps {
  onOpenContact: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact, onNavigateSection }) => {
  return (
    <header className="sticky top-0 z-30 bg-[#F3EDE2]/95 backdrop-blur-md border-b border-[#2D1614]/10">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-base font-extrabold tracking-tight text-[#2D1614] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2D1614]"
        >
          gaeun park
        </a>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav
          aria-label="주요 섹션 내비게이션"
          className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#2D1614]/80"
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onNavigateSection('about');
            }}
            className="hover:text-[#2D1614] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            about me
          </a>
          <a
            href="#database"
            onClick={(e) => {
              e.preventDefault();
              onNavigateSection('database');
            }}
            className="hover:text-[#2D1614] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            portfolio db
          </a>
          <a
            href="#credentials"
            onClick={(e) => {
              e.preventDefault();
              onNavigateSection('credentials');
            }}
            className="hover:text-[#2D1614] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            experience &amp; cv
          </a>
          <a
            href="https://jennyparks.notion.site/18f1b9476b094d4eab4d03ac8cb2ce3d"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2D1614] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            notion page
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenContact}
            className="px-4 py-2 text-xs font-bold text-[#F3EDE2] bg-[#2D1614] rounded-full hover:bg-[#432320] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D1614]"
          >
            연락처 및 프로필 요약
          </button>
        </div>
      </div>
    </header>
  );
};
