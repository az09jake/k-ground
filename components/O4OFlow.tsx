import React from 'react';
import { Star, MapPin, ShoppingBag, Globe, ArrowRight, Zap, Users, TrendingUp, Shield, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const O4OFlow: React.FC = () => {
  const { getText, language } = useLanguage();

  const texts = {
    badge: { ko: '비즈니스 모델', en: 'Business Model', ja: 'ビジネスモデル', zh: '商业模式', th: 'โมเดลธุรกิจ' },
    title: { ko: 'O4O 비즈니스 플로우', en: 'O4O Business Flow', ja: 'O4Oビジネスフロー', zh: 'O4O商业流程', th: 'O4O Business Flow' },
    subtitle: {
      ko: 'Offline to Online. 오프라인 체험의 감동을 온라인 커머스로 연결하여 지속 가능한 K-Culture 소비 사이클을 만듭니다.',
      en: 'Offline to Online. Connecting offline experience emotions to online commerce for a sustainable K-Culture consumption cycle.',
      ja: 'Offline to Online。オフライン体験の感動をオンラインコマースに繋げ、持続可能なK-Culture消費サイクルを作ります。',
      zh: 'Offline to Online。将线下体验的感动连接到线上商务，创造可持续的K-Culture消费循环。',
      th: 'Offline to Online เชื่อมต่อประสบการณ์ออฟไลน์สู่อีคอมเมิร์ซออนไลน์เพื่อสร้างวงจรการบริโภค K-Culture ที่ยั่งยืน'
    },
    coreValueLabel: { ko: 'B2B 파트너를 위한 핵심 가치', en: 'Core Value for B2B Partners', ja: 'B2Bパートナーのためのコアバリュー', zh: 'B2B合作伙伴核心价值', th: 'คุณค่าหลักสำหรับพันธมิตร B2B' },
    coreValueText: {
      ko: '"오프라인 거점을 통한 온라인 판매 확대, 팬 경험 강화로 지속적 소비 유도"',
      en: '"Expanding online sales through offline bases, driving sustainable consumption through fan experiences"',
      ja: '「オフライン拠点を通じたオンライン販売拡大、ファン体験強化による持続的消費誘導」',
      zh: '"通过线下据点扩大线上销售，通过粉丝体验强化驱动持续消费"',
      th: '"ขยายยอดขายออนไลน์ผ่านฐานออฟไลน์ ขับเคลื่อนการบริโภคอย่างยั่งยืนผ่านประสบการณ์แฟน"'
    },
    benefitsTitle: { ko: 'O4O 모델의 핵심 가치', en: 'Core Values of O4O Model', ja: 'O4Oモデルのコアバリュー', zh: 'O4O模式核心价值', th: 'คุณค่าหลักของโมเดล O4O' },
    benefitsSubtitle: {
      ko: '검증된 비즈니스 모델로 파트너사에게 실질적인 가치를 제공합니다.',
      en: 'Providing real value to partners through a proven business model.',
      ja: '実証済みのビジネスモデルでパートナー企業に実質的な価値を提供します。',
      zh: '通过经过验证的商业模式为合作伙伴提供实际价值。',
      th: 'มอบคุณค่าที่แท้จริงแก่พันธมิตรผ่านโมเดลธุรกิจที่ได้รับการพิสูจน์แล้ว'
    },
    ctaText: { ko: 'O4O 비즈니스 모델에 대해 더 알아보세요', en: 'Learn more about the O4O business model', ja: 'O4Oビジネスモデルについてもっと詳しく', zh: '了解更多O4O商业模式', th: 'เรียนรู้เพิ่มเติมเกี่ยวกับโมเดลธุรกิจ O4O' },
    ctaButton: { ko: '파트너십 문의하기', en: 'Inquire Partnership', ja: 'パートナーシップお問い合わせ', zh: '咨询合作', th: 'สอบถามความร่วมมือ' }
  };

  const steps = [
    {
      icon: <Star className="w-7 h-7" />,
      title: { ko: "IP & Influencer 확보", en: "IP & Influencer", ja: "IP & インフルエンサー確保", zh: "IP & 网红资源", th: "IP & Influencer" },
      desc: { ko: "검증된 스타IP, 브랜드, 인플루언서 네트워크 확보", en: "Sourcing verified Stars, Brands & Influencer network", ja: "検証済みのスターIP、ブランド、インフルエンサーネットワーク確保", zh: "获取经过验证的明星IP、品牌和网红网络", th: "รวบรวมเครือข่าย Star IP, แบรนด์ และ Influencer ที่ได้รับการยืนยัน" },
      details: {
        ko: ["셀럽 매니지먼트 연계", "브랜드 라이선스 계약", "인플루언서 파트너십"],
        en: ["Celebrity Management", "Brand Licensing", "Influencer Partnership"],
        ja: ["セレブマネジメント連携", "ブランドライセンス契約", "インフルエンサーパートナーシップ"],
        zh: ["明星管理合作", "品牌授权合同", "网红合作伙伴"],
        th: ["การจัดการคนดัง", "สัญญาลิขสิทธิ์แบรนด์", "พันธมิตร Influencer"]
      },
      color: "from-orange-500 to-red-500",
      glowColor: "orange"
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: { ko: "오프라인 체험 기획", en: "Offline Planning", ja: "オフライン体験企画", zh: "线下体验策划", th: "การวางแผนออฟไลน์" },
      desc: { ko: "팝업스토어, 전시회, 이벤트 공간 기획 및 운영", en: "Pop-ups, Exhibitions, Events planning & operation", ja: "ポップアップストア、展示会、イベント空間の企画・運営", zh: "快闪店、展览、活动空间策划与运营", th: "วางแผนและดำเนินการป๊อปอัพ นิทรรศการ และอีเวนต์" },
      details: {
        ko: ["팝업스토어 기획", "전시/이벤트 운영", "체험존 디자인"],
        en: ["Pop-up Store Planning", "Exhibition Operation", "Experience Zone Design"],
        ja: ["ポップアップストア企画", "展示/イベント運営", "体験ゾーンデザイン"],
        zh: ["快闪店策划", "展览/活动运营", "体验区设计"],
        th: ["วางแผนป๊อปอัพสโตร์", "ดำเนินการนิทรรศการ", "ออกแบบโซนประสบการณ์"]
      },
      color: "from-pink-500 to-rose-500",
      glowColor: "pink"
    },
    {
      icon: <ShoppingBag className="w-7 h-7" />,
      title: { ko: "현장 체험 & 굿즈", en: "Experience & Goods", ja: "現場体験 & グッズ", zh: "现场体验 & 周边", th: "ประสบการณ์ & สินค้า" },
      desc: { ko: "팬덤 참여 유도, 한정판 굿즈 판매, NFT 인증", en: "Fandom engagement, Limited goods, NFT certification", ja: "ファンダム参加誘導、限定グッズ販売、NFT認証", zh: "粉丝参与、限量周边销售、NFT认证", th: "การมีส่วนร่วมแฟนด้อม สินค้าลิมิเต็ด และการรับรอง NFT" },
      details: {
        ko: ["팬 미팅/사인회", "한정판 굿즈 판매", "NFT 공식 인증"],
        en: ["Fan Meetings/Signings", "Limited Edition Goods", "NFT Certification"],
        ja: ["ファンミーティング/サイン会", "限定グッズ販売", "NFT公式認証"],
        zh: ["粉丝见面会/签名会", "限量版周边销售", "NFT官方认证"],
        th: ["แฟนมีตติ้ง/งานเซ็น", "สินค้าลิมิเต็ด", "การรับรอง NFT"]
      },
      color: "from-violet-500 to-purple-500",
      glowColor: "violet"
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: { ko: "온라인 커머스 연결", en: "Online Commerce", ja: "オンラインコマース連携", zh: "线上商务连接", th: "เชื่อมต่ออีคอมเมิร์ซ" },
      desc: { ko: "글로벌 온라인 판매 확대 및 재구매 유도", en: "Global expansion & Re-purchase conversion", ja: "グローバルオンライン販売拡大及び再購買誘導", zh: "全球在线销售扩展及复购转化", th: "ขยายทั่วโลกและกระตุ้นการซื้อซ้ำ" },
      details: {
        ko: ["글로벌 이커머스", "재구매 마케팅", "크로스보더 물류"],
        en: ["Global E-commerce", "Re-purchase Marketing", "Cross-border Logistics"],
        ja: ["グローバルEコマース", "再購買マーケティング", "クロスボーダー物流"],
        zh: ["全球电商", "复购营销", "跨境物流"],
        th: ["อีคอมเมิร์ซทั่วโลก", "การตลาดซื้อซ้ำ", "โลจิสติกส์ข้ามพรมแดน"]
      },
      color: "from-teal-500 to-cyan-500",
      glowColor: "teal"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: { ko: "빠른 시장 진입", en: "Fast Market Entry", ja: "素早い市場参入", zh: "快速市场进入", th: "เข้าตลาดเร็ว" },
      desc: { ko: "검증된 IP와 네트워크로 빠른 현지화", en: "Quick localization with verified IP & network", ja: "検証済みIPとネットワークで素早いローカライズ", zh: "通过经过验证的IP和网络快速本地化", th: "การปรับให้เข้ากับท้องถิ่นอย่างรวดเร็วด้วย IP และเครือข่ายที่ได้รับการยืนยัน" }
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: { ko: "팬덤 집객력", en: "Fandom Engagement", ja: "ファンダム集客力", zh: "粉丝吸引力", th: "การมีส่วนร่วมแฟนด้อม" },
      desc: { ko: "K-Culture 팬덤 기반 안정적 방문객 확보", en: "Stable visitor base through K-Culture fandom", ja: "K-Cultureファンダム基盤の安定した来場者確保", zh: "通过K-Culture粉丝群稳定的访客基础", th: "ฐานผู้เยี่ยมชมที่มั่นคงผ่านแฟนด้อม K-Culture" }
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: { ko: "지속적 매출", en: "Sustainable Revenue", ja: "持続的売上", zh: "持续营收", th: "รายได้ยั่งยืน" },
      desc: { ko: "오프라인 경험 → 온라인 재구매 선순환", en: "Offline experience → Online repurchase cycle", ja: "オフライン体験→オンライン再購買の好循環", zh: "线下体验→线上复购良性循环", th: "ประสบการณ์ออฟไลน์→วงจรซื้อซ้ำออนไลน์" }
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: { ko: "NFT 공식 인증", en: "NFT Authentication", ja: "NFT公式認証", zh: "NFT官方认证", th: "การรับรอง NFT" },
      desc: { ko: "블록체인 기반 공식 굿즈 인증 시스템", en: "Blockchain-based official goods certification", ja: "ブロックチェーン基盤の公式グッズ認証システム", zh: "基于区块链的官方周边认证系统", th: "ระบบรับรองสินค้าอย่างเป็นทางการบนบล็อกเชน" }
    }
  ];

  return (
    <section id="model" className="relative py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600 rounded-full blur-[200px] opacity-20"></div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30 mb-6">
            <Sparkles size={18} className="text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              {getText(texts.badge)}
            </span>
            <Sparkles size={18} className="text-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            {getText(texts.title)}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {getText(texts.subtitle)}
          </p>
        </div>

        {/* Key Message Banner */}
        <div className="relative mb-20">
          <div className="relative bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/10 text-center overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient opacity-20 rounded-3xl"></div>
            <div className="absolute inset-[1px] bg-slate-950/80 rounded-3xl"></div>

            <div className="relative z-10">
              <p className="text-sm text-primary mb-3 uppercase tracking-widest font-semibold">
                {getText(texts.coreValueLabel)}
              </p>
              <p className="text-xl md:text-2xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
                {getText(texts.coreValueText)}
              </p>
            </div>
          </div>
        </div>

        {/* Flow Steps */}
        <div className="relative mb-20">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[80px] left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-orange-500 via-pink-500 via-violet-500 to-teal-500 rounded-full opacity-50"></div>

          {/* Animated dots on line */}
          <div className="hidden lg:flex absolute top-[76px] left-[12.5%] right-[12.5%] justify-between">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full bg-gradient-to-br ${step.color} ring-4 ring-slate-950 shadow-lg animate-pulse`}
                style={{ animationDelay: `${index * 0.2}s` }}
              ></div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number Badge */}
                <div className={`absolute -top-4 left-6 z-10 w-12 h-12 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {index + 1}
                </div>

                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-sm p-6 pt-12 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 h-full group-hover:-translate-y-2 overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

                  {/* Icon */}
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="relative text-xl font-bold text-white mb-3">
                    {getText(step.title)}
                  </h3>

                  {/* Description */}
                  <p className="relative text-gray-400 text-sm mb-5 leading-relaxed">
                    {getText(step.desc)}
                  </p>

                  {/* Details with Checkmarks */}
                  <ul className="relative space-y-3">
                    {(step.details[language] || step.details.en).map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow (between cards on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 h-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 items-center justify-center text-white/60">
                    <ArrowRight size={12} />
                  </div>
                )}

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4 text-white/30">
                    <ArrowRight size={24} className="rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
            {getText(texts.benefitsTitle)}
          </h3>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            {getText(texts.benefitsSubtitle)}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="group text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-5 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-white font-bold mb-2 text-lg">
                  {getText(benefit.title)}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {getText(benefit.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 text-lg">
            {getText(texts.ctaText)}
          </p>
          <a href="#cta" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105">
            {getText(texts.ctaButton)}
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
