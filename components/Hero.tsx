import React from 'react';
import { ArrowRight, Play, Sparkles, Globe, ShoppingBag, Palette } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t, language, getText } = useLanguage();

  // Business model keywords
  const businessKeywords = [
    { ko: '하이브리드 로컬라이제이션', en: 'Hybrid Localization', ja: 'ハイブリッドローカリゼーション', zh: '混合本地化', th: 'การปรับให้เข้ากับท้องถิ่น', icon: <Globe size={14} /> },
    { ko: 'IP 크로스오버', en: 'IP Crossover', ja: 'IPクロスオーバー', zh: 'IP跨界', th: 'IP ครอสโอเวอร์', icon: <Sparkles size={14} /> },
    { ko: '엔터테크', en: 'Ent-Tech', ja: 'エンタテック', zh: '娱乐科技', th: 'Ent-Tech', icon: <Palette size={14} /> },
    { ko: '엔터투어먼트', en: 'Ent-Tour-ment', ja: 'エンタツアーメント', zh: '娱乐旅游', th: 'Ent-Tour-ment', icon: <ShoppingBag size={14} /> },
  ];

  // Multi-language texts
  const texts = {
    badge: { ko: 'K-CULTURE 복합 문화 플랫폼', en: 'K-CULTURE PLATFORM', ja: 'K-CULTURE 複合文化プラットフォーム', zh: 'K-CULTURE 综合文化平台', th: 'แพลตฟอร์ม K-CULTURE' },
    headline1: { ko: 'K-Culture를', en: 'Experience', ja: 'K-Cultureを', zh: '体验', th: 'สัมผัส' },
    headline2: { ko: '경험하는 새로운 방식', en: 'K-Culture,', ja: '新しい体験方法', zh: 'K-Culture', th: 'K-Culture' },
    headline3: { ko: '', en: 'Reimagined.', ja: '', zh: '的新方式', th: 'ในรูปแบบใหม่' },
    subtitle: {
      ko: 'IP × Influencer × 오프라인 체험이 연결되는 복합 문화 플랫폼. 머물고, 즐기고, 공유하는 K-라이프스타일의 대표 플랫폼입니다.',
      en: 'The ultimate complex cultural platform connecting IP, Influencers, and Offline Experiences. Stay, enjoy, and share the K-Lifestyle.',
      ja: 'IP × インフルエンサー × オフライン体験が繋がる複合文化プラットフォーム。滞在し、楽しみ、共有するK-ライフスタイルの代表的なプラットフォームです。',
      zh: '连接IP、网红和线下体验的综合文化平台。留下、享受、分享K-生活方式的代表性平台。',
      th: 'แพลตฟอร์มวัฒนธรรมที่เชื่อมต่อ IP, อินฟลูเอนเซอร์ และประสบการณ์ออฟไลน์ พักผ่อน สนุก และแบ่งปัน K-Lifestyle'
    },
    companyIntro: {
      ko: 'MAIN BASE KOREA는 K-FOOD, K-FASHION, K-BEAUTY, K-CONTENTS를 하나로 연결하는 글로벌 K-Culture 플랫폼 기업입니다. 일본 현지 법인 MAIN BASE Entertainment와 함께 아시아 전역에서 O4O 경험을 제공합니다.',
      en: 'MAIN BASE KOREA is a global K-Culture platform company connecting K-FOOD, K-FASHION, K-BEAUTY, and K-CONTENTS. Together with our Japanese subsidiary MAIN BASE Entertainment, we provide O4O experiences across Asia.',
      ja: 'MAIN BASE KOREAは、K-FOOD、K-FASHION、K-BEAUTY、K-CONTENTSを一つに繋ぐグローバルK-Cultureプラットフォーム企業です。日本現地法人MAIN BASE Entertainmentと共にアジア全域でO4O体験を提供しています。',
      zh: 'MAIN BASE KOREA是连接K-FOOD、K-FASHION、K-BEAUTY、K-CONTENTS的全球K-Culture平台公司。与日本子公司MAIN BASE Entertainment一起，在亚洲各地提供O4O体验。',
      th: 'MAIN BASE KOREA คือบริษัทแพลตฟอร์ม K-Culture ระดับโลก ที่เชื่อมต่อ K-FOOD, K-FASHION, K-BEAUTY และ K-CONTENTS ร่วมกับบริษัทลูกในญี่ปุ่น MAIN BASE Entertainment เรามอบประสบการณ์ O4O ทั่วเอเชีย'
    },
    statFood: { ko: 'K-FOOD 방문 고려율', en: 'K-FOOD Interest', ja: 'K-FOOD訪問検討率', zh: 'K-FOOD 访问意向', th: 'ความสนใจ K-FOOD' },
    statBeauty: { ko: 'K-BEAUTY 체험 희망', en: 'K-BEAUTY Demand', ja: 'K-BEAUTY体験希望', zh: 'K-BEAUTY 体验需求', th: 'ความต้องการ K-BEAUTY' },
    statGrowth: { ko: '체험 매출 성장률', en: 'Revenue Growth', ja: '体験売上成長率', zh: '体验收入增长率', th: 'การเติบโตของรายได้' },
    ctaPartner: { ko: '파트너 문의하기', en: 'Partner Inquiry', ja: 'パートナーシップお問い合わせ', zh: '合作咨询', th: 'สอบถามพันธมิตร' },
    ctaVideo: { ko: '체험 영상 보기', en: 'Watch Video', ja: '体験動画を見る', zh: '观看视频', th: 'ดูวิดีโอ' },
    scroll: { ko: '스크롤', en: 'Scroll', ja: 'スクロール', zh: '滚动', th: 'เลื่อน' }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay - dark on left (text area), transparent on right (video visible) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-secondary/20 rounded-full blur-[80px] animate-pulse delay-1000"></div>

      {/* Content Layer */}
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 py-2 px-4 border border-primary/50 text-primary rounded-full text-sm font-semibold mb-8 bg-black/40 backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            {getText(texts.badge)}
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] mb-6">
            {getText(texts.headline1)}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
              {getText(texts.headline2)}
            </span>
            {getText(texts.headline3) && <><br />{getText(texts.headline3)}</>}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl font-light leading-relaxed">
            {getText(texts.subtitle)}
          </p>

          {/* Company Introduction */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 mb-6 max-w-2xl">
            <p className="text-sm text-gray-300 leading-relaxed">
              {getText(texts.companyIntro)}
            </p>
          </div>

          {/* Business Model Keywords */}
          <div className="flex flex-wrap gap-2 mb-8">
            {businessKeywords.map((keyword, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white/80 hover:bg-white/20 hover:text-white transition-colors cursor-default"
              >
                {keyword.icon}
                #{getText(keyword)}
              </span>
            ))}
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">43.1%</p>
              <p className="text-sm text-gray-400">{getText(texts.statFood)}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-secondary">49.7%</p>
              <p className="text-sm text-gray-400">{getText(texts.statBeauty)}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent">81.5%</p>
              <p className="text-sm text-gray-400">{getText(texts.statGrowth)}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-orange-600 hover:to-pink-600 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105">
              {getText(texts.ctaPartner)}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 border-2 border-white/50 hover:border-white hover:bg-white/10 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
              <Play size={18} className="group-hover:scale-110 transition-transform" />
              {getText(texts.ctaVideo)}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">{getText(texts.scroll)}</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
