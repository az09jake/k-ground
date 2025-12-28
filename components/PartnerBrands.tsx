import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shirt, UtensilsCrossed, Sparkles, Star, TrendingUp, Users, Building2, ArrowRight, CheckCircle2, Zap, Globe, Award } from 'lucide-react';

type LangText = { ko: string; en: string; ja: string; zh: string; th: string };

export const PartnerBrands: React.FC = () => {
  const { language, getText } = useLanguage();
  const [hoveredBrand, setHoveredBrand] = React.useState<string | null>(null);
  const [activeCategory, setActiveCategory] = React.useState<'fashion' | 'food' | 'beauty'>('fashion');

  // UI texts
  const texts = {
    partnerBrands: { ko: '파트너 브랜드', en: 'Partner Brands', ja: 'パートナーブランド', zh: '合作品牌', th: 'แบรนด์พันธมิตร' },
    partnerDesc: { ko: 'K-GROUND와 함께 글로벌 시장을 공략하는 검증된 파트너들', en: 'Verified partners conquering global markets with K-GROUND', ja: 'K-GROUNDと共にグローバル市場を攻略する検証済みパートナー', zh: '与K-GROUND一起开拓全球市场的认证合作伙伴', th: 'พันธมิตรที่ได้รับการยืนยันในการพิชิตตลาดโลกกับ K-GROUND' },
    learnMore: { ko: '자세히 보기', en: 'Learn more', ja: '詳しく見る', zh: '了解更多', th: 'เรียนรู้เพิ่มเติม' },
    partnershipBenefits: { ko: '파트너십 혜택', en: 'Partnership Benefits', ja: 'パートナーシップ特典', zh: '合作优势', th: 'สิทธิประโยชน์พันธมิตร' },
    bottomCtaDesc: { ko: '글로벌 K-Culture 시장 진출을 위한 최적의 파트너십을 제안합니다', en: 'We offer the best partnership for global K-Culture market expansion', ja: 'グローバルK-Culture市場進出のための最適なパートナーシップを提案します', zh: '我们为全球K-Culture市场扩展提供最佳合作方案', th: 'เราเสนอพันธมิตรที่ดีที่สุดสำหรับการขยายตลาด K-Culture ทั่วโลก' },
    partnerInquiry: { ko: '파트너 문의하기', en: 'Partner Inquiry', ja: 'パートナーお問い合わせ', zh: '合作咨询', th: 'สอบถามพันธมิตร' },
    downloadProposal: { ko: '제안서 다운로드', en: 'Download Proposal', ja: '提案書ダウンロード', zh: '下载提案', th: 'ดาวน์โหลดข้อเสนอ' },
    celebCollaboration: { ko: '셀럽 콜라보레이션', en: 'Celebrity Collaboration', ja: 'セレブコラボレーション', zh: '明星合作', th: 'ความร่วมมือกับคนดัง' },
    celebDesc: { ko: 'K-GROUND × 스타 아티스트와 함께하는 특별한 경험', en: 'Special experiences with K-GROUND × Star Artists', ja: 'K-GROUND × スターアーティストとの特別な体験', zh: 'K-GROUND × 明星艺术家的特别体验', th: 'ประสบการณ์พิเศษกับ K-GROUND × Star Artists' },
    representativeWorks: { ko: '대표작', en: 'Representative Works', ja: '代表作', zh: '代表作品', th: 'ผลงานตัวแทน' },
    awards: { ko: '수상 이력', en: 'Awards', ja: '受賞歴', zh: '获奖经历', th: 'รางวัล' },
    moreCollaborations: { ko: '추가 콜라보레이션 진행 중', en: 'More Collaborations Coming', ja: '追加コラボレーション進行中', zh: '更多合作进行中', th: 'ความร่วมมือเพิ่มเติมกำลังจะมา' },
    moreToCome: { ko: '+ 더 많은 협업 예정', en: '+ More to come', ja: '+ さらに追加予定', zh: '+ 更多即将推出', th: '+ เพิ่มเติมกำลังมา' },
  };

  const fashionBrands = [
    { name: 'O!Oi', nameLocal: { ko: '오아이오아이', en: 'O!Oi', ja: 'オイオイ', zh: 'O!Oi', th: 'O!Oi' }, desc: { ko: '국내 대표 스트릿 캐주얼 브랜드', en: 'Leading Korean street casual brand', ja: '韓国代表ストリートカジュアルブランド', zh: '韩国代表性街头休闲品牌', th: 'แบรนด์แคชชวลสตรีทชั้นนำของเกาหลี' }, highlight: true },
    { name: 'SCULPTOR', nameLocal: { ko: '스컬프터', en: 'SCULPTOR', ja: 'スカルプター', zh: 'SCULPTOR', th: 'SCULPTOR' }, desc: { ko: '프리미엄 스트릿웨어', en: 'Premium streetwear', ja: 'プレミアムストリートウェア', zh: '高端街头服饰', th: 'สตรีทแวร์พรีเมียม' }, highlight: false },
    { name: 'LA MODE CHIEF', nameLocal: { ko: '라모드치프', en: 'LA MODE CHIEF', ja: 'ラモードチーフ', zh: 'LA MODE CHIEF', th: 'LA MODE CHIEF' }, desc: { ko: '뉴트로 감성 패션', en: 'Newtro fashion brand', ja: 'ニュートロ感性ファッション', zh: '新复古风时尚', th: 'แฟชั่นนิวโทร' }, highlight: false },
    { name: 'WONDER PLACE', nameLocal: { ko: '원더플레이스', en: 'WONDER PLACE', ja: 'ワンダープレイス', zh: 'WONDER PLACE', th: 'WONDER PLACE' }, desc: { ko: '트렌디 라이프스타일', en: 'Trendy lifestyle brand', ja: 'トレンディライフスタイル', zh: '时尚生活方式', th: 'ไลฟ์สไตล์แบรนด์ทันสมัย' }, highlight: false },
  ];

  const foodBrands = [
    { name: 'KKOLIRANG', nameLocal: { ko: '꼬리랑', en: 'KKOLIRANG', ja: 'コリラン', zh: 'KKOLIRANG', th: 'KKOLIRANG' }, desc: { ko: '프리미엄 한식 라면 브랜드', en: 'Premium Korean ramen brand', ja: 'プレミアム韓国ラーメンブランド', zh: '高端韩国拉面品牌', th: 'แบรนด์ราเมนเกาหลีพรีเมียม' }, highlight: true },
    { name: 'PADOCHIGI', nameLocal: { ko: '파도치기면', en: 'PADOCHIGI', ja: 'パドチギ', zh: 'PADOCHIGI', th: 'PADOCHIGI' }, desc: { ko: '한국 전통 면요리', en: 'Traditional Korean noodles', ja: '韓国伝統麺料理', zh: '韩国传统面食', th: 'บะหมี่เกาหลีดั้งเดิม' }, highlight: false },
  ];

  const beautyBrands = [
    { name: 'WONDER MON', nameLocal: { ko: '원더몬', en: 'WONDER MON', ja: 'ワンダーモン', zh: 'WONDER MON', th: 'WONDER MON' }, desc: { ko: 'AI 퍼스널컬러 진단 뷰티', en: 'AI personal color beauty', ja: 'AIパーソナルカラー診断ビューティー', zh: 'AI个人色彩诊断美妆', th: 'AI วิเคราะห์สีส่วนตัวบิวตี้' }, highlight: true },
    { name: 'boon7shop', nameLocal: { ko: '분세븐샵', en: 'boon7shop', ja: 'ブンセブンショップ', zh: 'boon7shop', th: 'boon7shop' }, desc: { ko: 'K-뷰티 편집샵', en: 'K-Beauty select shop', ja: 'K-ビューティーセレクトショップ', zh: 'K-Beauty精选店', th: 'ร้านคัดสรร K-Beauty' }, highlight: false },
  ];

  const categoryConfig = {
    fashion: { brands: fashionBrands, icon: <Shirt size={24} />, color: 'purple', gradient: 'from-purple-500 to-pink-500' },
    food: { brands: foodBrands, icon: <UtensilsCrossed size={24} />, color: 'orange', gradient: 'from-orange-500 to-red-500' },
    beauty: { brands: beautyBrands, icon: <Sparkles size={24} />, color: 'teal', gradient: 'from-teal-500 to-cyan-500' },
  };

  const partnershipBenefits = [
    { icon: <Globe size={20} />, title: { ko: '글로벌 진출 지원', en: 'Global Expansion', ja: 'グローバル展開支援', zh: '全球扩展支持', th: 'สนับสนุนการขยายตัวทั่วโลก' }, desc: { ko: '아시아 5개국 유통망', en: '5 Asian markets', ja: 'アジア5カ国流通網', zh: '5个亚洲市场', th: '5 ตลาดเอเชีย' } },
    { icon: <Zap size={20} />, title: { ko: '빠른 시장 진입', en: 'Fast Market Entry', ja: '迅速な市場参入', zh: '快速市场进入', th: 'เข้าตลาดอย่างรวดเร็ว' }, desc: { ko: '검증된 네트워크', en: 'Verified network', ja: '検証済みネットワーク', zh: '经过验证的网络', th: 'เครือข่ายที่ผ่านการตรวจสอบ' } },
    { icon: <Award size={20} />, title: { ko: '브랜드 가치 제고', en: 'Brand Enhancement', ja: 'ブランド価値向上', zh: '品牌价值提升', th: 'เพิ่มคุณค่าแบรนด์' }, desc: { ko: 'K-Culture 프리미엄', en: 'K-Culture premium', ja: 'K-Cultureプレミアム', zh: 'K-Culture高端', th: 'K-Culture พรีเมียม' } },
    { icon: <Users size={20} />, title: { ko: '팬덤 마케팅', en: 'Fandom Marketing', ja: 'ファンダムマーケティング', zh: '粉丝营销', th: 'การตลาดแฟนด้อม' }, desc: { ko: '충성 고객 확보', en: 'Loyal customer base', ja: '忠実な顧客確保', zh: '忠实客户群', th: 'ฐานลูกค้าที่ภักดี' } },
  ];

  // Celebrity collaborations - Yeo Jin-goo featured
  const mainCeleb = {
    name: { ko: '여진구', en: 'Yeo Jin-goo', ja: 'ヨ・ジング', zh: '吕珍九', th: 'ยอจินกู' },
    title: { ko: '대한민국 대표 배우', en: 'Korea\'s Leading Actor', ja: '韓国代表俳優', zh: '韩国代表演员', th: 'นักแสดงชั้นนำของเกาหลี' },
    career: { ko: '20년차 연기 경력', en: '20 Years Acting Career', ja: '演技歴20年', zh: '20年演艺生涯', th: 'อาชีพการแสดง 20 ปี' },
    bio: { ko: '1997년생, 2005년 영화 "슬픈 영화"로 데뷔. 청룡영화상 신인남우상 수상. 드라마와 영화를 넘나드는 연기파 배우.', en: 'Born 1997, debuted in 2005 film "Sad Movie". Blue Dragon Film Award winner. Versatile actor across dramas and films.', ja: '1997年生まれ、2005年映画「悲しい映画」でデビュー。青龍映画賞新人男優賞受賞。ドラマと映画を跨ぐ演技派俳優。', zh: '1997年生，2005年凭电影《悲伤电影》出道。青龙电影奖新人男演员奖得主。跨越电视剧和电影的实力派演员。', th: 'เกิดปี 1997 เปิดตัวในภาพยนตร์ "Sad Movie" ปี 2005 ผู้ชนะรางวัล Blue Dragon Film Award นักแสดงที่มีความหลากหลายในละครและภาพยนตร์' },
    works: { ko: ['호텔 델루나', '왕이 된 남자', '화이: 괴물을 삼킨 아이', '하이재킹'], en: ['Hotel Del Luna', 'The Crowned Clown', 'Hwayi: A Monster Boy', 'Hijacking'], ja: ['ホテルデルーナ', '王になった男', 'ファイ：怪物を飲み込んだ子供', 'ハイジャック'], zh: ['德鲁纳酒店', '成为王的男人', '怪物', '劫机'], th: ['Hotel Del Luna', 'The Crowned Clown', 'Hwayi: A Monster Boy', 'Hijacking'] },
    collab: { ko: '"Trace of Light" 도쿄 팝업스토어 콜라보레이션', en: '"Trace of Light" Tokyo Pop-up Store Collaboration', ja: '"Trace of Light" 東京ポップアップストアコラボ', zh: '"Trace of Light" 东京快闪店合作', th: '"Trace of Light" ความร่วมมือป๊อปอัพสโตร์โตเกียว' },
    achievements: { ko: ['청룡영화상 신인남우상', 'KBS 연기대상 남자 최우수상', '백상예술대상 남자 최우수연기상'], en: ['Blue Dragon Film Award - Best New Actor', 'KBS Drama Awards - Best Actor', 'Baeksang Arts Award - Best Actor'], ja: ['青龍映画賞新人男優賞', 'KBS演技大賞男子最優秀賞', '百想芸術大賞男子最優秀演技賞'], zh: ['青龙电影奖最佳新人男演员', 'KBS演技大赏最佳男演员', '百想艺术大赏最佳男演员'], th: ['Blue Dragon Film Award - นักแสดงหน้าใหม่ยอดเยี่ยม', 'KBS Drama Awards - นักแสดงนำชาย', 'Baeksang Arts Award - นักแสดงนำชาย'] },
  };

  const otherCelebs = [
    { name: { ko: '협업 진행중', en: 'In Progress', ja: '協業進行中', zh: '合作进行中', th: 'กำลังดำเนินการ' }, type: { ko: '배우/가수', en: 'Actor/Singer', ja: '俳優/歌手', zh: '演员/歌手', th: 'นักแสดง/นักร้อง' } },
    { name: { ko: '협업 진행중', en: 'In Progress', ja: '協業進行中', zh: '合作进行中', th: 'กำลังดำเนินการ' }, type: { ko: '인플루언서', en: 'Influencer', ja: 'インフルエンサー', zh: '网红', th: 'อินฟลูเอนเซอร์' } },
  ];

  // Partnership stats
  const partnerStats = [
    { icon: <Building2 size={20} />, value: { ko: '15+', en: '15+', ja: '15+', zh: '15+', th: '15+' }, label: { ko: '브랜드 파트너', en: 'Brand Partners', ja: 'ブランドパートナー', zh: '品牌合作伙伴', th: 'พันธมิตรแบรนด์' } },
    { icon: <Star size={20} />, value: { ko: '10+', en: '10+', ja: '10+', zh: '10+', th: '10+' }, label: { ko: '셀럽 콜라보', en: 'Celeb Collabs', ja: 'セレブコラボ', zh: '明星合作', th: 'ร่วมงานเซเลบ' } },
    { icon: <Users size={20} />, value: { ko: '100만+', en: '1M+', ja: '100万+', zh: '100万+', th: '1M+' }, label: { ko: '누적 고객', en: 'Total Customers', ja: '累計顧客', zh: '累计客户', th: 'ลูกค้าทั้งหมด' } },
    { icon: <TrendingUp size={20} />, value: { ko: '200%', en: '200%', ja: '200%', zh: '200%', th: '200%' }, label: { ko: '연평균 성장률', en: 'YoY Growth', ja: '年平均成長率', zh: '年均增长率', th: 'การเติบโต YoY' } },
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
            {getText(texts.partnerBrands)}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {getText(texts.partnerDesc)}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {partnerStats.map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-white">{getText(stat.value)}</p>
              <p className="text-sm text-gray-400">{getText(stat.label)}</p>
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
                {getText(brand.nameLocal)}
              </p>
              <p className={`text-sm leading-relaxed ${brand.highlight ? 'text-white/90' : 'text-gray-400'}`}>
                {getText(brand.desc)}
              </p>

              {/* Hover Arrow */}
              <div className={`mt-6 flex items-center gap-2 text-sm font-semibold ${brand.highlight ? 'text-white' : 'text-primary'}`}>
                <span>{getText(texts.learnMore)}</span>
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
            {getText(texts.partnershipBenefits)}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-white text-lg mb-2">
                  {getText(benefit.title)}
                </h4>
                <p className="text-sm text-gray-400">
                  {getText(benefit.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6 text-lg">
            {getText(texts.bottomCtaDesc)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#cta" className="px-10 py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all hover:scale-105 flex items-center justify-center gap-2">
              {getText(texts.partnerInquiry)}
              <ArrowRight size={20} />
            </a>
            <button className="px-10 py-5 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/30">
              {getText(texts.downloadProposal)}
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
              {getText(texts.celebCollaboration)}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {getText(texts.celebDesc)}
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
                    alt={getText(mainCeleb.name)}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                  {/* Name Overlay on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-5xl md:text-7xl font-bold text-white font-heading tracking-tight drop-shadow-2xl">
                      {getText(mainCeleb.name)}
                    </p>
                    <p className="text-xl text-pink-300 font-semibold mt-2">
                      {getText(mainCeleb.title)}
                    </p>
                  </div>

                  {/* Career Badge */}
                  <div className="absolute top-6 left-6 bg-gradient-to-br from-pink-500 to-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm">
                    {getText(mainCeleb.career)}
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
                {getText(mainCeleb.bio)}
              </p>

              {/* Collaboration Project - Highlighted */}
              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 border border-pink-500/30 mb-8">
                <p className="text-xs text-pink-400 font-bold uppercase tracking-widest mb-2">
                  K-GROUND Collaboration
                </p>
                <p className="text-2xl lg:text-3xl font-bold text-white">
                  {getText(mainCeleb.collab)}
                </p>
              </div>

              {/* Two Column Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Representative Works */}
                <div>
                  <p className="text-sm text-gray-400 font-semibold mb-4 uppercase tracking-wider">
                    {getText(texts.representativeWorks)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(mainCeleb.works[language] || mainCeleb.works.en).map((work, idx) => (
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
                    {getText(texts.awards)}
                  </p>
                  <div className="space-y-3">
                    {(mainCeleb.achievements[language] || mainCeleb.achievements.en).map((achievement, idx) => (
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
                  {getText(texts.moreCollaborations)}
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
                          {getText(celeb.name)}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {getText(celeb.type)}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 px-4 py-2.5 text-pink-400 text-sm font-semibold">
                    {getText(texts.moreToCome)}
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
