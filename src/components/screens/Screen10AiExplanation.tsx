import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  M3TopAppBar, 
  M3Button, 
  M3Card, 
  M3BottomNavBar, 
  AndroidStatusBar 
} from '../common/MaterialComponents';
import { CAREERS_DATA } from '../../data/careersData';
import { TransparentRecommendationEngine } from '../../services/recommendationEngine';
import { 
  Sparkles, 
  CheckCircle2, 
  Sliders, 
  Info, 
  ArrowRight, 
  AlertCircle, 
  HelpCircle,
  Lightbulb,
  ShieldCheck
} from 'lucide-react';

export const Screen10AiExplanation: React.FC = () => {
  const { 
    language, 
    selectedCareerId, 
    currentStudent, 
    discoveryAnswers, 
    navigateTo 
  } = useApp();

  const career = CAREERS_DATA.find(c => c.id === selectedCareerId) || CAREERS_DATA[0];

  // Run the transparent recommendation engine to get the exact structured explanation
  const result = TransparentRecommendationEngine.recommend(
    currentStudent, 
    discoveryAnswers || undefined
  );
  const explanation = result.explanations[career.id];

  const readText = language === 'hi'
    ? `सुझाव विश्लेषण: ${career.titleHi}। यह सुझाव आपकी रुचियों और स्थानीय मांग के आधार पर तैयार किया गया है।`
    : `Recommendation analysis for ${career.title}. Understand why this matches your profile.`;

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#202B27] pb-24 max-w-lg mx-auto">
      <AndroidStatusBar />
      <M3TopAppBar
        title={language === 'hi' ? 'सुझाव समझें' : 'Understand Recommendation'}
        subtitle={language === 'hi' ? career.titleHi : career.title}
        showBack={true}
        onBack={() => navigateTo('career_results')}
        readAloudText={readText}
      />

      <main className="p-4 space-y-4">
        {/* Transparent AI Banner */}
        <div className="rounded-[22px] bg-gradient-to-br from-[#176B5B] to-[#21866F] text-white p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#F2B544] bg-black/20 px-2.5 py-0.5 rounded-full">
              {language === 'hi' ? 'पारदर्शी विश्लेषण' : 'Transparent Reasoning'}
            </span>
            <span className="text-[10px] text-[#DDF3E8]">
              {language === 'hi' ? 'नियम-आधारित इंजन' : 'Rule-Based Engine'}
            </span>
          </div>

          <h2 className="text-lg font-bold text-white mt-1">
            {language === 'hi' ? 'यह करियर क्यों चुना गया?' : 'Why was this career recommended?'}
          </h2>

          <p className="text-xs text-[#DDF3E8] mt-1.5 leading-relaxed">
            {language === 'hi' 
              ? explanation?.whyRecommended.hi 
              : explanation?.whyRecommended.en}
          </p>
        </div>

        {/* Section 1: Influencing Student Interests */}
        <section className="bg-white rounded-[20px] p-5 border border-[#21866F]/15">
          <h3 className="text-xs font-bold text-[#176B5B] uppercase tracking-wider mb-2.5 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#176B5B]" />
            <span>{language === 'hi' ? '1. आपकी रुचियां जिन्होंने सुझाव को प्रभावित किया' : '1. Student Interests That Influenced This'}</span>
          </h3>

          <div className="space-y-2">
            {(explanation?.influencingInterests || []).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#202B27] p-2 rounded-xl bg-[#FAF8F1]">
                <CheckCircle2 className="w-4 h-4 text-[#21866F] shrink-0" />
                <span className="font-medium">{language === 'hi' ? item.hi : item.en}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Applied Eligibility Rules */}
        <section className="bg-white rounded-[20px] p-5 border border-[#21866F]/15">
          <h3 className="text-xs font-bold text-[#176B5B] uppercase tracking-wider mb-2.5 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#176B5B]" />
            <span>{language === 'hi' ? '2. लागू किए गए योग्यता नियम' : '2. Applied Matching Rules'}</span>
          </h3>

          <div className="space-y-2">
            {(explanation?.appliedRules || []).map((rule, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-[#202B27] p-2.5 rounded-xl bg-[#FAF8F1] border border-[#21866F]/10">
                <div className="w-5 h-5 rounded-full bg-[#DDF3E8] text-[#176B5B] flex items-center justify-center font-bold text-xs shrink-0">
                  {idx + 1}
                </div>
                <span className="leading-relaxed">{language === 'hi' ? rule.hi : rule.en}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Next Action Steps */}
        <section className="bg-white rounded-[20px] p-5 border border-[#21866F]/15">
          <h3 className="text-xs font-bold text-[#176B5B] uppercase tracking-wider mb-2.5 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-[#F2B544]" />
            <span>{language === 'hi' ? '3. आगे क्या करें (Recommended Next Steps)' : '3. Recommended Next Steps'}</span>
          </h3>

          <ul className="space-y-2">
            {(explanation?.recommendedNextSteps || []).map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-[#202B27]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#21866F] mt-1.5 shrink-0" />
                <span>{language === 'hi' ? step.hi : step.en}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 4: Missing Information Notice */}
        <section className="p-4 rounded-2xl bg-[#FFF9E6] border border-[#F2B544]/40 text-[#202B27]">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#c2881b] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#8a6011] uppercase tracking-wider">
                {language === 'hi' ? 'सुझाव को और सटीक कैसे बनाएं?' : 'What Information Is Missing?'}
              </h4>
              <p className="text-xs text-[#523d14] mt-0.5 leading-relaxed">
                {language === 'hi'
                  ? explanation?.missingInformationNote.hi
                  : explanation?.missingInformationNote.en}
              </p>
              <button
                onClick={() => navigateTo('profile_setup')}
                className="mt-2 text-xs font-bold text-[#176B5B] hover:underline inline-flex items-center gap-1"
              >
                <span>{language === 'hi' ? 'प्रोफाइल विवरण अपडेट करें' : 'Update profile details'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <M3BottomNavBar />
    </div>
  );
};
