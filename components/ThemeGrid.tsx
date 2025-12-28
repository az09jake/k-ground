import React, { useState } from 'react';
import { Utensils, Shirt, Sparkles, Music, ArrowRight, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ThemeData {
  id: string;
  title: { ko: string; en: string; ja: string; zh: string; th: string };
  desc: { ko: string; en: string; ja: string; zh: string; th: string };
  icon: React.ReactNode;
  image: string;
  color: string;
  statValue: string;
  statLabel: { ko: string; en: string; ja: string; zh: string; th: string };
  features: { ko: string[]; en: string[]; ja: string[]; zh: string[]; th: string[] };
  representative: { ko: string; en: string; ja: string; zh: string; th: string };
  imageRotation?: number;
}

const themes: ThemeData[] = [
  {
    id: 'food',
    title: { ko: 'K-FOOD', en: 'K-FOOD', ja: 'K-FOOD', zh: 'K-FOOD', th: 'K-FOOD' },
    desc: {
      ko: '로컬 미식 체험 & 컨텐츠형 F&B',
      en: 'Local Gourmet & Content-driven F&B',
      ja: 'ローカルグルメ体験＆コンテンツ型F&B',
      zh: '本地美食体验 & 内容型餐饮',
      th: 'ประสบการณ์อาหารท้องถิ่น & F&B แบบคอนเทนต์'
    },
    icon: <Utensils className="w-6 h-6" />,
    image: '/images/kfood-popup-1.jpg',
    color: 'from-orange-500 to-red-500',
    statValue: '43.1%',
    statLabel: {
      ko: '방문 고려 요인',
      en: 'Visit Consideration',
      ja: '訪問検討要因',
      zh: '访问考虑因素',
      th: 'ปัจจัยพิจารณาเยี่ยมชม'
    },
    features: {
      ko: ['꼬리랑 × K-Ground 라면 팝업', '로컬 미식 투어 연계', '셀럽 맛집 큐레이션', 'F&B 브랜드 콜라보'],
      en: ['Kkolirang × K-Ground Ramen Popup', 'Local Food Tour Connection', 'Celebrity Restaurant Curation', 'F&B Brand Collaboration'],
      ja: ['ッコリラン × K-Ground ラーメンポップアップ', 'ローカルグルメツアー連携', 'セレブおすすめ店キュレーション', 'F&Bブランドコラボ'],
      zh: ['Kkolirang × K-Ground 拉面快闪店', '本地美食之旅联动', '明星美食推荐', 'F&B品牌合作'],
      th: ['Kkolirang × K-Ground ราเมนป๊อปอัพ', 'ทัวร์อาหารท้องถิ่น', 'ร้านอาหารดารา', 'คอลแลบแบรนด์ F&B']
    },
    representative: {
      ko: '파도치기면, 옥수수면 등 K-라면 체험존',
      en: 'K-Ramen Experience Zone with Padochigi, Corn Ramen',
      ja: 'パドチギ麺、コーン麺などK-ラーメン体験ゾーン',
      zh: '波涛面、玉米面等K-拉面体验区',
      th: 'โซนประสบการณ์ K-Ramen พร้อม Padochigi และ Corn Ramen'
    }
  },
  {
    id: 'fashion',
    title: { ko: 'K-FASHION', en: 'K-FASHION', ja: 'K-FASHION', zh: 'K-FASHION', th: 'K-FASHION' },
    desc: {
      ko: '셀럽 착장 기반 스타일 & 팝업',
      en: 'Celebrity Style & Pop-up Stores',
      ja: 'セレブ着用スタイル＆ポップアップ',
      zh: '明星穿搭风格 & 快闪店',
      th: 'สไตล์คนดัง & ป๊อปอัพสโตร์'
    },
    icon: <Shirt className="w-6 h-6" />,
    image: '/images/celeb-popup-1.jpg',
    color: 'from-pink-500 to-purple-500',
    statValue: '10+',
    statLabel: {
      ko: 'K-패션 브랜드 집결',
      en: 'K-Fashion Brands',
      ja: 'K-ファッションブランド集結',
      zh: 'K-时尚品牌汇聚',
      th: 'แบรนด์ K-Fashion'
    },
    features: {
      ko: ['스타IP 팝업스토어', '셀럽 착장 영상 연동', '한정판 굿즈 판매', 'NFT 공식 굿즈 인증'],
      en: ['Star IP Pop-up Stores', 'Celebrity Outfit Video Integration', 'Limited Edition Goods', 'NFT Official Goods Certification'],
      ja: ['スターIPポップアップストア', 'セレブ着用動画連動', '限定グッズ販売', 'NFT公式グッズ認証'],
      zh: ['明星IP快闪店', '明星穿搭视频联动', '限量版周边销售', 'NFT官方周边认证'],
      th: ['ป๊อปอัพสโตร์ Star IP', 'วิดีโอเสื้อผ้าคนดัง', 'สินค้าลิมิเต็ด', 'การรับรอง NFT']
    },
    representative: {
      ko: '오아이오아이, 라모드치프, 스컬프터',
      en: 'O!Oi, La Mode Chief, Sculptor',
      ja: 'O!Oi、ラモードチーフ、スカルプター',
      zh: 'O!Oi、La Mode Chief、Sculptor',
      th: 'O!Oi, La Mode Chief, Sculptor'
    },
    imageRotation: 90
  },
  {
    id: 'beauty',
    title: { ko: 'K-BEAUTY', en: 'K-BEAUTY', ja: 'K-BEAUTY', zh: 'K-BEAUTY', th: 'K-BEAUTY' },
    desc: {
      ko: 'AI 퍼스널컬러 진단 & 뷰티 체험',
      en: 'AI Personal Color Analysis & Beauty',
      ja: 'AIパーソナルカラー診断＆ビューティー体験',
      zh: 'AI个人色彩诊断 & 美妆体验',
      th: 'การวิเคราะห์สีผิว AI & ประสบการณ์ความงาม'
    },
    icon: <Sparkles className="w-6 h-6" />,
    image: '/images/wondermon-store-1.jpg',
    color: 'from-teal-400 to-cyan-500',
    statValue: '49.7%',
    statLabel: {
      ko: '체험 희망 비중',
      en: 'Experience Demand',
      ja: '体験希望率',
      zh: '体验需求比例',
      th: 'ความต้องการประสบการณ์'
    },
    features: {
      ko: ['WONDER MON AI 컬러진단', '4계절 퍼스널컬러 분석', '맞춤 메이크업 추천', '뷰티 제품 큐레이션'],
      en: ['WONDER MON AI Color Analysis', '4-Season Personal Color', 'Custom Makeup Recommendations', 'Beauty Product Curation'],
      ja: ['WONDER MON AIカラー診断', '4シーズンパーソナルカラー', 'カスタムメイクアップ推奨', 'ビューティー製品キュレーション'],
      zh: ['WONDER MON AI色彩诊断', '四季个人色彩分析', '定制妆容推荐', '美妆产品策展'],
      th: ['WONDER MON วิเคราะห์สี AI', 'สีประจำ 4 ฤดูกาล', 'แนะนำการแต่งหน้า', 'คัดสรรผลิตภัณฑ์ความงาม']
    },
    representative: {
      ko: 'WONDER MON × boon7shop',
      en: 'WONDER MON × boon7shop',
      ja: 'WONDER MON × boon7shop',
      zh: 'WONDER MON × boon7shop',
      th: 'WONDER MON × boon7shop'
    }
  },
  {
    id: 'contents',
    title: { ko: 'K-CONTENTS', en: 'K-CONTENTS', ja: 'K-CONTENTS', zh: 'K-CONTENTS', th: 'K-CONTENTS' },
    desc: {
      ko: 'K-POP 아카데미 & 팬덤 이벤트',
      en: 'K-POP Academy & Fandom Events',
      ja: 'K-POPアカデミー＆ファンダムイベント',
      zh: 'K-POP学院 & 粉丝活动',
      th: 'K-POP Academy & กิจกรรมแฟนคลับ'
    },
    icon: <Music className="w-6 h-6" />,
    image: '/images/event-1.jpg',
    color: 'from-violet-500 to-indigo-500',
    statValue: '81.5%',
    statLabel: {
      ko: '3년간 매출 성장',
      en: '3-Year Revenue Growth',
      ja: '3年間売上成長',
      zh: '3年营收增长',
      th: 'การเติบโตรายได้ 3 ปี'
    },
    features: {
      ko: ['K-POP 댄스 아카데미', '미디어아트 전시', '팬 사인회 & 이벤트', '셀럽 팝업스토어'],
      en: ['K-POP Dance Academy', 'Media Art Exhibition', 'Fan Signs & Events', 'Celebrity Pop-up Stores'],
      ja: ['K-POPダンスアカデミー', 'メディアアート展示', 'ファンサイン会＆イベント', 'セレブポップアップストア'],
      zh: ['K-POP舞蹈学院', '媒体艺术展览', '粉丝签名会 & 活动', '明星快闪店'],
      th: ['K-POP Dance Academy', 'นิทรรศการมีเดียอาร์ต', 'งานแฟนไซน์ & อีเวนต์', 'ป๊อปอัพสโตร์คนดัง']
    },
    representative: {
      ko: '여진구 "Trace of Light" 도쿄 팝업 2025',
      en: 'Yeo Jin-goo "Trace of Light" Tokyo 2025',
      ja: 'ヨ・ジング「Trace of Light」東京ポップアップ 2025',
      zh: '吕珍九 "Trace of Light" 东京快闪 2025',
      th: 'Yeo Jin-goo "Trace of Light" Tokyo 2025'
    },
    imageRotation: 90
  }
];

export const ThemeGrid: React.FC = () => {
  const { getText, language } = useLanguage();
  const [selectedTheme, setSelectedTheme] = useState<ThemeData | null>(null);

  const texts = {
    badge: {
      ko: '핵심 사업 영역',
      en: 'Core Business Areas',
      ja: 'コアビジネス領域',
      zh: '核心业务领域',
      th: 'ธุรกิจหลัก'
    },
    title: {
      ko: '4가지 핵심 테마',
      en: '4 Core Themes',
      ja: '4つのコアテーマ',
      zh: '4大核心主题',
      th: '4 ธีมหลัก'
    },
    subtitle: {
      ko: 'K-Culture를 대표하는 4가지 카테고리에서 오프라인 경험과 온라인 커머스를 연결하여 새로운 가치를 창출합니다.',
      en: 'Creating new value by connecting offline experiences and online commerce across 4 categories representing K-Culture.',
      ja: 'K-Cultureを代表する4つのカテゴリーでオフライン体験とオンラインコマースを繋げ、新たな価値を創造します。',
      zh: '在代表K-Culture的4个类别中，通过连接线下体验和线上商务创造新价值。',
      th: 'สร้างคุณค่าใหม่ด้วยการเชื่อมต่อประสบการณ์ออฟไลน์และอีคอมเมิร์ซออนไลน์ใน 4 หมวดหมู่ที่เป็นตัวแทนของ K-Culture'
    },
    learnMore: {
      ko: '자세히 보기',
      en: 'Learn More',
      ja: '詳しく見る',
      zh: '了解更多',
      th: 'เรียนรู้เพิ่มเติม'
    },
    keyServices: {
      ko: '주요 서비스',
      en: 'Key Services',
      ja: '主要サービス',
      zh: '主要服务',
      th: 'บริการหลัก'
    },
    representativeContent: {
      ko: '대표 콘텐츠',
      en: 'Representative Content',
      ja: '代表コンテンツ',
      zh: '代表内容',
      th: 'เนื้อหาตัวแทน'
    },
    inquirePartnership: {
      ko: '파트너십 문의하기',
      en: 'Inquire Partnership',
      ja: 'パートナーシップお問い合わせ',
      zh: '咨询合作',
      th: 'สอบถามความร่วมมือ'
    }
  };

  return (
    <section id="themes" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            {getText(texts.badge)}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-dark">
            {getText(texts.title)}
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
            {getText(texts.subtitle)}
          </p>
        </div>

        {/* Theme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme) => (
            <div
              key={theme.id}
              onClick={() => setSelectedTheme(theme)}
              className="group relative h-[480px] overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={theme.image}
                  alt={getText(theme.title)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={theme.imageRotation ? {
                    transform: `rotate(${theme.imageRotation}deg) scale(1.5)`,
                    transformOrigin: 'center center'
                  } : undefined}
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${theme.color} opacity-60 mix-blend-multiply`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${theme.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg`}>
                  {theme.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                  {getText(theme.title)}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {getText(theme.desc)}
                </p>

                {/* Stat Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  <span className="text-white font-bold">{theme.statValue}</span>
                  <span className="text-white/80 text-xs">{getText(theme.statLabel)}</span>
                </div>

                {/* View More Button */}
                <div className="mt-4 flex items-center gap-2 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span>{getText(texts.learnMore)}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Theme Detail Modal */}
      {selectedTheme && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedTheme(null)}>
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header Image */}
            <div className="relative h-64 overflow-hidden rounded-t-3xl">
              <img
                src={selectedTheme.image}
                alt={getText(selectedTheme.title)}
                className="w-full h-full object-cover"
                style={selectedTheme.imageRotation ? {
                  transform: `rotate(${selectedTheme.imageRotation}deg) scale(1.5)`,
                  transformOrigin: 'center center'
                } : undefined}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${selectedTheme.color} opacity-50 mix-blend-multiply`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedTheme(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Title on Image */}
              <div className="absolute bottom-6 left-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${selectedTheme.color} rounded-xl flex items-center justify-center text-white mb-3`}>
                  {selectedTheme.icon}
                </div>
                <h3 className="text-3xl font-bold text-white font-heading">
                  {getText(selectedTheme.title)}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Stat */}
              <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-2xl">
                <div className={`text-4xl font-bold bg-gradient-to-r ${selectedTheme.color} bg-clip-text text-transparent`}>
                  {selectedTheme.statValue}
                </div>
                <div className="text-gray-600">
                  {getText(selectedTheme.statLabel)}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {getText(selectedTheme.desc)}
              </p>

              {/* Features */}
              <h4 className="font-bold text-dark mb-4">{getText(texts.keyServices)}</h4>
              <ul className="space-y-3 mb-6">
                {(selectedTheme.features[language] || selectedTheme.features.en).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedTheme.color}`}></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Representative */}
              <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
                <p className="text-sm text-gray-500 mb-1">{getText(texts.representativeContent)}</p>
                <p className="font-semibold text-dark">
                  {getText(selectedTheme.representative)}
                </p>
              </div>

              {/* CTA */}
              <button className={`w-full mt-6 py-4 bg-gradient-to-r ${selectedTheme.color} text-white font-bold rounded-full hover:shadow-lg transition-shadow`}>
                {getText(texts.inquirePartnership)}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
