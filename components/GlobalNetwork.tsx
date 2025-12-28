import React from 'react';
import { Globe2, MapPin, Users, Building2, Truck, X, Calendar, Target, TrendingUp, CheckCircle2, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CountryDetail {
  nameKo: string;
  nameEn: string;
  flag: string;
  statusKo: string;
  statusEn: string;
  descKo: string;
  descEn: string;
  active: boolean;
  // Extended details for modal
  entityKo?: string;
  entityEn?: string;
  focusKo?: string[];
  focusEn?: string[];
  achievementsKo?: string[];
  achievementsEn?: string[];
  yearEstablished?: string;
  popupCount?: number;
  partnerCount?: number;
}

export const GlobalNetwork: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCountry, setSelectedCountry] = React.useState<CountryDetail | null>(null);

  const countries: CountryDetail[] = [
    {
      nameKo: '일본',
      nameEn: 'Japan',
      flag: '🇯🇵',
      statusKo: '핵심 거점',
      statusEn: 'Core Hub',
      descKo: '도쿄, 오사카 팝업 운영',
      descEn: 'Tokyo, Osaka pop-up operations',
      active: true,
      entityKo: 'MAIN BASE Entertainment / CONTENTS SEVEN',
      entityEn: 'MAIN BASE Entertainment / CONTENTS SEVEN',
      focusKo: ['J-Pop × K-Pop 크로스오버', '현지화 콘텐츠 제작', '팝업스토어 운영', '유통 파트너십'],
      focusEn: ['J-Pop × K-Pop crossover', 'Localized content creation', 'Popup store operations', 'Distribution partnerships'],
      achievementsKo: ['도쿄 하라주쿠 팝업 10회+', '오사카 난바 상설 체험존', '현지 인플루언서 50+ 협업'],
      achievementsEn: ['10+ Tokyo Harajuku popups', 'Osaka Namba permanent zone', '50+ local influencer collabs'],
      yearEstablished: '2023',
      popupCount: 15,
      partnerCount: 8
    },
    {
      nameKo: '필리핀',
      nameEn: 'Philippines',
      flag: '🇵🇭',
      statusKo: '확장 중',
      statusEn: 'Expanding',
      descKo: '마닐라 파트너십 구축',
      descEn: 'Manila partnership building',
      active: true,
      focusKo: ['K-Beauty 중심 전개', '로컬 인플루언서 네트워크', '쇼핑몰 파트너십'],
      focusEn: ['K-Beauty focused expansion', 'Local influencer network', 'Mall partnerships'],
      achievementsKo: ['마닐라 SM Mall 입점 협의중', 'K-Beauty 팝업 3회'],
      achievementsEn: ['SM Mall Manila entry in discussion', '3 K-Beauty popups'],
      yearEstablished: '2024',
      popupCount: 3,
      partnerCount: 4
    },
    {
      nameKo: '몽골',
      nameEn: 'Mongolia',
      flag: '🇲🇳',
      statusKo: '파트너십',
      statusEn: 'Partnership',
      descKo: '울란바토르 유통망',
      descEn: 'Ulaanbaatar distribution',
      active: true,
      focusKo: ['K-Food 유통', '현지 리테일 파트너십', 'K-Culture 이벤트'],
      focusEn: ['K-Food distribution', 'Local retail partnerships', 'K-Culture events'],
      achievementsKo: ['꼬리랑 라면 현지 유통', '울란바토르 K-Food 페스티벌 참가'],
      achievementsEn: ['Kkolirang ramen local distribution', 'Ulaanbaatar K-Food Festival participation'],
      yearEstablished: '2024',
      popupCount: 2,
      partnerCount: 3
    },
    {
      nameKo: '우즈베키스탄',
      nameEn: 'Uzbekistan',
      flag: '🇺🇿',
      statusKo: '신규',
      statusEn: 'New',
      descKo: '타슈켄트 진출 예정',
      descEn: 'Tashkent entry planned',
      active: false,
      focusKo: ['K-Beauty 시장 조사', 'K-Food 유통망 구축', '로컬 파트너 발굴'],
      focusEn: ['K-Beauty market research', 'K-Food distribution setup', 'Local partner discovery'],
      yearEstablished: '2025'
    },
    {
      nameKo: '인도',
      nameEn: 'India',
      flag: '🇮🇳',
      statusKo: '계획',
      statusEn: 'Planned',
      descKo: '뭄바이 시장 조사',
      descEn: 'Mumbai market research',
      active: false,
      focusKo: ['대규모 시장 진출 전략', 'K-Culture 페스티벌 기획', '온라인 커머스 연계'],
      focusEn: ['Large market entry strategy', 'K-Culture festival planning', 'Online commerce integration'],
      yearEstablished: '2025'
    },
  ];

  // Timeline data
  const timeline = [
    { year: '2022', eventKo: 'K-GROUND 설립', eventEn: 'K-GROUND Founded', status: 'completed' },
    { year: '2023', eventKo: '일본 법인 설립 (MAIN BASE Entertainment)', eventEn: 'Japan subsidiary established', status: 'completed' },
    { year: '2024', eventKo: '필리핀, 몽골 시장 진출', eventEn: 'Philippines, Mongolia market entry', status: 'completed' },
    { year: '2025', eventKo: '우즈베키스탄, 인도 진출 예정', eventEn: 'Uzbekistan, India expansion planned', status: 'planned' },
  ];

  const capabilities = [
    {
      icon: <Building2 className="w-6 h-6" />,
      titleKo: '로컬 파트너십',
      titleEn: 'Local Partnerships',
      descKo: '현지 유통사, 호텔, 리테일과 협력',
      descEn: 'Collaboration with local distributors, hotels, retail'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      titleKo: '크로스보더 물류',
      titleEn: 'Cross-border Logistics',
      descKo: '원활한 국제 배송 및 통관',
      descEn: 'Smooth international shipping & customs'
    },
    {
      icon: <Users className="w-6 h-6" />,
      titleKo: '현지화 마케팅',
      titleEn: 'Localized Marketing',
      descKo: '타겟 시장 맞춤 콘텐츠 제작',
      descEn: 'Target market customized content creation'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      titleKo: '팝업 네트워크',
      titleEn: 'Pop-up Network',
      descKo: '검증된 오프라인 체험 공간',
      descEn: 'Verified offline experience spaces'
    }
  ];

  return (
    <section id="partners" className="py-24 bg-[#0f0f0f] text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-primary rounded-full blur-[200px]"></div>
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-accent rounded-full blur-[150px]"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-secondary rounded-full blur-[100px]"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6">
            <Globe2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            {language === 'ko' ? '글로벌 네트워크' : 'Global Network'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {language === 'ko'
              ? '아시아 핵심 시장을 중심으로 글로벌 유통망을 확보하고 있습니다. K-Culture의 세계화를 함께 만들어갑니다.'
              : 'Securing global distribution channels centered on key Asian markets. Building the globalization of K-Culture together.'
            }
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">
            {language === 'ko' ? '글로벌 확장 타임라인' : 'Global Expansion Timeline'}
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-gray-600 hidden md:block"></div>

            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-4 gap-4">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className={`p-4 rounded-xl border ${item.status === 'completed' ? 'bg-primary/10 border-primary/30' : 'bg-white/5 border-white/10'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {item.status === 'completed' ? (
                        <CheckCircle2 size={16} className="text-primary" />
                      ) : (
                        <Clock size={16} className="text-gray-400" />
                      )}
                      <span className="text-lg font-bold text-primary">{item.year}</span>
                    </div>
                    <p className={`text-sm ${item.status === 'completed' ? 'text-white' : 'text-gray-400'}`}>
                      {language === 'ko' ? item.eventKo : item.eventEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {countries.map((country, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCountry(country)}
              className={`relative p-6 rounded-2xl border transition-all duration-300 group hover:scale-105 cursor-pointer ${
                country.active
                  ? 'bg-white/10 border-white/20 hover:border-primary/50 hover:bg-white/15'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {/* Flag */}
              <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform">{country.flag}</span>

              {/* Country Name */}
              <h3 className="text-lg font-bold mb-1">
                {language === 'ko' ? country.nameKo : country.nameEn}
              </h3>

              {/* Status Badge */}
              <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold mb-2 ${
                country.active ? 'bg-primary/20 text-primary' : 'bg-gray-500/20 text-gray-400'
              }`}>
                {language === 'ko' ? country.statusKo : country.statusEn}
              </span>

              {/* Description */}
              <p className="text-gray-500 text-sm">
                {language === 'ko' ? country.descKo : country.descEn}
              </p>

              {/* Click for details hint */}
              <p className="text-xs text-primary/60 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                {language === 'ko' ? '클릭하여 상세 보기' : 'Click for details'}
              </p>

              {/* Active Indicator */}
              {country.active && (
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          <h3 className="text-2xl font-bold mb-8 text-center">
            {language === 'ko' ? '글로벌 운영 역량' : 'Global Operational Capabilities'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {cap.icon}
                </div>
                <h4 className="font-bold text-white mb-2">
                  {language === 'ko' ? cap.titleKo : cap.titleEn}
                </h4>
                <p className="text-gray-500 text-sm">
                  {language === 'ko' ? cap.descKo : cap.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">5+</p>
            <p className="text-gray-500 mt-2">{language === 'ko' ? '파트너 국가' : 'Partner Countries'}</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">20+</p>
            <p className="text-gray-500 mt-2">{language === 'ko' ? '현지 파트너사' : 'Local Partners'}</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">50+</p>
            <p className="text-gray-500 mt-2">{language === 'ko' ? '팝업 운영 횟수' : 'Pop-up Events'}</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">1M+</p>
            <p className="text-gray-500 mt-2">{language === 'ko' ? '글로벌 방문객' : 'Global Visitors'}</p>
          </div>
        </div>
      </div>

      {/* Country Detail Modal */}
      {selectedCountry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedCountry(null)}>
          <div
            className="bg-[#1a1a1a] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#1a1a1a] border-b border-white/10 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-5xl">{selectedCountry.flag}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {language === 'ko' ? selectedCountry.nameKo : selectedCountry.nameEn}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    selectedCountry.active ? 'bg-primary/20 text-primary' : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {language === 'ko' ? selectedCountry.statusKo : selectedCountry.statusEn}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedCountry(null)}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X size={20} className="text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Entity Info */}
              {selectedCountry.entityKo && (
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 size={18} className="text-primary" />
                    <span className="text-sm font-semibold text-gray-400">
                      {language === 'ko' ? '현지 법인' : 'Local Entity'}
                    </span>
                  </div>
                  <p className="text-white font-semibold">
                    {language === 'ko' ? selectedCountry.entityKo : selectedCountry.entityEn}
                  </p>
                </div>
              )}

              {/* Stats Row */}
              {selectedCountry.active && (
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-primary/10 rounded-xl p-4 text-center border border-primary/20">
                    <Calendar size={20} className="text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{selectedCountry.yearEstablished}</p>
                    <p className="text-xs text-gray-400">{language === 'ko' ? '진출 연도' : 'Est. Year'}</p>
                  </div>
                  {selectedCountry.popupCount && (
                    <div className="bg-secondary/10 rounded-xl p-4 text-center border border-secondary/20">
                      <Target size={20} className="text-secondary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-white">{selectedCountry.popupCount}+</p>
                      <p className="text-xs text-gray-400">{language === 'ko' ? '팝업 횟수' : 'Popups'}</p>
                    </div>
                  )}
                  {selectedCountry.partnerCount && (
                    <div className="bg-accent/10 rounded-xl p-4 text-center border border-accent/20">
                      <Users size={20} className="text-accent mx-auto mb-2" />
                      <p className="text-2xl font-bold text-white">{selectedCountry.partnerCount}+</p>
                      <p className="text-xs text-gray-400">{language === 'ko' ? '파트너' : 'Partners'}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Focus Areas */}
              {selectedCountry.focusKo && (
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Target size={18} className="text-primary" />
                    {language === 'ko' ? '주력 분야' : 'Focus Areas'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(language === 'ko' ? selectedCountry.focusKo : selectedCountry.focusEn)?.map((focus, idx) => (
                      <span key={idx} className="px-4 py-2 bg-white/10 rounded-full text-sm text-white border border-white/10">
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {selectedCountry.achievementsKo && (
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <TrendingUp size={18} className="text-primary" />
                    {language === 'ko' ? '주요 성과' : 'Key Achievements'}
                  </h4>
                  <ul className="space-y-2">
                    {(language === 'ko' ? selectedCountry.achievementsKo : selectedCountry.achievementsEn)?.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 size={16} className="text-primary mt-1 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-400 text-sm mb-4">
                  {language === 'ko'
                    ? `${selectedCountry.nameKo} 시장 진출에 관심이 있으신가요?`
                    : `Interested in entering the ${selectedCountry.nameEn} market?`
                  }
                </p>
                <a
                  href="#cta"
                  onClick={() => setSelectedCountry(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:scale-105 transition-transform"
                >
                  {language === 'ko' ? '파트너십 문의하기' : 'Inquire Partnership'}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
