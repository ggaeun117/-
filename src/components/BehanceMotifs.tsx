import React from 'react';

export const BlueFolderIcon: React.FC<{
  className?: string;
  translucent?: boolean;
}> = ({ className = 'w-24 h-20', translucent = false }) => (
  <svg
    viewBox="0 0 240 190"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="folderBackGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#65A2CE" stopOpacity={translucent ? 0.82 : 1} />
        <stop offset="100%" stopColor="#4A86B5" stopOpacity={translucent ? 0.85 : 1} />
      </linearGradient>
      <linearGradient id="folderFrontGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#85BBE2" stopOpacity={translucent ? 0.84 : 1} />
        <stop offset="45%" stopColor="#6AA7D2" stopOpacity={translucent ? 0.88 : 1} />
        <stop offset="100%" stopColor="#5692BF" stopOpacity={translucent ? 0.92 : 1} />
      </linearGradient>
    </defs>
    {/* Folder Back Tab */}
    <path
      d="M12 28C12 19.1634 19.1634 12 28 12H86C91.5 12 96.6 14.8 99.5 19.5L106 30H212C220.837 30 228 37.1634 228 46V164C228 172.837 220.837 180 212 180H28C19.1634 180 12 172.837 12 164V28Z"
      fill="url(#folderBackGrad)"
    />
    {/* Inner Paper Sheet */}
    <rect
      x="24"
      y="36"
      width="192"
      height="30"
      rx="6"
      fill="#F7F3EB"
      fillOpacity={translucent ? 0.75 : 0.9}
    />
    {/* Folder Front Body */}
    <rect
      x="12"
      y="44"
      width="216"
      height="136"
      rx="16"
      fill="url(#folderFrontGrad)"
      stroke="#A8D1EE"
      strokeOpacity="0.6"
      strokeWidth="1.5"
    />
    {/* Subtle Top Highlight Line */}
    <path
      d="M28 46H212"
      stroke="#CBE4F7"
      strokeOpacity="0.7"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const CursorArrowIcon: React.FC<{ className?: string }> = ({
  className = 'w-12 h-12',
}) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M14 8L52 28L34 34L44 52L36 56L26 38L14 48V8Z"
      fill="#FFFFFF"
      stroke="#2D1614"
      strokeWidth="4"
      strokeLinejoin="round"
    />
  </svg>
);

export const EspressoAsterisk: React.FC<{ className?: string }> = ({
  className = 'w-12 h-12',
}) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <g stroke="#F3EDE2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 6V58" />
      <path d="M9.5 19L54.5 45" />
      <path d="M54.5 19L9.5 45" />
    </g>
    <g stroke="#2D1614" strokeWidth="10" strokeLinecap="round">
      <path d="M32 10V54" />
      <path d="M13 21L51 43" />
      <path d="M51 21L13 43" />
    </g>
  </svg>
);

export const BlueSparkleBullet: React.FC<{ className?: string }> = ({
  className = 'w-4 h-4',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 2C12.6 7.5 16.5 11.4 22 12C16.5 12.6 12.6 16.5 12 22C11.4 16.5 7.5 12.6 2 12C7.5 11.4 11.4 7.5 12 2Z"
      fill="#6C9AC0"
    />
  </svg>
);

export const NotionBadgeIcon: React.FC<{ className?: string }> = ({
  className = 'w-14 h-14',
}) => (
  <div
    className={`rounded-2xl bg-[#EBE6DC] border border-stone-300/80 shadow-md flex items-center justify-center ${className}`}
  >
    <div className="w-9 h-9 rounded-lg bg-white border-2 border-[#2D1614] flex items-center justify-center font-serif font-bold text-xl text-[#2D1614]">
      N
    </div>
  </div>
);

export const ScriptStickerBadge: React.FC<{
  text: string;
  rotateClass?: string;
  className?: string;
}> = ({ text, rotateClass = '-rotate-3', className = '' }) => (
  <span
    className={`inline-block px-5 py-1 rounded-full bg-[#2D1614] text-[#F3EDE2] font-script text-2xl sm:text-3xl leading-none tracking-wide shadow-md border-2 border-[#F3EDE2] select-none ${rotateClass} ${className}`}
  >
    {text}
  </span>
);
