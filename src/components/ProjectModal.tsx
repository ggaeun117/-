import React, { useEffect, useState } from 'react';
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Briefcase,
  CheckCircle2,
  Award,
} from 'lucide-react';
import { PortfolioItem } from '../data/portfolioData';
import { BlueFolderIcon, BlueSparkleBullet, ScriptStickerBadge } from './BehanceMotifs';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onSelectPrev?: () => void;
  onSelectNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectPrev,
  onSelectNext,
  hasPrev,
  hasNext,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageFailedMap, setImageFailedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev && onSelectPrev) {
        onSelectPrev();
      } else if (e.key === 'ArrowRight' && hasNext && onSelectNext) {
        onSelectNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, hasPrev, hasNext, onSelectPrev, onSelectNext]);

  if (!project) return null;

  const currentImage = project.images[activeImageIndex] || project.images[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2D1614]/75 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#F3EDE2] border-3 border-[#2D1614] rounded-[28px] max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-[12px_12px_0px_#2D1614]">
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 bg-[#FAF6EE] border-b-2 border-[#2D1614] shrink-0">
          <div className="flex items-center gap-2.5 text-xs text-[#6E5650] truncate">
            <BlueFolderIcon className="w-6 h-5 shrink-0" />
            <span className="font-mono-tabular font-black text-[#2D1614]">{project.year}</span>
            <span aria-hidden="true">·</span>
            <span className="font-bold text-[#4A86B5]">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-tabular text-[#6E5650] truncate">
              Notion ID: {project.notionPageId.slice(0, 8)}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onSelectPrev && (
              <button
                type="button"
                onClick={onSelectPrev}
                disabled={!hasPrev}
                aria-label="이전 프로젝트"
                className="px-3 py-1.5 text-xs font-bold text-[#2D1614] bg-[#F3EDE2] border border-[#2D1614]/30 rounded-full hover:bg-[#E5DEC9] disabled:opacity-40 transition-colors cursor-pointer"
              >
                이전
              </button>
            )}
            {onSelectNext && (
              <button
                type="button"
                onClick={onSelectNext}
                disabled={!hasNext}
                aria-label="다음 프로젝트"
                className="px-3 py-1.5 text-xs font-bold text-[#2D1614] bg-[#F3EDE2] border border-[#2D1614]/30 rounded-full hover:bg-[#E5DEC9] disabled:opacity-40 transition-colors cursor-pointer"
              >
                다음
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="상세 창 닫기"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-bold text-[#F3EDE2] bg-[#2D1614] rounded-full hover:bg-[#4A86B5] transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>닫기</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Title & Properties Overview */}
          <div className="border-b-2 border-[#2D1614]/15 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#4A86B5]">
                <BlueSparkleBullet className="w-3.5 h-3.5" />
                <span>담당 역할: {project.roles.join(' · ')}</span>
              </div>
              <ScriptStickerBadge
                text={project.category === 'career' ? 'career work' : 'activity record'}
                rotateClass="-rotate-2"
                className="scale-90 origin-right"
              />
            </div>

            <h2
              id="project-modal-title"
              className="text-2xl sm:text-3xl font-black text-[#2D1614] leading-tight mb-2"
            >
              {project.title}
            </h2>
            <p className="text-sm font-bold text-[#6E5650] mb-5">{project.subtitle}</p>

            {/* Notion Page Properties Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#FAF6EE] border-2 border-[#2D1614] rounded-2xl p-4 text-xs shadow-[4px_4px_0px_#2D1614]">
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-[#4A86B5] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#6E5650] font-bold mb-0.5">공연 일시 / 프로그램 기간</p>
                  <p className="font-mono-tabular font-black text-[#2D1614]">
                    {project.schedule}
                  </p>
                  {project.period !== project.schedule && (
                    <p className="font-mono-tabular text-[#6E5650] mt-0.5">{project.period}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Briefcase className="w-4 h-4 text-[#4A86B5] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#6E5650] font-bold mb-0.5">소속 및 주관</p>
                  <p className="font-black text-[#2D1614]">{project.organization}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#4A86B5] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#6E5650] font-bold mb-0.5">장소 및 대상 권역</p>
                  <p className="font-black text-[#2D1614]">
                    {project.venueOrRegion || '국내 문화예술 현장'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2-Column Content Split: Visual Gallery (Left) + Tasks & Achievements (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: High-Resolution Poster / Leaflet / Still Gallery */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative bg-[#2D1614] border-2 border-[#2D1614] rounded-2xl overflow-hidden aspect-[4/4] flex items-center justify-center shadow-[6px_6px_0px_#2D1614]">
                {currentImage && !imageFailedMap[currentImage.id] ? (
                  <img
                    src={currentImage.url}
                    alt={currentImage.caption}
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setImageFailedMap((prev) => ({ ...prev, [currentImage.id]: true }))
                    }
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <div className="p-8 text-center text-[#F3EDE2]">
                    <p className="font-bold text-base mb-1">{project.title}</p>
                    <p className="text-xs text-[#F3EDE2]/70">{project.subtitle}</p>
                  </div>
                )}

                {project.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex(
                          (prev) => (prev - 1 + project.images.length) % project.images.length
                        )
                      }
                      aria-label="이전 이미지 보기"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#2D1614]/80 text-[#F3EDE2] border border-[#F3EDE2]/30 flex items-center justify-center hover:bg-[#4A86B5] transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex((prev) => (prev + 1) % project.images.length)
                      }
                      aria-label="다음 이미지 보기"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#2D1614]/80 text-[#F3EDE2] border border-[#F3EDE2]/30 flex items-center justify-center hover:bg-[#4A86B5] transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {currentImage && (
                <div className="flex items-center justify-between text-xs font-bold text-[#6E5650] px-1">
                  <span>{currentImage.caption}</span>
                  <span className="font-mono-tabular shrink-0 text-[#2D1614]">
                    {activeImageIndex + 1} / {project.images.length}
                  </span>
                </div>
              )}

              {/* Thumbnail Selector Strip */}
              {project.images.length > 1 && (
                <div className="grid grid-cols-6 gap-2 pt-1">
                  {project.images.map((img, idx) => (
                    <button
                      key={img.id}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`${img.caption} 선택`}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        idx === activeImageIndex
                          ? 'border-[#4A86B5] opacity-100 scale-105'
                          : 'border-[#2D1614]/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.caption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Notion Subpage Structured Blocks (주요 업무 · 성과 및 기여 · 관련 자료 링크) */}
            <div className="lg:col-span-6 space-y-5">
              {/* Summary */}
              <div className="bg-[#FAF6EE] border-2 border-[#2D1614] rounded-2xl p-5 shadow-[4px_4px_0px_#2D1614]">
                <h3 className="text-xs font-black text-[#4A86B5] uppercase tracking-wider mb-2">
                  Project Overview (프로젝트 개요)
                </h3>
                <p className="text-sm text-[#3E2723] leading-relaxed font-medium">
                  {project.summary}
                </p>
              </div>

              {/* 주요 업무 (Key Responsibilities) */}
              <div className="bg-[#FAF6EE] border-2 border-[#2D1614] rounded-2xl p-5 shadow-[4px_4px_0px_#2D1614]">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-[#4A86B5]" />
                  <h3 className="text-sm font-black text-[#2D1614]">
                    주요 업무 (Key Responsibilities)
                  </h3>
                </div>
                <ul className="space-y-2.5 text-sm text-[#3E2723]">
                  {project.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="font-mono-tabular text-xs font-bold text-[#4A86B5] mt-1">
                        0{idx + 1}.
                      </span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 성과 및 기여 (Achievements & Impact) */}
              <div className="bg-[#FAF6EE] border-2 border-[#2D1614] rounded-2xl p-5 shadow-[4px_4px_0px_#2D1614]">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-[#4A86B5]" />
                  <h3 className="text-sm font-black text-[#2D1614]">
                    성과 및 기여 (Achievements &amp; Impact)
                  </h3>
                </div>
                <ul className="space-y-2.5 text-sm text-[#3E2723]">
                  {project.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <BlueSparkleBullet className="w-3.5 h-3.5 shrink-0 mt-1" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 관련 자료 링크 (External Reference Links) */}
              {project.links.length > 0 && (
                <div className="bg-[#FAF6EE] border-2 border-[#2D1614] rounded-2xl p-5 shadow-[4px_4px_0px_#2D1614]">
                  <h3 className="text-sm font-black text-[#2D1614] mb-3">
                    관련 자료 및 언론·영상 아카이브 링크
                  </h3>
                  <div className="space-y-2">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#F3EDE2] hover:bg-[#E5DEC9] border border-[#2D1614]/25 text-xs font-bold text-[#2D1614] hover:text-[#4A86B5] transition-colors"
                      >
                        <span className="truncate">{link.label}</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0 text-[#4A86B5]" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
