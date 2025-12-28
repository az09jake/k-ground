import React, { useState, useEffect, useRef } from 'react';
import { Camera, CheckCircle2, Palette, Sparkles, ShoppingBag, Users, Star, Play, ArrowRight, Zap, Target, Award, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const WonderMon: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'features' | 'process' | 'results'>('features');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [sliderPosition, setSliderPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Gallery images - 10 images for slider
  const galleryImages = [
    { src: '/images/wondermon-store-1.jpg', titleKo: 'WONDER MON 스토어 전경', titleEn: 'WONDER MON Store View' },
    { src: '/images/wondermon-products.jpg', titleKo: '뷰티 제품 라인업', titleEn: 'Beauty Product Lineup' },
    { src: '/images/wondermon-logo-mint.jpg', titleKo: 'AI 퍼스널컬러 진단', titleEn: 'AI Personal Color Analysis' },
    { src: '/images/kfood-popup-1.jpg', titleKo: 'K-Food 체험존', titleEn: 'K-Food Experience Zone' },
    { src: '/images/celeb-popup-1.jpg', titleKo: '셀럽 팝업스토어', titleEn: 'Celebrity Pop-up Store' },
    { src: '/images/event-1.jpg', titleKo: '패션 이벤트', titleEn: 'Fashion Event' },
    { src: '/images/korangi-christmas.jpg', titleKo: '크리스마스 스페셜', titleEn: 'Christmas Special' },
    { src: '/images/wondermon-store-1.jpg', titleKo: '뷰티 체험 현장', titleEn: 'Beauty Experience' },
    { src: '/images/wondermon-products.jpg', titleKo: '제품 디스플레이', titleEn: 'Product Display' },
    { src: '/images/celeb-popup-1.jpg', titleKo: '팬 미팅 현장', titleEn: 'Fan Meeting Scene' },
  ];

  // Responsive images per view (4 on desktop, 2 on mobile)
  const [imagesPerView, setImagesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setImagesPerView(window.innerWidth >= 768 ? 4 : 2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setSliderPosition((prev) => {
        const maxPosition = galleryImages.length - imagesPerView;
        return prev >= maxPosition ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, galleryImages.length, imagesPerView]);

  const slideLeft = () => {
    setIsAutoPlaying(false);
    setSliderPosition((prev) => Math.max(0, prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const slideRight = () => {
    setIsAutoPlaying(false);
    const maxPosition = galleryImages.length - imagesPerView;
    setSliderPosition((prev) => Math.min(maxPosition, prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      titleKo: "AI 퍼스널컬러 진단",
      titleEn: "AI Personal Color Analysis",
      descKo: "딥러닝 기반 정밀 피부톤 분석으로 나만의 퍼스널컬러를 찾아드립니다",
      descEn: "Find your personal color through deep learning-based precise skin tone analysis"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      titleKo: "4계절 분석 시스템",
      titleEn: "4-Season Analysis",
      descKo: "봄/여름/가을/겨울 세부 톤을 12가지 유형으로 상세 분류",
      descEn: "Detailed classification into 12 types across Spring/Summer/Autumn/Winter"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      titleKo: "맞춤 제품 추천",
      titleEn: "Custom Product Recommendations",
      descKo: "패션, 메이크업, 컬러렌즈까지 개인 맞춤 큐레이션",
      descEn: "Personalized curation for fashion, makeup, and color lenses"
    },
    {
      icon: <Users className="w-6 h-6" />,
      titleKo: "오프라인 이벤트 연계",
      titleEn: "Offline Event Integration",
      descKo: "팝업스토어에서 직접 체험하고 즉시 구매까지 연결",
      descEn: "Experience at pop-up stores with instant purchase connection"
    }
  ];

  const processSteps = [
    { stepKo: '얼굴 촬영', stepEn: 'Face Capture', icon: <Camera className="w-5 h-5" /> },
    { stepKo: 'AI 분석', stepEn: 'AI Analysis', icon: <Zap className="w-5 h-5" /> },
    { stepKo: '컬러 진단', stepEn: 'Color Diagnosis', icon: <Palette className="w-5 h-5" /> },
    { stepKo: '제품 추천', stepEn: 'Product Recommendation', icon: <ShoppingBag className="w-5 h-5" /> },
  ];

  const colorSeasons = [
    { nameKo: '봄 웜톤', nameEn: 'Spring Warm', color: 'from-orange-300 to-yellow-400', emoji: '🌸', descKo: '밝고 화사한', descEn: 'Bright & Vivid' },
    { nameKo: '여름 쿨톤', nameEn: 'Summer Cool', color: 'from-pink-300 to-purple-400', emoji: '🌊', descKo: '부드럽고 우아한', descEn: 'Soft & Elegant' },
    { nameKo: '가을 웜톤', nameEn: 'Autumn Warm', color: 'from-amber-400 to-orange-500', emoji: '🍂', descKo: '깊고 풍부한', descEn: 'Deep & Rich' },
    { nameKo: '겨울 쿨톤', nameEn: 'Winter Cool', color: 'from-blue-400 to-indigo-500', emoji: '❄️', descKo: '선명하고 강렬한', descEn: 'Clear & Intense' },
  ];

  const stats = [
    { valueKo: '98.5%', valueEn: '98.5%', labelKo: '분석 정확도', labelEn: 'Accuracy', icon: <Target className="w-5 h-5" /> },
    { valueKo: '30,000+', valueEn: '30K+', labelKo: '누적 진단 수', labelEn: 'Total Diagnoses', icon: <Users className="w-5 h-5" /> },
    { valueKo: '65%', valueEn: '65%', labelKo: '구매 전환율', labelEn: 'Conversion Rate', icon: <ShoppingBag className="w-5 h-5" /> },
    { valueKo: '4.9', valueEn: '4.9', labelKo: '고객 만족도', labelEn: 'Satisfaction', icon: <Star className="w-5 h-5" /> },
  ];

  return (
    <section id="wondermon" className="py-24 bg-gradient-to-b from-gray-50 via-white to-teal-50/30 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 border border-teal-200 text-teal-700 text-sm font-semibold mb-6">
            <Sparkles size={16} className="text-teal-500" />
            <span>{language === 'ko' ? 'Spotlight Technology' : 'Spotlight Technology'}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-dark mb-4">
            WONDER MON
            <span className="text-xl md:text-2xl text-primary font-semibold ml-3">× boon7shop</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'ko'
              ? 'AI 기반 퍼스널컬러 진단 플랫폼으로 K-Beauty의 미래를 경험하세요. 정확한 피부톤 분석을 통해 나만의 컬러를 찾고, 맞춤 패션과 메이크업 추천을 받아보세요.'
              : 'Experience the future of K-Beauty with our AI-driven Personal Color Analysis platform. Find your colors through accurate skin tone analysis and get customized fashion and makeup recommendations.'
            }
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                {language === 'ko' ? stat.valueKo : stat.valueEn}
              </p>
              <p className="text-sm text-gray-500 mt-1">{language === 'ko' ? stat.labelKo : stat.labelEn}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Left: Visual Section */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/wondermon-store-1.jpg"
                alt="WONDER MON 뷰티 스토어"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Play Button Overlay */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group">
                <Play size={32} className="text-teal-500 ml-1 group-hover:text-teal-600" />
              </button>

              {/* Video Label */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-dark">
                {language === 'ko' ? '체험 영상 보기' : 'Watch Demo'}
              </div>
            </div>

            {/* Floating Product Image */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/wondermon-products.jpg"
                alt="WONDER MON 제품"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Logo Badge */}
            <div className="absolute -top-6 -right-6 bg-white p-3 rounded-2xl shadow-xl">
              <img
                src="/images/wondermon-logo-mint.jpg"
                alt="WONDER MON 로고"
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* AI Badge */}
            <div className="absolute bottom-8 right-8 bg-gradient-to-br from-teal-500 to-cyan-500 text-white p-4 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm">
                  AI
                </div>
                <div>
                  <p className="text-xs opacity-80">{language === 'ko' ? '분석 정확도' : 'Accuracy'}</p>
                  <p className="text-2xl font-bold">98.5%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Section */}
          <div>
            {/* Tab Navigation */}
            <div className="flex gap-2 mb-8">
              {[
                { id: 'features', labelKo: '주요 기능', labelEn: 'Features' },
                { id: 'process', labelKo: '진단 과정', labelEn: 'Process' },
                { id: 'results', labelKo: '진단 결과', labelEn: 'Results' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'features' | 'process' | 'results')}
                  className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {language === 'ko' ? tab.labelKo : tab.labelEn}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'features' && (
              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-teal-200 transition-all group">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-dark text-lg mb-1">
                        {language === 'ko' ? feature.titleKo : feature.titleEn}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {language === 'ko' ? feature.descKo : feature.descEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'process' && (
              <div className="space-y-6">
                <p className="text-gray-600 mb-6">
                  {language === 'ko'
                    ? '간단한 4단계로 나만의 퍼스널컬러를 찾아보세요.'
                    : 'Find your personal color in 4 simple steps.'
                  }
                </p>
                <div className="relative">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4 mb-6 last:mb-0">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                          {step.icon}
                        </div>
                        {idx < processSteps.length - 1 && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-teal-400 to-teal-200"></div>
                        )}
                      </div>
                      <div className="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <span className="text-xs text-teal-500 font-bold">STEP {idx + 1}</span>
                        <p className="font-semibold text-dark">{language === 'ko' ? step.stepKo : step.stepEn}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'results' && (
              <div className="space-y-6">
                <p className="text-gray-600 mb-6">
                  {language === 'ko'
                    ? '4계절 퍼스널컬러 중 당신에게 맞는 톤을 찾아드립니다.'
                    : 'We find the tone that suits you among the 4 seasonal personal colors.'
                  }
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {colorSeasons.map((season, idx) => (
                    <div key={idx} className="relative p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${season.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                      <div className="relative">
                        <span className="text-3xl mb-2 block">{season.emoji}</span>
                        <h4 className="font-bold text-dark">{language === 'ko' ? season.nameKo : season.nameEn}</h4>
                        <p className="text-sm text-gray-500">{language === 'ko' ? season.descKo : season.descEn}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Benefits */}
            <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-dark mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-500" />
                {language === 'ko' ? '핵심 혜택' : 'Key Benefits'}
              </h4>
              <ul className="space-y-2">
                {(language === 'ko' ? [
                  "AI 딥러닝 기반 피부톤 정밀 분석",
                  "4계절 세부 톤 분류 (웜톤/쿨톤 세분화)",
                  "패션, 메이크업, 컬러렌즈 맞춤 추천"
                ] : [
                  "AI deep learning-based precise skin tone analysis",
                  "4-season detailed tone classification",
                  "Customized fashion, makeup, and lens recommendations"
                ]).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-teal-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="flex-1 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full font-bold hover:shadow-xl hover:shadow-teal-200 transition-all hover:scale-105 flex items-center justify-center gap-2">
                {language === 'ko' ? '데모 체험하기' : 'Try Demo'}
                <ArrowRight size={18} />
              </button>
              <button className="flex-1 px-8 py-4 border-2 border-teal-500 text-teal-600 rounded-full font-bold hover:bg-teal-50 transition-colors">
                {language === 'ko' ? '파트너십 문의' : 'Partnership Inquiry'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Gallery - Auto-sliding Carousel */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-dark">
              {language === 'ko' ? '오프라인 체험 현장' : 'Offline Experience Gallery'}
            </h3>
            <div className="flex items-center gap-2">
              {/* Auto-play indicator */}
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-teal-500 animate-pulse' : 'bg-gray-300'}`}></div>
              <span className="text-xs text-gray-500 mr-4">
                {isAutoPlaying ? (language === 'ko' ? '자동 재생 중' : 'Auto-playing') : (language === 'ko' ? '일시정지' : 'Paused')}
              </span>
              {/* Navigation Buttons */}
              <button
                onClick={slideLeft}
                disabled={sliderPosition === 0}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={slideRight}
                disabled={sliderPosition >= galleryImages.length - imagesPerView}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Slider Container - Full Width Edge to Edge */}
          <div className="relative overflow-hidden -mx-6" ref={sliderRef}>
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${sliderPosition * (100 / imagesPerView)}%)` }}
            >
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img.src)}
                  className="relative flex-shrink-0 w-1/2 md:w-1/4 aspect-[4/3] overflow-hidden group cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={language === 'ko' ? img.titleKo : img.titleEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-sm">
                        {language === 'ko' ? img.titleKo : img.titleEn}
                      </p>
                      <p className="text-white/70 text-xs mt-1">
                        {language === 'ko' ? '클릭하여 확대' : 'Click to enlarge'}
                      </p>
                    </div>
                  </div>
                  {/* Zoom Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <Sparkles size={14} className="text-teal-500" />
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-1.5 mt-6 px-6">
              {Array.from({ length: galleryImages.length - imagesPerView + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setSliderPosition(idx);
                    setTimeout(() => setIsAutoPlaying(true), 5000);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === sliderPosition
                      ? 'w-8 bg-gradient-to-r from-teal-500 to-cyan-500'
                      : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Image Count */}
          <p className="text-center text-gray-400 text-sm mt-4">
            {sliderPosition + 1} - {Math.min(sliderPosition + imagesPerView, galleryImages.length)} / {galleryImages.length} {language === 'ko' ? '장' : 'images'}
          </p>
        </div>

      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <X size={24} />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIdx = galleryImages.findIndex(img => img.src === selectedImage);
              const prevIdx = currentIdx > 0 ? currentIdx - 1 : galleryImages.length - 1;
              setSelectedImage(galleryImages[prevIdx].src);
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIdx = galleryImages.findIndex(img => img.src === selectedImage);
              const nextIdx = currentIdx < galleryImages.length - 1 ? currentIdx + 1 : 0;
              setSelectedImage(galleryImages[nextIdx].src);
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gallery Full View"
              className="w-full h-full object-contain"
            />
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-bold text-lg">
                {language === 'ko'
                  ? galleryImages.find(img => img.src === selectedImage)?.titleKo
                  : galleryImages.find(img => img.src === selectedImage)?.titleEn
                }
              </p>
              <p className="text-white/60 text-sm mt-1">
                {galleryImages.findIndex(img => img.src === selectedImage) + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(img.src);
                }}
                className={`w-16 h-12 rounded-lg overflow-hidden transition-all ${
                  selectedImage === img.src
                    ? 'ring-2 ring-teal-500 ring-offset-2 ring-offset-black scale-110'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={img.src}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
