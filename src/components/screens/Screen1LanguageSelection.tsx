import React from 'react';
import { useApp } from '../../context/AppContext';
import { M3Button, AndroidStatusBar } from '../common/MaterialComponents';
import { Sparkles, Check, Globe } from 'lucide-react';

export const Screen1LanguageSelection: React.FC = () => {
  const { language, setLanguage, navigateTo, playSpeech } = useApp();

  const handleSelectLanguage = (lang: 'en' | 'hi') => {
    setLanguage(lang);
    if (lang === 'hi') {
      playSpeech('उड़ान में आपका स्वागत है। अपनी भाषा चुनें।');
    } else {
      playSpeech('Welcome to Udaan. Choose your language.');
    }
  };

  const handleContinue = () => {
    navigateTo('role_selection');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF8F1] text-[#202B27] p-6 max-w-lg mx-auto">
      <div>
        <AndroidStatusBar />

        {/* Brand Icon and Header */}
        <div className="mt-8 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-3xl bg-[#21866F] text-white flex items-center justify-center shadow-lg shadow-[#21866F]/25 mb-6 relative">
            <svg viewBox="0 0 48 48" className="w-12 h-12 fill-none stroke-white stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 36C14 36 22 28 26 14C32 20 42 22 42 22" />
              <path d="M26 14L32 26" />
              <path d="M22 22L12 38" />
              <circle cx="36" cy="12" r="3" fill="#F2B544" stroke="#F2B544" />
            </svg>
            <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#F2B544] flex items-center justify-center shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#202B27]" />
            </div>
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-[#176B5B] bg-[#DDF3E8] px-3 py-1 rounded-full mb-3">
            Udaan · उड़ान
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#202B27] leading-tight tracking-tight">
            Your future starts here.
          </h1>
          <p className="text-lg font-semibold text-[#176B5B] mt-1 font-['Noto_Sans_Devanagari']">
            आपका भविष्य यहीं से शुरू होता है।
          </p>

          <p className="text-sm text-[#65736C] max-w-xs mt-3 leading-relaxed">
            AI-powered career pathways and livelihood guide for rural Indian youth.
          </p>
        </div>

        {/* Language Selection Buttons */}
        <div className="mt-8 space-y-4">
          <label className="block text-xs font-semibold text-[#65736C] uppercase tracking-wider text-center">
            {language === 'hi' ? 'अपनी पसंदीदा भाषा चुनें' : 'Select your preferred language'}
          </label>

          {/* Hindi Option */}
          <button
            type="button"
            onClick={() => handleSelectLanguage('hi')}
            className={`w-full min-h-[68px] p-4 rounded-2xl border-2 transition-all flex items-center justify-between text-left select-none active:scale-[0.99] ${
              language === 'hi'
                ? 'border-[#21866F] bg-white shadow-md shadow-[#21866F]/10'
                : 'border-[#21866F]/20 bg-white/70 hover:bg-white'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg font-['Noto_Sans_Devanagari'] ${
                language === 'hi' ? 'bg-[#DDF3E8] text-[#176B5B]' : 'bg-[#FAF8F1] text-[#65736C]'
              }`}>
                अ
              </div>
              <div>
                <p className="text-lg font-bold text-[#202B27] font-['Noto_Sans_Devanagari']">हिन्दी</p>
                <p className="text-xs text-[#65736C]">सभी जानकारी सरल हिंदी में</p>
              </div>
            </div>
            {language === 'hi' && (
              <div className="w-7 h-7 rounded-full bg-[#21866F] text-white flex items-center justify-center shadow-xs">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
            )}
          </button>

          {/* English Option */}
          <button
            type="button"
            onClick={() => handleSelectLanguage('en')}
            className={`w-full min-h-[68px] p-4 rounded-2xl border-2 transition-all flex items-center justify-between text-left select-none active:scale-[0.99] ${
              language === 'en'
                ? 'border-[#21866F] bg-white shadow-md shadow-[#21866F]/10'
                : 'border-[#21866F]/20 bg-white/70 hover:bg-white'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                language === 'en' ? 'bg-[#DDF3E8] text-[#176B5B]' : 'bg-[#FAF8F1] text-[#65736C]'
              }`}>
                Aa
              </div>
              <div>
                <p className="text-lg font-bold text-[#202B27]">English</p>
                <p className="text-xs text-[#65736C]">Clear Indian English phrasing</p>
              </div>
            </div>
            {language === 'en' && (
              <div className="w-7 h-7 rounded-full bg-[#21866F] text-white flex items-center justify-center shadow-xs">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
            )}
          </button>
        </div>

        {/* Small explanation */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#65736C] text-center">
          <Globe className="w-4 h-4 text-[#176B5B] shrink-0" />
          <span>
            {language === 'hi' 
              ? 'आप इसे ऐप में कभी भी ऊपर दिए गए बटन से बदल सकते हैं।' 
              : 'You can change this anytime from the top bar.'}
          </span>
        </div>
      </div>

      {/* Bottom Continue Action */}
      <div className="mt-8 pt-4 pb-2">
        <M3Button
          variant="filled"
          onClick={handleContinue}
          className="w-full text-base py-3"
        >
          {language === 'hi' ? 'आगे बढ़ें (Continue)' : 'Continue'}
        </M3Button>
      </div>
    </div>
  );
};
