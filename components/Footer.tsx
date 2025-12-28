import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin, ExternalLink, Download, FileText, Send, ArrowRight, Building2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type LangText = { ko: string; en: string; ja: string; zh: string; th: string };

export const Footer: React.FC = () => {
  const { language, getText } = useLanguage();
  const [email, setEmail] = React.useState('');

  // UI texts
  const texts = {
    newsletterTitle: { ko: 'K-Culture 뉴스레터', en: 'K-Culture Newsletter', ja: 'K-Cultureニュースレター', zh: 'K-Culture新闻通讯', th: 'จดหมายข่าว K-Culture' },
    newsletterDesc: { ko: '최신 K-Culture 트렌드, 파트너십 기회, 글로벌 팝업 일정을 가장 먼저 받아보세요.', en: 'Be the first to receive the latest K-Culture trends, partnership opportunities, and global popup schedules.', ja: '最新のK-Cultureトレンド、パートナーシップ機会、グローバルポップアップスケジュールを最初にお届けします。', zh: '第一时间获取最新K-Culture趋势、合作机会和全球快闪活动日程。', th: 'รับข่าวสารเทรนด์ K-Culture ล่าสุด โอกาสพันธมิตร และตารางป๊อปอัพทั่วโลกก่อนใคร' },
    weeklyTrend: { ko: '주간 트렌드 리포트', en: 'Weekly Trend Report', ja: '週間トレンドレポート', zh: '每周趋势报告', th: 'รายงานเทรนด์รายสัปดาห์' },
    partnershipInfo: { ko: '파트너십 안내', en: 'Partnership Info', ja: 'パートナーシップ情報', zh: '合作信息', th: 'ข้อมูลพันธมิตร' },
    eventUpdates: { ko: '이벤트 소식', en: 'Event Updates', ja: 'イベント情報', zh: '活动资讯', th: 'อัปเดตกิจกรรม' },
    emailPlaceholder: { ko: '이메일 주소를 입력하세요', en: 'Enter your email', ja: 'メールアドレスを入力', zh: '输入您的邮箱', th: 'กรอกอีเมลของคุณ' },
    subscribe: { ko: '구독하기', en: 'Subscribe', ja: '購読する', zh: '订阅', th: 'สมัครรับข่าว' },
    subscribeSuccess: { ko: '구독 신청이 완료되었습니다!', en: 'Successfully subscribed!', ja: '購読が完了しました！', zh: '订阅成功！', th: 'สมัครสมาชิกสำเร็จ!' },
    companyDesc: { ko: '머물고, 즐기고, 공유하는 K-라이프스타일의 대표 플랫폼. IP × Influencer × O4O 경험을 통해 K-Culture의 세계화를 만들어갑니다.', en: 'The representative K-Lifestyle platform where you stay, enjoy, and share. Building the globalization of K-Culture through IP × Influencer × O4O experiences.', ja: '滞在し、楽しみ、共有するK-ライフスタイルの代表プラットフォーム。IP × Influencer × O4O体験を通じてK-Cultureのグローバル化を創っています。', zh: '您停留、享受、分享的代表性K-生活方式平台。通过IP × Influencer × O4O体验构建K-Culture的全球化。', th: 'แพลตฟอร์ม K-Lifestyle ตัวแทนที่คุณพักผ่อน สนุก และแบ่งปัน สร้างโลกาภิวัตน์ของ K-Culture ผ่านประสบการณ์ IP × Influencer × O4O' },
    japanEntity: { ko: '일본 법인: MAIN BASE Entertainment / CONTENTS SEVEN', en: 'Japan: MAIN BASE Entertainment / CONTENTS SEVEN', ja: '日本法人: MAIN BASE Entertainment / CONTENTS SEVEN', zh: '日本: MAIN BASE Entertainment / CONTENTS SEVEN', th: 'ญี่ปุ่น: MAIN BASE Entertainment / CONTENTS SEVEN' },
    quickLinks: { ko: '바로가기', en: 'Quick Links', ja: 'クイックリンク', zh: '快速链接', th: 'ลิงก์ด่วน' },
    resources: { ko: '리소스', en: 'Resources', ja: 'リソース', zh: '资源', th: 'ทรัพยากร' },
    requestProposal: { ko: '제안서 요청하기', en: 'Request Proposal', ja: '提案書を請求', zh: '请求提案', th: 'ขอข้อเสนอ' },
    contact: { ko: '연락처', en: 'Contact', ja: 'お問い合わせ', zh: '联系方式', th: 'ติดต่อ' },
    emailLabel: { ko: '이메일', en: 'Email', ja: 'メール', zh: '邮箱', th: 'อีเมล' },
    phoneLabel: { ko: '전화', en: 'Phone', ja: '電話', zh: '电话', th: 'โทรศัพท์' },
    addressLabel: { ko: '주소', en: 'Address', ja: '住所', zh: '地址', th: 'ที่อยู่' },
    address: { ko: '서울특별시 강남구 테헤란로', en: 'Teheran-ro, Gangnam-gu, Seoul', ja: 'ソウル特別市江南区テヘラン路', zh: '首尔市江南区德黑兰路', th: 'ถนนเตหะราน กังนัม โซล' },
    allRights: { ko: '모든 권리 보유.', en: 'All rights reserved.', ja: '無断複写・転載を禁じます。', zh: '保留所有权利。', th: 'สงวนลิขสิทธิ์' },
    companyName: { ko: '케이그라운드 주식회사', en: 'K-GROUND Inc.', ja: 'K-GROUND株式会社', zh: 'K-GROUND公司', th: 'K-GROUND Inc.' },
  };

  const quickLinks = [
    { label: { ko: '테마', en: 'Themes', ja: 'テーマ', zh: '主题', th: 'ธีม' }, href: '#themes' },
    { label: { ko: 'O4O 모델', en: 'O4O Model', ja: 'O4Oモデル', zh: 'O4O模式', th: 'โมเดล O4O' }, href: '#model' },
    { label: { ko: '원더몬', en: 'Wonder Mon', ja: 'ワンダーモン', zh: 'Wonder Mon', th: 'Wonder Mon' }, href: '#wondermon' },
    { label: { ko: '성공 사례', en: 'Case Studies', ja: '成功事例', zh: '成功案例', th: 'กรณีศึกษา' }, href: '#cases' },
    { label: { ko: '글로벌 네트워크', en: 'Global Network', ja: 'グローバルネットワーク', zh: '全球网络', th: 'เครือข่ายทั่วโลก' }, href: '#partners' },
  ];

  const legalLinks = [
    { label: { ko: '개인정보처리방침', en: 'Privacy Policy', ja: 'プライバシーポリシー', zh: '隐私政策', th: 'นโยบายความเป็นส่วนตัว' }, href: '#' },
    { label: { ko: '이용약관', en: 'Terms of Service', ja: '利用規約', zh: '服务条款', th: 'ข้อกำหนดการใช้งาน' }, href: '#' },
    { label: { ko: '파트너 가이드라인', en: 'Partner Guidelines', ja: 'パートナーガイドライン', zh: '合作伙伴准则', th: 'แนวทางพันธมิตร' }, href: '#' },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram', hoverColor: 'hover:bg-pink-600' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube', hoverColor: 'hover:bg-red-600' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn', hoverColor: 'hover:bg-blue-700' },
  ];

  const resources = [
    { label: { ko: '회사 소개서 (PDF)', en: 'Company Profile (PDF)', ja: '会社案内 (PDF)', zh: '公司简介 (PDF)', th: 'โปรไฟล์บริษัท (PDF)' }, icon: <FileText size={16} /> },
    { label: { ko: '파트너십 가이드', en: 'Partnership Guide', ja: 'パートナーシップガイド', zh: '合作指南', th: 'คู่มือพันธมิตร' }, icon: <Download size={16} /> },
    { label: { ko: '브랜드 가이드라인', en: 'Brand Guidelines', ja: 'ブランドガイドライン', zh: '品牌指南', th: 'แนวทางแบรนด์' }, icon: <FileText size={16} /> },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter submission logic would go here
    alert(getText(texts.subscribeSuccess));
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
                {getText(texts.newsletterTitle)}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {getText(texts.newsletterDesc)}
              </p>
              <ul className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                <li className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {getText(texts.weeklyTrend)}
                </li>
                <li className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {getText(texts.partnershipInfo)}
                </li>
                <li className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {getText(texts.eventUpdates)}
                </li>
              </ul>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={getText(texts.emailPlaceholder)}
                className="flex-1 px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {getText(texts.subscribe)}
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
              {getText(texts.companyDesc)}
            </p>

            {/* Company Details */}
            <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Building2 size={16} className="text-primary" />
                <span className="text-sm font-semibold text-white">MAIN BASE KOREA</span>
              </div>
              <p className="text-xs text-gray-500">
                {getText(texts.japanEntity)}
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
              {getText(texts.quickLinks)}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {getText(link.label)}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">
              {getText(texts.resources)}
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
                    {getText(resource.label)}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:text-secondary transition-colors"
            >
              {getText(texts.requestProposal)}
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">
              {getText(texts.contact)}
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">{getText(texts.emailLabel)}</p>
                  <a href="mailto:contact@k-ground.co.kr" className="hover:text-primary transition-colors">
                    contact@k-ground.co.kr
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">{getText(texts.phoneLabel)}</p>
                  <a href="tel:+82212345678" className="hover:text-primary transition-colors">
                    +82 2-1234-5678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">{getText(texts.addressLabel)}</p>
                  <span>
                    {getText(texts.address)}
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
                © 2025 K-GROUND Corporation. {getText(texts.allRights)}
              </p>
              <p className="text-gray-600 text-xs mt-1">
                {getText(texts.companyName)} | www.k-ground.co.kr
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
                  {getText(link.label)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
