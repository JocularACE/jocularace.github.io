export const artist = {
  name: 'JocularACE',
  chineseName: '陈景初',
  alias: 'J.A.C.E',
  slogan: '在强劲节拍中，注入叙事。',
  title: '电子音乐制作人 · 视觉艺术家 · 厂牌主理人',
  bio: '以 House 为根，游走于 Heavy Bass、Hardcore、Melbourne Bounce 与 Drum & Bass 之间。既能引爆舞池，也能铺展动人旋律——两种能量，一个人。',
  formerLabel: 'Onism.',
  highlights: [
    '与国内知名 Club 品牌格莱美汇多次合作',
    '作品被多款主流音游官方收录',
    '跨越 House / Hardcore / D&B 多种风格',
    '厂牌 UP\'N\'DOWN 创始成员',
  ],
  genres: ['House', 'Heavy Bass', 'Hardcore', 'Melbourne Bounce', 'Drum & Bass', 'Hybrid Trap'],
  platforms: {
    netease: {
      label: '网易云音乐',
      url: 'https://music.163.com/#/artist/album?id=12538073',
    },
    bilibili: {
      label: 'Bilibili',
      url: 'https://space.bilibili.com/35133771',
    },
  },
  stats: [
    { value: 12,   suffix: '+', label: '发行曲目' },
    { value: 3,    suffix: '',  label: '音游收录' },
    { value: 8,    suffix: '+', label: '合作艺人' },
    { value: 2020, suffix: '~', label: '起始年份' },
  ],
} as const;

export type WorkCategory = 'dancefloor' | 'game' | 'narrative';

export interface Work {
  title: string;
  desc: string;
  collab?: string;
  tags: string[];
  category: WorkCategory;
}

export const works: Work[] = [
  {
    title: 'In The Back (VIP Extended Mix)',
    desc: '融合 Carnival、UK Hardcore、Melbourne Bounce，专为俱乐部场景锻造的重型武器。',
    tags: ['UK Hardcore', 'Melbourne Bounce', 'Club'],
    category: 'dancefloor',
  },
  {
    title: "PUSHIN'",
    desc: "国产 House 品牌「UP'N'DOWN」开山之作，三方联手碰撞出纯正地下能量。",
    collab: 'ADean × HoworD',
    tags: ['House', 'EP'],
    category: 'dancefloor',
  },
  {
    title: 'BOUNCE',
    desc: 'G-House 风格，纯粹律动直击身体。',
    tags: ['G-House'],
    category: 'dancefloor',
  },
  {
    title: 'Shine After',
    desc: '被音游《Phigros》官方收录，最具辨识度的代表作之一。',
    collab: 'ADean',
    tags: ['Phigros'],
    category: 'game',
  },
  {
    title: 'The Rhythm',
    desc: '收录于节奏游戏《Spin Rhythm XD》，将 House 律动与游戏交互完美融合。',
    collab: 'VESK GREEN',
    tags: ['Spin Rhythm XD'],
    category: 'game',
  },
  {
    title: 'Three two one, Fire!',
    desc: '为新生代音游《Bleap 闪音跃动》创作的原创曲目。',
    tags: ['Bleap'],
    category: 'game',
  },
  {
    title: 'Mist of Scarlet',
    desc: '东方Project同人专辑，金属与电子的跨界碰撞，构建完整的声音叙事世界。',
    collab: 'UraniumW',
    tags: ['Touhou', 'Metal × Electronic'],
    category: 'narrative',
  },
  {
    title: '时间裂缝 (Time Rift)',
    desc: '展现商业制作潜力的跨界单曲，横跨风格边界。',
    collab: '马海昕 (Aaron Ma)',
    tags: ['Cross-genre'],
    category: 'narrative',
  },
];

export const collabs = [
  {
    project: "EP《PUSHIN'》",
    artists: ['ADean (AnD)', 'HoworD (SoulNote)'],
    desc: "三方联手，国产 House 厂牌 UP'N'DOWN 开山之作",
  },
  {
    project: '《Space Impact (Chapter II)》',
    artists: ['ADean'],
    desc: '与 ADean 合作发布于广州炸菜工作室',
  },
  {
    project: '《Shine After》',
    artists: ['ADean'],
    desc: '音游《Phigros》收录曲，最具代表性合作',
  },
  {
    project: '《The Rhythm》',
    artists: ['VESK GREEN'],
    desc: '收录于《Spin Rhythm XD》',
  },
  {
    project: '专辑《Mist of Scarlet》',
    artists: ['UraniumW'],
    desc: '东方Project同人专辑',
  },
  {
    project: '《SOARING RECORDS Vol.5》',
    artists: ['HOTXIANGG', 'Loyer'],
    desc: '多艺人合辑',
  },
  {
    project: '《时间裂缝 (Time Rift)》',
    artists: ['马海昕 (Aaron Ma)'],
    desc: '跨界单曲合作',
  },
];

export const timeline = [
  { year: '2020', events: ['《Shine After》被音游《Phigros》收录'] },
  { year: '2022', events: ['发行《In The Back (VIP Extended Mix)》'] },
  { year: '2023', events: ['发行东方Project同人专辑《Mist of Scarlet》', '参与格莱美汇致敬专辑'] },
  { year: '2024', events: ["EP《PUSHIN'》正式发布", '参与合辑《SOARING RECORDS Vol.5》', '参加访谈节目'] },
  { year: '2025–2026', events: ['为音游《Bleap 闪音跃动》供曲', '参与《Cheerful Dance Vol.2》合辑', '持续输出新作'] },
];

export const services = [
  {
    title: '电子音乐制作',
    desc: '从 Demo 到成品，覆盖 House / Bass / Hardcore 全类目。',
    icon: '♩',
  },
  {
    title: '音游曲目供稿',
    desc: '有 Phigros、Spin Rhythm XD、Bleap 收录经验，熟悉音游曲目规范。',
    icon: '🎮',
  },
  {
    title: 'DJ 演出',
    desc: '与格莱美汇等 Club 品牌合作经验，擅长舞池现场调度。',
    icon: '🎛',
  },
  {
    title: '厂牌 / 合辑合作',
    desc: '接受合辑邀约及厂牌合作，有完整的职业发布流程经验。',
    icon: '🏷',
  },
  {
    title: '跨界艺术协作',
    desc: '视觉艺术家身份，可提供音乐 × 视觉的整合创作方案。',
    icon: '🎨',
  },
  {
    title: '定制编曲',
    desc: '品牌、影视、活动等场景的定制音乐需求均可接洽。',
    icon: '✉',
  },
];
