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
  ArrowRight,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  Sun,
  Wrench,
  Monitor,
  Scissors,
  Droplets,
  Building,
  Zap,
  Info
} from 'lucide-react';
import { RankedCareer } from '../../types';

export const Screen6CareerResults: React.FC = () => {
  const {
    language,
    rankedCareers,
    insufficientSignal,
    discoveryAnswers,
    setSelectedCareerId,
    navigateTo
  } = useApp();

  const handleOpenCareer = (careerId: string) => {
    setSelectedCareerId(careerId);
    navigateTo('career_details');
  };

  const handleOpenAiExplanation = (careerId: string) => {
    setSelectedCareerId(careerId);
    navigateTo('ai_explanation');
  };

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
      <AndroidStatusBar />
      <M3TopAppBar
        title={language === 'hi' ? 'करियर मिलान परिणाम' : 'Career Match Results'}
        subtitle={language === 'hi' ? 'सत्यापित विकल्प' : 'Verified Pathways'}
        showBack={true}
        onBack={() => navigateTo('student_home')}
        readAloudText={
          language === 'hi'
            ? 'आपके उत्तरों और रुचियों के आधार पर करियर मार्ग सुझाए गए हैं। प्रत्येक कार्ड में समझें कि यह क्यों उपयुक्त है।'
            : 'Based on your strengths and preferences, here are your recommended career paths.'
        }
      />

      <main className="p-4 space-y-4">
        {/* Academic path notification if selected in discovery */}
        {discoveryAnswers?.careerType === 'academic' && (
          <div className="p-3.5 rounded-2xl bg-[#FFF9E6] border border-[#F2B544]/40 text-xs text-[#8a6011]">
            <div className="flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#F2B544] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">
                  {language === 'hi' ? 'कैटलॉग सूचना:' : 'Catalog Notice:'}
                </span>
                <p className="mt-0.5 leading-relaxed">
                  {language === 'hi'
                    ? 'वर्तमान सत्यापित कैटलॉग केवल व्यावसायिक आईटीआई ट्रेडों को कवर करता है। शैक्षणिक उच्च-शिक्षा मार्ग भविष्य के अपडेट में जोड़े जाएंगे।'
                    : 'The current verified catalog covers vocational ITI trades only. Academic higher-education paths will be added in future updates.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Banner with transparent explanation note */}
        <div className="p-4 rounded-2xl bg-[#DDF3E8] border border-[#21866F]/20 text-[#202B27]">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#176B5B] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#176B5B]">
                {language === 'hi' ? 'पारदर्शी नियम आधारित मिलान' : 'Transparent Rule-Based Matching'}
              </h3>
              <p className="text-xs text-[#202B27] mt-0.5 leading-relaxed">
                {language === 'hi'
                  ? 'ये सुझाव आपकी रुचि और भारत सरकार (DGT) के सत्यापित मानकों के मिलान से निकाले गए हैं।'
                  : 'Recommendations are calculated from your interest intersections and verified DGT CTS standards.'}
              </p>
            </div>
          </div>
        </div>

        {/* Empty state when insufficientSignal is true */}
        {insufficientSignal || rankedCareers.length === 0 ? (
          <div className="text-center py-10 px-5 bg-white rounded-2xl border border-[#21866F]/15 shadow-xs">
            <Compass className="w-12 h-12 text-[#176B5B] mx-auto mb-3 opacity-70" />
            <h3 className="text-base font-bold text-[#202B27]">
              {language === 'hi'
                ? 'अधिक जानकारी की आवश्यकता है'
                : 'More Information Needed'}
            </h3>
            <p className="text-xs text-[#65736C] mt-2 leading-relaxed max-w-sm mx-auto">
              {language === 'hi'
                ? 'सटीक मिलान के लिए हमें आपकी रुचियों के बारे में थोड़ी और जानकारी चाहिए। कृपया अपनी खूबियों को समझने के लिए करियर खोज में कुछ प्रश्नों के उत्तर दें।'
                : 'We need a little more information about your interests to provide accurate matches. Please answer a few questions in Career Discovery to help us understand your strengths.'}
            </p>
            <div className="mt-5">
              <M3Button
                variant="filled"
                onClick={() => navigateTo('career_discovery')}
                icon={<ArrowRight className="w-4 h-4" />}
                className="py-2.5 px-6 text-xs font-bold"
              >
                {language === 'hi' ? 'प्रश्नों के उत्तर दें' : 'Answer Discovery Questions'}
              </M3Button>
            </div>
          </div>
        ) : (
          /* Recommended Career Cards */
          <div className="space-y-4">
            {rankedCareers.map((rc: RankedCareer, index: number) => {
              const career = rc.career;
              const Icon = getTradeIcon(career.id);
              const strengthsCount = rc.matched.length;

              return (
                <M3Card key={career.id} className="p-5 border-2 border-[#21866F]/20 hover:border-[#21866F]/40">
                  {/* Header tag and Category */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#176B5B] bg-[#DDF3E8] px-2.5 py-0.5 rounded-full">
                        {language === 'hi' ? `सुझाव #${index + 1}` : `Match #${index + 1}`}
                      </span>
                      <span className="text-[10px] font-bold text-[#202B27] bg-[#F2B544]/30 px-2 py-0.5 rounded-full">
                        {language === 'hi' ? 'आईटीआई ट्रेड' : 'ITI Trade'}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#176B5B]">
                      {language === 'hi' ? `कक्षा ${career.minClass} · ${career.durationMonths} माह` : `Class ${career.minClass} · ${career.durationMonths} mo`}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-start gap-3.5 mt-2">
                    <div className="w-12 h-12 rounded-2xl bg-[#DDF3E8] text-[#176B5B] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-[#202B27] leading-snug">
                        {language === 'hi' ? career.nameHi : career.nameEn}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-xs text-[#65736C]">
                        <span className="font-semibold text-[#176B5B]">
                          {language === 'hi'
                            ? `${strengthsCount} खूबियों से मेल`
                            : `Matched ${strengthsCount} strength${strengthsCount > 1 ? 's' : ''}`}
                        </span>
                        <span>·</span>
                        <span className="text-[#202B27] font-medium">
                          {language === 'hi' ? `स्कोर: ${rc.score}/${rc.maxScore}` : `Score: ${rc.score}/${rc.maxScore}`}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Why it suits: Matched tags */}
                  {rc.matched.length > 0 && (
                    <div className="mt-3.5 p-3 rounded-xl bg-[#FAF8F1] border border-[#21866F]/15 text-xs space-y-1.5">
                      <span className="font-bold text-[#176B5B] block">
                        {language === 'hi' ? 'मिलान के कारण:' : 'Matching Reasons:'}
                      </span>
                      {rc.matched.map((m, mi) => (
                        <div key={mi} className="flex items-start gap-1.5 text-[#202B27] leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#21866F] shrink-0 mt-0.5" />
                          <span>{language === 'hi' ? m.text.hi : m.text.en}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Warnings (relocation / duration) */}
                  {rc.warnings.length > 0 && (
                    <div className="mt-3 p-3 rounded-xl bg-[#FFF9E6] border border-[#F2B544]/40 text-xs text-[#8a6011] space-y-1.5">
                      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px]">
                        <AlertTriangle className="w-3.5 h-3.5 text-[#F2B544]" />
                        <span>{language === 'hi' ? 'महत्वपूर्ण सूचना' : 'Important Note'}</span>
                      </div>
                      {rc.warnings.map((w, wi) => (
                        <p key={wi} className="leading-relaxed">
                          {language === 'hi' ? w.hi : w.en}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-4 pt-3 border-t border-[#21866F]/10 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleOpenAiExplanation(career.id)}
                      className="text-xs font-semibold text-[#176B5B] hover:text-[#21866F] flex items-center gap-1 py-2 px-2 rounded-lg hover:bg-[#DDF3E8]/40"
                    >
                      <HelpCircle className="w-4 h-4 text-[#F2B544]" />
                      <span>{language === 'hi' ? 'सुझाव समझें' : 'Why this match?'}</span>
                    </button>

                    <M3Button
                      variant="filled"
                      onClick={() => handleOpenCareer(career.id)}
                      icon={<ArrowRight className="w-4 h-4" />}
                      className="text-xs py-2 px-4 min-h-[40px]"
                    >
                      {language === 'hi' ? 'ट्रेड विवरण' : 'Explore Trade'}
                    </M3Button>
                  </div>
                </M3Card>
              );
            })}
          </div>
        )}

        {/* Retake Discovery CTA */}
        <div className="text-center pt-2">
          <button
            onClick={() => navigateTo('career_discovery')}
            className="text-xs font-semibold text-[#65736C] hover:text-[#176B5B] underline"
          >
            {language === 'hi' ? 'रुचियों के प्रश्न दोबारा भरें' : 'Retake career discovery questions'}
          </button>
        </div>
      </main>

      <M3BottomNavBar />
    </div>
  );
};
