import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shirt, UtensilsCrossed, Sparkles, Star, TrendingUp, Users, Building2, ArrowRight, CheckCircle2, Zap, Globe, Award } from 'lucide-react';

export const PartnerBrands: React.FC = () => {
  const { language } = useLanguage();
  const [hoveredBrand, setHoveredBrand] = React.useState<string | null>(null);
  const [activeCategory, setActiveCategory] = React.useState<'fashion' | 'food' | 'beauty'>('fashion');

  const fashionBrands = [
    { name: 'O!Oi', nameKo: '오아이오아이', descKo: '국내 대표 스트릿 캐주얼 브랜드', descEn: 'Leading Korean street casual brand', highlight: true },
    { name: 'SCULPTOR', nameKo: '스컬프터', descKo: '프리미엄 스트릿웨어', descEn: 'Premium streetwear', highlight: false },
    { name: 'LA MODE CHIEF', nameKo: '라모드치프', descKo: '뉴트로 감성 패션', descEn: 'Newtro fashion brand', highlight: false },
    { name: 'WONDER PLACE', nameKo: '원더플레이스', descKo: '트렌디 라이프스타일', descEn: 'Trendy lifestyle brand', highlight: false },
  ];

  const foodBrands = [
    { name: 'KKOLIRANG', nameKo: '꼬리랑', descKo: '프리미엄 한식 라면 브랜드', descEn: 'Premium Korean ramen brand', highlight: true },
    { name: 'PADOCHIGI', nameKo: '파도치기면', descKo: '한국 전통 면요리', descEn: 'Traditional Korean noodles', highlight: false },
  ];

  const beautyBrands = [
    { name: 'WONDER MON', nameKo: '원더몬', descKo: 'AI 퍼스널컬러 진단 뷰티', descEn: 'AI personal color beauty', highlight: true },
    { name: 'boon7shop', nameKo: '분세븐샵', descKo: 'K-뷰티 편집샵', descEn: 'K-Beauty select shop', highlight: false },
  ];

  const categoryConfig = {
    fashion: { brands: fashionBrands, icon: <Shirt size={24} />, color: 'purple', gradient: 'from-purple-500 to-pink-500' },
    food: { brands: foodBrands, icon: <UtensilsCrossed size={24} />, color: 'orange', gradient: 'from-orange-500 to-red-500' },
    beauty: { brands: beautyBrands, icon: <Sparkles size={24} />, color: 'teal', gradient: 'from-teal-500 to-cyan-500' },
  };

  const partnershipBenefits = [
    { icon: <Globe size={20} />, titleKo: '글로벌 진출 지원', titleEn: 'Global Expansion', descKo: '아시아 5개국 유통망', descEn: '5 Asian markets' },
    { icon: <Zap size={20} />, titleKo: '빠른 시장 진입', titleEn: 'Fast Market Entry', descKo: '검증된 네트워크', descEn: 'Verified network' },
    { icon: <Award size={20} />, titleKo: '브랜드 가치 제고', titleEn: 'Brand Enhancement', descKo: 'K-Culture 프리미엄', descEn: 'K-Culture premium' },
    { icon: <Users size={20} />, titleKo: '팬덤 마케팅', titleEn: 'Fandom Marketing', descKo: '충성 고객 확보', descEn: 'Loyal customer base' },
  ];

  // Celebrity collaborations - Yeo Jin-goo featured
  const mainCeleb = {
    nameKo: '여진구',
    nameEn: 'Yeo Jin-goo',
    titleKo: '대한민국 대표 배우',
    titleEn: 'Korea\'s Leading Actor',
    careerKo: '20년차 연기 경력',
    careerEn: '20 Years Acting Career',
    bioKo: '1997년생, 2005년 영화 "슬픈 영화"로 데뷔. 청룡영화상 신인남우상 수상. 드라마와 영화를 넘나드는 연기파 배우.',
    bioEn: 'Born 1997, debuted in 2005 film "Sad Movie". Blue Dragon Film Award winner. Versatile actor across dramas and films.',
    worksKo: ['호텔 델루나', '왕이 된 남자', '화이: 괴물을 삼킨 아이', '하이재킹'],
    worksEn: ['Hotel Del Luna', 'The Crowned Clown', 'Hwayi: A Monster Boy', 'Hijacking'],
    collabKo: '"Trace of Light" 도쿄 팝업스토어 콜라보레이션',
    collabEn: '"Trace of Light" Tokyo Pop-up Store Collaboration',
    achievementsKo: ['청룡영화상 신인남우상', 'KBS 연기대상 남자 최우수상', '백상예술대상 남자 최우수연기상'],
    achievementsEn: ['Blue Dragon Film Award - Best New Actor', 'KBS Drama Awards - Best Actor', 'Baeksang Arts Award - Best Actor'],
  };

  const otherCelebs = [
    { nameKo: '협업 진행중', nameEn: 'In Progress', typeKo: '배우/가수', typeEn: 'Actor/Singer' },
    { nameKo: '협업 진행중', nameEn: 'In Progress', typeKo: '인플루언서', typeEn: 'Influencer' },
  ];

  // Partnership stats
  const partnerStats = [
    { icon: <Building2 size={20} />, valueKo: '15+', valueEn: '15+', labelKo: '브랜드 파트너', labelEn: 'Brand Partners' },
    { icon: <Star size={20} />, valueKo: '10+', valueEn: '10+', labelKo: '셀럽 콜라보', labelEn: 'Celeb Collabs' },
    { icon: <Users size={20} />, valueKo: '100만+', valueEn: '1M+', labelKo: '누적 고객', labelEn: 'Total Customers' },
    { icon: <TrendingUp size={20} />, valueKo: '200%', valueEn: '200%', labelKo: '연평균 성장률', labelEn: 'YoY Growth' },
  ];

  return (
    <>
    {/* Partner Brands Section - Dark Theme like Celebrity Section */}
    <section className="relative w-full py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px]"></div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full border border-orange-500/30 mb-6">
            <Building2 size={18} className="text-orange-400" />
            <span className="text-sm font-bold text-orange-300 uppercase tracking-widest">
              Official Partners
            </span>
            <Building2 size={18} className="text-orange-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white font-heading mb-4">
            {language === 'ko' ? '파트너 브랜드' : 'Partner Brands'}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {language === 'ko'
              ? 'K-GROUND와 함께 글로벌 시장을 공략하는 검증된 파트너들'
              : 'Verified partners conquering global markets with K-GROUND'}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {partnerStats.map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-white">{language === 'ko' ? stat.valueKo : stat.valueEn}</p>
              <p className="text-sm text-gray-400">{language === 'ko' ? stat.labelKo : stat.labelEn}</p>
            </div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(['fashion', 'food', 'beauty'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all ${
                activeCategory === cat
                  ? `bg-gradient-to-r ${categoryConfig[cat].gradient} text-white shadow-xl shadow-${categoryConfig[cat].color}-500/30`
                  : 'bg-white/10 text-white/70 border border-white/20 hover:bg-white/20 hover:text-white'
              }`}
            >
              {categoryConfig[cat].icon}
              <span>K-{cat.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categoryConfig[activeCategory].brands.map((brand, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                brand.highlight
                  ? `bg-gradient-to-br ${categoryConfig[activeCategory].gradient} shadow-2xl`
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40'
              }`}
            >
              {brand.highlight && (
                <div className="absolute -top-3 -right-3 px-4 py-1.5 bg-white text-dark text-xs font-bold rounded-full shadow-lg">
                  FEATURED
                </div>
              )}

              {/* Brand Icon/Initial */}
              <div className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center text-2xl font-bold ${
                brand.highlight ? 'bg-white/20' : 'bg-gradient-to-br ' + categoryConfig[activeCategory].gradient
              } text-white`}>
                {brand.name.charAt(0)}
              </div>

              <h4 className="text-2xl font-bold text-white font-heading mb-2">
                {brand.name}
              </h4>
              <p className="text-sm text-white/60 mb-3">
                {language === 'ko' ? brand.nameKo : brand.name}
              </p>
              <p className={`text-sm leading-relaxed ${brand.highlight ? 'text-white/90' : 'text-gray-400'}`}>
                {language === 'ko' ? brand.descKo : brand.descEn}
              </p>

              {/* Hover Arrow */}
              <div className={`mt-6 flex items-center gap-2 text-sm font-semibold ${brand.highlight ? 'text-white' : 'text-primary'}`}>
                <span>{language === 'ko' ? '자세히 보기' : 'Learn more'}</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </div>

              {/* Glow Effect for Featured */}
              {brand.highlight && (
                <div className={`absolute -inset-1 bg-gradient-to-br ${categoryConfig[activeCategory].gradient} rounded-3xl blur-xl opacity-30 -z-10`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            {language === 'ko' ? '파트너십 혜택' : 'Partnership Benefits'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-white text-lg mb-2">
                  {language === 'ko' ? benefit.titleKo : benefit.titleEn}
                </h4>
                <p className="text-sm text-gray-400">
                  {language === 'ko' ? benefit.descKo : benefit.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6 text-lg">
            {language === 'ko' ? '글로벌 K-Culture 시장 진출을 위한 최적의 파트너십을 제안합니다' : 'We offer the best partnership for global K-Culture market expansion'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#cta" className="px-10 py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all hover:scale-105 flex items-center justify-center gap-2">
              {language === 'ko' ? '파트너 문의하기' : 'Partner Inquiry'}
              <ArrowRight size={20} />
            </a>
            <button className="px-10 py-5 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/30">
              {language === 'ko' ? '제안서 다운로드' : 'Download Proposal'}
            </button>
          </div>
        </div>
      </div>
    </section>

      {/* Celebrity Collaboration - Full Width Section */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[150px]"></div>
        </div>

        {/* Decorative Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-500/30 mb-6">
              <Star size={18} className="text-pink-400" />
              <span className="text-sm font-bold text-pink-300 uppercase tracking-widest">
                Exclusive Collaboration
              </span>
              <Star size={18} className="text-pink-400" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white font-heading mb-4">
              {language === 'ko' ? '셀럽 콜라보레이션' : 'Celebrity Collaboration'}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {language === 'ko'
                ? 'K-GROUND × 스타 아티스트와 함께하는 특별한 경험'
                : 'Special experiences with K-GROUND × Star Artists'}
            </p>
          </div>

          {/* Main Content - Horizontal Layout with Vertical Image */}
          <div className="flex flex-col lg:flex-row items-stretch gap-0 lg:gap-0 max-w-7xl mx-auto">

            {/* Left: Vertical Profile Image */}
            <div className="w-full lg:w-2/5 relative">
              <div className="relative h-[500px] lg:h-[700px]">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl blur-2xl opacity-40"></div>

                {/* Profile Image Container */}
                <div className="relative h-full rounded-3xl lg:rounded-r-none overflow-hidden border-2 border-white/20 lg:border-r-0 shadow-2xl">
                  <img
                    src="/images/yeo-jingoo-profile.jpg"
                    alt={language === 'ko' ? '여진구' : 'Yeo Jin-goo'}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                  {/* Name Overlay on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-5xl md:text-7xl font-bold text-white font-heading tracking-tight drop-shadow-2xl">
                      {language === 'ko' ? mainCeleb.nameKo : mainCeleb.nameEn}
                    </p>
                    <p className="text-xl text-pink-300 font-semibold mt-2">
                      {language === 'ko' ? mainCeleb.titleKo : mainCeleb.titleEn}
                    </p>
                  </div>

                  {/* Career Badge */}
                  <div className="absolute top-6 left-6 bg-gradient-to-br from-pink-500 to-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm">
                    {language === 'ko' ? mainCeleb.careerKo : mainCeleb.careerEn}
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Right: Info Panel */}
            <div className="w-full lg:w-3/5 bg-white/5 backdrop-blur-sm lg:rounded-r-3xl border-2 border-white/10 lg:border-l-0 p-8 lg:p-12 flex flex-col justify-center">

              {/* Bio */}
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-8">
                {language === 'ko' ? mainCeleb.bioKo : mainCeleb.bioEn}
              </p>

              {/* Collaboration Project - Highlighted */}
              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 border border-pink-500/30 mb-8">
                <p className="text-xs text-pink-400 font-bold uppercase tracking-widest mb-2">
                  K-GROUND Collaboration
                </p>
                <p className="text-2xl lg:text-3xl font-bold text-white">
                  {language === 'ko' ? mainCeleb.collabKo : mainCeleb.collabEn}
                </p>
              </div>

              {/* Two Column Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Representative Works */}
                <div>
                  <p className="text-sm text-gray-400 font-semibold mb-4 uppercase tracking-wider">
                    {language === 'ko' ? '대표작' : 'Representative Works'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(language === 'ko' ? mainCeleb.worksKo : mainCeleb.worksEn).map((work, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        {work}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <p className="text-sm text-gray-400 font-semibold mb-4 uppercase tracking-wider">
                    {language === 'ko' ? '수상 이력' : 'Awards'}
                  </p>
                  <div className="space-y-3">
                    {(language === 'ko' ? mainCeleb.achievementsKo : mainCeleb.achievementsEn).map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other Collaborations */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 font-semibold mb-4">
                  {language === 'ko' ? '추가 콜라보레이션 진행 중' : 'More Collaborations Coming'}
                </p>
                <div className="flex flex-wrap gap-3">
                  {otherCelebs.map((celeb, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 px-4 py-2.5 bg-white/5 rounded-full border border-white/10 hover:border-pink-500/50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full flex items-center justify-center">
                        <span className="text-pink-300">?</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">
                          {language === 'ko' ? celeb.nameKo : celeb.nameEn}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {language === 'ko' ? celeb.typeKo : celeb.typeEn}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 px-4 py-2.5 text-pink-400 text-sm font-semibold">
                    {language === 'ko' ? '+ 더 많은 협업 예정' : '+ More to come'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
