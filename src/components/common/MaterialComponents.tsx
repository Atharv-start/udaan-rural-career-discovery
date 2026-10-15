import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Volume2, 
  VolumeX, 
  Wifi, 
  WifiOff, 
  Languages, 
  Home, 
  Compass, 
  Bookmark, 
  Route, 
  User, 
  Users, 
  Sparkles,
  Smartphone,
  Maximize2,
  CheckCircle2
} from 'lucide-react';
import { useApp, ScreenId } from '../../context/AppContext';
import { speechService } from '../../services/speechService';

/**
 * Android 14 System Status Bar
 */
export const AndroidStatusBar: React.FC<{ isOffline?: boolean }> = ({ isOffline }) => {
  const [time] = useState(() => {
    const d = new Date();
    return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
  });

  return (
    <div className="flex items-center justify-between px-5 pt-2 pb-1 text-xs font-medium select-none bg-inherit tracking-tight text-[#202B27]/80">
      <span className="font-semibold text-[13px]">{time}</span>
      <div className="flex items-center gap-2">
        {isOffline ? (
          <div className="flex items-center gap-1 text-[#B3261E] bg-[#B3261E]/10 px-1.5 py-0.5 rounded text-[10px] font-semibold">
            <WifiOff className="w-3 h-3" />
            <span>Offline</span>
          </div>
        ) : (
          <div className="flex items-center gap-1 text-[#21866F] text-[10px] font-medium">
            <Wifi className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">4G</span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <div className="w-5 h-2.5 border border-[#202B27]/60 rounded-xs p-[1px] flex items-center">
            <div className="h-full bg-[#21866F] w-4/5 rounded-2xs" />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Material 3 Top App Bar
 */
interface M3TopAppBarProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  readAloudText?: string;
  actions?: React.ReactNode;
}

export const M3TopAppBar: React.FC<M3TopAppBarProps> = ({
  title,
  subtitle,
  showBack,
  onBack,
  readAloudText,
  actions
}) => {
  const { language, setLanguage, goBack, canGoBack, playSpeech } = useApp();
  const [speaking, setSpeaking] = useState(false);

  const handleSpeech = () => {
    if (speaking) {
      speechService.stop();
      setSpeaking(false);
    } else if (readAloudText) {
      setSpeaking(true);
      speechService.speak(readAloudText, language);
      const checkInterval = setInterval(() => {
        if (!speechService.isSpeaking()) {
          setSpeaking(false);
          clearInterval(checkInterval);
        }
      }, 300);
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-[#FAF8F1]/95 backdrop-blur-md border-b border-[#21866F]/10 px-4 py-2.5 transition-colors">
      <div className="flex items-center justify-between min-h-[44px]">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {(showBack || canGoBack) && (
            <button
              onClick={onBack || goBack}
              aria-label="Navigate back"
              className="min-h-[44px] min-w-[44px] -ml-2 rounded-full flex items-center justify-center text-[#202B27] hover:bg-[#21866F]/10 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-[#176B5B]" />
            </button>
          )}
          <div className="min-w-0">
            <h1 className="text-base font-bold text-[#202B27] leading-tight truncate tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs text-[#65736C] truncate mt-0.5 font-normal">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {readAloudText && (
            <button
              onClick={handleSpeech}
              title={language === 'hi' ? 'बोलकर सुनाएं' : 'Read aloud'}
              aria-label="Read page content aloud"
              className={`min-h-[44px] min-w-[44px] rounded-full flex items-center justify-center transition-all ${
                speaking 
                  ? 'bg-[#F2B544] text-[#202B27] shadow-sm animate-pulse' 
                  : 'text-[#176B5B] hover:bg-[#21866F]/10'
              }`}
            >
              {speaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          )}

          {/* Quick Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            title="Switch Language / भाषा बदलें"
            className="min-h-[44px] px-2.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-[#176B5B] hover:bg-[#21866F]/10 active:scale-95 transition-all"
          >
            <Languages className="w-4 h-4" />
            <span>{language === 'en' ? 'हिन्दी' : 'EN'}</span>
          </button>

          {actions}
        </div>
      </div>
    </header>
  );
};

/**
 * Material 3 Bottom Navigation Bar
 */
export const M3BottomNavBar: React.FC = () => {
  const { currentScreen, navigateTo, role, language } = useApp();

  const studentNavItems: { id: ScreenId; labelEn: string; labelHi: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'student_home', labelEn: 'Home', labelHi: 'होम', icon: Home },
    { id: 'career_discovery', labelEn: 'Careers', labelHi: 'करियर खोज', icon: Compass },
    { id: 'opportunity_finder', labelEn: 'Schemes', labelHi: 'योजनाएं', icon: Bookmark },
    { id: 'learning_path', labelEn: 'My Path', labelHi: 'मार्ग', icon: Route },
    { id: 'profile_settings', labelEn: 'Profile', labelHi: 'प्रोफाइल', icon: User },
  ];

  const facilitatorNavItems: { id: ScreenId; labelEn: string; labelHi: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'facilitator_home', labelEn: 'Roster', labelHi: 'छात्र सूची', icon: Users },
    { id: 'opportunity_finder', labelEn: 'Schemes', labelHi: 'योजनाएं', icon: Bookmark },
    { id: 'profile_settings', labelEn: 'Settings', labelHi: 'सेटिंग्स', icon: User },
  ];

  const items = role === 'facilitator' ? facilitatorNavItems : studentNavItems;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F1]/95 backdrop-blur-md border-t border-[#21866F]/15 px-2 py-1 max-w-lg mx-auto sm:max-w-xl md:max-w-2xl transition-all">
      <div className={`grid grid-cols-${items.length} items-center justify-around h-15`}>
        {items.map(item => {
          const isActive = currentScreen === item.id || 
            (item.id === 'career_discovery' && (currentScreen === 'career_results' || currentScreen === 'career_details' || currentScreen === 'ai_explanation')) ||
            (item.id === 'facilitator_home' && currentScreen === 'facilitator_student_detail');

          const Icon = item.icon;
          const label = language === 'hi' ? item.labelHi : item.labelEn;

          return (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className="flex flex-col items-center justify-center min-h-[48px] py-1 select-none active:scale-95 transition-all group"
            >
              {/* Material 3 active pill background */}
              <div
                className={`flex items-center justify-center w-12 h-7 rounded-full transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#DDF3E8] text-[#176B5B] shadow-xs' 
                    : 'text-[#65736C] group-hover:text-[#202B27]'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-[1.8px]'}`} />
              </div>
              <span
                className={`text-[11px] font-medium tracking-tight mt-0.5 transition-colors whitespace-nowrap ${
                  isActive ? 'text-[#176B5B] font-bold' : 'text-[#65736C]'
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

/**
 * Material 3 Card Component
 */
export const M3Card: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  tonal?: boolean;
  elevation?: 'flat' | 'raised';
}> = ({ children, className = '', onClick, tonal = false, elevation = 'raised' }) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-[20px] transition-all duration-200 ${
        tonal 
          ? 'bg-[#DDF3E8]/50 border border-[#21866F]/15' 
          : 'bg-white border border-[#21866F]/12'
      } ${
        elevation === 'raised' ? 'shadow-[0_4px_16px_rgba(23,107,91,0.06)]' : ''
      } ${onClick ? 'cursor-pointer active:scale-[0.99] hover:border-[#21866F]/30 hover:shadow-md' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * Material 3 Button Component
 */
export const M3Button: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'filled' | 'tonal' | 'outlined' | 'saffron';
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  type?: 'button' | 'submit';
}> = ({
  children,
  onClick,
  variant = 'filled',
  className = '',
  disabled = false,
  icon,
  type = 'button'
}) => {
  const baseStyle = "min-h-[48px] px-5 py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-150 active:scale-[0.98] select-none disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    filled: "bg-[#21866F] text-white hover:bg-[#176B5B] shadow-sm shadow-[#21866F]/20",
    tonal: "bg-[#DDF3E8] text-[#176B5B] hover:bg-[#DDF3E8]/80 font-bold",
    outlined: "border border-[#21866F]/40 text-[#176B5B] hover:bg-[#21866F]/5",
    saffron: "bg-[#F2B544] text-[#202B27] hover:bg-[#e4a632] font-bold shadow-sm"
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
    </button>
  );
};

/**
 * Material 3 Interactive Filter Chip
 */
export const M3FilterChip: React.FC<{
  label: string;
  selected: boolean;
  onClick: () => void;
  count?: number;
}> = ({ label, selected, onClick, count }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-[40px] px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all select-none whitespace-nowrap shrink-0 active:scale-95 ${
        selected
          ? 'bg-[#176B5B] text-white shadow-xs'
          : 'bg-white text-[#202B27] border border-[#21866F]/20 hover:border-[#21866F]/50'
      }`}
    >
      {selected && <CheckCircle2 className="w-3.5 h-3.5" />}
      <span>{label}</span>
      {count !== undefined && (
        <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
          selected ? 'bg-white/20 text-white' : 'bg-[#DDF3E8] text-[#176B5B]'
        }`}>
          {count}
        </span>
      )}
    </button>
  );
};

/**
 * Android Material 3 Snackbar Toast
 */
export const M3Snackbar: React.FC = () => {
  const { snackbar, hideSnackbar } = useApp();
  if (!snackbar) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto max-w-md w-full bg-[#202B27] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center justify-between gap-3 text-xs sm:text-sm animate-bounce-short">
        <span className="leading-snug">{snackbar.message}</span>
        <button
          onClick={hideSnackbar}
          className="text-[#F2B544] font-bold uppercase tracking-wider text-xs px-2 py-1 rounded hover:bg-white/10"
        >
          OK
        </button>
      </div>
    </div>
  );
};
