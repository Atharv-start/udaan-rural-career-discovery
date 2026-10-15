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
  Award, 
  Sun, 
  Sprout, 
  Wrench, 
  Radio, 
  HeartPulse, 
  Monitor, 
  Scissors, 
  Droplets,
  BookOpen
} from 'lucide-react';
import { Career } from '../../types';

export const Screen6CareerResults: React.FC = () => {
  const { 
    language, 
    recommendedCareers, 
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

  const getCareerIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return Sun;
      case 'Sprout': return Sprout;
      case 'Radio': return Radio;
      case 'HeartPulse': return HeartPulse;
      case 'Monitor': return Monitor;
      case 'Wrench': return Wrench;
      case 'Scissors': return Scissors;
      case 'Droplets': return Droplets;
      default: return Wrench;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#202B27] pb-24 max-w-lg mx-auto">
      <AndroidStatusBar />
      <M3TopAppBar
        title={language === 'hi' ? 'करियर मिलान परिणाम' : 'Career Match Results'}
        subtitle={language === 'hi' ? '3 अनुशंसित विकल्प' : '3 Recommended Pathways'}
        showBack={true}
        onBack={() => navigateTo('student_home')}
        readAloudText={
          language === 'hi'
            ? 'आपके उत्तरों और रुचियों के आधार पर 3 करियर मार्ग सुझाए गए हैं। प्रत्येक कार्ड में समझें कि यह क्यों उपयुक्त है।'
            : 'Based on your strengths and preferences, here are 3 recommended careers. Each card explains why it suits you.'
        }
      />

      <main className="p-4 space-y-4">
        {/* Banner with transparent explanation note */}
        <div className="p-4 rounded-2xl bg-[#DDF3E8] border border-[#21866F]/20 text-[#202B27]">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#176B5B] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#176B5B]">
                {language === 'hi' ? 'पारदर्शी नियम आधारित प्रणाली' : 'Transparent Rule-Based Matching'}
              </h3>
              <p className="text-xs text-[#202B27] mt-0.5 leading-relaxed">
                {language === 'hi'
                  ? 'ये सुझाव आपकी रुचि, हाथ के हुनर और ग्रामीण रोजगार मांग के मिलान से निकाले गए हैं।'
                  : 'Recommendations are derived from your interest intersections and verified local job demand.'}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Recommended Career Cards */}
        <div className="space-y-4">
          {recommendedCareers.map((career, index) => {
            const Icon = getCareerIcon(career.icon);

            return (
              <M3Card key={career.id} className="p-5 border-2 border-[#21866F]/20 hover:border-[#21866F]/40">
                {/* Header tag and Category */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#176B5B] bg-[#DDF3E8] px-2.5 py-0.5 rounded-full">
                      {language === 'hi' ? `सुझाव #${index + 1}` : `Match #${index + 1}`}
                    </span>
                    {career.isVocational ? (
                      <span className="text-[10px] font-bold text-[#202B27] bg-[#F2B544]/30 px-2 py-0.5 rounded-full">
                        {language === 'hi' ? 'व्यावहारिक हुनर' : 'Vocational Trade'}
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-[#176B5B] bg-[#21866F]/10 px-2 py-0.5 rounded-full">
                        {language === 'hi' ? 'शैक्षणिक योग्यता' : 'Formal Qualification'}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-medium text-[#65736C]">
                    {language === 'hi' ? career.categoryHi : career.category}
                  </span>
                </div>

                {/* Title & Icon */}
                <div className="flex items-start gap-3.5 mt-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#DDF3E8] text-[#176B5B] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#202B27] leading-snug">
                      {language === 'hi' ? career.titleHi : career.title}
                    </h3>
                    <p className="text-xs text-[#65736C] mt-1 line-clamp-2">
                      {language === 'hi' ? career.shortDescriptionHi : career.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Why it suits */}
                <div className="mt-3.5 p-3 rounded-xl bg-[#FAF8F1] border border-[#21866F]/15 text-xs">
                  <span className="font-bold text-[#176B5B] block mb-0.5">
                    {language === 'hi' ? 'यह आपके लिए क्यों उपयुक्त है:' : 'Why this career suits you:'}
                  </span>
                  <p className="text-[#202B27] leading-relaxed">
                    {language === 'hi' ? career.matchExplanationHi : career.matchExplanation}
                  </p>
                </div>

                {/* Skills Overlap */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-[#21866F]/15">
                    <span className="font-semibold text-[#176B5B] block text-[10px] uppercase">
                      {language === 'hi' ? 'आपके पास मौजूद हुनर' : 'Your Existing Strengths'}
                    </span>
                    <span className="text-[#202B27] font-medium text-[11px] block mt-0.5 truncate">
                      {language === 'hi' ? 'हाथ के औजार व कार्यशीलता' : 'Practical hands-on willingness'}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-[#21866F]/15">
                    <span className="font-semibold text-[#F2B544]/90 text-[10px] uppercase">
                      {language === 'hi' ? 'सीखने योग्य हुनर' : 'Skills to Develop'}
                    </span>
                    <span className="text-[#202B27] font-medium text-[11px] block mt-0.5 truncate">
                      {language === 'hi' ? career.requiredSkills[0]?.hi : career.requiredSkills[0]?.en}
                    </span>
                  </div>
                </div>

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
                    {language === 'hi' ? 'करियर विवरण' : 'Explore Career'}
                  </M3Button>
                </div>
              </M3Card>
            );
          })}
        </div>

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
