import React from 'react';
import { ArrowUpRight, Download, Calendar, Mail, Phone, Building2, Palette, Globe, Users, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type LangText = { ko: string; en: string; ja: string; zh: string; th: string };
type LangTextArray = { ko: string[]; en: string[]; ja: string[]; zh: string[]; th: string[] };

export const CTASection: React.FC = () => {
  const { language, getText } = useLanguage();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  // UI texts
  const texts = {
    badge: { ko: 'K-Culture 파트너십', en: 'K-Culture Partnership', ja: 'K-Cultureパートナーシップ', zh: 'K-Culture合作', th: 'พันธมิตร K-Culture' },
    headline: { ko: 'K-Wave에 함께하실\n준비가 되셨나요?', en: 'Ready to Join\nthe K-Wave?', ja: 'K-Waveに参加する\n準備はできましたか？', zh: '准备好加入\nK-Wave了吗？', th: 'พร้อมที่จะเข้าร่วม\nK-Wave หรือยัง?' },
    subtitle: { ko: '오늘 K-GROUND와 파트너십을 시작하고 독점 IP, 인플루언서, 그리고 검증된 오프라인 체험 솔루션을 만나보세요.', en: 'Start your partnership with K-GROUND today and access exclusive IP, influencers, and proven offline experience solutions.', ja: '今日K-GROUNDとパートナーシップを開始し、独占IP、インフルエンサー、そして実証済みのオフライン体験ソリューションにアクセスしてください。', zh: '今天就开始与K-GROUND合作，获得独家IP、网红资源和经过验证的线下体验解决方案。', th: 'เริ่มพันธมิตรกับ K-GROUND วันนี้และเข้าถึง IP พิเศษ อินฟลูเอนเซอร์ และโซลูชันประสบการณ์ออฟไลน์ที่พิสูจน์แล้ว' },
    downloadProposal: { ko: '제안서 다운로드', en: 'Download Proposal', ja: '提案書ダウンロード', zh: '下载提案', th: 'ดาวน์โหลดข้อเสนอ' },
    bookMeeting: { ko: '미팅 예약하기', en: 'Book a Meeting', ja: 'ミーティング予約', zh: '预约会议', th: 'จองการประชุม' },
    partnershipTypesTitle: { ko: '파트너십 유형', en: 'Partnership Types', ja: 'パートナーシップの種類', zh: '合作类型', th: 'ประเภทพันธมิตร' },
    faqTitle: { ko: '자주 묻는 질문', en: 'Frequently Asked Questions', ja: 'よくある質問', zh: '常见问题', th: 'คำถามที่พบบ่อย' },
    emailLabel: { ko: '이메일 문의', en: 'Email', ja: 'メール', zh: '邮箱', th: 'อีเมล' },
    phoneLabel: { ko: '전화 문의', en: 'Phone', ja: '電話', zh: '电话', th: 'โทรศัพท์' },
    quickResponse: { ko: '24시간 내 빠른 응답', en: '24hr Quick Response', ja: '24時間以内に迅速対応', zh: '24小时快速响应', th: 'ตอบกลับภายใน 24 ชม.' },
    ndaAvailable: { ko: 'NDA 체결 가능', en: 'NDA Available', ja: 'NDA締結可能', zh: 'NDA可签', th: 'มี NDA' },
    customProposals: { ko: '맞춤형 제안서 제공', en: 'Custom Proposals', ja: 'カスタム提案書', zh: '定制提案', th: 'ข้อเสนอเฉพาะ' },
    freeConsultation: { ko: '무료 상담 가능', en: 'Free Consultation', ja: '無料相談可能', zh: '免费咨询', th: 'ปรึกษาฟรี' },
  };

  // Partnership types
  const partnershipTypes = [
    {
      icon: <Building2 size={24} />,
      title: { ko: '브랜드 파트너', en: 'Brand Partner', ja: 'ブランドパートナー', zh: '品牌合作伙伴', th: 'พันธมิตรแบรนด์' },
      desc: { ko: '팝업스토어 및 체험존 운영을 통한 브랜드 노출', en: 'Brand exposure through popup stores and experience zones', ja: 'ポップアップストアと体験ゾーン運営によるブランド露出', zh: '通过快闪店和体验区运营进行品牌曝光', th: 'การเปิดเผยแบรนด์ผ่านป๊อปอัพสโตร์และโซนประสบการณ์' },
      benefits: {
        ko: ['팝업스토어 기획/운영', '체험존 구축', 'SNS 마케팅 연계'],
        en: ['Popup store planning', 'Experience zone setup', 'SNS marketing'],
        ja: ['ポップアップストア企画/運営', '体験ゾーン構築', 'SNSマーケティング連携'],
        zh: ['快闪店策划/运营', '体验区搭建', 'SNS营销联动'],
        th: ['วางแผนป๊อปอัพสโตร์', 'สร้างโซนประสบการณ์', 'การตลาด SNS']
      },
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: <Palette size={24} />,
      title: { ko: 'IP 파트너', en: 'IP Partner', ja: 'IPパートナー', zh: 'IP合作伙伴', th: 'พันธมิตร IP' },
      desc: { ko: '콘텐츠 및 캐릭터 IP 라이선싱 협업', en: 'Content and character IP licensing collaboration', ja: 'コンテンツ・キャラクターIPライセンシング協業', zh: '内容和角色IP授权合作', th: 'ความร่วมมือด้านลิขสิทธิ์คอนเทนต์และตัวละคร IP' },
      benefits: {
        ko: ['IP 라이선싱', '굿즈 개발', 'NFT 인증'],
        en: ['IP licensing', 'Goods development', 'NFT certification'],
        ja: ['IPライセンシング', 'グッズ開発', 'NFT認証'],
        zh: ['IP授权', '周边开发', 'NFT认证'],
        th: ['การให้สิทธิ์ IP', 'พัฒนาสินค้า', 'การรับรอง NFT']
      },
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: <Globe size={24} />,
      title: { ko: '유통 파트너', en: 'Distribution Partner', ja: '流通パートナー', zh: '分销合作伙伴', th: 'พันธมิตรการจัดจำหน่าย' },
      desc: { ko: '글로벌 유통망 연계 및 해외 진출 지원', en: 'Global distribution network and overseas expansion support', ja: 'グローバル流通網連携と海外進出支援', zh: '全球分销网络连接和海外扩展支持', th: 'เครือข่ายจัดจำหน่ายทั่วโลกและสนับสนุนการขยายตัวต่างประเทศ' },
      benefits: {
        ko: ['글로벌 유통망', '현지화 지원', '물류 솔루션'],
        en: ['Global network', 'Localization', 'Logistics solutions'],
        ja: ['グローバル流通網', 'ローカライズ支援', '物流ソリューション'],
        zh: ['全球分销网络', '本地化支持', '物流解决方案'],
        th: ['เครือข่ายทั่วโลก', 'การปรับให้เข้ากับท้องถิ่น', 'โซลูชันโลจิสติกส์']
      },
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: <Users size={24} />,
      title: { ko: '인플루언서 파트너', en: 'Influencer Partner', ja: 'インフルエンサーパートナー', zh: '网红合作伙伴', th: 'พันธมิตรอินฟลูเอนเซอร์' },
      desc: { ko: '콘텐츠 제작 및 프로모션 협업', en: 'Content creation and promotional collaboration', ja: 'コンテンツ制作とプロモーション協業', zh: '内容制作和推广合作', th: 'การสร้างคอนเทนต์และความร่วมมือส่งเสริมการขาย' },
      benefits: {
        ko: ['콘텐츠 제작', '라이브 커머스', '셀럽 네트워크'],
        en: ['Content creation', 'Live commerce', 'Celeb network'],
        ja: ['コンテンツ制作', 'ライブコマース', 'セレブネットワーク'],
        zh: ['内容制作', '直播电商', '明星网络'],
        th: ['สร้างคอนเทนต์', 'ไลฟ์คอมเมิร์ซ', 'เครือข่ายเซเลบ']
      },
      color: 'from-pink-400 to-pink-600'
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: { ko: '파트너십 최소 기간은 어떻게 되나요?', en: 'What is the minimum partnership period?', ja: 'パートナーシップの最低期間はどれくらいですか？', zh: '合作的最短期限是多长？', th: 'ระยะเวลาพันธมิตรขั้นต่ำคือเท่าไหร่?' },
      answer: { ko: '기본 파트너십 기간은 6개월이며, 프로젝트 성격에 따라 단기 협업도 가능합니다. 장기 파트너십의 경우 추가 혜택이 제공됩니다.', en: 'The basic partnership period is 6 months, with short-term collaborations possible depending on the project. Long-term partnerships receive additional benefits.', ja: '基本パートナーシップ期間は6ヶ月で、プロジェクトの性格により短期協業も可能です。長期パートナーシップには追加特典があります。', zh: '基本合作期限为6个月，根据项目性质也可进行短期合作。长期合作可获得额外优惠。', th: 'ระยะเวลาพันธมิตรพื้นฐานคือ 6 เดือน โดยสามารถร่วมมือระยะสั้นได้ตามลักษณะโครงการ พันธมิตรระยะยาวจะได้รับสิทธิประโยชน์เพิ่มเติม' }
    },
    {
      question: { ko: '어떤 지원을 받을 수 있나요?', en: 'What kind of support can we receive?', ja: 'どのようなサポートを受けられますか？', zh: '可以获得什么样的支持？', th: 'สามารถรับการสนับสนุนอะไรได้บ้าง?' },
      answer: { ko: '마케팅, 콘텐츠 제작, 팝업스토어 기획/운영, 인플루언서 연계, 해외 진출 지원 등 파트너십 유형에 따른 맞춤형 지원을 제공합니다.', en: 'We provide customized support based on partnership type including marketing, content creation, popup store planning, influencer connections, and overseas expansion support.', ja: 'マーケティング、コンテンツ制作、ポップアップストア企画/運営、インフルエンサー連携、海外進出支援など、パートナーシップタイプに応じたカスタムサポートを提供します。', zh: '我们根据合作类型提供定制化支持，包括营销、内容制作、快闪店策划/运营、网红对接、海外扩展支持等。', th: 'เราให้การสนับสนุนแบบเฉพาะตามประเภทพันธมิตร รวมถึงการตลาด การสร้างคอนเทนต์ การวางแผนป๊อปอัพสโตร์ การเชื่อมต่ออินฟลูเอนเซอร์ และการสนับสนุนการขยายตัวต่างประเทศ' }
    },
    {
      question: { ko: '해외 진출 지원이 가능한가요?', en: 'Is overseas expansion support available?', ja: '海外進出のサポートは可能ですか？', zh: '可以支持海外扩展吗？', th: 'มีการสนับสนุนการขยายตัวต่างประเทศหรือไม่?' },
      answer: { ko: '네, K-GROUND는 일본, 태국, 대만, 미국 등 5개국에 글로벌 네트워크를 보유하고 있으며, 현지 법인을 통한 직접 지원이 가능합니다.', en: 'Yes, K-GROUND has a global network in 5 countries including Japan, Thailand, Taiwan, and the USA, with direct support available through local subsidiaries.', ja: 'はい、K-GROUNDは日本、タイ、台湾、アメリカなど5カ国にグローバルネットワークを持ち、現地法人を通じた直接サポートが可能です。', zh: '是的，K-GROUND在日本、泰国、台湾、美国等5个国家拥有全球网络，可通过当地子公司提供直接支持。', th: 'ได้ K-GROUND มีเครือข่ายทั่วโลกใน 5 ประเทศรวมถึงญี่ปุ่น ไทย ไต้หวัน และสหรัฐอเมริกา โดยสามารถให้การสนับสนุนโดยตรงผ่านบริษัทย่อยในท้องถิ่น' }
    },
    {
      question: { ko: '소규모 브랜드도 파트너십이 가능한가요?', en: 'Can small brands also partner with you?', ja: '小規模ブランドもパートナーシップは可能ですか？', zh: '小品牌也可以合作吗？', th: 'แบรนด์ขนาดเล็กสามารถเป็นพันธมิตรได้หรือไม่?' },
      answer: { ko: '물론입니다. K-GROUND는 규모에 관계없이 K-Culture 가치를 함께할 수 있는 모든 브랜드와 협력합니다. 맞춤형 파트너십 플랜을 제안해 드립니다.', en: 'Absolutely. K-GROUND works with brands of all sizes that share K-Culture values. We offer customized partnership plans tailored to your needs.', ja: 'もちろんです。K-GROUNDは規模に関係なく、K-Cultureの価値を共有できるすべてのブランドと協力します。カスタムパートナーシッププランをご提案します。', zh: '当然可以。K-GROUND与所有认同K-Culture价值观的品牌合作，无论规模大小。我们提供量身定制的合作方案。', th: 'แน่นอน K-GROUND ร่วมงานกับแบรนด์ทุกขนาดที่แบ่งปันคุณค่า K-Culture เราเสนอแผนพันธมิตรเฉพาะที่ตรงกับความต้องการของคุณ' }
    }
  ];

  // Achievement stats
  const achievements = [
    { value: { ko: '100만+', en: '1M+', ja: '100万+', zh: '100万+', th: '1M+' }, label: { ko: '누적 방문객', en: 'Total Visitors', ja: '累計来場者', zh: '累计访客', th: 'ผู้เยี่ยมชมทั้งหมด' } },
    { value: { ko: '15+', en: '15+', ja: '15+', zh: '15+', th: '15+' }, label: { ko: '브랜드 파트너', en: 'Brand Partners', ja: 'ブランドパートナー', zh: '品牌合作伙伴', th: 'พันธมิตรแบรนด์' } },
    { value: { ko: '5개국', en: '5 Countries', ja: '5カ国', zh: '5个国家', th: '5 ประเทศ' }, label: { ko: '글로벌 거점', en: 'Global Presence', ja: 'グローバル拠点', zh: '全球布局', th: 'เครือข่ายทั่วโลก' } },
    { value: { ko: '50+', en: '50+', ja: '50+', zh: '50+', th: '50+' }, label: { ko: '팝업 이벤트', en: 'Popup Events', ja: 'ポップアップイベント', zh: '快闪活动', th: 'กิจกรรมป๊อปอัพ' } }
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
            {getText(texts.badge)}
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight whitespace-pre-line">
            {getText(texts.headline)}
          </h2>

          {/* Subtitle */}
          <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            {getText(texts.subtitle)}
          </p>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {achievements.map((stat, idx) => (
              <div key={idx} className="bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/30 shadow-lg">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{getText(stat.value)}</p>
                <p className="text-sm text-white/80">{getText(stat.label)}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all flex items-center justify-center gap-2">
              <Download size={20} />
              {getText(texts.downloadProposal)}
            </button>
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white font-bold rounded-full hover:bg-white hover:text-dark transition-all flex items-center justify-center gap-2">
              <Calendar size={20} />
              {getText(texts.bookMeeting)}
            </button>
          </div>
        </div>

        {/* Partnership Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {getText(texts.partnershipTypesTitle)}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnershipTypes.map((type, idx) => (
              <div key={idx} className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all group shadow-lg">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {type.icon}
                </div>
                <h4 className="font-bold text-lg mb-2 text-white">
                  {getText(type.title)}
                </h4>
                <p className="text-sm text-white/80 mb-4">
                  {getText(type.desc)}
                </p>
                <ul className="space-y-2">
                  {(type.benefits[language] || type.benefits.en).map((benefit, bidx) => (
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
            {getText(texts.faqTitle)}
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
                    {getText(faq.question)}
                  </span>
                  {openFaq === idx ? <ChevronUp size={20} className="text-primary" /> : <ChevronDown size={20} className="text-white/70" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-white/90 text-sm leading-relaxed bg-white/5">
                    {getText(faq.answer)}
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
                <p className="text-sm text-white/80">{getText(texts.emailLabel)}</p>
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
                <p className="text-sm text-white/80">{getText(texts.phoneLabel)}</p>
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
              {getText(texts.quickResponse)}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              {getText(texts.ndaAvailable)}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              {getText(texts.customProposals)}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              {getText(texts.freeConsultation)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
