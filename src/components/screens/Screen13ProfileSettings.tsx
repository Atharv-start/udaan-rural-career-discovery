import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  M3TopAppBar, 
  M3Button, 
  M3Card, 
  M3BottomNavBar, 
  AndroidStatusBar 
} from '../common/MaterialComponents';
import { 
  Globe, 
  UserCheck, 
  Volume2, 
  VolumeX, 
  Wifi, 
  WifiOff, 
  RefreshCw, 
  ShieldCheck, 
  Trash2, 
  Code2, 
  Check, 
  Info,
  Sliders
} from 'lucide-react';

export const Screen13ProfileSettings: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    role, 
    setRole, 
    isOffline, 
    setIsOffline, 
    lastSyncTime, 
    triggerManualSync, 
    readAloudEnabled, 
    setReadAloudEnabled, 
    resetAllData, 
    navigateTo, 
    showSnackbar,
    playSpeech
  } = useApp();

  const [confirmReset, setConfirmReset] = useState(false);

  const handleToggleOffline = () => {
    const nextState = !isOffline;
    setIsOffline(nextState);
    showSnackbar(
      nextState 
        ? (language === 'hi' ? 'ऑफलाइन मोड सक्रिय — स्थानीय डेटा उपयोग हो रहा है' : 'Offline mode active — using local database')
        : (language === 'hi' ? 'ऑनलाइन मोड सक्रिय' : 'Online mode restored')
    );
  };

  const handleToggleSpeech = () => {
    const next = !readAloudEnabled;
    setReadAloudEnabled(next);
    showSnackbar(
      next 
        ? (language === 'hi' ? 'बोलकर सुनाना चालू' : 'Audio read-aloud enabled')
        : (language === 'hi' ? 'बोलकर सुनाना बंद' : 'Audio read-aloud muted')
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#202B27] pb-24 max-w-lg mx-auto">
      <AndroidStatusBar isOffline={isOffline} />
      <M3TopAppBar
        title={language === 'hi' ? 'प्रोफाइल एवं सेटिंग्स' : 'Profile & Settings'}
        subtitle={language === 'hi' ? 'भाषा, ऑफलाइन एवं प्राथमिकताएं' : 'Language, Offline & Preferences'}
        showBack={true}
        onBack={() => navigateTo(role === 'facilitator' ? 'facilitator_home' : 'student_home')}
        readAloudText={
          language === 'hi'
            ? 'सेटिंग्स पृष्ठ। भाषा बदलें, भूमिका चुनें, ऑफलाइन मोड जांचें।'
            : 'Settings page. Manage language, switch between student and facilitator roles, and check offline sync.'
        }
      />

      <main className="p-4 space-y-4">
        {/* Language Selection Setting */}
        <section className="bg-white rounded-[20px] p-4 border border-[#21866F]/15">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="w-4 h-4 text-[#176B5B]" />
            <h3 className="text-xs font-bold text-[#202B27] uppercase tracking-wider">
              {language === 'hi' ? 'पसंदीदा भाषा (Language)' : 'Preferred Language'}
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setLanguage('hi')}
              className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                language === 'hi'
                  ? 'border-[#21866F] bg-[#DDF3E8] text-[#176B5B] font-bold shadow-xs'
                  : 'border-[#21866F]/15 bg-[#FAF8F1] text-[#202B27]'
              }`}
            >
              <div>
                <p className="text-sm font-['Noto_Sans_Devanagari'] font-bold">हिन्दी</p>
                <p className="text-[10px] text-[#65736C]">सरल भारतीय हिंदी</p>
              </div>
              {language === 'hi' && <Check className="w-4 h-4 text-[#176B5B]" />}
            </button>

            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                language === 'en'
                  ? 'border-[#21866F] bg-[#DDF3E8] text-[#176B5B] font-bold shadow-xs'
                  : 'border-[#21866F]/15 bg-[#FAF8F1] text-[#202B27]'
              }`}
            >
              <div>
                <p className="text-sm font-bold">English</p>
                <p className="text-[10px] text-[#65736C]">Clear Indian English</p>
              </div>
              {language === 'en' && <Check className="w-4 h-4 text-[#176B5B]" />}
            </button>
          </div>
        </section>

        {/* User Role Switch */}
        <section className="bg-white rounded-[20px] p-4 border border-[#21866F]/15">
          <div className="flex items-center gap-2 mb-3">
            <UserCheck className="w-4 h-4 text-[#176B5B]" />
            <h3 className="text-xs font-bold text-[#202B27] uppercase tracking-wider">
              {language === 'hi' ? 'भूमिका (Active Role)' : 'Active Role Mode'}
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setRole('student');
                showSnackbar(language === 'hi' ? 'छात्र मोड सक्रिय' : 'Student Mode Active');
              }}
              className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                role === 'student'
                  ? 'border-[#21866F] bg-[#DDF3E8] text-[#176B5B] font-bold'
                  : 'border-[#21866F]/15 bg-[#FAF8F1] text-[#202B27]'
              }`}
            >
              <div>
                <p className="text-sm font-bold">
                  {language === 'hi' ? 'विद्यार्थी (Student)' : 'Student'}
                </p>
                <p className="text-[10px] text-[#65736C]">
                  {language === 'hi' ? 'करियर व योजनाएं' : 'Discovery & Path'}
                </p>
              </div>
              {role === 'student' && <Check className="w-4 h-4 text-[#176B5B]" />}
            </button>

            <button
              type="button"
              onClick={() => {
                setRole('facilitator');
                showSnackbar(language === 'hi' ? 'शिक्षक मोड सक्रिय' : 'Facilitator Mode Active');
              }}
              className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                role === 'facilitator'
                  ? 'border-[#21866F] bg-[#DDF3E8] text-[#176B5B] font-bold'
                  : 'border-[#21866F]/15 bg-[#FAF8F1] text-[#202B27]'
              }`}
            >
              <div>
                <p className="text-sm font-bold">
                  {language === 'hi' ? 'शिक्षक (Teacher)' : 'Facilitator'}
                </p>
                <p className="text-[10px] text-[#65736C]">
                  {language === 'hi' ? 'छात्र रोस्टर व नोट्स' : 'Roster & Guidance'}
                </p>
              </div>
              {role === 'facilitator' && <Check className="w-4 h-4 text-[#176B5B]" />}
            </button>
          </div>
        </section>

        {/* Accessibility & Audio Voice Setting */}
        <section className="bg-white rounded-[20px] p-4 border border-[#21866F]/15">
          <div className="flex items-center gap-2 mb-3">
            <Sliders className="w-4 h-4 text-[#176B5B]" />
            <h3 className="text-xs font-bold text-[#202B27] uppercase tracking-wider">
              {language === 'hi' ? 'सुलभता एवं ऑडियो (Accessibility)' : 'Accessibility & Voice'}
            </h3>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F1] border border-[#21866F]/10">
            <div className="flex items-center gap-3">
              {readAloudEnabled ? (
                <Volume2 className="w-5 h-5 text-[#21866F]" />
              ) : (
                <VolumeX className="w-5 h-5 text-[#65736C]" />
              )}
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#202B27]">
                  {language === 'hi' ? 'बोलकर सुनाएं (Read Aloud TTS)' : 'Text-to-Speech Read Aloud'}
                </p>
                <p className="text-[10px] text-[#65736C]">
                  {language === 'hi' ? 'कम साक्षरता वाले छात्रों हेतु ऑडियो सहायता' : 'Audio guidance for low-literacy learners'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleToggleSpeech}
              className={`w-12 h-6 rounded-full transition-colors relative select-none ${
                readAloudEnabled ? 'bg-[#21866F]' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 rounded-full bg-white shadow-sm absolute top-0.5 transition-transform ${
                readAloudEnabled ? 'right-0.5' : 'left-0.5'
              }`} />
            </button>
          </div>
        </section>

        {/* Offline Mode & Sync */}
        <section className="bg-white rounded-[20px] p-4 border border-[#21866F]/15">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              {isOffline ? (
                <WifiOff className="w-4 h-4 text-[#B3261E]" />
              ) : (
                <Wifi className="w-4 h-4 text-[#21866F]" />
              )}
              <h3 className="text-xs font-bold text-[#202B27] uppercase tracking-wider">
                {language === 'hi' ? 'ऑफलाइन डेटा एवं सिंक' : 'Offline Data & Sync'}
              </h3>
            </div>

            <button
              type="button"
              onClick={handleToggleOffline}
              className={`text-[11px] font-bold px-2.5 py-1 rounded-full border transition-all ${
                isOffline 
                  ? 'bg-[#B3261E]/10 text-[#B3261E] border-[#B3261E]/30' 
                  : 'bg-[#DDF3E8] text-[#176B5B] border-[#21866F]/20'
              }`}
            >
              {isOffline 
                ? (language === 'hi' ? 'ऑफलाइन सक्रिय' : 'Offline Mode') 
                : (language === 'hi' ? 'ऑनलाइन' : 'Online Mode')}
            </button>
          </div>

          <p className="text-xs text-[#65736C] leading-relaxed">
            {language === 'hi'
              ? 'उड़ान के सभी 30+ करियर, 20+ सरकारी योजनाएं और विद्यार्थी प्रोफाइल बिना इंटरनेट के काम करते हैं।'
              : 'All 30+ careers, 20+ schemes, and student notes remain fully accessible with zero network.'}
          </p>

          <div className="mt-3 pt-3 border-t border-[#21866F]/10 flex items-center justify-between">
            <span className="text-[11px] text-[#65736C]">
              {language === 'hi' ? `अंतिम सिंक: ${lastSyncTime}` : `Last sync: ${lastSyncTime}`}
            </span>

            <button
              onClick={triggerManualSync}
              className="text-xs font-bold text-[#176B5B] hover:underline flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'डेटा सिंक करें' : 'Manual Sync'}</span>
            </button>
          </div>
        </section>

        {/* Hackathon Android Jetpack Compose Inspector */}
        <section className="bg-gradient-to-r from-[#DDF3E8] to-white rounded-[20px] p-4 border-2 border-[#21866F]/30">
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="w-5 h-5 text-[#176B5B]" />
            <h3 className="text-xs font-bold text-[#176B5B] uppercase tracking-wider">
              Native Android Kotlin Source Inspector
            </h3>
          </div>
          <p className="text-xs text-[#202B27] leading-relaxed">
            Inspect the complete Kotlin Jetpack Compose code architecture, Single-Activity pattern, M3 Theme, and Room repository interfaces.
          </p>
          <M3Button
            variant="tonal"
            onClick={() => navigateTo('kotlin_code_explorer')}
            className="w-full mt-3 text-xs font-bold min-h-[42px]"
          >
            View Native Jetpack Compose Code
          </M3Button>
        </section>

        {/* Privacy Information */}
        <section className="p-3.5 rounded-2xl bg-white border border-[#21866F]/15 flex items-start gap-2.5 text-xs text-[#65736C]">
          <ShieldCheck className="w-4 h-4 text-[#21866F] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {language === 'hi'
              ? 'गोपनीयता नीति: उड़ान कभी भी आधार संख्या, बैंक पिन या सटीक व्यक्तिगत स्थान नहीं मांगता। डेटा केवल आपके फोन में सुरक्षित रहता है।'
              : 'Privacy pledge: Udaan never requires Aadhaar numbers or bank passwords. All student responses reside locally on device.'}
          </p>
        </section>

        {/* Clear Data Reset Button */}
        <div className="pt-2 text-center">
          {confirmReset ? (
            <div className="p-3 rounded-2xl bg-red-50 border border-red-200 text-xs">
              <p className="font-bold text-red-800">
                {language === 'hi' ? 'क्या आप सभी डेमो डेटा रीसेट करना चाहते हैं?' : 'Reset all demonstration data?'}
              </p>
              <div className="flex items-center justify-center gap-3 mt-2">
                <button
                  onClick={() => setConfirmReset(false)}
                  className="px-3 py-1.5 rounded-lg bg-gray-200 text-gray-700 font-semibold"
                >
                  {language === 'hi' ? 'रद्द करें' : 'Cancel'}
                </button>
                <button
                  onClick={() => {
                    setConfirmReset(false);
                    resetAllData();
                  }}
                  className="px-3 py-1.5 rounded-lg bg-red-600 text-white font-semibold"
                >
                  {language === 'hi' ? 'हाँ, रीसेट करें' : 'Yes, Reset'}
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setConfirmReset(true)}
              className="text-xs font-semibold text-[#B3261E] hover:underline flex items-center justify-center gap-1.5 mx-auto"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'डेमो डेटा रीसेट करें' : 'Clear Local Demo Data'}</span>
            </button>
          )}
        </div>
      </main>

      <M3BottomNavBar />
    </div>
  );
};
