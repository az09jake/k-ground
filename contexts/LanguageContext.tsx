import React, { createContext, useContext, useState, useCallback } from 'react';

export type Language = 'ko' | 'en' | 'ja' | 'zh' | 'th';

export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: LanguageInfo[] = [
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭' },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  currentLanguageInfo: LanguageInfo;
  getText: (texts: { ko: string; en: string; ja?: string; zh?: string; th?: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 번역 데이터
const translations: Record<Language, Record<string, string>> = {
  ko: {
    // Navigation
    'nav.themes': '테마',
    'nav.o4oModel': 'O4O 모델',
    'nav.wonderMon': '원더몬',
    'nav.partners': '파트너',
    'nav.contactUs': '문의하기',

    // Hero
    'hero.title': 'K-Culture의 미래를 연결합니다',
    'hero.subtitle': 'IP, 인플루언서, O4O 경험을 통해 Food, Fashion, Beauty, Contents 분야에서 글로벌 파트너십을 만들어갑니다.',
    'hero.cta': '더 알아보기',

    // Partner Brands
    'partners.trusted': '글로벌 파트너 & 셀럽과 함께',

    // Theme Grid
    'themes.title': '4가지 핵심 테마',
    'themes.subtitle': 'K-Culture를 대표하는 4가지 카테고리에서 새로운 가치를 창출합니다',
    'themes.food': '푸드',
    'themes.food.desc': 'K-푸드의 글로벌 확산',
    'themes.fashion': '패션',
    'themes.fashion.desc': 'K-패션 트렌드 리더',
    'themes.beauty': '뷰티',
    'themes.beauty.desc': 'K-뷰티 혁신',
    'themes.contents': '콘텐츠',
    'themes.contents.desc': 'K-콘텐츠 파워',

    // O4O Flow
    'o4o.title': 'O4O 비즈니스 모델',
    'o4o.subtitle': 'Offline to Online, 오프라인 경험을 온라인 커머스로 연결합니다',
    'o4o.ip': 'IP',
    'o4o.ip.desc': '지적재산권 확보',
    'o4o.offline': '오프라인',
    'o4o.offline.desc': '현장 경험 제공',
    'o4o.experience': '경험',
    'o4o.experience.desc': '브랜드 체험',
    'o4o.online': '온라인',
    'o4o.online.desc': '커머스 연결',

    // WonderMon
    'wondermon.title': 'WONDER MON',
    'wondermon.subtitle': 'AI 퍼스널 컬러 분석',
    'wondermon.accuracy': '98.5% 정확도',
    'wondermon.desc': 'AI 기반 퍼스널 컬러 분석으로 나만의 컬러를 찾아보세요',
    'wondermon.cta': '분석 시작하기',

    // Global Network
    'global.title': '글로벌 네트워크',
    'global.subtitle': '전 세계로 확장하는 K-Culture',
    'global.japan': '일본',
    'global.philippines': '필리핀',
    'global.mongolia': '몽골',
    'global.uzbekistan': '우즈베키스탄',
    'global.india': '인도',

    // CTA Section
    'cta.title': 'K-Wave에 함께하실 준비가 되셨나요?',
    'cta.subtitle': '오늘 K-GROUND와 파트너십을 시작하고 독점 IP, 인플루언서, 오프라인 경험 솔루션을 만나보세요.',
    'cta.download': '제안서 다운로드',
    'cta.meeting': '미팅 예약',

    // Footer
    'footer.rights': '모든 권리 보유',
    'footer.privacy': '개인정보처리방침',
    'footer.terms': '이용약관',
  },
  en: {
    // Navigation
    'nav.themes': 'Themes',
    'nav.o4oModel': 'O4O Model',
    'nav.wonderMon': 'Wonder Mon',
    'nav.partners': 'Partners',
    'nav.contactUs': 'Contact Us',

    // Hero
    'hero.title': 'Connecting the Future of K-Culture',
    'hero.subtitle': 'Creating global partnerships in Food, Fashion, Beauty, and Contents through IP, Influencers, and O4O experiences.',
    'hero.cta': 'Learn More',

    // Partner Brands
    'partners.trusted': 'Trusted by Global Partners & Celebs',

    // Theme Grid
    'themes.title': '4 Core Themes',
    'themes.subtitle': 'Creating new value in 4 categories representing K-Culture',
    'themes.food': 'Food',
    'themes.food.desc': 'Global expansion of K-Food',
    'themes.fashion': 'Fashion',
    'themes.fashion.desc': 'K-Fashion trend leader',
    'themes.beauty': 'Beauty',
    'themes.beauty.desc': 'K-Beauty innovation',
    'themes.contents': 'Contents',
    'themes.contents.desc': 'K-Contents power',

    // O4O Flow
    'o4o.title': 'O4O Business Model',
    'o4o.subtitle': 'Offline to Online, connecting offline experiences to online commerce',
    'o4o.ip': 'IP',
    'o4o.ip.desc': 'Secure intellectual property',
    'o4o.offline': 'Offline',
    'o4o.offline.desc': 'On-site experience',
    'o4o.experience': 'Experience',
    'o4o.experience.desc': 'Brand experience',
    'o4o.online': 'Online',
    'o4o.online.desc': 'Commerce connection',

    // WonderMon
    'wondermon.title': 'WONDER MON',
    'wondermon.subtitle': 'AI Personal Color Analysis',
    'wondermon.accuracy': '98.5% Accuracy',
    'wondermon.desc': 'Find your personal color with AI-based analysis',
    'wondermon.cta': 'Start Analysis',

    // Global Network
    'global.title': 'Global Network',
    'global.subtitle': 'K-Culture expanding worldwide',
    'global.japan': 'Japan',
    'global.philippines': 'Philippines',
    'global.mongolia': 'Mongolia',
    'global.uzbekistan': 'Uzbekistan',
    'global.india': 'India',

    // CTA Section
    'cta.title': 'Ready to join the K-Wave?',
    'cta.subtitle': 'Start your partnership with K-GROUND today and access exclusive IP, influencers, and offline experience solutions.',
    'cta.download': 'Download Proposal',
    'cta.meeting': 'Book a Meeting',

    // Footer
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  ja: {
    // Navigation
    'nav.themes': 'テーマ',
    'nav.o4oModel': 'O4Oモデル',
    'nav.wonderMon': 'ワンダーモン',
    'nav.partners': 'パートナー',
    'nav.contactUs': 'お問い合わせ',

    // Hero
    'hero.title': 'K-Cultureの未来をつなぐ',
    'hero.subtitle': 'IP、インフルエンサー、O4O体験を通じて、Food、Fashion、Beauty、Contentsでグローバルパートナーシップを構築します。',
    'hero.cta': '詳しく見る',

    // Partner Brands
    'partners.trusted': 'グローバルパートナー＆セレブと共に',

    // Theme Grid
    'themes.title': '4つのコアテーマ',
    'themes.subtitle': 'K-Cultureを代表する4つのカテゴリーで新しい価値を創造',
    'themes.food': 'フード',
    'themes.food.desc': 'K-フードのグローバル展開',
    'themes.fashion': 'ファッション',
    'themes.fashion.desc': 'K-ファッショントレンドリーダー',
    'themes.beauty': 'ビューティー',
    'themes.beauty.desc': 'K-ビューティーイノベーション',
    'themes.contents': 'コンテンツ',
    'themes.contents.desc': 'K-コンテンツパワー',

    // O4O Flow
    'o4o.title': 'O4Oビジネスモデル',
    'o4o.subtitle': 'オフラインからオンラインへ、オフライン体験をオンラインコマースに接続',
    'o4o.ip': 'IP',
    'o4o.ip.desc': '知的財産権の確保',
    'o4o.offline': 'オフライン',
    'o4o.offline.desc': '現場体験の提供',
    'o4o.experience': '体験',
    'o4o.experience.desc': 'ブランド体験',
    'o4o.online': 'オンライン',
    'o4o.online.desc': 'コマース接続',

    // WonderMon
    'wondermon.title': 'WONDER MON',
    'wondermon.subtitle': 'AIパーソナルカラー分析',
    'wondermon.accuracy': '98.5%の精度',
    'wondermon.desc': 'AIベースのパーソナルカラー分析であなたの色を見つけましょう',
    'wondermon.cta': '分析を開始',

    // Global Network
    'global.title': 'グローバルネットワーク',
    'global.subtitle': '世界に広がるK-Culture',
    'global.japan': '日本',
    'global.philippines': 'フィリピン',
    'global.mongolia': 'モンゴル',
    'global.uzbekistan': 'ウズベキスタン',
    'global.india': 'インド',

    // CTA Section
    'cta.title': 'K-Waveに参加する準備はできましたか？',
    'cta.subtitle': '今日からK-GROUNDとパートナーシップを始めて、独占IP、インフルエンサー、オフライン体験ソリューションにアクセスしましょう。',
    'cta.download': '提案書ダウンロード',
    'cta.meeting': 'ミーティング予約',

    // Footer
    'footer.rights': '全著作権所有',
    'footer.privacy': 'プライバシーポリシー',
    'footer.terms': '利用規約',
  },
  zh: {
    // Navigation
    'nav.themes': '主题',
    'nav.o4oModel': 'O4O模式',
    'nav.wonderMon': 'Wonder Mon',
    'nav.partners': '合作伙伴',
    'nav.contactUs': '联系我们',

    // Hero
    'hero.title': '连接K-Culture的未来',
    'hero.subtitle': '通过IP、网红和O4O体验，在美食、时尚、美妆和内容领域建立全球合作伙伴关系。',
    'hero.cta': '了解更多',

    // Partner Brands
    'partners.trusted': '与全球合作伙伴和名人同行',

    // Theme Grid
    'themes.title': '四大核心主题',
    'themes.subtitle': '在代表K-Culture的4个类别中创造新价值',
    'themes.food': '美食',
    'themes.food.desc': 'K-美食的全球扩展',
    'themes.fashion': '时尚',
    'themes.fashion.desc': 'K-时尚潮流引领者',
    'themes.beauty': '美妆',
    'themes.beauty.desc': 'K-美妆创新',
    'themes.contents': '内容',
    'themes.contents.desc': 'K-内容力量',

    // O4O Flow
    'o4o.title': 'O4O商业模式',
    'o4o.subtitle': '线下到线上，将线下体验连接到线上商务',
    'o4o.ip': 'IP',
    'o4o.ip.desc': '确保知识产权',
    'o4o.offline': '线下',
    'o4o.offline.desc': '现场体验',
    'o4o.experience': '体验',
    'o4o.experience.desc': '品牌体验',
    'o4o.online': '线上',
    'o4o.online.desc': '商务连接',

    // WonderMon
    'wondermon.title': 'WONDER MON',
    'wondermon.subtitle': 'AI个人色彩分析',
    'wondermon.accuracy': '98.5%准确率',
    'wondermon.desc': '通过AI分析找到属于您的个人色彩',
    'wondermon.cta': '开始分析',

    // Global Network
    'global.title': '全球网络',
    'global.subtitle': 'K-Culture走向世界',
    'global.japan': '日本',
    'global.philippines': '菲律宾',
    'global.mongolia': '蒙古',
    'global.uzbekistan': '乌兹别克斯坦',
    'global.india': '印度',

    // CTA Section
    'cta.title': '准备好加入K-Wave了吗？',
    'cta.subtitle': '今天就开始与K-GROUND建立合作伙伴关系，获取独家IP、网红和线下体验解决方案。',
    'cta.download': '下载提案',
    'cta.meeting': '预约会议',

    // Footer
    'footer.rights': '版权所有',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
  },
  th: {
    // Navigation
    'nav.themes': 'ธีม',
    'nav.o4oModel': 'โมเดล O4O',
    'nav.wonderMon': 'Wonder Mon',
    'nav.partners': 'พันธมิตร',
    'nav.contactUs': 'ติดต่อเรา',

    // Hero
    'hero.title': 'เชื่อมต่ออนาคตของ K-Culture',
    'hero.subtitle': 'สร้างความร่วมมือระดับโลกในด้านอาหาร แฟชั่น ความงาม และคอนเทนต์ ผ่าน IP อินฟลูเอนเซอร์ และประสบการณ์ O4O',
    'hero.cta': 'เรียนรู้เพิ่มเติม',

    // Partner Brands
    'partners.trusted': 'ได้รับความไว้วางใจจากพันธมิตรและคนดังระดับโลก',

    // Theme Grid
    'themes.title': '4 ธีมหลัก',
    'themes.subtitle': 'สร้างคุณค่าใหม่ใน 4 หมวดหมู่ที่เป็นตัวแทนของ K-Culture',
    'themes.food': 'อาหาร',
    'themes.food.desc': 'การขยายตัวของ K-Food ทั่วโลก',
    'themes.fashion': 'แฟชั่น',
    'themes.fashion.desc': 'ผู้นำเทรนด์ K-Fashion',
    'themes.beauty': 'ความงาม',
    'themes.beauty.desc': 'นวัตกรรม K-Beauty',
    'themes.contents': 'คอนเทนต์',
    'themes.contents.desc': 'พลังของ K-Contents',

    // O4O Flow
    'o4o.title': 'โมเดลธุรกิจ O4O',
    'o4o.subtitle': 'ออฟไลน์สู่ออนไลน์ เชื่อมต่อประสบการณ์ออฟไลน์สู่การค้าออนไลน์',
    'o4o.ip': 'IP',
    'o4o.ip.desc': 'รักษาทรัพย์สินทางปัญญา',
    'o4o.offline': 'ออฟไลน์',
    'o4o.offline.desc': 'ประสบการณ์ในสถานที่',
    'o4o.experience': 'ประสบการณ์',
    'o4o.experience.desc': 'ประสบการณ์แบรนด์',
    'o4o.online': 'ออนไลน์',
    'o4o.online.desc': 'การเชื่อมต่อการค้า',

    // WonderMon
    'wondermon.title': 'WONDER MON',
    'wondermon.subtitle': 'การวิเคราะห์สีส่วนบุคคลด้วย AI',
    'wondermon.accuracy': 'ความแม่นยำ 98.5%',
    'wondermon.desc': 'ค้นหาสีส่วนบุคคลของคุณด้วยการวิเคราะห์ AI',
    'wondermon.cta': 'เริ่มการวิเคราะห์',

    // Global Network
    'global.title': 'เครือข่ายทั่วโลก',
    'global.subtitle': 'K-Culture ขยายไปทั่วโลก',
    'global.japan': 'ญี่ปุ่น',
    'global.philippines': 'ฟิลิปปินส์',
    'global.mongolia': 'มองโกเลีย',
    'global.uzbekistan': 'อุซเบกิสถาน',
    'global.india': 'อินเดีย',

    // CTA Section
    'cta.title': 'พร้อมที่จะเข้าร่วม K-Wave หรือยัง?',
    'cta.subtitle': 'เริ่มต้นความร่วมมือกับ K-GROUND วันนี้ และเข้าถึง IP พิเศษ อินฟลูเอนเซอร์ และโซลูชันประสบการณ์ออฟไลน์',
    'cta.download': 'ดาวน์โหลดข้อเสนอ',
    'cta.meeting': 'จองการประชุม',

    // Footer
    'footer.rights': 'สงวนลิขสิทธิ์',
    'footer.privacy': 'นโยบายความเป็นส่วนตัว',
    'footer.terms': 'ข้อกำหนดการใช้งาน',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ko');

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  // Helper function to get text based on current language with fallback to English
  const getText = useCallback((texts: { ko: string; en: string; ja?: string; zh?: string; th?: string }): string => {
    switch (language) {
      case 'ko':
        return texts.ko;
      case 'en':
        return texts.en;
      case 'ja':
        return texts.ja || texts.en;
      case 'zh':
        return texts.zh || texts.en;
      case 'th':
        return texts.th || texts.en;
      default:
        return texts.en;
    }
  }, [language]);

  const currentLanguageInfo = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, currentLanguageInfo, getText }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
