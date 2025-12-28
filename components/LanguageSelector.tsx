import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage, LANGUAGES, Language } from '../contexts/LanguageContext';

interface LanguageSelectorProps {
  scrolled?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ scrolled = false }) => {
  const { language, setLanguage, currentLanguageInfo } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 backdrop-blur-md border rounded-full text-sm font-medium transition-colors ${
          scrolled
            ? 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
            : 'bg-white/10 border-white/30 text-white hover:bg-white/20'
        }`}
      >
        <Globe size={16} />
        <span>{currentLanguageInfo.flag}</span>
        <span className="hidden sm:inline">{currentLanguageInfo.nativeName}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-gray-50 transition-colors ${
                language === lang.code ? 'bg-primary/10 text-primary' : 'text-gray-700'
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <div>
                <div className="font-medium">{lang.nativeName}</div>
                <div className="text-xs text-gray-400">{lang.name}</div>
              </div>
              {language === lang.code && (
                <span className="ml-auto text-primary">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
