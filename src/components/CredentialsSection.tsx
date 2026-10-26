import React from 'react';
import { ProfileData } from '../data/portfolioData';
import {
  BlueFolderIcon,
  BlueSparkleBullet,
  EspressoAsterisk,
  ScriptStickerBadge,
} from './BehanceMotifs';

interface CredentialsSectionProps {
  profile: ProfileData;
  onFilterByRole: (role: string) => void;
}

export const CredentialsSection: React.FC<CredentialsSectionProps> = ({
  profile,
  onFilterByRole,
}) => {
  const coreCompetencies = [
    {
      index: '01',
      sticker: 'specialty 1',
      title: '공연 조연출 및 무대 프로덕션 총괄',
      roleFilter: '조연출',
      metrics: '10건의 공연 프로젝트 수행 · 이머시브 사운드 및 다원예술 협업',
      description:
        '월드뮤직그룹 공명의 정기·기획콘서트, 국제교류 무대, 렉처 콘서트에서 리허설 운영, 큐시트 설계, 객원 아티스트(전통무용·락킹댄스) 협업 및 본 공연 현장 진행을 총괄했습니다.',
    },
    {
      index: '02',
      sticker: 'specialty 2',
      title: '공공 예술지원사업 및 투어 기획행정',
      roleFilter: '지원사업 담당자',
      metrics: '한국문화예술위원회 · 예술경영지원센터 · 서울시 · 강남문화재단 지원사업 전담',
      description:
        '창작주체 지원사업, 지역맞춤형 공연유통, 공연봄날, 신나는 예술여행 등 주요 공공 지원사업의 예산 편성·집행·정산과 철원·부산·군산 등 지역 극장 및 15개 중학교 투어 매칭을 완수했습니다.',
    },
    {
      index: '03',
      sticker: 'specialty 3',
      title: '국제문화교류 코디네이션 및 현장 통역',
      roleFilter: '통역',
      metrics: 'TOEIC Speaking IH · 2024 한-마다가스카르 <무라무라> 및 2026 OECD 30주년 기념공연',
      description:
        '마다가스카르 현지 극장·주재국 정부·한인 한글학교와의 대외 커뮤니케이션 및 전통악기 교류 워크숍 통역을 수행하며 글로벌 문화교류 현장의 실무 역량을 입증했습니다.',
    },
    {
      index: '04',
      sticker: 'specialty 4',
      title: '문화예술 콘텐츠 디자인 및 뉴미디어 홍보',
      roleFilter: 'SNS 콘텐츠 제작',
      metrics: 'GTQ 포토샵 A급 · ITQ 한글·엑셀·PPT A급 · 문화재단 서포터즈 5회 수료',
      description:
        '성동문화재단, 용인문화재단, 본다빈치 뮤지엄, 아트링커, 중앙대학교 정기연주회에서 포스터·리플렛·카드뉴스 시각 디자인과 언론 보도자료 배포를 통해 객석점유율 90% 이상 성과를 견인했습니다.',
    },
  ];

  return (
    <section id="credentials" className="py-16 border-b-2 border-[#2D1614]/15 bg-[#F3EDE2]">
      <div className="max-w-[1320px] mx-auto px-6 space-y-20">
        {/* Part 1: Education, Work Experience, and Licenses Grid */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-3 mb-2">
                <ScriptStickerBadge text="curriculum vitae" rotateClass="-rotate-2" />
                <span className="font-mono-tabular text-xs font-bold tracking-widest uppercase text-[#4A86B5]">
                  /qualifications &amp; career
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight lowercase text-[#2D1614] leading-none">
                experience &amp; credentials
              </h2>
            </div>
            <p className="text-sm font-bold text-[#6E5650]">
              학력 사항 · 재직 경력 · 국가공인 자격 및 어학 아카이브
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {/* Column 1: Work Experience */}
            <div className="bg-[#FAF6EE] border-2 border-[#2D1614] rounded-[24px] p-7 flex flex-col justify-between shadow-[6px_6px_0px_#2D1614]">
              <div>
                <div className="flex items-center justify-between border-b-2 border-[#2D1614]/15 pb-3.5 mb-5">
                  <div className="flex items-center gap-2">
                    <BlueFolderIcon className="w-6 h-5" />
                    <h3 className="text-base font-black text-[#2D1614]">
                      Work Experience (재직 경력)
                    </h3>
                  </div>
                  <span className="text-xs font-mono-tabular font-bold text-[#4A86B5]">
                    2024.03 — PRESENT
                  </span>
                </div>

                <div className="space-y-5">
                  {profile.workExperience.map((work) => (
                    <div key={work.organization} className="space-y-2">
                      <div className="flex items-center justify-between gap-2 text-xs text-[#6E5650]">
                        <span className="font-mono-tabular font-bold text-[#4A86B5]">
                          {work.period}
                        </span>
                        <span>·</span>
                        <span className="font-bold text-[#2D1614]">현재 재직 중</span>
                      </div>
                      <p className="text-xl font-black text-[#2D1614]">{work.organization}</p>
                      <p className="text-sm font-bold text-[#4A86B5]">{work.department}</p>
                      <p className="text-xs text-[#5A433E] leading-relaxed pt-1">
                        {work.roleSummary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2D1614]/15 text-xs font-medium text-[#6E5650] flex items-center gap-2">
                <BlueSparkleBullet className="w-3.5 h-3.5 shrink-0" />
                <span>사단법인 공명 재직 중 총 12건의 주요 공연·국제교류·지원사업 수행</span>
              </div>
            </div>

            {/* Column 2: Education */}
            <div className="bg-[#FAF6EE] border-2 border-[#2D1614] rounded-[24px] p-7 flex flex-col justify-between shadow-[6px_6px_0px_#2D1614]">
              <div>
                <div className="flex items-center justify-between border-b-2 border-[#2D1614]/15 pb-3.5 mb-5">
                  <div className="flex items-center gap-2">
                    <BlueFolderIcon className="w-6 h-5" />
                    <h3 className="text-base font-black text-[#2D1614]">Education (학력 사항)</h3>
                  </div>
                  <span className="text-xs font-mono-tabular font-bold text-[#4A86B5]">
                    2018 — 2024
                  </span>
                </div>

                <div className="divide-y divide-[#2D1614]/12">
                  {profile.education.map((edu, idx) => (
                    <div key={`${edu.school}-${idx}`} className="py-3.5 first:pt-0 last:pb-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="text-sm font-black text-[#2D1614]">{edu.school}</p>
                        <span className="text-xs font-mono-tabular font-bold text-[#6E5650] shrink-0">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xs text-[#5A433E] mt-1 font-medium">
                        {edu.major} · {edu.degreeType}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2D1614]/15 text-xs font-medium text-[#6E5650] flex items-center gap-2">
                <BlueSparkleBullet className="w-3.5 h-3.5 shrink-0" />
                <span>실기 음악 전공의 예술적 이해도와 예술경영 학문적 기획 역량을 겸비</span>
              </div>
            </div>

            {/* Column 3: Licenses & Certifications */}
            <div className="bg-[#FAF6EE] border-2 border-[#2D1614] rounded-[24px] p-7 flex flex-col justify-between shadow-[6px_6px_0px_#2D1614]">
              <div>
                <div className="flex items-center justify-between border-b-2 border-[#2D1614]/15 pb-3.5 mb-5">
                  <div className="flex items-center gap-2">
                    <BlueFolderIcon className="w-6 h-5" />
                    <h3 className="text-base font-black text-[#2D1614]">
                      License &amp; Language (자격·어학)
                    </h3>
                  </div>
                  <span className="text-xs font-mono-tabular font-bold text-[#4A86B5]">
                    2022 — 2026
                  </span>
                </div>

                <div className="divide-y divide-[#2D1614]/12">
                  {profile.licenses.map((lic) => (
                    <div key={lic.name} className="py-3.5 first:pt-0 last:pb-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="text-sm font-black text-[#2D1614]">{lic.name}</p>
                        <span className="text-xs font-mono-tabular font-bold text-[#4A86B5] shrink-0">
                          {lic.name.endsWith(lic.grade) ? lic.year : `${lic.year} · ${lic.grade}`}
                        </span>
                      </div>
                      <p className="text-xs text-[#5A433E] mt-1 font-medium">
                        {lic.issuerOrDetail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2D1614]/15 text-xs font-medium text-[#6E5650] flex items-center gap-2">
                <BlueSparkleBullet className="w-3.5 h-3.5 shrink-0" />
                <span>포토샵 디자인, 행정·예산 정산(한글·엑셀·PPT), 영어 소통 및 문화예술교육</span>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: 4 Core Competencies with Interactive Filter Triggers */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              <EspressoAsterisk className="w-7 h-7 text-[#2D1614]" />
              <div>
                <p className="font-mono-tabular text-xs font-bold uppercase tracking-widest text-[#4A86B5]">
                  /core competencies &amp; practice areas
                </p>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#2D1614]">
                  핵심 실무 역량 요약 (클릭 시 해당 역할 레코드 필터링)
                </h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {coreCompetencies.map((comp, idx) => (
              <div
                key={comp.index}
                className="relative bg-[#FAF6EE] border-2 border-[#2D1614] rounded-[24px] p-7 flex flex-col justify-between shadow-[5px_5px_0px_#2D1614]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono-tabular text-sm font-black px-2.5 py-0.5 rounded-full bg-[#2D1614] text-[#F3EDE2]">
                        {comp.index}
                      </span>
                      <h3 className="text-lg font-black text-[#2D1614]">{comp.title}</h3>
                    </div>
                    <ScriptStickerBadge
                      text={comp.sticker}
                      rotateClass={idx % 2 === 0 ? '-rotate-2' : 'rotate-2'}
                      className="scale-75 origin-right hidden sm:inline-block"
                    />
                  </div>
                  <p className="text-xs font-bold text-[#4A86B5] mb-3">{comp.metrics}</p>
                  <p className="text-sm text-[#4A3531] leading-relaxed">{comp.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2D1614]/15 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#6E5650]">
                    관련 데이터베이스 레코드 필터링
                  </span>
                  <button
                    type="button"
                    onClick={() => onFilterByRole(comp.roleFilter)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2D1614] text-[#F3EDE2] hover:bg-[#4A86B5] text-xs font-bold transition-colors cursor-pointer"
                  >
                    <span>‘{comp.roleFilter}’ 수행 프로젝트 모아보기 →</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
