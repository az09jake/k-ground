import React from 'react';
import { Globe2, MapPin, Users, Building2, Truck, X, Calendar, Target, TrendingUp, CheckCircle2, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type LangText = { ko: string; en: string; ja: string; zh: string; th: string };
type LangTextArray = { ko: string[]; en: string[]; ja: string[]; zh: string[]; th: string[] };

interface CountryDetail {
  name: LangText;
  flag: string;
  status: LangText;
  desc: LangText;
  active: boolean;
  // Extended details for modal
  entity?: LangText;
  focus?: LangTextArray;
  achievements?: LangTextArray;
  yearEstablished?: string;
  popupCount?: number;
  partnerCount?: number;
}

export const GlobalNetwork: React.FC = () => {
  const { language, getText } = useLanguage();
  const [selectedCountry, setSelectedCountry] = React.useState<CountryDetail | null>(null);

  // UI texts
  const texts = {
    title: { ko: '글로벌 네트워크', en: 'Global Network', ja: 'グローバルネットワーク', zh: '全球网络', th: 'เครือข่ายทั่วโลก' },
    subtitle: { ko: '아시아 핵심 시장을 중심으로 글로벌 유통망을 확보하고 있습니다. K-Culture의 세계화를 함께 만들어갑니다.', en: 'Securing global distribution channels centered on key Asian markets. Building the globalization of K-Culture together.', ja: 'アジアの主要市場を中心にグローバル流通網を確保しています。K-Cultureのグローバル化を共に創り上げます。', zh: '以亚洲核心市场为中心，构建全球分销网络。共同推动K-Culture的全球化发展。', th: 'สร้างเครือข่ายการจัดจำหน่ายทั่วโลกโดยมีศูนย์กลางที่ตลาดหลักในเอเชีย สร้างการขยายตัวระดับโลกของ K-Culture ไปด้วยกัน' },
    timelineTitle: { ko: '글로벌 확장 타임라인', en: 'Global Expansion Timeline', ja: 'グローバル展開タイムライン', zh: '全球扩展时间线', th: 'ไทม์ไลน์การขยายตัวทั่วโลก' },
    clickDetails: { ko: '클릭하여 상세 보기', en: 'Click for details', ja: 'クリックして詳細を見る', zh: '点击查看详情', th: 'คลิกดูรายละเอียด' },
    capabilitiesTitle: { ko: '글로벌 운영 역량', en: 'Global Operational Capabilities', ja: 'グローバル運営能力', zh: '全球运营能力', th: 'ความสามารถในการดำเนินงานทั่วโลก' },
    partnerCountries: { ko: '파트너 국가', en: 'Partner Countries', ja: 'パートナー国', zh: '合作国家', th: 'ประเทศพันธมิตร' },
    localPartners: { ko: '현지 파트너사', en: 'Local Partners', ja: '現地パートナー', zh: '本地合作伙伴', th: 'พันธมิตรท้องถิ่น' },
    popupEvents: { ko: '팝업 운영 횟수', en: 'Pop-up Events', ja: 'ポップアップ開催数', zh: '快闪活动次数', th: 'กิจกรรมป๊อปอัพ' },
    globalVisitors: { ko: '글로벌 방문객', en: 'Global Visitors', ja: 'グローバル来場者', zh: '全球访客', th: 'ผู้เยี่ยมชมทั่วโลก' },
    localEntity: { ko: '현지 법인', en: 'Local Entity', ja: '現地法人', zh: '当地法人', th: 'นิติบุคคลท้องถิ่น' },
    estYear: { ko: '진출 연도', en: 'Est. Year', ja: '設立年', zh: '成立年份', th: 'ปีที่ก่อตั้ง' },
    popups: { ko: '팝업 횟수', en: 'Popups', ja: 'ポップアップ', zh: '快闪次数', th: 'ป๊อปอัพ' },
    partners: { ko: '파트너', en: 'Partners', ja: 'パートナー', zh: '合作伙伴', th: 'พันธมิตร' },
    focusAreas: { ko: '주력 분야', en: 'Focus Areas', ja: '注力分野', zh: '重点领域', th: 'พื้นที่เป้าหมาย' },
    keyAchievements: { ko: '주요 성과', en: 'Key Achievements', ja: '主要実績', zh: '主要成就', th: 'ผลงานสำคัญ' },
    inquirePartnership: { ko: '파트너십 문의하기', en: 'Inquire Partnership', ja: 'パートナーシップのお問い合わせ', zh: '咨询合作', th: 'สอบถามความร่วมมือ' },
  };

  // Market interest question template
  const getMarketInterestText = (countryName: string) => ({
    ko: `${countryName} 시장 진출에 관심이 있으신가요?`,
    en: `Interested in entering the ${countryName} market?`,
    ja: `${countryName}市場への進出にご興味がありますか？`,
    zh: `对进入${countryName}市场感兴趣吗？`,
    th: `สนใจเข้าสู่ตลาด${countryName}หรือไม่?`
  });

  const countries: CountryDetail[] = [
    {
      name: { ko: '일본', en: 'Japan', ja: '日本', zh: '日本', th: 'ญี่ปุ่น' },
      flag: '🇯🇵',
      status: { ko: '핵심 거점', en: 'Core Hub', ja: 'コアハブ', zh: '核心枢纽', th: 'ศูนย์กลางหลัก' },
      desc: { ko: '도쿄, 오사카 팝업 운영', en: 'Tokyo, Osaka pop-up operations', ja: '東京・大阪ポップアップ運営', zh: '东京、大阪快闪店运营', th: 'ป๊อปอัพโตเกียว โอซาก้า' },
      active: true,
      entity: { ko: 'MAIN BASE Entertainment / CONTENTS SEVEN', en: 'MAIN BASE Entertainment / CONTENTS SEVEN', ja: 'MAIN BASE Entertainment / CONTENTS SEVEN', zh: 'MAIN BASE Entertainment / CONTENTS SEVEN', th: 'MAIN BASE Entertainment / CONTENTS SEVEN' },
      focus: {
        ko: ['J-Pop × K-Pop 크로스오버', '현지화 콘텐츠 제작', '팝업스토어 운영', '유통 파트너십'],
        en: ['J-Pop × K-Pop crossover', 'Localized content creation', 'Popup store operations', 'Distribution partnerships'],
        ja: ['J-Pop × K-Pop クロスオーバー', 'ローカライズコンテンツ制作', 'ポップアップストア運営', '流通パートナーシップ'],
        zh: ['J-Pop × K-Pop跨界合作', '本地化内容制作', '快闪店运营', '分销合作'],
        th: ['J-Pop × K-Pop ครอสโอเวอร์', 'สร้างคอนเทนต์ท้องถิ่น', 'ดำเนินการป๊อปอัพสโตร์', 'พันธมิตรการจัดจำหน่าย']
      },
      achievements: {
        ko: ['도쿄 하라주쿠 팝업 10회+', '오사카 난바 상설 체험존', '현지 인플루언서 50+ 협업'],
        en: ['10+ Tokyo Harajuku popups', 'Osaka Namba permanent zone', '50+ local influencer collabs'],
        ja: ['東京原宿ポップアップ10回以上', '大阪難波常設体験ゾーン', '現地インフルエンサー50人以上とコラボ'],
        zh: ['东京原宿快闪店10次以上', '大阪难波常设体验区', '与50+本地网红合作'],
        th: ['ป๊อปอัพโตเกียวฮาราจูกุ 10+ ครั้ง', 'โซนถาวรโอซาก้านัมบะ', 'ร่วมงานกับอินฟลูเอนเซอร์ท้องถิ่น 50+ คน']
      },
      yearEstablished: '2023',
      popupCount: 15,
      partnerCount: 8
    },
    {
      name: { ko: '필리핀', en: 'Philippines', ja: 'フィリピン', zh: '菲律宾', th: 'ฟิลิปปินส์' },
      flag: '🇵🇭',
      status: { ko: '확장 중', en: 'Expanding', ja: '拡大中', zh: '扩展中', th: 'กำลังขยาย' },
      desc: { ko: '마닐라 파트너십 구축', en: 'Manila partnership building', ja: 'マニラパートナーシップ構築', zh: '马尼拉合作关系建立', th: 'สร้างพันธมิตรมะนิลา' },
      active: true,
      focus: {
        ko: ['K-Beauty 중심 전개', '로컬 인플루언서 네트워크', '쇼핑몰 파트너십'],
        en: ['K-Beauty focused expansion', 'Local influencer network', 'Mall partnerships'],
        ja: ['K-Beauty中心の展開', 'ローカルインフルエンサーネットワーク', 'ショッピングモールパートナーシップ'],
        zh: ['以K-Beauty为中心扩展', '本地网红网络', '商场合作'],
        th: ['ขยาย K-Beauty เป็นหลัก', 'เครือข่ายอินฟลูเอนเซอร์ท้องถิ่น', 'พันธมิตรห้างสรรพสินค้า']
      },
      achievements: {
        ko: ['마닐라 SM Mall 입점 협의중', 'K-Beauty 팝업 3회'],
        en: ['SM Mall Manila entry in discussion', '3 K-Beauty popups'],
        ja: ['マニラSM Mall出店協議中', 'K-Beautyポップアップ3回'],
        zh: ['马尼拉SM Mall入驻洽谈中', 'K-Beauty快闪店3次'],
        th: ['กำลังเจรจาเข้า SM Mall มะนิลา', 'ป๊อปอัพ K-Beauty 3 ครั้ง']
      },
      yearEstablished: '2024',
      popupCount: 3,
      partnerCount: 4
    },
    {
      name: { ko: '몽골', en: 'Mongolia', ja: 'モンゴル', zh: '蒙古', th: 'มองโกเลีย' },
      flag: '🇲🇳',
      status: { ko: '파트너십', en: 'Partnership', ja: 'パートナーシップ', zh: '合作中', th: 'พันธมิตร' },
      desc: { ko: '울란바토르 유통망', en: 'Ulaanbaatar distribution', ja: 'ウランバートル流通網', zh: '乌兰巴托分销网络', th: 'เครือข่ายจัดจำหน่ายอูลานบาตอร์' },
      active: true,
      focus: {
        ko: ['K-Food 유통', '현지 리테일 파트너십', 'K-Culture 이벤트'],
        en: ['K-Food distribution', 'Local retail partnerships', 'K-Culture events'],
        ja: ['K-Food流通', '現地リテールパートナーシップ', 'K-Cultureイベント'],
        zh: ['K-Food分销', '本地零售合作', 'K-Culture活动'],
        th: ['จัดจำหน่าย K-Food', 'พันธมิตรค้าปลีกท้องถิ่น', 'กิจกรรม K-Culture']
      },
      achievements: {
        ko: ['꼬리랑 라면 현지 유통', '울란바토르 K-Food 페스티벌 참가'],
        en: ['Kkolirang ramen local distribution', 'Ulaanbaatar K-Food Festival participation'],
        ja: ['コリラン ラーメン現地流通', 'ウランバートルK-Foodフェスティバル参加'],
        zh: ['Kkolirang拉面本地分销', '参加乌兰巴托K-Food节'],
        th: ['จัดจำหน่ายราเมน Kkolirang ในท้องถิ่น', 'เข้าร่วมเทศกาล K-Food อูลานบาตอร์']
      },
      yearEstablished: '2024',
      popupCount: 2,
      partnerCount: 3
    },
    {
      name: { ko: '우즈베키스탄', en: 'Uzbekistan', ja: 'ウズベキスタン', zh: '乌兹别克斯坦', th: 'อุซเบกิสถาน' },
      flag: '🇺🇿',
      status: { ko: '신규', en: 'New', ja: '新規', zh: '新市场', th: 'ใหม่' },
      desc: { ko: '타슈켄트 진출 예정', en: 'Tashkent entry planned', ja: 'タシュケント進出予定', zh: '计划进入塔什干', th: 'วางแผนเข้าทาชเคนต์' },
      active: false,
      focus: {
        ko: ['K-Beauty 시장 조사', 'K-Food 유통망 구축', '로컬 파트너 발굴'],
        en: ['K-Beauty market research', 'K-Food distribution setup', 'Local partner discovery'],
        ja: ['K-Beauty市場調査', 'K-Food流通網構築', 'ローカルパートナー発掘'],
        zh: ['K-Beauty市场调研', 'K-Food分销网络建设', '寻找本地合作伙伴'],
        th: ['วิจัยตลาด K-Beauty', 'สร้างเครือข่ายจัดจำหน่าย K-Food', 'ค้นหาพันธมิตรท้องถิ่น']
      },
      yearEstablished: '2025'
    },
    {
      name: { ko: '인도', en: 'India', ja: 'インド', zh: '印度', th: 'อินเดีย' },
      flag: '🇮🇳',
      status: { ko: '계획', en: 'Planned', ja: '計画中', zh: '计划中', th: 'วางแผน' },
      desc: { ko: '뭄바이 시장 조사', en: 'Mumbai market research', ja: 'ムンバイ市場調査', zh: '孟买市场调研', th: 'วิจัยตลาดมุมไบ' },
      active: false,
      focus: {
        ko: ['대규모 시장 진출 전략', 'K-Culture 페스티벌 기획', '온라인 커머스 연계'],
        en: ['Large market entry strategy', 'K-Culture festival planning', 'Online commerce integration'],
        ja: ['大規模市場進出戦略', 'K-Cultureフェスティバル企画', 'オンラインコマース連携'],
        zh: ['大型市场进入策略', 'K-Culture节庆策划', '在线商务整合'],
        th: ['กลยุทธ์เข้าตลาดขนาดใหญ่', 'วางแผนเทศกาล K-Culture', 'เชื่อมต่อ E-commerce']
      },
      yearEstablished: '2025'
    },
  ];

  // Timeline data
  const timeline = [
    { year: '2022', event: { ko: 'K-GROUND 설립', en: 'K-GROUND Founded', ja: 'K-GROUND設立', zh: 'K-GROUND成立', th: 'ก่อตั้ง K-GROUND' }, status: 'completed' },
    { year: '2023', event: { ko: '일본 법인 설립 (MAIN BASE Entertainment)', en: 'Japan subsidiary established', ja: '日本法人設立（MAIN BASE Entertainment）', zh: '日本子公司成立', th: 'จัดตั้งบริษัทย่อยในญี่ปุ่น' }, status: 'completed' },
    { year: '2024', event: { ko: '필리핀, 몽골 시장 진출', en: 'Philippines, Mongolia market entry', ja: 'フィリピン・モンゴル市場進出', zh: '进入菲律宾、蒙古市场', th: 'เข้าสู่ตลาดฟิลิปปินส์และมองโกเลีย' }, status: 'completed' },
    { year: '2025', event: { ko: '우즈베키스탄, 인도 진출 예정', en: 'Uzbekistan, India expansion planned', ja: 'ウズベキスタン・インド進出予定', zh: '计划进入乌兹别克斯坦和印度', th: 'วางแผนขยายไปอุซเบกิสถานและอินเดีย' }, status: 'planned' },
  ];

  const capabilities = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: { ko: '로컬 파트너십', en: 'Local Partnerships', ja: 'ローカルパートナーシップ', zh: '本地合作', th: 'พันธมิตรท้องถิ่น' },
      desc: { ko: '현지 유통사, 호텔, 리테일과 협력', en: 'Collaboration with local distributors, hotels, retail', ja: '現地流通社、ホテル、リテールとの協力', zh: '与本地分销商、酒店、零售合作', th: 'ร่วมมือกับผู้จัดจำหน่าย โรงแรม ค้าปลีกในท้องถิ่น' }
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: { ko: '크로스보더 물류', en: 'Cross-border Logistics', ja: 'クロスボーダー物流', zh: '跨境物流', th: 'โลจิสติกส์ข้ามพรมแดน' },
      desc: { ko: '원활한 국제 배송 및 통관', en: 'Smooth international shipping & customs', ja: 'スムーズな国際配送と通関', zh: '顺畅的国际运输和清关', th: 'การขนส่งระหว่างประเทศและศุลกากรที่ราบรื่น' }
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: { ko: '현지화 마케팅', en: 'Localized Marketing', ja: 'ローカライズマーケティング', zh: '本地化营销', th: 'การตลาดท้องถิ่น' },
      desc: { ko: '타겟 시장 맞춤 콘텐츠 제작', en: 'Target market customized content creation', ja: 'ターゲット市場向けカスタムコンテンツ制作', zh: '针对目标市场的定制内容制作', th: 'สร้างคอนเทนต์เฉพาะตลาดเป้าหมาย' }
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: { ko: '팝업 네트워크', en: 'Pop-up Network', ja: 'ポップアップネットワーク', zh: '快闪网络', th: 'เครือข่ายป๊อปอัพ' },
      desc: { ko: '검증된 오프라인 체험 공간', en: 'Verified offline experience spaces', ja: '検証済みオフライン体験スペース', zh: '经过验证的线下体验空间', th: 'พื้นที่ประสบการณ์ออฟไลน์ที่ผ่านการตรวจสอบ' }
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
            {getText(texts.title)}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {getText(texts.subtitle)}
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">
            {getText(texts.timelineTitle)}
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
                      {getText(item.event)}
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
                {getText(country.name)}
              </h3>

              {/* Status Badge */}
              <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold mb-2 ${
                country.active ? 'bg-primary/20 text-primary' : 'bg-gray-500/20 text-gray-400'
              }`}>
                {getText(country.status)}
              </span>

              {/* Description */}
              <p className="text-gray-500 text-sm">
                {getText(country.desc)}
              </p>

              {/* Click for details hint */}
              <p className="text-xs text-primary/60 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                {getText(texts.clickDetails)}
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
            {getText(texts.capabilitiesTitle)}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {cap.icon}
                </div>
                <h4 className="font-bold text-white mb-2">
                  {getText(cap.title)}
                </h4>
                <p className="text-gray-500 text-sm">
                  {getText(cap.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">5+</p>
            <p className="text-gray-500 mt-2">{getText(texts.partnerCountries)}</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">20+</p>
            <p className="text-gray-500 mt-2">{getText(texts.localPartners)}</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">50+</p>
            <p className="text-gray-500 mt-2">{getText(texts.popupEvents)}</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">1M+</p>
            <p className="text-gray-500 mt-2">{getText(texts.globalVisitors)}</p>
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
                    {getText(selectedCountry.name)}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    selectedCountry.active ? 'bg-primary/20 text-primary' : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {getText(selectedCountry.status)}
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
              {selectedCountry.entity && (
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 size={18} className="text-primary" />
                    <span className="text-sm font-semibold text-gray-400">
                      {getText(texts.localEntity)}
                    </span>
                  </div>
                  <p className="text-white font-semibold">
                    {getText(selectedCountry.entity)}
                  </p>
                </div>
              )}

              {/* Stats Row */}
              {selectedCountry.active && (
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-primary/10 rounded-xl p-4 text-center border border-primary/20">
                    <Calendar size={20} className="text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{selectedCountry.yearEstablished}</p>
                    <p className="text-xs text-gray-400">{getText(texts.estYear)}</p>
                  </div>
                  {selectedCountry.popupCount && (
                    <div className="bg-secondary/10 rounded-xl p-4 text-center border border-secondary/20">
                      <Target size={20} className="text-secondary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-white">{selectedCountry.popupCount}+</p>
                      <p className="text-xs text-gray-400">{getText(texts.popups)}</p>
                    </div>
                  )}
                  {selectedCountry.partnerCount && (
                    <div className="bg-accent/10 rounded-xl p-4 text-center border border-accent/20">
                      <Users size={20} className="text-accent mx-auto mb-2" />
                      <p className="text-2xl font-bold text-white">{selectedCountry.partnerCount}+</p>
                      <p className="text-xs text-gray-400">{getText(texts.partners)}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Focus Areas */}
              {selectedCountry.focus && (
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Target size={18} className="text-primary" />
                    {getText(texts.focusAreas)}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(selectedCountry.focus[language] || selectedCountry.focus.en)?.map((focus, idx) => (
                      <span key={idx} className="px-4 py-2 bg-white/10 rounded-full text-sm text-white border border-white/10">
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {selectedCountry.achievements && (
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <TrendingUp size={18} className="text-primary" />
                    {getText(texts.keyAchievements)}
                  </h4>
                  <ul className="space-y-2">
                    {(selectedCountry.achievements[language] || selectedCountry.achievements.en)?.map((achievement, idx) => (
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
                  {getText(getMarketInterestText(getText(selectedCountry.name)))}
                </p>
                <a
                  href="#cta"
                  onClick={() => setSelectedCountry(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:scale-105 transition-transform"
                >
                  {getText(texts.inquirePartnership)}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
