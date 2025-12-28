import React from 'react';
import { Hero } from './components/Hero';
import { ThemeGrid } from './components/ThemeGrid';
import { O4OFlow } from './components/O4OFlow';
import { WonderMon } from './components/WonderMon';
import { CaseStudies } from './components/CaseStudies';
import { GlobalNetwork } from './components/GlobalNetwork';
import { PartnerBrands } from './components/PartnerBrands';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { LanguageSelector } from './components/LanguageSelector';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // 스크롤 시 헤더 배경 변경
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { labelKo: '테마', labelEn: 'Themes', href: '#themes' },
    { labelKo: 'O4O 모델', labelEn: 'O4O Model', href: '#model' },
    { labelKo: '원더몬', labelEn: 'Wonder Mon', href: '#wondermon' },
    { labelKo: '성공 사례', labelEn: 'Cases', href: '#cases' },
    { labelKo: '글로벌', labelEn: 'Global', href: '#partners' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-all duration-300 ${
      scrolled
        ? 'bg-white shadow-lg border-gray-200'
        : 'bg-black/60 border-white/10'
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`text-2xl font-bold font-heading tracking-tighter transition-colors ${
          scrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'
        }`}>
          K-GROUND
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={`text-sm font-semibold transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white/90 hover:text-primary'
              }`}
            >
              {language === 'ko' ? item.labelKo : item.labelEn}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <LanguageSelector scrolled={scrolled} />
          <button className="hidden sm:flex px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105">
            {language === 'ko' ? '문의하기' : 'Contact Us'}
          </button>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden w-10 h-10 flex items-center justify-center transition-colors ${
              scrolled ? 'text-dark' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden backdrop-blur-lg border-t ${
          scrolled
            ? 'bg-white border-gray-200'
            : 'bg-black/95 border-white/10'
        }`}>
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-lg font-semibold transition-colors py-2 ${
                  scrolled
                    ? 'text-gray-700 hover:text-primary'
                    : 'text-white/80 hover:text-primary'
                }`}
              >
                {language === 'ko' ? item.labelKo : item.labelEn}
              </a>
            ))}
            <button className="w-full mt-4 px-5 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full">
              {language === 'ko' ? '문의하기' : 'Contact Us'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const AppContent: React.FC = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <PartnerBrands />
      <ThemeGrid />
      <O4OFlow />
      <WonderMon />
      <CaseStudies />
      <GlobalNetwork />
      <CTASection />
      <Footer />
    </main>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
