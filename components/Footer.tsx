import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin, ExternalLink, Download, FileText, Send, ArrowRight, Building2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const [email, setEmail] = React.useState('');

  const quickLinks = [
    { labelKo: '테마', labelEn: 'Themes', href: '#themes' },
    { labelKo: 'O4O 모델', labelEn: 'O4O Model', href: '#model' },
    { labelKo: '원더몬', labelEn: 'Wonder Mon', href: '#wondermon' },
    { labelKo: '성공 사례', labelEn: 'Case Studies', href: '#cases' },
    { labelKo: '글로벌 네트워크', labelEn: 'Global Network', href: '#partners' },
  ];

  const legalLinks = [
    { labelKo: '개인정보처리방침', labelEn: 'Privacy Policy', href: '#' },
    { labelKo: '이용약관', labelEn: 'Terms of Service', href: '#' },
    { labelKo: '파트너 가이드라인', labelEn: 'Partner Guidelines', href: '#' },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram', hoverColor: 'hover:bg-pink-600' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube', hoverColor: 'hover:bg-red-600' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn', hoverColor: 'hover:bg-blue-700' },
  ];

  const resources = [
    { labelKo: '회사 소개서 (PDF)', labelEn: 'Company Profile (PDF)', icon: <FileText size={16} /> },
    { labelKo: '파트너십 가이드', labelEn: 'Partnership Guide', icon: <Download size={16} /> },
    { labelKo: '브랜드 가이드라인', labelEn: 'Brand Guidelines', icon: <FileText size={16} /> },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter submission logic would go here
    alert(language === 'ko' ? '구독 신청이 완료되었습니다!' : 'Successfully subscribed!');
    setEmail('');
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl p-8 md:p-12 mb-16 border border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {language === 'ko' ? 'K-Culture 뉴스레터' : 'K-Culture Newsletter'}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {language === 'ko'
                  ? '최신 K-Culture 트렌드, 파트너십 기회, 글로벌 팝업 일정을 가장 먼저 받아보세요.'
                  : 'Be the first to receive the latest K-Culture trends, partnership opportunities, and global popup schedules.'
                }
              </p>
              <ul className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                <li className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {language === 'ko' ? '주간 트렌드 리포트' : 'Weekly Trend Report'}
                </li>
                <li className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {language === 'ko' ? '파트너십 안내' : 'Partnership Info'}
                </li>
                <li className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {language === 'ko' ? '이벤트 소식' : 'Event Updates'}
                </li>
              </ul>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === 'ko' ? '이메일 주소를 입력하세요' : 'Enter your email'}
                className="flex-1 px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {language === 'ko' ? '구독하기' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold font-heading mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              K-GROUND
            </h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {language === 'ko'
                ? '머물고, 즐기고, 공유하는 K-라이프스타일의 대표 플랫폼. IP × Influencer × O4O 경험을 통해 K-Culture의 세계화를 만들어갑니다.'
                : 'The representative K-Lifestyle platform where you stay, enjoy, and share. Building the globalization of K-Culture through IP × Influencer × O4O experiences.'
              }
            </p>

            {/* Company Details */}
            <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Building2 size={16} className="text-primary" />
                <span className="text-sm font-semibold text-white">MAIN BASE KOREA</span>
              </div>
              <p className="text-xs text-gray-500">
                {language === 'ko'
                  ? '일본 법인: MAIN BASE Entertainment / CONTENTS SEVEN'
                  : 'Japan: MAIN BASE Entertainment / CONTENTS SEVEN'
                }
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center ${social.hoverColor} hover:text-white transition-all hover:scale-110`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">
              {language === 'ko' ? '바로가기' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {language === 'ko' ? link.labelKo : link.labelEn}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">
              {language === 'ko' ? '리소스' : 'Resources'}
            </h4>
            <ul className="space-y-3">
              {resources.map((resource, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="text-primary/60 group-hover:text-primary transition-colors">
                      {resource.icon}
                    </span>
                    {language === 'ko' ? resource.labelKo : resource.labelEn}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:text-secondary transition-colors"
            >
              {language === 'ko' ? '제안서 요청하기' : 'Request Proposal'}
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">
              {language === 'ko' ? '연락처' : 'Contact'}
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">{language === 'ko' ? '이메일' : 'Email'}</p>
                  <a href="mailto:contact@k-ground.co.kr" className="hover:text-primary transition-colors">
                    contact@k-ground.co.kr
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">{language === 'ko' ? '전화' : 'Phone'}</p>
                  <a href="tel:+82212345678" className="hover:text-primary transition-colors">
                    +82 2-1234-5678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">{language === 'ko' ? '주소' : 'Address'}</p>
                  <span>
                    {language === 'ko'
                      ? '서울특별시 강남구 테헤란로'
                      : 'Teheran-ro, Gangnam-gu, Seoul'
                    }
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © 2025 K-GROUND Corporation. {language === 'ko' ? '모든 권리 보유.' : 'All rights reserved.'}
              </p>
              <p className="text-gray-600 text-xs mt-1">
                {language === 'ko' ? '케이그라운드 주식회사' : 'K-GROUND Inc.'} | www.k-ground.co.kr
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              {legalLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {language === 'ko' ? link.labelKo : link.labelEn}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
