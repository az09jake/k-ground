import React from 'react';
import { ArrowUpRight, Download, Calendar, Mail, Phone, Building2, Palette, Globe, Users, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const CTASection: React.FC = () => {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  // Partnership types
  const partnershipTypes = [
    {
      icon: <Building2 size={24} />,
      titleKo: '브랜드 파트너',
      titleEn: 'Brand Partner',
      descKo: '팝업스토어 및 체험존 운영을 통한 브랜드 노출',
      descEn: 'Brand exposure through popup stores and experience zones',
      benefitsKo: ['팝업스토어 기획/운영', '체험존 구축', 'SNS 마케팅 연계'],
      benefitsEn: ['Popup store planning', 'Experience zone setup', 'SNS marketing'],
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: <Palette size={24} />,
      titleKo: 'IP 파트너',
      titleEn: 'IP Partner',
      descKo: '콘텐츠 및 캐릭터 IP 라이선싱 협업',
      descEn: 'Content and character IP licensing collaboration',
      benefitsKo: ['IP 라이선싱', '굿즈 개발', 'NFT 인증'],
      benefitsEn: ['IP licensing', 'Goods development', 'NFT certification'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: <Globe size={24} />,
      titleKo: '유통 파트너',
      titleEn: 'Distribution Partner',
      descKo: '글로벌 유통망 연계 및 해외 진출 지원',
      descEn: 'Global distribution network and overseas expansion support',
      benefitsKo: ['글로벌 유통망', '현지화 지원', '물류 솔루션'],
      benefitsEn: ['Global network', 'Localization', 'Logistics solutions'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: <Users size={24} />,
      titleKo: '인플루언서 파트너',
      titleEn: 'Influencer Partner',
      descKo: '콘텐츠 제작 및 프로모션 협업',
      descEn: 'Content creation and promotional collaboration',
      benefitsKo: ['콘텐츠 제작', '라이브 커머스', '셀럽 네트워크'],
      benefitsEn: ['Content creation', 'Live commerce', 'Celeb network'],
      color: 'from-pink-400 to-pink-600'
    }
  ];

  // FAQ items
  const faqItems = [
    {
      questionKo: '파트너십 최소 기간은 어떻게 되나요?',
      questionEn: 'What is the minimum partnership period?',
      answerKo: '기본 파트너십 기간은 6개월이며, 프로젝트 성격에 따라 단기 협업도 가능합니다. 장기 파트너십의 경우 추가 혜택이 제공됩니다.',
      answerEn: 'The basic partnership period is 6 months, with short-term collaborations possible depending on the project. Long-term partnerships receive additional benefits.'
    },
    {
      questionKo: '어떤 지원을 받을 수 있나요?',
      questionEn: 'What kind of support can we receive?',
      answerKo: '마케팅, 콘텐츠 제작, 팝업스토어 기획/운영, 인플루언서 연계, 해외 진출 지원 등 파트너십 유형에 따른 맞춤형 지원을 제공합니다.',
      answerEn: 'We provide customized support based on partnership type including marketing, content creation, popup store planning, influencer connections, and overseas expansion support.'
    },
    {
      questionKo: '해외 진출 지원이 가능한가요?',
      questionEn: 'Is overseas expansion support available?',
      answerKo: '네, K-GROUND는 일본, 태국, 대만, 미국 등 5개국에 글로벌 네트워크를 보유하고 있으며, 현지 법인을 통한 직접 지원이 가능합니다.',
      answerEn: 'Yes, K-GROUND has a global network in 5 countries including Japan, Thailand, Taiwan, and the USA, with direct support available through local subsidiaries.'
    },
    {
      questionKo: '소규모 브랜드도 파트너십이 가능한가요?',
      questionEn: 'Can small brands also partner with you?',
      answerKo: '물론입니다. K-GROUND는 규모에 관계없이 K-Culture 가치를 함께할 수 있는 모든 브랜드와 협력합니다. 맞춤형 파트너십 플랜을 제안해 드립니다.',
      answerEn: 'Absolutely. K-GROUND works with brands of all sizes that share K-Culture values. We offer customized partnership plans tailored to your needs.'
    }
  ];

  // Achievement stats
  const achievements = [
    { valueKo: '100만+', valueEn: '1M+', labelKo: '누적 방문객', labelEn: 'Total Visitors' },
    { valueKo: '15+', valueEn: '15+', labelKo: '브랜드 파트너', labelEn: 'Brand Partners' },
    { valueKo: '5개국', valueEn: '5 Countries', labelKo: '글로벌 거점', labelEn: 'Global Presence' },
    { valueKo: '50+', valueEn: '50+', labelKo: '팝업 이벤트', labelEn: 'Popup Events' }
  ];

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background - 진한 다크 그라데이션으로 가독성 향상 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]"></div>

      {/* Accent Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/30 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 border border-primary/50">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            {language === 'ko' ? 'K-Culture 파트너십' : 'K-Culture Partnership'}
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
            {language === 'ko' ? (
              <>
                K-Wave에 함께하실<br />
                준비가 되셨나요?
              </>
            ) : (
              <>
                Ready to Join<br />
                the K-Wave?
              </>
            )}
          </h2>

          {/* Subtitle */}
          <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            {language === 'ko'
              ? '오늘 K-GROUND와 파트너십을 시작하고 독점 IP, 인플루언서, 그리고 검증된 오프라인 체험 솔루션을 만나보세요.'
              : 'Start your partnership with K-GROUND today and access exclusive IP, influencers, and proven offline experience solutions.'
            }
          </p>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {achievements.map((stat, idx) => (
              <div key={idx} className="bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/30 shadow-lg">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{language === 'ko' ? stat.valueKo : stat.valueEn}</p>
                <p className="text-sm text-white/80">{language === 'ko' ? stat.labelKo : stat.labelEn}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all flex items-center justify-center gap-2">
              <Download size={20} />
              {language === 'ko' ? '제안서 다운로드' : 'Download Proposal'}
            </button>
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white font-bold rounded-full hover:bg-white hover:text-dark transition-all flex items-center justify-center gap-2">
              <Calendar size={20} />
              {language === 'ko' ? '미팅 예약하기' : 'Book a Meeting'}
            </button>
          </div>
        </div>

        {/* Partnership Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === 'ko' ? '파트너십 유형' : 'Partnership Types'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnershipTypes.map((type, idx) => (
              <div key={idx} className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all group shadow-lg">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {type.icon}
                </div>
                <h4 className="font-bold text-lg mb-2 text-white">
                  {language === 'ko' ? type.titleKo : type.titleEn}
                </h4>
                <p className="text-sm text-white/80 mb-4">
                  {language === 'ko' ? type.descKo : type.descEn}
                </p>
                <ul className="space-y-2">
                  {(language === 'ko' ? type.benefitsKo : type.benefitsEn).map((benefit, bidx) => (
                    <li key={bidx} className="flex items-center gap-2 text-sm text-white/90">
                      <CheckCircle2 size={14} className="text-green-400 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === 'ko' ? '자주 묻는 질문' : 'Frequently Asked Questions'}
          </h3>
          <div className="space-y-3">
            {faqItems.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/15 backdrop-blur-md rounded-xl border border-white/30 overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/20 transition-colors"
                >
                  <span className="font-semibold pr-4 text-white">
                    {language === 'ko' ? faq.questionKo : faq.questionEn}
                  </span>
                  {openFaq === idx ? <ChevronUp size={20} className="text-primary" /> : <ChevronDown size={20} className="text-white/70" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-white/90 text-sm leading-relaxed bg-white/5">
                    {language === 'ko' ? faq.answerKo : faq.answerEn}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/25 transition-colors group cursor-pointer shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/80">{language === 'ko' ? '이메일 문의' : 'Email'}</p>
                <p className="font-semibold text-white">contact@k-ground.co.kr</p>
              </div>
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/25 transition-colors group cursor-pointer shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/80">{language === 'ko' ? '전화 문의' : 'Phone'}</p>
                <p className="font-semibold text-white">+82 2-1234-5678</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="pt-8 border-t border-white/30">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              {language === 'ko' ? '24시간 내 빠른 응답' : '24hr Quick Response'}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              {language === 'ko' ? 'NDA 체결 가능' : 'NDA Available'}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              {language === 'ko' ? '맞춤형 제안서 제공' : 'Custom Proposals'}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              {language === 'ko' ? '무료 상담 가능' : 'Free Consultation'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
