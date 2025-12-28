import React, { useState } from 'react';
import { ArrowRight, MapPin, Calendar, Users, TrendingUp, ChevronLeft, ChevronRight, X, Quote, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CaseStudy {
  id: string;
  titleKo: string;
  titleEn: string;
  locationKo: string;
  locationEn: string;
  date: string;
  image: string;
  categoryKo: string;
  categoryEn: string;
  category: 'K-FOOD' | 'K-FASHION' | 'K-BEAUTY' | 'K-CONTENTS';
  descriptionKo: string;
  descriptionEn: string;
  highlightsKo: string[];
  highlightsEn: string[];
  statsKo: { label: string; value: string }[];
  statsEn: { label: string; value: string }[];
  color: string;
  // Extended details
  partnerKo?: string;
  partnerEn?: string;
  testimonialKo?: string;
  testimonialEn?: string;
  testimonialAuthorKo?: string;
  testimonialAuthorEn?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'kfood-popup',
    titleKo: '꼬리랑 × K-Ground 라면 팝업스토어',
    titleEn: 'Kkolirang × K-Ground Ramen Pop-up Store',
    locationKo: '도쿄 / 오사카',
    locationEn: 'Tokyo / Osaka',
    date: '2024',
    image: '/images/kfood-popup-1.jpg',
    categoryKo: 'K-FOOD',
    categoryEn: 'K-FOOD',
    category: 'K-FOOD',
    descriptionKo: '파도치기면, 옥수수면 등 한국 인기 라면 브랜드와 협업하여 일본 현지에서 K-라면 체험존을 운영. 실시간 조리 체험과 함께 한정판 굿즈 판매를 진행했습니다.',
    descriptionEn: 'Operated K-ramen experience zones in Japan in collaboration with popular Korean ramen brands like Padochigi and Corn Ramen. Conducted real-time cooking experiences and limited edition goods sales.',
    highlightsKo: ['코랭이 마스코트 캐릭터 런칭', '실시간 라면 조리 체험', '한정판 콜라보 굿즈', '자판기 스타일 인터랙티브 존'],
    highlightsEn: ['Korangi Mascot Character Launch', 'Real-time Ramen Cooking Experience', 'Limited Edition Collab Goods', 'Vending Machine Style Interactive Zone'],
    statsKo: [
      { label: '방문객', value: '15,000+' },
      { label: '굿즈 판매', value: '95%' },
      { label: '재방문율', value: '40%' }
    ],
    statsEn: [
      { label: 'Visitors', value: '15,000+' },
      { label: 'Goods Sold', value: '95%' },
      { label: 'Return Rate', value: '40%' }
    ],
    color: 'from-orange-500 to-red-500',
    partnerKo: '꼬리랑 (KKOLIRANG)',
    partnerEn: 'Kkolirang',
    testimonialKo: 'K-GROUND와의 협업을 통해 일본 시장에서 우리 브랜드의 인지도를 크게 높일 수 있었습니다. 특히 팝업스토어의 체험형 콘텐츠가 현지 고객들에게 큰 호응을 얻었습니다.',
    testimonialEn: 'Through collaboration with K-GROUND, we were able to significantly increase our brand awareness in the Japanese market. The experiential content of the popup store was particularly well-received by local customers.',
    testimonialAuthorKo: '꼬리랑 마케팅팀',
    testimonialAuthorEn: 'Kkolirang Marketing Team'
  },
  {
    id: 'celeb-popup',
    titleKo: '여진구 "Trace of Light" 팝업스토어',
    titleEn: 'Yeo Jin-goo "Trace of Light" Pop-up Store',
    locationKo: '도쿄',
    locationEn: 'Tokyo',
    date: '2025',
    image: '/images/celeb-popup-1.jpg',
    categoryKo: 'K-CONTENTS',
    categoryEn: 'K-CONTENTS',
    category: 'K-CONTENTS',
    descriptionKo: '배우 여진구의 일본 팬미팅 연계 팝업스토어. 사진집, 굿즈, 포토존 등 팬들을 위한 다양한 체험 요소를 제공하며 K-셀럽 팬덤 마케팅의 새로운 기준을 제시했습니다.',
    descriptionEn: 'Pop-up store linked with actor Yeo Jin-goo\'s Japanese fan meeting. Provided various experience elements for fans including photobooks, goods, and photo zones, setting new standards for K-celeb fandom marketing.',
    highlightsKo: ['ARISE GLOBAL 협업', '한정판 포토북 판매', '팬 사인회 연계', '실물 크기 포토존'],
    highlightsEn: ['ARISE GLOBAL Collaboration', 'Limited Edition Photobook Sales', 'Fan Sign Event Integration', 'Life-size Photo Zone'],
    statsKo: [
      { label: '팬 참여', value: '5,000+' },
      { label: '굿즈 완판', value: '100%' },
      { label: 'SNS 노출', value: '2M+' }
    ],
    statsEn: [
      { label: 'Fan Attendance', value: '5,000+' },
      { label: 'Goods Sold Out', value: '100%' },
      { label: 'SNS Reach', value: '2M+' }
    ],
    color: 'from-blue-500 to-indigo-500',
    partnerKo: 'ARISE GLOBAL',
    partnerEn: 'ARISE GLOBAL',
    testimonialKo: '팬미팅과 연계한 팝업스토어는 팬들에게 특별한 경험을 선사했습니다. K-GROUND의 전문적인 기획력과 운영 노하우가 성공의 핵심이었습니다.',
    testimonialEn: 'The popup store linked with the fan meeting provided fans with a special experience. K-GROUND\'s professional planning and operational know-how were key to its success.',
    testimonialAuthorKo: 'ARISE GLOBAL 대표',
    testimonialAuthorEn: 'ARISE GLOBAL CEO'
  },
  {
    id: 'wondermon-beauty',
    titleKo: 'WONDER MON × boon7shop 뷰티 체험존',
    titleEn: 'WONDER MON × boon7shop Beauty Experience Zone',
    locationKo: '서울 / 도쿄',
    locationEn: 'Seoul / Tokyo',
    date: '2024-2025',
    image: '/images/wondermon-store-1.jpg',
    categoryKo: 'K-BEAUTY',
    categoryEn: 'K-BEAUTY',
    category: 'K-BEAUTY',
    descriptionKo: 'AI 퍼스널컬러 진단 기술을 활용한 K-뷰티 체험존. 방문객은 자신의 퍼스널컬러를 진단받고 맞춤형 화장품과 패션 아이템을 추천받을 수 있습니다.',
    descriptionEn: 'K-Beauty experience zone utilizing AI personal color diagnosis technology. Visitors can receive their personal color diagnosis and get customized cosmetics and fashion item recommendations.',
    highlightsKo: ['AI 퍼스널컬러 진단', '맞춤 메이크업 체험', '호랑이 마스코트 굿즈', '4계절 컬러 분석'],
    highlightsEn: ['AI Personal Color Diagnosis', 'Custom Makeup Experience', 'Tiger Mascot Goods', '4-Season Color Analysis'],
    statsKo: [
      { label: '진단 횟수', value: '30,000+' },
      { label: '정확도', value: '98.5%' },
      { label: '구매 전환', value: '65%' }
    ],
    statsEn: [
      { label: 'Diagnoses', value: '30,000+' },
      { label: 'Accuracy', value: '98.5%' },
      { label: 'Conversion', value: '65%' }
    ],
    color: 'from-teal-500 to-cyan-500',
    partnerKo: 'WONDER MON / boon7shop',
    partnerEn: 'WONDER MON / boon7shop',
    testimonialKo: 'AI 퍼스널컬러 진단 서비스는 단순 체험을 넘어 실제 구매 전환으로 이어지는 강력한 마케팅 도구가 되었습니다.',
    testimonialEn: 'The AI personal color diagnosis service has become a powerful marketing tool that goes beyond simple experiences to actual purchase conversion.',
    testimonialAuthorKo: 'WONDER MON 개발팀',
    testimonialAuthorEn: 'WONDER MON Dev Team'
  },
  {
    id: 'christmas-event',
    titleKo: '코랭이 크리스마스 스페셜 이벤트',
    titleEn: 'Korangi Christmas Special Event',
    locationKo: '서울',
    locationEn: 'Seoul',
    date: '2024',
    image: '/images/korangi-christmas.jpg',
    categoryKo: 'K-FOOD',
    categoryEn: 'K-FOOD',
    category: 'K-FOOD',
    descriptionKo: '크리스마스 시즌을 맞아 코랭이 캐릭터와 함께하는 특별 이벤트. 한정판 시즌 굿즈와 함께 겨울 한정 메뉴를 선보였습니다.',
    descriptionEn: 'Special event with Korangi character for the Christmas season. Presented limited edition seasonal goods along with winter-only menu items.',
    highlightsKo: ['크리스마스 한정 굿즈', '겨울 시즌 메뉴', '포토존 이벤트', 'SNS 이벤트'],
    highlightsEn: ['Christmas Limited Goods', 'Winter Season Menu', 'Photo Zone Event', 'SNS Event'],
    statsKo: [
      { label: '방문객', value: '8,000+' },
      { label: 'SNS 참여', value: '15K+' },
      { label: '시즌 매출', value: '+180%' }
    ],
    statsEn: [
      { label: 'Visitors', value: '8,000+' },
      { label: 'SNS Engagement', value: '15K+' },
      { label: 'Season Sales', value: '+180%' }
    ],
    color: 'from-red-500 to-green-500'
  },
  {
    id: 'fashion-popup',
    titleKo: 'O!Oi × SCULPTOR 패션 팝업',
    titleEn: 'O!Oi × SCULPTOR Fashion Pop-up',
    locationKo: '도쿄 하라주쿠',
    locationEn: 'Tokyo Harajuku',
    date: '2024',
    image: '/images/event-1.jpg',
    categoryKo: 'K-FASHION',
    categoryEn: 'K-FASHION',
    category: 'K-FASHION',
    descriptionKo: '한국 대표 스트릿 패션 브랜드 O!Oi와 SCULPTOR의 콜라보레이션 팝업. 일본 MZ세대를 타겟으로 한 트렌디한 K-패션 체험 공간을 선보였습니다.',
    descriptionEn: 'Collaboration popup of leading Korean street fashion brands O!Oi and SCULPTOR. Presented trendy K-Fashion experience space targeting Japanese Gen MZ.',
    highlightsKo: ['콜라보 한정판 출시', '스타일링 컨설팅', '인플루언서 협업', '라이브 DJ 이벤트'],
    highlightsEn: ['Limited Collab Release', 'Styling Consulting', 'Influencer Collaboration', 'Live DJ Event'],
    statsKo: [
      { label: '방문객', value: '12,000+' },
      { label: '한정판 완판', value: '100%' },
      { label: '미디어 노출', value: '50+' }
    ],
    statsEn: [
      { label: 'Visitors', value: '12,000+' },
      { label: 'Limited Ed. Sold', value: '100%' },
      { label: 'Media Coverage', value: '50+' }
    ],
    color: 'from-purple-500 to-pink-500'
  }
];

// Category filter options
const categories = [
  { id: 'all', labelKo: '전체', labelEn: 'All' },
  { id: 'K-FOOD', labelKo: 'K-FOOD', labelEn: 'K-FOOD' },
  { id: 'K-FASHION', labelKo: 'K-FASHION', labelEn: 'K-FASHION' },
  { id: 'K-BEAUTY', labelKo: 'K-BEAUTY', labelEn: 'K-BEAUTY' },
  { id: 'K-CONTENTS', labelKo: 'K-CONTENTS', labelEn: 'K-CONTENTS' },
];

export const CaseStudies: React.FC = () => {
  const { language, getText } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const texts = {
    badge: { ko: '포트폴리오', en: 'Portfolio', ja: 'ポートフォリオ', zh: '作品集', th: 'ผลงาน' },
    title: { ko: '성공 사례', en: 'Case Studies', ja: '成功事例', zh: '成功案例', th: 'กรณีศึกษา' },
    subtitle: {
      ko: 'K-GROUND가 성공적으로 진행한 글로벌 팝업스토어와 체험 이벤트를 확인하세요.',
      en: 'Explore the global pop-up stores and experience events successfully executed by K-GROUND.',
      ja: 'K-GROUNDが成功裏に実施したグローバルポップアップストアと体験イベントをご覧ください。',
      zh: '探索K-GROUND成功举办的全球快闪店和体验活动。',
      th: 'สำรวจป๊อปอัพสโตร์และอีเวนต์ประสบการณ์ระดับโลกที่ K-GROUND ดำเนินการสำเร็จ'
    },
    all: { ko: '전체', en: 'All', ja: 'すべて', zh: '全部', th: 'ทั้งหมด' },
    keyHighlights: { ko: '주요 하이라이트', en: 'Key Highlights', ja: '主なハイライト', zh: '主要亮点', th: 'ไฮไลท์หลัก' },
    viewDetails: { ko: '상세 보기', en: 'View Details', ja: '詳細を見る', zh: '查看详情', th: 'ดูรายละเอียด' },
    cases: { ko: '사례', en: 'cases', ja: '事例', zh: '案例', th: 'กรณี' },
    customProposal: {
      ko: '귀사의 프로젝트에 맞는 맞춤형 제안을 받아보세요',
      en: 'Get a customized proposal for your project',
      ja: '貴社のプロジェクトに合ったカスタム提案を受け取りましょう',
      zh: '为您的项目获取定制提案',
      th: 'รับข้อเสนอที่ปรับแต่งสำหรับโครงการของคุณ'
    },
    downloadProposal: { ko: '제안서 다운로드', en: 'Download Proposal', ja: '提案書ダウンロード', zh: '下载提案', th: 'ดาวน์โหลดข้อเสนอ' },
    totalProjects: { ko: '총 프로젝트', en: 'Total Projects', ja: '総プロジェクト', zh: '总项目', th: 'โครงการทั้งหมด' },
    totalVisitors: { ko: '누적 방문객', en: 'Total Visitors', ja: '累計訪問者', zh: '累计访客', th: 'ผู้เข้าชมทั้งหมด' },
    clientSatisfaction: { ko: '고객 만족도', en: 'Client Satisfaction', ja: '顧客満足度', zh: '客户满意度', th: 'ความพึงพอใจลูกค้า' },
    countries: { ko: '운영 국가', en: 'Countries', ja: '運営国', zh: '运营国家', th: 'ประเทศ' },
    partner: { ko: '파트너', en: 'Partner', ja: 'パートナー', zh: '合作伙伴', th: 'พันธมิตร' },
    inquireSimilar: { ko: '이런 프로젝트 문의하기', en: 'Inquire Similar Project', ja: '類似プロジェクトお問い合わせ', zh: '咨询类似项目', th: 'สอบถามโครงการคล้ายกัน' },
    close: { ko: '닫기', en: 'Close', ja: '閉じる', zh: '关闭', th: 'ปิด' }
  };

  // Filter cases by category
  const filteredCases = selectedCategory === 'all'
    ? caseStudies
    : caseStudies.filter(c => c.category === selectedCategory);

  // Reset index when filter changes
  React.useEffect(() => {
    setActiveIndex(0);
  }, [selectedCategory]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % filteredCases.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + filteredCases.length) % filteredCases.length);
  };

  const activeCase = filteredCases[activeIndex];

  return (
    <section id="cases" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            {getText(texts.badge)}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-dark">
            {getText(texts.title)}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            {getText(texts.subtitle)}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.id === 'all' ? getText(texts.all) : cat.labelEn}
              {cat.id !== 'all' && (
                <span className="ml-2 text-xs opacity-70">
                  ({caseStudies.filter(c => c.category === cat.id).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Case Study Slider */}
        <div className="relative">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src={activeCase.image}
                  alt={language === 'ko' ? activeCase.titleKo : activeCase.titleEn}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${activeCase.color} opacity-30 mix-blend-multiply`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-2 bg-gradient-to-r ${activeCase.color} text-white text-sm font-bold rounded-full`}>
                    {language === 'ko' ? activeCase.categoryKo : activeCase.categoryEn}
                  </span>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-4 text-sm opacity-90 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {language === 'ko' ? activeCase.locationKo : activeCase.locationEn}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {activeCase.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute -bottom-6 right-6 flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-dark text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:pl-8">
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4 font-heading">
                {language === 'ko' ? activeCase.titleKo : activeCase.titleEn}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {language === 'ko' ? activeCase.descriptionKo : activeCase.descriptionEn}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {(language === 'ko' ? activeCase.statsKo : activeCase.statsEn).map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-gray-50 rounded-xl">
                    <p className={`text-2xl font-bold bg-gradient-to-r ${activeCase.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <h4 className="font-semibold text-dark mb-3">{getText(texts.keyHighlights)}</h4>
              <ul className="space-y-2 mb-8">
                {(language === 'ko' ? activeCase.highlightsKo : activeCase.highlightsEn).map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeCase.color}`}></div>
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => setSelectedCase(activeCase)}
                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${activeCase.color} text-white rounded-full font-semibold hover:shadow-lg transition-shadow`}
              >
                {getText(texts.viewDetails)}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {filteredCases.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === activeIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Case count */}
          <p className="text-center text-gray-400 text-sm mt-4">
            {activeIndex + 1} / {filteredCases.length} {getText(texts.cases)}
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">
            {getText(texts.customProposal)}
          </p>
          <button className="px-8 py-4 bg-dark text-white rounded-full font-bold hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
            {getText(texts.downloadProposal)}
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold text-primary">{caseStudies.length}+</p>
            <p className="text-sm text-gray-500">{getText(texts.totalProjects)}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold text-primary">70K+</p>
            <p className="text-sm text-gray-500">{getText(texts.totalVisitors)}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold text-primary">98%</p>
            <p className="text-sm text-gray-500">{getText(texts.clientSatisfaction)}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold text-primary">5+</p>
            <p className="text-sm text-gray-500">{getText(texts.countries)}</p>
          </div>
        </div>
      </div>

      {/* Case Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedCase(null)}>
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-64 md:h-80">
              <img
                src={selectedCase.image}
                alt={language === 'ko' ? selectedCase.titleKo : selectedCase.titleEn}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${selectedCase.color} opacity-40 mix-blend-multiply`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X size={20} className="text-white" />
              </button>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-4 py-2 bg-gradient-to-r ${selectedCase.color} text-white text-sm font-bold rounded-full`}>
                  {language === 'ko' ? selectedCase.categoryKo : selectedCase.categoryEn}
                </span>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-4 text-sm opacity-90 mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {language === 'ko' ? selectedCase.locationKo : selectedCase.locationEn}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {selectedCase.date}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {language === 'ko' ? selectedCase.titleKo : selectedCase.titleEn}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Partner Info */}
              {selectedCase.partnerKo && (
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <p className="text-sm text-gray-500 mb-1">{getText(texts.partner)}</p>
                  <p className="font-bold text-dark">{language === 'ko' ? selectedCase.partnerKo : selectedCase.partnerEn}</p>
                </div>
              )}

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {language === 'ko' ? selectedCase.descriptionKo : selectedCase.descriptionEn}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {(language === 'ko' ? selectedCase.statsKo : selectedCase.statsEn).map((stat, idx) => (
                  <div key={idx} className={`text-center p-4 bg-gradient-to-br ${selectedCase.color} bg-opacity-10 rounded-xl`}>
                    <p className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${selectedCase.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="font-bold text-dark mb-4 text-lg">{getText(texts.keyHighlights)}</h4>
                <div className="grid grid-cols-2 gap-3">
                  {(language === 'ko' ? selectedCase.highlightsKo : selectedCase.highlightsEn).map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700 bg-gray-50 rounded-lg p-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedCase.color}`}></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {selectedCase.testimonialKo && (
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <Quote size={24} className="text-primary mb-3" />
                  <p className="text-gray-700 italic mb-4 leading-relaxed">
                    "{language === 'ko' ? selectedCase.testimonialKo : selectedCase.testimonialEn}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-600">
                      — {language === 'ko' ? selectedCase.testimonialAuthorKo : selectedCase.testimonialAuthorEn}
                    </span>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#cta"
                  onClick={() => setSelectedCase(null)}
                  className={`flex-1 px-6 py-3 bg-gradient-to-r ${selectedCase.color} text-white rounded-full font-bold text-center hover:shadow-lg transition-shadow`}
                >
                  {getText(texts.inquireSimilar)}
                </a>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="px-6 py-3 border-2 border-gray-200 text-gray-600 rounded-full font-bold hover:bg-gray-50 transition-colors"
                >
                  {getText(texts.close)}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
