import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  M3TopAppBar, 
  M3Button, 
  M3Card, 
  M3BottomNavBar, 
  AndroidStatusBar 
} from '../common/MaterialComponents';
import { 
  Compass, 
  Route, 
  Bookmark, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Sun, 
  Wrench, 
  Sprout, 
  HeartPulse, 
  Radio, 
  Monitor, 
  Scissors,
  Droplets,
  Building,
  Zap,
  HelpCircle
} from 'lucide-react';
import { Career, RankedCareer } from '../../types';

export const Screen4StudentHome: React.FC = () => {
  const {
    language,
    currentStudent,
    rankedCareers,
    navigateTo,
    setSelectedCareerId,
    isOffline,
    lastSyncTime,
    playSpeech
  } = useApp();

  const handleOpenCareer = (careerId: string) => {
    setSelectedCareerId(careerId);
    navigateTo('career_details');
  };

  const handleStartDiscovery = () => {
    navigateTo('career_discovery');
  };

  const displayName = currentStudent.name || (language === 'hi' ? 'विद्यार्थी' : 'Student');

  // Map career icons to Lucide components
  const getTradeIcon = (tradeId: string) => {
    switch (tradeId) {
      case 'iti_solar_technician': return Sun;
      case 'iti_wireman': return Zap;
      case 'iti_plumber': return Droplets;
      case 'iti_mason': return Building;
      case 'iti_dress_making': return Scissors;
      case 'iti_copa': return Monitor;
      case 'iti_cosmetology': return Sparkles;
      case 'iti_welder':
      case 'iti_mech_diesel':
      case 'iti_mech_two_three_wheeler':
      default: return Wrench;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#202B27] pb-24 max-w-lg mx-auto">
      <AndroidStatusBar isOffline={isOffline} />

      {/* Top Greeting Bar */}
      <header className="px-5 pt-3 pb-2 flex items-center justify-between border-b border-[#21866F]/10 bg-[#FAF8F1]">
        <div>
          <span className="text-[11px] font-bold text-[#176B5B] uppercase tracking-wider">
            {language === 'hi' ? 'नमस्ते 🙏' : 'Namaste 🙏'}
          </span>
          <h1 className="text-xl font-extrabold text-[#202B27] leading-tight">
            {displayName}
          </h1>
          <div className="flex items-center gap-2 mt-0.5 text-[11px] text-[#65736C]">
            <span>{currentStudent.educationLevel}</span>
            <span>·</span>
            <span>{currentStudent.district}, {currentStudent.state}</span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1">
          <button
            onClick={() => navigateTo('profile_settings')}
            className="w-10 h-10 rounded-full bg-[#DDF3E8] border border-[#21866F]/20 text-[#176B5B] flex items-center justify-center font-bold text-sm shadow-xs"
          >
            {displayName.charAt(0).toUpperCase()}
          </button>
          <span className="text-[10px] text-[#65736C]">
            {isOffline 
              ? (language === 'hi' ? 'ऑफलाइन' : 'Offline Mode') 
              : `Sync: ${lastSyncTime}`}
          </span>
        </div>
      </header>

      <main className="p-4 space-y-5">
        {/* Hero Card */}
        <div className="rounded-[22px] bg-gradient-to-br from-[#176B5B] to-[#21866F] text-white p-6 shadow-md relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#202B27] bg-[#F2B544] px-2.5 py-0.5 rounded-full">
                {language === 'hi' ? 'दिशा निर्देश' : 'AI Career Discovery'}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold leading-snug">
              {language === 'hi'
                ? 'आपके भविष्य में अपार संभावनाएं हैं।'
                : 'Your future has many possibilities.'}
            </h2>

            <p className="text-xs sm:text-sm text-[#DDF3E8] mt-1.5 leading-relaxed max-w-sm">
              {language === 'hi'
                ? 'अपने हुनर, रुचियों और परिस्थितियों के अनुकूल सही करियर व आजीविका के रास्ते खोजें।'
                : 'Discover careers matching your strengths, including high-earning vocational and local opportunities.'}
            </p>

            <div className="mt-4">
              <M3Button
                variant="saffron"
                onClick={handleStartDiscovery}
                icon={<Compass className="w-4 h-4" />}
                className="py-2.5 px-6 font-bold"
              >
                {language === 'hi' ? 'करियर खोजें' : 'Discover My Career'}
              </M3Button>
            </div>
          </div>

          {/* Decorative Vector Graphic */}
          <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-white/10 pointer-events-none flex items-center justify-center">
            <Sparkles className="w-20 h-20 text-white/15" />
          </div>
        </div>

        {/* Quick Actions Grid */}
        <section>
          <div className="flex items-center justify-between mb-2.5 px-1">
            <h3 className="text-xs font-bold text-[#65736C] uppercase tracking-wider">
              {language === 'hi' ? 'त्वरित सेवाएं' : 'Quick Actions'}
            </h3>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[
              {
                id: 'explore-careers',
                labelEn: 'Explore',
                labelHi: 'करियर',
                icon: Compass,
                color: 'bg-[#DDF3E8] text-[#176B5B]',
                action: () => navigateTo('career_discovery')
              },
              {
                id: 'my-path',
                labelEn: 'My Path',
                labelHi: 'मार्ग',
                icon: Route,
                color: 'bg-[#DDF3E8] text-[#176B5B]',
                action: () => navigateTo('learning_path')
              },
              {
                id: 'scholarships',
                labelEn: 'Schemes',
                labelHi: 'योजनाएं',
                icon: Bookmark,
                color: 'bg-[#DDF3E8] text-[#176B5B]',
                action: () => navigateTo('opportunity_finder')
              },
              {
                id: 'ask-teacher',
                labelEn: 'Teacher',
                labelHi: 'मेंटर',
                icon: Users,
                color: 'bg-[#DDF3E8] text-[#176B5B]',
                action: () => navigateTo('facilitator_home')
              }
            ].map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white border border-[#21866F]/12 hover:border-[#21866F]/30 active:scale-95 transition-all text-center min-h-[76px]"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-1.5 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#202B27] leading-tight">
                    {language === 'hi' ? item.labelHi : item.labelEn}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Recommended For You Section */}
        <section>
          <div className="flex items-center justify-between mb-3 px-1">
            <div>
              <h3 className="text-base font-bold text-[#202B27]">
                {language === 'hi' ? 'आपके लिए अनुशंसित करियर' : 'Recommended For You'}
              </h3>
              <p className="text-xs text-[#65736C]">
                {language === 'hi' ? 'पारदर्शी नियमों एवं रुचियों पर आधारित' : 'Based on your profile rules and local demand'}
              </p>
            </div>
            <button
              onClick={() => navigateTo('career_results')}
              className="text-xs font-bold text-[#176B5B] hover:underline flex items-center gap-0.5"
            >
              <span>{language === 'hi' ? 'सभी देखें' : 'View All'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {rankedCareers.slice(0, 3).map((rc, index) => {
              const career = rc.career;
              const IconComponent = getTradeIcon(career.id);
              const matchReasonText = rc.matched[0]
                ? (language === 'hi' ? rc.matched[0].text.hi : rc.matched[0].text.en)
                : (language === 'hi' ? `कक्षा ${career.minClass} की पात्रता पर आधारित` : `Eligible based on Class ${career.minClass}`);

              return (
                <M3Card
                  key={career.id}
                  onClick={() => handleOpenCareer(career.id)}
                  className="p-4 relative hover:border-[#21866F]/40 cursor-pointer"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#DDF3E8] text-[#176B5B] flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-bold text-[#176B5B] uppercase tracking-wider">
                          {language === 'hi' ? 'आईटीआई ट्रेड' : 'ITI Trade'}
                        </span>
                        <span className="text-[10px] font-semibold text-[#202B27] bg-[#F2B544]/30 px-1.5 py-0.2 rounded">
                          {language === 'hi' ? `${career.durationMonths} माह` : `${career.durationMonths} mo`}
                        </span>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-[#202B27] leading-snug">
                        {language === 'hi' ? career.nameHi : career.nameEn}
                      </h4>

                      <div className="flex items-center gap-2 mt-1 text-xs text-[#65736C]">
                        <span className="font-semibold text-[#176B5B]">
                          {language === 'hi' ? `${rc.matched.length} खूबियों से मेल` : `Matched ${rc.matched.length} strengths`}
                        </span>
                        <span>·</span>
                        <span>{language === 'hi' ? `कक्षा ${career.minClass} पास` : `Class ${career.minClass}`}</span>
                      </div>

                      {/* Transparent Match Reason */}
                      <div className="mt-2.5 pt-2 border-t border-[#21866F]/10 flex items-center justify-between text-[11px]">
                        <span className="text-[#176B5B] font-medium flex items-center gap-1 truncate max-w-[80%]">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">
                            {matchReasonText}
                          </span>
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#176B5B] shrink-0" />
                      </div>
                    </div>
                  </div>
                </M3Card>
              );
            })}
          </div>
        </section>

        {/* Continue Learning - Compact Progress Card */}
        <section>
          <div className="flex items-center justify-between mb-2.5 px-1">
            <h3 className="text-xs font-bold text-[#65736C] uppercase tracking-wider">
              {language === 'hi' ? 'सीखना जारी रखें' : 'Continue Learning'}
            </h3>
          </div>

          <M3Card 
            onClick={() => navigateTo('learning_path')}
            className="p-4 bg-gradient-to-r from-[#DDF3E8]/80 to-white border border-[#21866F]/20 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#176B5B]">
                  {language === 'hi' ? 'अगला अनुशंसित कदम' : 'Next Recommended Step'}
                </span>
                <h4 className="text-sm font-bold text-[#202B27] mt-0.5">
                  {language === 'hi' 
                    ? 'इलेक्ट्रिकल एवं सोलर सुरक्षा के मूल सिद्धांत' 
                    : 'Foundational Electrical & Safety Basics'}
                </h4>
                <p className="text-xs text-[#65736C] mt-0.5">
                  {language === 'hi' ? 'प्रगति: 1/4 चरण पूरे हुए' : 'Progress: 1 of 4 milestones completed'}
                </p>
              </div>

              <div className="w-10 h-10 rounded-full bg-[#21866F] text-white flex items-center justify-center shrink-0">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            {/* Small Progress Bar */}
            <div className="w-full bg-[#21866F]/20 h-1.5 rounded-full overflow-hidden mt-3">
              <div className="bg-[#21866F] h-full w-1/4 rounded-full" />
            </div>
          </M3Card>
        </section>
      </main>

      {/* Bottom Navigation */}
      <M3BottomNavBar />
    </div>
  );
};
