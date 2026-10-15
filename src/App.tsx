import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Screen1LanguageSelection } from './components/screens/Screen1LanguageSelection';
import { Screen2RoleSelection } from './components/screens/Screen2RoleSelection';
import { Screen3ProfileSetup } from './components/screens/Screen3ProfileSetup';
import { Screen4StudentHome } from './components/screens/Screen4StudentHome';
import { Screen5CareerDiscovery } from './components/screens/Screen5CareerDiscovery';
import { Screen6CareerResults } from './components/screens/Screen6CareerResults';
import { Screen7CareerDetails } from './components/screens/Screen7CareerDetails';
import { Screen8LearningPath } from './components/screens/Screen8LearningPath';
import { Screen9OpportunityFinder } from './components/screens/Screen9OpportunityFinder';
import { Screen10AiExplanation } from './components/screens/Screen10AiExplanation';
import { Screen11FacilitatorHome } from './components/screens/Screen11FacilitatorHome';
import { Screen12FacilitatorStudentDetail } from './components/screens/Screen12FacilitatorStudentDetail';
import { Screen13ProfileSettings } from './components/screens/Screen13ProfileSettings';
import { KotlinCodeViewer } from './components/android-code/KotlinCodeViewer';
import { M3Snackbar } from './components/common/MaterialComponents';
import { 
  Smartphone, 
  Maximize2, 
  Wifi, 
  WifiOff, 
  Languages, 
  Code2, 
  Sparkles,
  Info
} from 'lucide-react';

const ScreenRouter: React.FC = () => {
  const { currentScreen } = useApp();

  switch (currentScreen) {
    case 'language_selection':
      return <Screen1LanguageSelection />;
    case 'role_selection':
      return <Screen2RoleSelection />;
    case 'profile_setup':
      return <Screen3ProfileSetup />;
    case 'student_home':
      return <Screen4StudentHome />;
    case 'career_discovery':
      return <Screen5CareerDiscovery />;
    case 'career_results':
      return <Screen6CareerResults />;
    case 'career_details':
      return <Screen7CareerDetails />;
    case 'learning_path':
      return <Screen8LearningPath />;
    case 'opportunity_finder':
      return <Screen9OpportunityFinder />;
    case 'ai_explanation':
      return <Screen10AiExplanation />;
    case 'facilitator_home':
      return <Screen11FacilitatorHome />;
    case 'facilitator_student_detail':
      return <Screen12FacilitatorStudentDetail />;
    case 'profile_settings':
      return <Screen13ProfileSettings />;
    case 'kotlin_code_explorer':
      return <KotlinCodeViewer />;
    default:
      return <Screen4StudentHome />;
  }
};

const MainContainer: React.FC = () => {
  const [deviceFrameMode, setDeviceFrameMode] = useState<boolean>(true);
  const { 
    language, 
    setLanguage, 
    isOffline, 
    setIsOffline, 
    role, 
    setRole, 
    navigateTo, 
    currentScreen 
  } = useApp();

  return (
    <div className="min-h-screen bg-[#F0EDE3] flex flex-col items-center justify-start text-[#202B27] font-sans antialiased selection:bg-[#21866F]/20">
      {/* Top Demo Presentation Bar for Hackathon Judges */}
      <header className="w-full bg-[#176B5B] text-white px-4 py-2 flex items-center justify-between shadow-md text-xs z-50">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-bold tracking-tight text-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F2B544]" />
            <span>Udaan · उड़ान</span>
          </div>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-white/10 text-[11px] text-[#DDF3E8]">
            National Hackathon Prototype
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 flex items-center gap-1 font-semibold text-[11px] transition-all"
            title="Toggle English / Hindi"
          >
            <Languages className="w-3.5 h-3.5 text-[#F2B544]" />
            <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
          </button>

          {/* Quick Offline Mode Toggle */}
          <button
            onClick={() => setIsOffline(!isOffline)}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1 font-semibold text-[11px] transition-all ${
              isOffline 
                ? 'bg-[#B3261E] text-white shadow-xs' 
                : 'bg-white/10 hover:bg-white/20 text-[#DDF3E8]'
            }`}
            title="Simulate Rural Offline State"
          >
            {isOffline ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5 text-emerald-300" />}
            <span className="hidden sm:inline">{isOffline ? 'Offline' : 'Online'}</span>
          </button>

          {/* Quick Role Toggle */}
          <button
            onClick={() => {
              const nextRole = role === 'student' ? 'facilitator' : 'student';
              setRole(nextRole);
              navigateTo(nextRole === 'student' ? 'student_home' : 'facilitator_home');
            }}
            className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-semibold text-[11px] transition-all hidden md:flex items-center gap-1"
          >
            <span>Role:</span>
            <span className="text-[#F2B544] font-bold capitalize">{role}</span>
          </button>

          {/* Android Frame / Full Viewport Toggle */}
          <button
            onClick={() => setDeviceFrameMode(!deviceFrameMode)}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
            title={deviceFrameMode ? "Expand to Full Screen View" : "Switch to Android Device Frame"}
          >
            {deviceFrameMode ? <Maximize2 className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
          </button>

          {/* Native Kotlin Code Inspector Link */}
          <button
            onClick={() => navigateTo('kotlin_code_explorer')}
            className={`px-2.5 py-1 rounded-lg font-semibold text-[11px] flex items-center gap-1 transition-all ${
              currentScreen === 'kotlin_code_explorer'
                ? 'bg-[#F2B544] text-[#202B27]'
                : 'bg-white/15 hover:bg-white/25 text-white'
            }`}
            title="Inspect Native Android Jetpack Compose Code"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Kotlin Code</span>
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className={`w-full flex justify-center items-center ${deviceFrameMode ? 'p-2 sm:p-5' : 'p-0'}`}>
        {deviceFrameMode ? (
          /* Realistic Android Smartphone Shell (Redmi Note / Pixel 8 style) */
          <div className="relative w-full max-w-[420px] bg-[#202B27] rounded-[48px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] border-4 border-[#3A4943]">
            {/* Camera Punch Hole */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-50 border border-white/10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-950/60" />
            </div>

            {/* Inner Phone Screen Display */}
            <div className="w-full bg-[#FAF8F1] rounded-[38px] overflow-hidden min-h-[740px] max-h-[860px] overflow-y-auto relative shadow-inner">
              <ScreenRouter />
              <M3Snackbar />
            </div>

            {/* Android Navigation Bar Pill Indicator */}
            <div className="w-32 h-1 bg-white/40 rounded-full mx-auto mt-2" />
          </div>
        ) : (
          /* Expanded Tablet / Responsive Viewport */
          <div className="w-full max-w-2xl bg-[#FAF8F1] min-h-screen shadow-lg">
            <ScreenRouter />
            <M3Snackbar />
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContainer />
    </AppProvider>
  );
}
