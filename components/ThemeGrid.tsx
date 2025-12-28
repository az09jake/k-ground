import React, { useState } from 'react';
import { Utensils, Shirt, Sparkles, Music, ArrowRight, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ThemeData {
  id: string;
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
  icon: React.ReactNode;
  image: string;
  color: string;
  statValue: string;
  statLabelKo: string;
  statLabelEn: string;
  featuresKo: string[];
  featuresEn: string[];
  representativeKo: string;
  representativeEn: string;
  imageRotation?: number; // 이미지 회전 각도 (90도 회전된 이미지 보정용)
}

const themes: ThemeData[] = [
  {
    id: 'food',
    titleKo: 'K-FOOD',
    titleEn: 'K-FOOD',
    descKo: '로컬 미식 체험 & 컨텐츠형 F&B',
    descEn: 'Local Gourmet & Content-driven F&B',
    icon: <Utensils className="w-6 h-6" />,
    image: '/images/kfood-popup-1.jpg',
    color: 'from-orange-500 to-red-500',
    statValue: '43.1%',
    statLabelKo: '방문 고려 요인',
    statLabelEn: 'Visit Consideration',
    featuresKo: ['꼬리랑 × K-Ground 라면 팝업', '로컬 미식 투어 연계', '셀럽 맛집 큐레이션', 'F&B 브랜드 콜라보'],
    featuresEn: ['Kkolirang × K-Ground Ramen Popup', 'Local Food Tour Connection', 'Celebrity Restaurant Curation', 'F&B Brand Collaboration'],
    representativeKo: '파도치기면, 옥수수면 등 K-라면 체험존',
    representativeEn: 'K-Ramen Experience Zone with Padochigi, Corn Ramen'
  },
  {
    id: 'fashion',
    titleKo: 'K-FASHION',
    titleEn: 'K-FASHION',
    descKo: '셀럽 착장 기반 스타일 & 팝업',
    descEn: 'Celebrity Style & Pop-up Stores',
    icon: <Shirt className="w-6 h-6" />,
    image: '/images/celeb-popup-1.jpg',
    color: 'from-pink-500 to-purple-500',
    statValue: '10+',
    statLabelKo: 'K-패션 브랜드 집결',
    statLabelEn: 'K-Fashion Brands',
    featuresKo: ['스타IP 팝업스토어', '셀럽 착장 영상 연동', '한정판 굿즈 판매', 'NFT 공식 굿즈 인증'],
    featuresEn: ['Star IP Pop-up Stores', 'Celebrity Outfit Video Integration', 'Limited Edition Goods', 'NFT Official Goods Certification'],
    representativeKo: '오아이오아이, 라모드치프, 스컬프터',
    representativeEn: 'O!Oi, La Mode Chief, Sculptor',
    imageRotation: 90 // 이미지가 90도 회전되어 저장됨
  },
  {
    id: 'beauty',
    titleKo: 'K-BEAUTY',
    titleEn: 'K-BEAUTY',
    descKo: 'AI 퍼스널컬러 진단 & 뷰티 체험',
    descEn: 'AI Personal Color Analysis & Beauty',
    icon: <Sparkles className="w-6 h-6" />,
    image: '/images/wondermon-store-1.jpg',
    color: 'from-teal-400 to-cyan-500',
    statValue: '49.7%',
    statLabelKo: '체험 희망 비중',
    statLabelEn: 'Experience Demand',
    featuresKo: ['WONDER MON AI 컬러진단', '4계절 퍼스널컬러 분석', '맞춤 메이크업 추천', '뷰티 제품 큐레이션'],
    featuresEn: ['WONDER MON AI Color Analysis', '4-Season Personal Color', 'Custom Makeup Recommendations', 'Beauty Product Curation'],
    representativeKo: 'WONDER MON × boon7shop',
    representativeEn: 'WONDER MON × boon7shop'
  },
  {
    id: 'contents',
    titleKo: 'K-CONTENTS',
    titleEn: 'K-CONTENTS',
    descKo: 'K-POP 아카데미 & 팬덤 이벤트',
    descEn: 'K-POP Academy & Fandom Events',
    icon: <Music className="w-6 h-6" />,
    image: '/images/event-1.jpg',
    color: 'from-violet-500 to-indigo-500',
    statValue: '81.5%',
    statLabelKo: '3년간 매출 성장',
    statLabelEn: '3-Year Revenue Growth',
    featuresKo: ['K-POP 댄스 아카데미', '미디어아트 전시', '팬 사인회 & 이벤트', '셀럽 팝업스토어'],
    featuresEn: ['K-POP Dance Academy', 'Media Art Exhibition', 'Fan Signs & Events', 'Celebrity Pop-up Stores'],
    representativeKo: '여진구 "Trace of Light" 도쿄 팝업 2025',
    representativeEn: 'Yeo Jin-goo "Trace of Light" Tokyo 2025',
    imageRotation: 90 // 이미지가 90도 회전되어 저장됨
  }
];

export const ThemeGrid: React.FC = () => {
  const { language } = useLanguage();
  const [selectedTheme, setSelectedTheme] = useState<ThemeData | null>(null);

  return (
    <section id="themes" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            {language === 'ko' ? '핵심 사업 영역' : 'Core Business Areas'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-dark">
            {language === 'ko' ? '4가지 핵심 테마' : '4 Core Themes'}
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
            {language === 'ko'
              ? 'K-Culture를 대표하는 4가지 카테고리에서 오프라인 경험과 온라인 커머스를 연결하여 새로운 가치를 창출합니다.'
              : 'Creating new value by connecting offline experiences and online commerce across 4 categories representing K-Culture.'
            }
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
                  alt={language === 'ko' ? theme.titleKo : theme.titleEn}
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
                  {language === 'ko' ? theme.titleKo : theme.titleEn}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {language === 'ko' ? theme.descKo : theme.descEn}
                </p>

                {/* Stat Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  <span className="text-white font-bold">{theme.statValue}</span>
                  <span className="text-white/80 text-xs">{language === 'ko' ? theme.statLabelKo : theme.statLabelEn}</span>
                </div>

                {/* View More Button */}
                <div className="mt-4 flex items-center gap-2 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span>{language === 'ko' ? '자세히 보기' : 'Learn More'}</span>
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
                alt={language === 'ko' ? selectedTheme.titleKo : selectedTheme.titleEn}
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
                  {language === 'ko' ? selectedTheme.titleKo : selectedTheme.titleEn}
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
                  {language === 'ko' ? selectedTheme.statLabelKo : selectedTheme.statLabelEn}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {language === 'ko' ? selectedTheme.descKo : selectedTheme.descEn}
              </p>

              {/* Features */}
              <h4 className="font-bold text-dark mb-4">{language === 'ko' ? '주요 서비스' : 'Key Services'}</h4>
              <ul className="space-y-3 mb-6">
                {(language === 'ko' ? selectedTheme.featuresKo : selectedTheme.featuresEn).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedTheme.color}`}></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Representative */}
              <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
                <p className="text-sm text-gray-500 mb-1">{language === 'ko' ? '대표 콘텐츠' : 'Representative Content'}</p>
                <p className="font-semibold text-dark">
                  {language === 'ko' ? selectedTheme.representativeKo : selectedTheme.representativeEn}
                </p>
              </div>

              {/* CTA */}
              <button className={`w-full mt-6 py-4 bg-gradient-to-r ${selectedTheme.color} text-white font-bold rounded-full hover:shadow-lg transition-shadow`}>
                {language === 'ko' ? '파트너십 문의하기' : 'Inquire Partnership'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
