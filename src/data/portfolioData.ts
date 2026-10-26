export interface PortfolioLink {
  label: string;
  url: string;
}

export interface PortfolioImage {
  id: string;
  url: string;
  caption: string;
  aspectRatio?: 'poster' | 'landscape' | 'square';
}

export interface PortfolioItem {
  id: string;
  notionPageId: string;
  category: 'career' | 'activity';
  categoryLabel: string;
  year: number;
  title: string;
  subtitle: string; // 지원사업명 or 활동 기관
  organization: string;
  roles: string[];
  schedule: string;
  period: string;
  featured?: boolean;
  bentoSpan?: 'wide' | 'tall' | 'standard';
  coverImage: string;
  images: PortfolioImage[];
  tasks: string[];
  achievements: string[];
  links: PortfolioLink[];
  summary: string;
  venueOrRegion?: string;
}

export interface EducationItem {
  period: string;
  school: string;
  major: string;
  degreeType: string;
}

export interface LicenseItem {
  year: string;
  name: string;
  issuerOrDetail: string;
  grade: string;
}

export interface WorkExperienceItem {
  period: string;
  organization: string;
  department: string;
  roleSummary: string;
  current: boolean;
}

export interface ProfileData {
  notionPageId: string;
  notionPublicUrl: string;
  nameKo: string;
  nameEn: string;
  birthDate: string;
  phone: string;
  email: string;
  avatarUrl: string;
  headline: string;
  subHeadline: string;
  bio: string;
  education: EducationItem[];
  licenses: LicenseItem[];
  workExperience: WorkExperienceItem[];
  lastSyncedAt: string;
}

export const INITIAL_PROFILE_DATA: ProfileData = {
  notionPageId: '18f1b947-6b09-4d4e-ab4d-03ac8cb2ce3d',
  notionPublicUrl: 'https://jennyparks.notion.site/18f1b9476b094d4eab4d03ac8cb2ce3d',
  nameKo: '박가은',
  nameEn: 'Gaeun Park',
  birthDate: '1999.09.29',
  phone: '010-5028-6013',
  email: 'eve876@naver.com',
  avatarUrl: '/notion-images/profile.jpg',
  headline: '문화예술 기획자를 꿈꾸는 열정적인 도전자 박가은입니다',
  subHeadline: 'Arts & Cultural Management · Performance Production · Public Grant Operations',
  bio: '계원예술고등학교 음악과 및 중앙대학교 음악대학·예술경영(복수전공)을 졸업하고, 현재 사단법인 공명 기획팀에서 공연 조연출, 공공 예술지원사업 운영, 국제문화교류 및 관객 개발 실무를 이끌고 있습니다.',
  education: [
    {
      period: '2018.02',
      school: '계원예술고등학교',
      major: '음악과',
      degreeType: '졸업',
    },
    {
      period: '2024.02',
      school: '중앙대학교',
      major: '음악대학',
      degreeType: '학사 졸업',
    },
    {
      period: '2024.02',
      school: '중앙대학교',
      major: '예술경영 (복수전공)',
      degreeType: '학사 졸업',
    },
  ],
  licenses: [
    {
      year: '2026',
      name: 'TOEIC Speaking IH',
      issuerOrDetail: '비즈니스 및 국제 문화교류 실무 영어 커뮤니케이션',
      grade: 'IH',
    },
    {
      year: '2026',
      name: '문화예술교육사 2급',
      issuerOrDetail: '문화체육관광부 국가자격 문화예술교육 전문인력 취득',
      grade: '2급',
    },
    {
      year: '2023',
      name: 'ITQ 국가공인 정보기술자격',
      issuerOrDetail: '한글 · 엑셀 · 파워포인트 3과목 통합 취득',
      grade: 'A급',
    },
    {
      year: '2022',
      name: 'GTQ 그래픽기술자격',
      issuerOrDetail: '어도비 포토샵(Adobe Photoshop) 시각 디자인 및 홍보물 제작',
      grade: '1급 / A급',
    },
  ],
  workExperience: [
    {
      period: '2024.03 ~ 현재',
      organization: '사단법인 공명 (GongMyoung)',
      department: '기획팀 재직',
      roleSummary: '공연 조연출 · 공공 지원사업 전담 실무 · 국내외 투어 기획행정 · 아티스트 케어 및 홍보 마케팅',
      current: true,
    },
  ],
  lastSyncedAt: '2026-10-25T20:30:00.000Z',
};

export const INITIAL_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'oecd-30th-2026',
    notionPageId: '3611fe1b-d2c4-803e-943a-d86b295a70a9',
    category: 'career',
    categoryLabel: '경력사항 · 사단법인 공명',
    year: 2026,
    title: '2026 한국–OECD 가입 30주년 기념 공연',
    subtitle: '한국–OECD 가입 30주년 기념 공연 프로젝트',
    organization: '사단법인 공명 기획팀',
    roles: ['조연출'],
    schedule: '2026.04.21',
    period: '2026.02.25 ~ 2026.04.20',
    featured: true,
    bentoSpan: 'wide',
    venueOrRegion: '국제기념 외교·문화교류 무대',
    coverImage: '/notion-images/img_3611fe1bd2c480acbbfef6ada8f97252.jpg',
    images: [
      {
        id: '3611fe1b-d2c4-80ac-bbfe-f6ada8f97252',
        url: '/notion-images/img_3611fe1bd2c480acbbfef6ada8f97252.jpg',
        caption: '2026 한국–OECD 가입 30주년 기념 공연 현장 기록 1',
        aspectRatio: 'landscape',
      },
      {
        id: '3611fe1b-d2c4-8020-afe1-c5bc232a39da',
        url: '/notion-images/img_3611fe1bd2c48020afe1c5bc232a39da.jpg',
        caption: '2026 한국–OECD 가입 30주년 기념 공연 현장 기록 2',
        aspectRatio: 'landscape',
      },
    ],
    tasks: [
      '한국–OECD 가입 30주년 기념 공식 초청 공연 프로젝트 조연출 담당',
      '사전 프로그램 준비(2026.02.25 ~ 04.20) 및 본 공연(2026.04.21) 무대 진행·큐시트 총괄 조율',
      '출연진 리허설 운영 및 국제행사 프로토콜에 맞춘 현장 운영 실무 수행',
    ],
    achievements: [
      '한국의 OECD 가입 30주년을 기념하는 외교·문화 무대에서 월드뮤직그룹 공명의 레퍼토리를 안정적으로 연출·진행',
      '약 2개월간의 집중 프로덕션 준비 과정을 통해 국제 기념행사의 품격에 부합하는 공연 완성도 확보',
    ],
    links: [],
    summary: '한국–OECD 가입 30주년 기념 공식 무대의 조연출을 맡아 약 2개월간의 프로덕션 준비와 본 공연 현장 진행을 완수한 프로젝트입니다.',
  },
  {
    id: 'dancing-music-2025',
    notionPageId: '2e01fe1b-d2c4-8051-acf1-f705155cf426',
    category: 'career',
    categoryLabel: '경력사항 · 사단법인 공명',
    year: 2025,
    title: '2025 공명콘서트 <음악이 춤을 추다>',
    subtitle: '2025 서울시 공연봄날 선정작',
    organization: '사단법인 공명 · 서울시 공연봄날',
    roles: ['조연출', '지원사업 담당자', '공연진행'],
    schedule: '2025.04 ~ 2025.09',
    period: '2025.04.01 ~ 2025.09.24',
    featured: true,
    bentoSpan: 'standard',
    venueOrRegion: '서울·경기 지역 3개 초등학교 및 협력 극장',
    coverImage: '/notion-images/img_2e01fe1bd2c480119d25fb21b69400ba.jpg',
    images: [
      {
        id: '2e01fe1b-d2c4-8011-9d25-fb21b69400ba',
        url: '/notion-images/img_2e01fe1bd2c480119d25fb21b69400ba.jpg',
        caption: '공명 × 가야금 × 전통무용 협연 무대 스틸',
        aspectRatio: 'landscape',
      },
      {
        id: '2e01fe1b-d2c4-8050-986d-d6a52e7fe151',
        url: '/notion-images/img_2e01fe1bd2c48050986dd6a52e7fe151.jpg',
        caption: '공명 × 락킹댄스 컬래버레이션 무대 스틸',
        aspectRatio: 'landscape',
      },
      {
        id: '2e01fe1b-d2c4-80f2-8e77-cc0c55d7d1b0',
        url: '/notion-images/img_2e01fe1bd2c480f28e77cc0c55d7d1b0.png',
        caption: '2025 서울시 공연봄날 <음악이 춤을 추다> 공연 기록 1',
        aspectRatio: 'landscape',
      },
      {
        id: '2e01fe1b-d2c4-8008-9940-e6cb055f0f2a',
        url: '/notion-images/img_2e01fe1bd2c480089940e6cb055f0f2a.png',
        caption: '2025 서울시 공연봄날 <음악이 춤을 추다> 공연 기록 2',
        aspectRatio: 'landscape',
      },
    ],
    tasks: [
      '월드뮤직그룹 공명의 <음악이 춤을 추다> 조연출 및 현장 공연진행 총괄',
      '서울시 2025 공연봄날 지원사업의 전반적인 행정 실무 및 정산·문서 관리 전담',
      '전통무용 및 락킹댄스 등 외부 객원 출연진 섭외 및 컬래버레이션 무대 구성 지원',
    ],
    achievements: [
      '협력 공연 기획사와의 긴밀한 소통을 통해 청소년 관객층의 눈높이와 호기심을 이끌어내는 융복합 퍼포먼스 추진',
      '월드뮤직그룹 공명 외 객원 출연자(전통무용, 락킹댄스) 섭외 및 합동 리허설 지원으로 무대 스펙트럼 확장',
      '서울·경기 지역 3곳의 초등학교와 긴밀히 협력하여 청소년 관객 객석점유율 90% 이상 달성',
    ],
    links: [
      {
        label: '공연봄날 공식 인스타그램 게시물',
        url: 'https://www.instagram.com/p/DOu5Yg2geQF/',
      },
      {
        label: '2025 공연봄날 공식 홈페이지 작품 소개',
        url: 'https://www.springday.or.kr/niabbs5/inc.php?inc=sub2-2_view&cat=전통예술&no=86',
      },
    ],
    summary: '전통음악에 전통무용·락킹댄스를 결합한 서울시 공연봄날 프로젝트로, 서울·경기 3개 초등학교와 협력해 객석점유율 90% 이상을 달성했습니다.',
  },
  {
    id: 'camelopardalis-tour-2025',
    notionPageId: '3611fe1b-d2c4-804c-995a-edd4a10fa2b7',
    category: 'career',
    categoryLabel: '경력사항 · 사단법인 공명',
    year: 2025,
    title: '2025 공명콘서트 “기린자리” - 4개 지역 공연',
    subtitle: '2025 지역맞춤형 공연유통 지원사업 (주최·주관: 예술경영지원센터)',
    organization: '사단법인 공명 · 예술경영지원센터',
    roles: ['조연출', '기획행정', '공연진행'],
    schedule: '2025년도 4개 지역 순회공연',
    period: '2025년 지역맞춤형 공연유통 시즌',
    featured: false,
    bentoSpan: 'standard',
    venueOrRegion: '전국 4개 지역 문예회관 및 극장 투어',
    coverImage: '/notion-images/img_3611fe1bd2c480e6889fcef14bad1452.jpg',
    images: [
      {
        id: '3611fe1b-d2c4-80e6-889f-cef14bad1452',
        url: '/notion-images/img_3611fe1bd2c480e6889fcef14bad1452.jpg',
        caption: '2025 공명콘서트 “기린자리” 4개 지역 투어 공연 스틸',
        aspectRatio: 'landscape',
      },
    ],
    tasks: [
      '예술경영지원센터 주최·주관 2025 지역맞춤형 공연유통 지원사업 선정작 <기린자리> 4개 지역 투어 조연출',
      '각 지역 공연장 기술 스태프 사전 협의, 투어 일정 관리, 예산 집행 및 기획행정 실무 수행',
      '지역별 극장 환경에 맞춘 무대 동선 및 본 공연 진행 관리',
    ],
    achievements: [
      '공명 대표 레퍼토리 <기린자리>의 전국 4개 지역 유통 투어를 안정적으로 운영하며 지역 문화향유 기회 확대',
      '다지역 순회공연 특유의 복잡한 행정·정산 및 현장 하우스/무대 커뮤니케이션을 체계적으로 표준화',
    ],
    links: [],
    summary: '예술경영지원센터 지역맞춤형 공연유통 지원사업의 일환으로 전국 4개 지역에서 진행된 <기린자리> 투어의 조연출 및 기획행정을 수행했습니다.',
  },
  {
    id: 'from-the-grain-2025',
    notionPageId: '2e01fe1b-d2c4-8022-87e3-c624e852dd4e',
    category: 'career',
    categoryLabel: '경력사항 · 사단법인 공명',
    year: 2025,
    title: '2025 공명콘서트 <From the grain>',
    subtitle: '2025 공연예술 창작주체 지원사업',
    organization: '사단법인 공명',
    roles: ['조연출', '기획행정', '공연진행'],
    schedule: '2025 창작주체 시즌 공연',
    period: '2025년 공연예술 창작주체 지원사업',
    featured: false,
    bentoSpan: 'standard',
    venueOrRegion: '서울 공연예술 창작 무대',
    coverImage: '/notion-images/cover_2e01fe1bd2c4802287e3c624e852dd4e.jpg',
    images: [
      {
        id: 'cover_2e01fe1b-d2c4-8022-87e3-c624e852dd4e',
        url: '/notion-images/cover_2e01fe1bd2c4802287e3c624e852dd4e.jpg',
        caption: '2025 공명콘서트 <From the grain> 공식 포스터',
        aspectRatio: 'poster',
      },
      {
        id: '2e01fe1b-d2c4-809b-a54f-f3fa79c03474',
        url: '/notion-images/img_2e01fe1bd2c4809ba54ff3fa79c03474.jpg',
        caption: '<From the grain> 공식 리플렛 전면 디자인',
        aspectRatio: 'poster',
      },
      {
        id: '2e01fe1b-d2c4-8062-a646-fc454c8f90d9',
        url: '/notion-images/img_2e01fe1bd2c48062a646fc454c8f90d9.jpg',
        caption: '<From the grain> 공식 리플렛 후면 프로그램 노트',
        aspectRatio: 'poster',
      },
    ],
    tasks: [
      '2025 공연예술 창작주체 지원사업 선정 프로젝트 <From the grain> 조연출 및 현장 진행',
      '공연 홍보물(포스터·리플렛) 제작 진행 관리 및 창작주체 지원사업 기획행정 실무',
      '아티스트 리허설 스케줄링 및 공연 당일 무대·객석 운영 총괄 지원',
    ],
    achievements: [
      '신규 창작 레퍼토리 <From the grain>의 시각 아이덴티티(포스터·리플렛)와 현장 무대 연출의 일관성 구현',
      '창작주체 지원사업의 예산 운용부터 현장 프로덕션까지 전 과정을 매끄럽게 연결',
    ],
    links: [],
    summary: '2025 공연예술 창작주체 지원사업으로 제작된 <From the grain>에서 조연출, 리플렛·홍보물 코디네이션, 기획행정 및 현장 진행을 담당했습니다.',
  },
  {
    id: 'fish-of-galaxy-2025',
    notionPageId: '21d1fe1b-d2c4-80e6-9695-f3451849c80c',
    category: 'career',
    categoryLabel: '경력사항 · 사단법인 공명',
    year: 2025,
    title: '2025 공명콘서트 <은하의 물고기>',
    subtitle: '2025 창작주체 공연예술 지원사업 (주최·주관: 한국문화예술위원회)',
    organization: '사단법인 공명 · 한국문화예술위원회',
    roles: ['조연출', '실무자'],
    schedule: '2025.05.31 (토) 13:00, 17:00 (2회 공연)',
    period: '2025.05.31 (2회차 집중 프로덕션)',
    featured: true,
    bentoSpan: 'wide',
    venueOrRegion: '이머시브 사운드 공연장 · 국악방송 TV 중계',
    coverImage: '/notion-images/cover_21d1fe1bd2c480e69695f3451849c80c.jpg',
    images: [
      {
        id: 'cover_21d1fe1b-d2c4-80e6-9695-f3451849c80c',
        url: '/notion-images/cover_21d1fe1bd2c480e69695f3451849c80c.jpg',
        caption: '2025 공명콘서트 <은하의 물고기> 메인 비주얼 커버',
        aspectRatio: 'poster',
      },
      {
        id: '21d1fe1b-d2c4-806a-8932-f6f880214475',
        url: '/notion-images/img_21d1fe1bd2c4806a8932f6f880214475.jpg',
        caption: '<은하의 물고기> 공식 리플렛 1면',
        aspectRatio: 'poster',
      },
      {
        id: '21d1fe1b-d2c4-8080-a6fe-cab1452b05c7',
        url: '/notion-images/img_21d1fe1bd2c48080a6fecab1452b05c7.jpg',
        caption: '<은하의 물고기> 공식 리플렛 2면 (프로그램 및 크레딧)',
        aspectRatio: 'poster',
      },
    ],
    tasks: [
      '공연제작 프로젝트에서 조연출 및 13시·17시 2회차 공연 진행 관리',
      '홍보·마케팅 및 정산, 일정관리, 연주자 케어, 자료 작성 등 공연제작의 전반적인 실무 담당',
    ],
    achievements: [
      '이머시브 사운드(Immersive Sound) 기술을 적용한 공명콘서트 <은하의 물고기> 재공연으로 보다 많은 관객 유치 성공',
      '언론 및 방송사(국악방송 TV 등)를 대상으로 한 적극적인 홍보·마케팅을 전개하여 공연 인지도 및 모객 효과 극대화',
    ],
    links: [
      {
        label: '[국악방송 TV] 공명콘서트 “은하의 물고기” Full ver. 유튜브 영상',
        url: 'https://youtu.be/B-buv8NcHlg?feature=shared',
      },
    ],
    summary: '한국문화예술위원회 창작주체 지원사업으로 진행된 이머시브 사운드 콘서트 <은하의 물고기>에서 조연출과 언론·방송 홍보마케팅, 프로덕션 실무를 총괄했습니다.',
  },
  {
    id: 'touching-stars-2024',
    notionPageId: '21d1fe1b-d2c4-8009-87a8-cc5cf7860376',
    category: 'career',
    categoryLabel: '경력사항 · 사단법인 공명',
    year: 2024,
    title: '2024 공명콘서트 <길 위에서 별을 만지다>',
    subtitle: '2024 창작주체 공연예술 지원사업 (주최·주관: 한국문화예술위원회)',
    organization: '사단법인 공명 · 한국문화예술위원회',
    roles: ['조연출', '지원사업 담당자'],
    schedule: '2024.11.22 (금) ~ 11.24 (일) · 총 3회차 (19:30 / 15:00)',
    period: '2024.11.22 ~ 2024.11.24',
    featured: true,
    bentoSpan: 'standard',
    venueOrRegion: '이머시브 사운드 & 미디어맵핑 공연장',
    coverImage: '/notion-images/img_21d1fe1bd2c480b689b3f0df8ca343fa.jpg',
    images: [
      {
        id: '21d1fe1b-d2c4-80b6-89b3-f0df8ca343fa',
        url: '/notion-images/img_21d1fe1bd2c480b689b3f0df8ca343fa.jpg',
        caption: '2024 공명콘서트 <길 위에서 별을 만지다> 공식 포스터',
        aspectRatio: 'poster',
      },
      {
        id: '21d1fe1b-d2c4-8013-9b3e-f61c304c607a',
        url: '/notion-images/img_21d1fe1bd2c480139b3ef61c304c607a.png',
        caption: '<길 위에서 별을 만지다> 공식 리플렛 후면 디자인',
        aspectRatio: 'poster',
      },
    ],
    tasks: [
      '3일간의 본 공연(11.22~11.24) 제작 프로젝트에서 조연출 및 현장 공연 진행 관리',
      '홍보·마케팅 및 정산, 일정관리, 연주자 케어, 자료 작성 등 공연제작의 전반적인 실무 담당',
      '공연에 적용되는 이머시브 사운드(Immersive Sound) 사전 워크숍 프로그램 기획 및 진행 담당',
    ],
    achievements: [
      '공연 시 사용되는 이머시브 사운드, 영상(프로젝션 맵핑) 기술, 인터랙티브 워크숍에서 전문 강사진과의 기술 소통 및 워크숍 공간 대관 완수',
      '이머시브 사운드 워크숍 연구 결과를 본 공연에 성공적으로 접목하여 재공연 관객 만족도 및 객석 모객 확대',
    ],
    links: [
      {
        label: '공명콘서트 “길 위에서 별을 만지다” 하이라이트 영상',
        url: 'https://youtu.be/B-buv8NcHlg?feature=shared',
      },
    ],
    summary: '이머시브 사운드와 프로젝션 맵핑 기술을 결합한 3일간의 기획공연 및 사전 기술 워크숍을 조연출·지원사업 담당자로서 성공적으로 이끌었습니다.',
  },
  {
    id: 'starry-night-2024',
    notionPageId: '21d1fe1b-d2c4-8063-9ecf-f98904f7a4d1',
    category: 'career',
    categoryLabel: '경력사항 · 사단법인 공명',
    year: 2024,
    title: '2024 공명콘서트 <별 헤는 밤 빼앗긴 들에서 꽃처럼 침묵을 깨다>',
    subtitle: '2024 지역맞춤형 중소규모 콘텐츠 유통사업 (주최·주관: 예술경영지원센터)',
    organization: '사단법인 공명 · 예술경영지원센터',
    roles: ['조연출', '지원사업 담당자'],
    schedule: '2024.04.01 ~ 2024.12.31 (철원 · 부산 · 군산 3개 지역)',
    period: '2024.04.01 ~ 2024.12.31',
    featured: true,
    bentoSpan: 'wide',
    venueOrRegion: '강원 철원 · 부산 · 전북 군산 3개 도시 투어',
    coverImage: '/notion-images/img_21d1fe1bd2c4800ea155ce3219f43367.jpg',
    images: [
      {
        id: '21d1fe1b-d2c4-800e-a155-ce3219f43367',
        url: '/notion-images/img_21d1fe1bd2c4800ea155ce3219f43367.jpg',
        caption: '<별 헤는 밤 빼앗긴 들에서 꽃처럼 침묵을 깨다> 메인 포스터',
        aspectRatio: 'poster',
      },
      {
        id: '21d1fe1b-d2c4-8068-9182-c81acdbafcd5',
        url: '/notion-images/img_21d1fe1bd2c480689182c81acdbafcd5.jpg',
        caption: '철원 지역 공연 공식 포스터',
        aspectRatio: 'poster',
      },
      {
        id: '21d1fe1b-d2c4-80f0-ab70-c769e2fc9242',
        url: '/notion-images/img_21d1fe1bd2c480f0ab70c769e2fc9242.png',
        caption: '군산 지역 공연 공식 포스터',
        aspectRatio: 'poster',
      },
      {
        id: '21d1fe1b-d2c4-8054-b389-f52b850c67f8',
        url: '/notion-images/img_21d1fe1bd2c48054b389f52b850c67f8.jpg',
        caption: '부산 공연 리플렛 및 프로그램 북',
        aspectRatio: 'poster',
      },
      {
        id: '21d1fe1b-d2c4-8051-8553-ebaecb913ffd',
        url: '/notion-images/img_21d1fe1bd2c480518553ebaecb913ffd.jpg',
        caption: '철원 공연 리플렛 및 프로그램 안내',
        aspectRatio: 'poster',
      },
      {
        id: '21d1fe1b-d2c4-80b9-a8ce-cfb2f3cf714f',
        url: '/notion-images/img_21d1fe1bd2c480b9a8cecfb2f3cf714f.jpg',
        caption: '군산 공연 리플렛 디자인',
        aspectRatio: 'poster',
      },
    ],
    tasks: [
      '사업 내 행정업무, 예산 정산, 지역 맞춤형 홍보마케팅 등 전반적인 지원사업 행정 실무 전담',
      '철원, 부산, 군산 3개 지역 순회공연 프로젝트에서 조연출 및 현장 공연 진행 관리',
    ],
    achievements: [
      '지방 협력기관과의 긴밀한 소통을 통해 지역 시민들의 호기심을 이끌어내는 맞춤형 SNS 캠페인 및 언론 보도자료 배포',
      '현지 극장 스태프와 협업하여 관객과 연주자 모두가 만족하는 공연 운영을 실현, 총 500명 이상의 지역 관객 유치 달성',
    ],
    links: [
      {
        label: '신아일보 언론 보도 기사 보기',
        url: 'https://www.shinailbo.co.kr/news/articleView.html?idxno=1897106',
      },
      {
        label: '시사줌뉴스 언론 보도 기사 보기',
        url: 'https://www.sisazoom.co.kr/59752',
      },
    ],
    summary: '철원·부산·군산 3개 도시를 순회하며 현지 극장 협업 및 언론·SNS 홍보를 통해 500명 이상의 관객을 유치한 지역맞춤형 공연유통 프로젝트입니다.',
  },
  {
    id: 'madagascar-moramora-2024',
    notionPageId: '3143853c-087e-4955-ba52-238c4a7071c2',
    category: 'career',
    categoryLabel: '경력사항 · 사단법인 공명',
    year: 2024,
    title: '2024 한-마다가스카르 국제교류공연 <무라무라>',
    subtitle: '2024 민간국제문화교류 활성화 지원 사업 (주최·주관: 서울시)',
    organization: '사단법인 공명 · 서울시 민간국제문화교류',
    roles: ['조연출', '통역'],
    schedule: '2024.06.25 ~ 2024.07.03',
    period: '2024.06.25 ~ 2024.07.03 (마다가스카르 현지 교류)',
    featured: true,
    bentoSpan: 'standard',
    venueOrRegion: '아프리카 마다가스카르 현지 극장 및 한글학교',
    coverImage: '/notion-images/img_21d1fe1bd2c480fb8e95fd22e876095a.jpg',
    images: [
      {
        id: '21d1fe1b-d2c4-80fb-8e95-fd22e876095a',
        url: '/notion-images/img_21d1fe1bd2c480fb8e95fd22e876095a.jpg',
        caption: '2024 한-마다가스카르 국제교류공연 <무라무라> 공식 음악회 포스터',
        aspectRatio: 'poster',
      },
    ],
    tasks: [
      '한-마다가스카르 문화국제교류공연 <무라무라> 현지 조연출, 공연 진행 및 영어 커뮤니케이션 통역 담당',
      '국제교류 지원사업 내 행정업무, 해외 집행 정산, 현지 협력기관과의 대외 소통 등 전반적인 행정 실무 수행',
    ],
    achievements: [
      '마다가스카르 현지인, 한인 한글학교 및 주재국 정부·공관 채널을 통한 현지 언론보도와 사전 예약 흥행 견인',
      '마다가스카르 현지 예술팀 및 시민 대상 워크숍을 진행하여 한국과 마다가스카르 전통악기·음악 문화를 깊이 있게 교류',
    ],
    links: [
      {
        label: '마다가스카르 현지 정식 공연 영상 (YouTube Shorts)',
        url: 'https://youtube.com/shorts/FcpEOeMZ86A?feature=shared',
      },
      {
        label: '한국-마다가스카르 전통악기 교류 워크숍 영상 (YouTube Shorts)',
        url: 'https://youtube.com/shorts/gOKV4h68CcM?feature=shared',
      },
    ],
    summary: '서울시 민간국제문화교류 활성화 지원사업으로 마다가스카르 현지에서 개최된 <무라무라> 공연 및 전통악기 워크숍의 조연출·통역·행정 실무를 수행했습니다.',
  },
  {
    id: 'spring-day-2024',
    notionPageId: 'cfe5c2a0-655f-4070-bd8b-6404cb369af3',
    category: 'career',
    categoryLabel: '경력사항 · 사단법인 공명',
    year: 2024,
    title: '2024 서울시 공연봄날 <음악이야기 악기이야기>',
    subtitle: '2024 공연봄날 (주최·주관: 서울시)',
    organization: '사단법인 공명 · 서울시 공연봄날',
    roles: ['조연출', '지원사업 담당자'],
    schedule: '2024.04.01 ~ 2024.06.20',
    period: '2024.04.01 ~ 2024.06.20',
    featured: false,
    bentoSpan: 'standard',
    venueOrRegion: '서울 소재 3개 초·중학교 협력 공연장',
    coverImage: '/notion-images/img_21d1fe1bd2c4801d9b96c7114298116b.png',
    images: [
      {
        id: '21d1fe1b-d2c4-801d-9b96-c7114298116b',
        url: '/notion-images/img_21d1fe1bd2c4801d9b96c7114298116b.png',
        caption: '2024 서울시 공연봄날 <음악이야기 악기이야기> 공식 포스터',
        aspectRatio: 'poster',
      },
    ],
    tasks: [
      '월드뮤직그룹 공명의 청소년을 위한 렉처 콘서트 “음악이야기 악기이야기” 조연출 및 공연진행 담당',
      '서울시 2024 공연봄날 사업의 전반적인 행정 실무 및 학교 기관 커뮤니케이션 담당',
    ],
    achievements: [
      '협력 학교들과의 사전 소통을 통해 청소년 관객들의 호기심을 자극하는 참여형 렉처 콘서트 연출 추진',
      '서울 소재 3개 초등학교·중학교와 협업하여 청소년 관객 객석점유율 90% 이상 달성',
    ],
    links: [
      {
        label: '공연봄날 공식 인스타그램 현장 스케치',
        url: 'https://www.instagram.com/p/C8_hMbmB7mR/?img_index=1',
      },
      {
        label: '2024 공연봄날 공식 홈페이지 아카이브',
        url: 'https://www.springday.or.kr/niabbs5/inc.php?inc=sub2_view&cat=%EC%A0%84%ED%86%B5%EC%98%88%EC%88%A0&no=38',
      },
    ],
    summary: '청소년 눈높이에 맞춘 렉처 콘서트 <음악이야기 악기이야기>의 조연출과 지원사업 행정을 맡아 서울 3개 초·중학교 객석점유율 90% 이상을 기록했습니다.',
  },
  {
    id: 'camelopardalis-2024',
    notionPageId: 'b67669e7-f8eb-4b6e-80ee-b924828d8706',
    category: 'career',
    categoryLabel: '경력사항 · 사단법인 공명',
    year: 2024,
    title: '2024 공명콘서트 <기린자리>',
    subtitle: '2024 창작주체 공연예술 지원사업 (주최·주관: 한국문화예술위원회)',
    organization: '사단법인 공명 · 한국문화예술위원회',
    roles: ['조연출', '실무자'],
    schedule: '2024.06.14 (금) 19:30',
    period: '2024.06.14',
    featured: false,
    bentoSpan: 'standard',
    venueOrRegion: '창작주체 기획공연 무대',
    coverImage: '/notion-images/img_21d1fe1bd2c48033bc6dfa07e1863ab7.jpg',
    images: [
      {
        id: '21d1fe1b-d2c4-8033-bc6dfa07e1863ab7',
        url: '/notion-images/img_21d1fe1bd2c48033bc6dfa07e1863ab7.jpg',
        caption: '2024 공명콘서트 <기린자리> 공식 인스타그램·모바일 포스터',
        aspectRatio: 'square',
      },
    ],
    tasks: [
      '공연제작 프로젝트에서 조연출 및 본 공연 현장 진행 관리',
      '홍보·마케팅 및 정산, 일정관리, 연주자 케어, 자료 작성 등 공연제작의 전반적인 실무 담당',
    ],
    achievements: [
      '공명콘서트 <기린자리>의 안정적인 무대 운영 및 타겟 관객 유치 도모',
      '리허설 스케치 및 본 공연 전막 영상 아카이빙을 통해 차년도 지역유통 투어 확장의 기반 마련',
    ],
    links: [
      {
        label: '공명콘서트 “기린자리” Full ver. 유튜브 영상',
        url: 'https://youtu.be/2zEPza5gj2o?feature=shared',
      },
      {
        label: '공명콘서트 “기린자리” 리허설 스케치 영상',
        url: 'https://youtu.be/uwy4uvn9ZCo?feature=shared',
      },
    ],
    summary: '한국문화예술위원회 창작주체 지원사업 <기린자리> 공연의 조연출, 연주자 케어, 홍보마케팅 및 영상 아카이빙 실무를 담당했습니다.',
  },
  {
    id: 'gorilla-crew-gesture-2024',
    notionPageId: '4e3cfb39-61c6-4630-a3cd-fcad9519ad60',
    category: 'career',
    categoryLabel: '경력사항 · 사단법인 공명',
    year: 2024,
    title: '2024 청소년을 위한 스트릿 댄서들과 함께하는 <몸짓>',
    subtitle: '2024 신나는 예술여행 (주최·주관: 한국문화예술위원회) · 고릴라크루',
    organization: '한국문화예술위원회 신나는 예술여행 · 고릴라크루',
    roles: ['기획행정'],
    schedule: '2024.04.01 ~ 2024.12.31',
    period: '2024.04.01 ~ 2024.12.31 (15개 중학교 순회)',
    featured: false,
    bentoSpan: 'standard',
    venueOrRegion: '전국 15개 협력 중학교 순회공연',
    coverImage: '/notion-images/img_28ee5a3625db4822b578ce1a32f47b39.jpg',
    images: [
      {
        id: '28ee5a36-25db-4822-b578-ce1a32f47b39',
        url: '/notion-images/img_28ee5a3625db4822b578ce1a32f47b39.jpg',
        caption: '2024 신나는 예술여행 <몸짓> (고릴라크루) 공연 리플렛',
        aspectRatio: 'landscape',
      },
      {
        id: '059adf9a-70f8-4532-9a30-6dc592151a8c',
        url: '/notion-images/img_059adf9a70f845329a306dc592151a8c.jpg',
        caption: '2024 신나는 예술여행 <몸짓> 공식 현수막 디자인',
        aspectRatio: 'landscape',
      },
    ],
    tasks: [
      '한국문화예술위원회 신나는 예술여행 사업 내 예산 계획 수립, 집행 및 정산 업무 전담',
      '전국 15개 중학교 거래처 매칭, 사전 현장 답사 조율 및 결과 보고서 작성',
    ],
    achievements: [
      '15개 협력 중학교와의 체계적인 소통을 통해 청소년 관객들의 호기심을 이끌어내는 스트릿 댄스(힙합·팝핀·비보이) 공연 추진',
      '일선 학교 현장과의 긴밀한 협업으로 대규모 청소년 관객 유치 및 언론 보도 성과 달성',
    ],
    links: [
      {
        label: '중앙교육신문 보도 기사 보기 (고릴라크루 신나는 예술여행)',
        url: 'http://jungangedu.co.kr/View.aspx?No=3247319',
      },
    ],
    summary: '한국문화예술위원회 <신나는 예술여행> 사업에서 전국 15개 중학교 매칭·답사, 예산 계획 및 정산, 프로그램 결과 보고서 작성을 전담했습니다.',
  },
  {
    id: 'space-bamboo-2024',
    notionPageId: 'd81a10e7-6d61-4fc5-809a-1218862eddfe',
    category: 'career',
    categoryLabel: '경력사항 · 사단법인 공명',
    year: 2024,
    title: '2024 공명콘서트 <스페이스 뱀부>',
    subtitle: '2024 목요예술무대 (주최·주관: 강남문화재단)',
    organization: '사단법인 공명 · 강남문화재단',
    roles: ['기획행정', '공연진행'],
    schedule: '2024.04.18 (목) 19:00',
    period: '2024.04.18',
    featured: false,
    bentoSpan: 'standard',
    venueOrRegion: '강남문화재단 목요예술무대',
    coverImage: '/notion-images/img_21d1fe1bd2c4806896dad4a6cd569809.jpg',
    images: [
      {
        id: '21d1fe1b-d2c4-8068-96da-d4a6cd569809',
        url: '/notion-images/img_21d1fe1bd2c4806896dad4a6cd569809.jpg',
        caption: '2024 강남문화재단 목요예술무대 <스페이스 뱀부> 공식 포스터',
        aspectRatio: 'poster',
      },
      {
        id: '21d1fe1b-d2c4-802f-8a27-d8a572dbc691',
        url: '/notion-images/img_21d1fe1bd2c4802f8a27d8a572dbc691.jpg',
        caption: '목요예술무대 <스페이스 뱀부> 공연 리플렛',
        aspectRatio: 'poster',
      },
    ],
    tasks: [
      '강남문화재단 2024 목요예술무대 선정작 <스페이스 뱀부> 조연출 및 현장 공연 진행 관리',
      '예산 정산, 행정 자료 작성, 연주자 케어 등 공연제작의 전반적인 행정 실무 담당',
    ],
    achievements: [
      '대나무 창작악기 앙상블 <스페이스 뱀부> 공연을 통해 주요 타겟층인 강남구 시민들의 문화적 호기심을 이끌어내는 무대 추진',
      '서울문화포털 및 강남구청 공식 채널을 통한 홍보 연계로 지역 시민 객석 호응 확보',
    ],
    links: [
      {
        label: '서울문화포털 공명콘서트 <스페이스 뱀부> 공식 안내',
        url: 'https://culture.seoul.go.kr/culture/culture/cultureEvent/view.do?cultcode=145948&menuNo=200008',
      },
      {
        label: '강남구청 공식 홈페이지 보도자료 링크',
        url: 'https://www.gangnam.go.kr/board/B_000045/1070848/view.do?mid=ID05_040103',
      },
    ],
    summary: '강남문화재단 목요예술무대 초청작 <스페이스 뱀부>에서 공연 진행, 연주자 케어 및 행정·정산 실무를 완수했습니다.',
  },
  // === CAMPUS & EXTRACURRICULAR ACTIVITIES (7 ITEMS) ===
  {
    id: 'seongdong-pr-2023',
    notionPageId: '1ada2174-c188-455f-bc91-6f5ef7ee1a0d',
    category: 'activity',
    categoryLabel: '교내·대외활동',
    year: 2023,
    title: '2023 성동문화재단 홍보단',
    subtitle: '지역 문화예술 현장 취재 및 디지털 콘텐츠 제작',
    organization: '성동문화재단',
    roles: ['콘텐츠취재', 'SNS 콘텐츠 제작'],
    schedule: '2023.03 ~ 2023.09',
    period: '2023.03 ~ 2023.09 (7개월 활동)',
    featured: false,
    bentoSpan: 'standard',
    venueOrRegion: '서울 성동구 문화예술 공간',
    coverImage: '/notion-images/img_5f204cd59f1b46898307fe10d52dbc6d.jpg',
    images: [
      {
        id: '5f204cd5-9f1b-4689-8307-fe10d52dbc6d',
        url: '/notion-images/img_5f204cd59f1b46898307fe10d52dbc6d.jpg',
        caption: '2023 성동문화재단 홍보단 활동 및 수료 기록',
        aspectRatio: 'poster',
      },
    ],
    tasks: [
      '성동문화재단 주최 공연·전시·축제 현장 취재 및 시민 눈높이의 문화예술 리뷰 기사 작성',
      '인스타그램·블로그 등 공식 뉴미디어 채널용 카드뉴스 및 시각 홍보 콘텐츠 기획·제작',
    ],
    achievements: [
      '2023년 3월부터 9월까지 7개월간 지역 문화예술 프로그램의 시민 접점을 넓히는 홍보단 활동 수료',
    ],
    links: [],
    summary: '성동문화재단의 주요 공연·전시 현장을 직접 취재하고 시민 친화적인 SNS 카드뉴스와 리뷰 콘텐츠를 제작했습니다.',
  },
  {
    id: 'artlinker-supporters-2023',
    notionPageId: '1ec9b676-e8d0-4554-9d61-9fcc80dea167',
    category: 'activity',
    categoryLabel: '교내·대외활동',
    year: 2023,
    title: '2023 아트링커 서포터즈',
    subtitle: '문화예술 플랫폼 팀 프로젝트 및 SNS 카드뉴스 제작',
    organization: '아트링커 (ArtLinker)',
    roles: ['팀별 활동', 'SNS 콘텐츠 제작'],
    schedule: '2023년도 서포터즈 기수 활동',
    period: '2023년',
    featured: false,
    bentoSpan: 'standard',
    venueOrRegion: '온라인 및 문화예술 네트워킹',
    coverImage: '/notion-images/img_1d0db5a8d14345ac8fa4e08b98a7ef8e.jpg',
    images: [
      {
        id: '1d0db5a8-d143-45ac-8fa4-e08b98a7ef8e',
        url: '/notion-images/img_1d0db5a8d14345ac8fa4e08b98a7ef8e.jpg',
        caption: '아트링커 서포터즈 직접 기획·디자인한 카드뉴스 완성본',
        aspectRatio: 'square',
      },
    ],
    tasks: [
      '문화예술 정보 큐레이션 플랫폼 아트링커 서포터즈로서 팀별 기획 미션 수행',
      '포토샵(GTQ A급 역량)을 활용한 고감도 카드뉴스 디자인 및 SNS 홍보 콘텐츠 제작',
    ],
    achievements: [
      '예술전공자와 대중을 잇는 시각 콘텐츠 큐레이션을 통해 온라인 도달률 및 참여도 제고',
    ],
    links: [],
    summary: '문화예술 플랫폼 아트링커 서포터즈로서 팀 프로젝트 기획과 카드뉴스 시각 디자인 및 SNS 콘텐츠 제작을 수행했습니다.',
  },
  {
    id: 'yongin-advisory-2022',
    notionPageId: 'f205cc20-024d-4fcf-afec-773c3f764ddc',
    category: 'activity',
    categoryLabel: '교내·대외활동',
    year: 2022,
    title: '2022 용인문화재단 자문기획단',
    subtitle: '공연기획 자문 및 문화콘텐츠 홍보 기획',
    organization: '용인문화재단',
    roles: ['공연기획', 'SNS 콘텐츠 제작'],
    schedule: '2022년도 자문기획단 활동',
    period: '2022년',
    featured: false,
    bentoSpan: 'standard',
    venueOrRegion: '경기 용인시 용인문화재단',
    coverImage: '/notion-images/img_cf3cdbc34a6b4dccbb4fda4ba17b520a.jpg',
    images: [
      {
        id: 'cf3cdbc3-4a6b-4dcc-bb4f-da4ba17b520a',
        url: '/notion-images/img_cf3cdbc34a6b4dccbb4fda4ba17b520a.jpg',
        caption: '2022 용인문화재단 자문기획단 위촉 및 수료 기록',
        aspectRatio: 'poster',
      },
    ],
    tasks: [
      '용인문화재단 청년 자문기획단으로서 재단 기획공연 모니터링 및 프로그램 기획 아이디어 제안',
      '지역 청년·시민 대상 공연 홍보용 SNS 콘텐츠 기획 및 제작',
    ],
    achievements: [
      '공공 문화재단의 공연기획 프로세스를 현장에서 경험하고 청년 관객 관점의 자문 및 홍보 방안 도출',
    ],
    links: [],
    summary: '용인문화재단 자문기획단으로 참여해 공공 공연장 프로그램 기획 자문과 SNS 홍보 콘텐츠 제작을 수행했습니다.',
  },
  {
    id: 'bondavinci-supporters-2022',
    notionPageId: 'ef0c17ef-7aec-4b4d-b670-1335f3cd0d15',
    category: 'activity',
    categoryLabel: '교내·대외활동',
    year: 2022,
    title: '2022 본다빈치 뮤지엄 서포터즈',
    subtitle: '컨버전스 아트 전시 홍보 및 SNS 콘텐츠 제작',
    organization: '본다빈치 뮤지엄 (BonDaVinci Museum)',
    roles: ['SNS 콘텐츠 제작'],
    schedule: '2022년도 뮤지엄 서포터즈',
    period: '2022년',
    featured: false,
    bentoSpan: 'standard',
    venueOrRegion: '본다빈치 뮤지엄 전시 공간',
    coverImage: '/notion-images/img_87a19df1c8a84901bcada4f12820981f.jpg',
    images: [
      {
        id: '87a19df1-c8a8-4901-bcad-a4f12820981f',
        url: '/notion-images/img_87a19df1c8a84901bcada4f12820981f.jpg',
        caption: '2022 본다빈치 뮤지엄 서포터즈 전시 홍보 카드뉴스 콘텐츠',
        aspectRatio: 'square',
      },
    ],
    tasks: [
      '미디어아트·컨버전스 전시 전문 기관 본다빈치 뮤지엄의 온라인 홍보 서포터즈 활동',
      '전시 관람 포인트를 요약한 감각적인 카드뉴스 및 SNS 바이럴 콘텐츠 제작',
    ],
    achievements: [
      '시각예술·미디어아트 전시의 공간 경험을 스토리텔링형 카드뉴스로 재해석하여 관람객 유입 지원',
    ],
    links: [],
    summary: '미디어아트 전시 기관 본다빈치 뮤지엄의 서포터즈로서 전시 스토리텔링 카드뉴스와 SNS 홍보 콘텐츠를 제작했습니다.',
  },
  {
    id: 'cau-club-union-2022',
    notionPageId: '8113a09b-c7c9-48c2-9556-93f8180f3c45',
    category: 'activity',
    categoryLabel: '교내·대외활동',
    year: 2022,
    title: '2022 교내 동아리연합회 기획국',
    subtitle: '중앙대학교 동아리연합회 축제 기획 및 공식 SNS 운영',
    organization: '중앙대학교 동아리연합회',
    roles: ['교내축제기획', '교내SNS관리'],
    schedule: '2022학년도 중앙대학교 동아리연합회',
    period: '2022년',
    featured: false,
    bentoSpan: 'standard',
    venueOrRegion: '중앙대학교 캠퍼스',
    coverImage: '/notion-images/img_d1d92c9b3cae4e0c87a7e9a522f92c56.jpg',
    images: [
      {
        id: 'd1d92c9b-3cae-4e0c-87a7-e9a522f92c56',
        url: '/notion-images/img_d1d92c9b3cae4e0c87a7e9a522f92c56.jpg',
        caption: '2022 중앙대학교 동아리연합회 기획 활동 증명 및 기록',
        aspectRatio: 'poster',
      },
    ],
    tasks: [
      '교내 전체 동아리가 참여하는 캠퍼스 축제 및 문화행사 프로그램 기획·운영',
      '동아리연합회 공식 SNS 계정 운영 및 학우 대상 공지·홍보 카드뉴스 정기 발행',
    ],
    achievements: [
      '다수의 학생 단체와 소통하며 대규모 캠퍼스 행사를 조율하는 현장 기획력 및 조직 커뮤니케이션 역량 확보',
    ],
    links: [],
    summary: '중앙대학교 동아리연합회 기획팀에서 교내 축제 기획과 공식 SNS 채널 운영을 담당했습니다.',
  },
  {
    id: 'cau-regular-concert-2021',
    notionPageId: '1baf1ad0-445e-432d-9987-e9552f10ab34',
    category: 'activity',
    categoryLabel: '교내·대외활동',
    year: 2021,
    title: '2021 중앙대학교 정기연주회 기획팀',
    subtitle: '정기연주회 공연기획 · 홍보물 디자인 제작 · 현장 스태프',
    organization: '중앙대학교 음악대학 창악회(창음)',
    roles: ['공연기획', '홍보물 디자인 및 제작', '공연스태프'],
    schedule: '2021학년도 정기연주회',
    period: '2021년',
    featured: false,
    bentoSpan: 'standard',
    venueOrRegion: '중앙대학교 음악대학 연주홀',
    coverImage: '/notion-images/img_12b9a5dfd78e4912abe65729f7c5ce40.jpg',
    images: [
      {
        id: '12b9a5df-d78e-4912-abe6-5729f7c5ce40',
        url: '/notion-images/img_12b9a5dfd78e4912abe65729f7c5ce40.jpg',
        caption: '2021 중앙대학교 창음 정기연주회 공식 포스터 및 프로그램 디자인',
        aspectRatio: 'square',
      },
    ],
    tasks: [
      '중앙대학교 음악대학 정기연주회 전체 기획 및 프로그램 순서 구성',
      '연주회 공식 포스터·팸플릿 등 인쇄 홍보물 자체 디자인 및 제작 발주',
      '본 공연 당일 무대 전환 및 하우스 운영 공연스태프 총괄',
    ],
    achievements: [
      '음악 전공 지식을 바탕으로 연주자와 관객 모두의 니즈를 반영한 연주회 기획부터 시각 디자인까지 올라운드로 완수',
    ],
    links: [],
    summary: '중앙대학교 정기연주회 기획팀으로서 공연 기획, 포스터·홍보물 디자인 및 제작, 당일 무대 스태프 운영을 이끌었습니다.',
  },
  {
    id: 'youth-day-festival-2021',
    notionPageId: 'd12a7129-f7dd-4523-9213-8aae64326bdd',
    category: 'activity',
    categoryLabel: '교내·대외활동',
    year: 2021,
    title: '2021 제5회 대한민국 청년의날 페스티벌',
    subtitle: '청년의날 페스티벌 기획단장 · 평가 및 SNS 콘텐츠 제작',
    organization: '대한민국 청년의날 페스티벌 조직위원회',
    roles: ['기획단장', '페스티벌 평가', 'SNS 콘텐츠 제작'],
    schedule: '2021.11.06',
    period: '2021.11.06 (제5회 청년의날)',
    featured: false,
    bentoSpan: 'standard',
    venueOrRegion: '서울 올림픽공원 평화의광장 / 온라인 병행',
    coverImage: '/notion-images/img_2e5b14f7c4594825be0242ea9d978cdd.jpg',
    images: [
      {
        id: '2e5b14f7-c459-4825-be02-42ea9d978cdd',
        url: '/notion-images/img_2e5b14f7c4594825be0242ea9d978cdd.jpg',
        caption: '2021 제5회 대한민국 청년의날 페스티벌 기획단 활동 증명서 및 사진',
        aspectRatio: 'square',
      },
    ],
    tasks: [
      '2021 청년의날 페스티벌 기획단장으로서 팀원 리딩 및 축제 프로그램 운영 기획',
      '페스티벌 사전·사후 SNS 홍보 콘텐츠 제작 및 축제 운영 성과 평가 리포트 작성',
    ],
    achievements: [
      '대규모 전국 단위 청년 축제에서 기획단장 역할을 수행하며 리더십과 축제 평가·분석 역량 축적',
    ],
    links: [],
    summary: '2021 청년의날 페스티벌 기획단장을 맡아 축제 프로그램 기획, SNS 콘텐츠 제작 및 페스티벌 사후 평가를 주도했습니다.',
  },
];
