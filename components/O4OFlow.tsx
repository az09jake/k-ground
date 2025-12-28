import React from 'react';
import { Star, MapPin, ShoppingBag, Globe, ArrowRight, Zap, Users, TrendingUp, Shield, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const O4OFlow: React.FC = () => {
  const { language } = useLanguage();

  const steps = [
    {
      icon: <Star className="w-7 h-7" />,
      titleKo: "IP & Influencer 확보",
      titleEn: "IP & Influencer",
      descKo: "검증된 스타IP, 브랜드, 인플루언서 네트워크 확보",
      descEn: "Sourcing verified Stars, Brands & Influencer network",
      detailsKo: ["셀럽 매니지먼트 연계", "브랜드 라이선스 계약", "인플루언서 파트너십"],
      detailsEn: ["Celebrity Management", "Brand Licensing", "Influencer Partnership"],
      color: "from-orange-500 to-red-500",
      glowColor: "orange"
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      titleKo: "오프라인 체험 기획",
      titleEn: "Offline Planning",
      descKo: "팝업스토어, 전시회, 이벤트 공간 기획 및 운영",
      descEn: "Pop-ups, Exhibitions, Events planning & operation",
      detailsKo: ["팝업스토어 기획", "전시/이벤트 운영", "체험존 디자인"],
      detailsEn: ["Pop-up Store Planning", "Exhibition Operation", "Experience Zone Design"],
      color: "from-pink-500 to-rose-500",
      glowColor: "pink"
    },
    {
      icon: <ShoppingBag className="w-7 h-7" />,
      titleKo: "현장 체험 & 굿즈",
      titleEn: "Experience & Goods",
      descKo: "팬덤 참여 유도, 한정판 굿즈 판매, NFT 인증",
      descEn: "Fandom engagement, Limited goods, NFT certification",
      detailsKo: ["팬 미팅/사인회", "한정판 굿즈 판매", "NFT 공식 인증"],
      detailsEn: ["Fan Meetings/Signings", "Limited Edition Goods", "NFT Certification"],
      color: "from-violet-500 to-purple-500",
      glowColor: "violet"
    },
    {
      icon: <Globe className="w-7 h-7" />,
      titleKo: "온라인 커머스 연결",
      titleEn: "Online Commerce",
      descKo: "글로벌 온라인 판매 확대 및 재구매 유도",
      descEn: "Global expansion & Re-purchase conversion",
      detailsKo: ["글로벌 이커머스", "재구매 마케팅", "크로스보더 물류"],
      detailsEn: ["Global E-commerce", "Re-purchase Marketing", "Cross-border Logistics"],
      color: "from-teal-500 to-cyan-500",
      glowColor: "teal"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      titleKo: "빠른 시장 진입",
      titleEn: "Fast Market Entry",
      descKo: "검증된 IP와 네트워크로 빠른 현지화",
      descEn: "Quick localization with verified IP & network"
    },
    {
      icon: <Users className="w-6 h-6" />,
      titleKo: "팬덤 집객력",
      titleEn: "Fandom Engagement",
      descKo: "K-Culture 팬덤 기반 안정적 방문객 확보",
      descEn: "Stable visitor base through K-Culture fandom"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      titleKo: "지속적 매출",
      titleEn: "Sustainable Revenue",
      descKo: "오프라인 경험 → 온라인 재구매 선순환",
      descEn: "Offline experience → Online repurchase cycle"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      titleKo: "NFT 공식 인증",
      titleEn: "NFT Authentication",
      descKo: "블록체인 기반 공식 굿즈 인증 시스템",
      descEn: "Blockchain-based official goods certification"
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
              {language === 'ko' ? '비즈니스 모델' : 'Business Model'}
            </span>
            <Sparkles size={18} className="text-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            {language === 'ko' ? 'O4O 비즈니스 플로우' : 'O4O Business Flow'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {language === 'ko'
              ? 'Offline to Online. 오프라인 체험의 감동을 온라인 커머스로 연결하여 지속 가능한 K-Culture 소비 사이클을 만듭니다.'
              : 'Offline to Online. Connecting offline experience emotions to online commerce for a sustainable K-Culture consumption cycle.'
            }
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
                {language === 'ko' ? 'B2B 파트너를 위한 핵심 가치' : 'Core Value for B2B Partners'}
              </p>
              <p className="text-xl md:text-2xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
                {language === 'ko'
                  ? '"오프라인 거점을 통한 온라인 판매 확대, 팬 경험 강화로 지속적 소비 유도"'
                  : '"Expanding online sales through offline bases, driving sustainable consumption through fan experiences"'
                }
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
                    {language === 'ko' ? step.titleKo : step.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="relative text-gray-400 text-sm mb-5 leading-relaxed">
                    {language === 'ko' ? step.descKo : step.descEn}
                  </p>

                  {/* Details with Checkmarks */}
                  <ul className="relative space-y-3">
                    {(language === 'ko' ? step.detailsKo : step.detailsEn).map((detail, idx) => (
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
            {language === 'ko' ? 'O4O 모델의 핵심 가치' : 'Core Values of O4O Model'}
          </h3>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            {language === 'ko'
              ? '검증된 비즈니스 모델로 파트너사에게 실질적인 가치를 제공합니다.'
              : 'Providing real value to partners through a proven business model.'
            }
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
                  {language === 'ko' ? benefit.titleKo : benefit.titleEn}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {language === 'ko' ? benefit.descKo : benefit.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 text-lg">
            {language === 'ko' ? 'O4O 비즈니스 모델에 대해 더 알아보세요' : 'Learn more about the O4O business model'}
          </p>
          <a href="#cta" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105">
            {language === 'ko' ? '파트너십 문의하기' : 'Inquire Partnership'}
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
