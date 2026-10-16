import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  M3TopAppBar,
  M3Button,
  M3Card,
  M3BottomNavBar,
  AndroidStatusBar
} from '../common/MaterialComponents';
import { CAREERS_DATA, OPPORTUNITIES_DATA } from '../../services/recommendationEngine';
import {
  Route,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Clock,
  GraduationCap,
  MapPin,
  HelpCircle,
  Sun,
  Wrench,
  Monitor,
  Scissors,
  Droplets,
  Building,
  Zap,
  Info
} from 'lucide-react';

export const Screen7CareerDetails: React.FC = () => {
  const {
    language,
    selectedCareerId,
    rankedCareers,
    navigateTo,
    updateStudentProfile,
    showSnackbar
  } = useApp();

  const career = CAREERS_DATA.find(c => c.id === selectedCareerId) || CAREERS_DATA[0];
  const ranked = rankedCareers.find(rc => rc.career.id === career.id);
  const warnings = ranked?.warnings || [];

  const handleSetTargetCareer = () => {
    updateStudentProfile({ targetCareerId: career.id });
    showSnackbar(
      language === 'hi'
        ? `${career.nameHi} आपके 'मार्ग' में जोड़ दिया गया`
        : `${career.nameEn} added to My Learning Path`
    );
    navigateTo('learning_path');
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

  const IconComponent = getTradeIcon(career.id);

  // Related opportunities from verified list
  const relatedOpportunities = OPPORTUNITIES_DATA.filter(opp => {
    if (opp.id === 'up_iti_admission_2026' || opp.id === 'naps' || opp.id === 'up_post_matric_scholarship') {
      return true;
    }
    return false;
  }).slice(0, 3);

  const readText = language === 'hi'
    ? `${career.nameHi}। अवधि: ${career.durationMonths} महीने। न्यूनतम कक्षा: ${career.minClass}।`
    : `${career.nameEn}. Duration: ${career.durationMonths} months. Minimum education: Class ${career.minClass}.`;

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#202B27] pb-24 max-w-lg mx-auto">
      <AndroidStatusBar />
      <M3TopAppBar
        title={language === 'hi' ? career.nameHi : career.nameEn}
        subtitle={language === 'hi' ? 'आईटीआई ट्रेड' : 'ITI Trade'}
        showBack={true}
        onBack={() => navigateTo('career_results')}
        readAloudText={readText}
      />

      <main className="p-4 space-y-4">
        {/* Hero Card */}
        <div className="rounded-[22px] bg-white border border-[#21866F]/20 p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#DDF3E8] text-[#176B5B] flex items-center justify-center shrink-0">
              <IconComponent className="w-8 h-8" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#176B5B] bg-[#DDF3E8] px-2.5 py-0.5 rounded-full">
                  {language === 'hi' ? 'आईटीआई ट्रेड' : 'ITI Trade'}
                </span>
                <span className="text-[10px] font-semibold text-[#202B27] bg-[#F2B544]/30 px-2 py-0.5 rounded-full">
                  {language === 'hi' ? 'व्यावहारिक हुनर' : 'Vocational'}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-[#202B27] leading-snug">
                {language === 'hi' ? career.nameHi : career.nameEn}
              </h2>
            </div>
          </div>

          {/* Verified Technical Attributes Strip */}
          <div className="mt-4 pt-3 border-t border-[#21866F]/10 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-[#FAF8F1] border border-[#21866F]/10">
              <div className="flex items-center gap-1 text-[#176B5B] font-bold text-[10px] uppercase">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'न्यूनतम योग्यता' : 'Min Education'}</span>
              </div>
              <p className="text-[#202B27] font-semibold mt-0.5 text-xs">
                {language === 'hi' ? `कक्षा ${career.minClass} पास` : `Class ${career.minClass} Pass`}
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-[#FAF8F1] border border-[#21866F]/10">
              <div className="flex items-center gap-1 text-[#21866F] font-bold text-[10px] uppercase">
                <Clock className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'कोर्स अवधि' : 'Duration'}</span>
              </div>
              <p className="text-[#202B27] font-semibold mt-0.5 text-xs">
                {language === 'hi' ? `${career.durationMonths} महीने` : `${career.durationMonths} Months`}
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-[#FAF8F1] border border-[#21866F]/10 col-span-2 sm:col-span-1">
              <div className="flex items-center gap-1 text-[#65736C] font-bold text-[10px] uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'प्रसार दायरा' : 'Scope'}</span>
              </div>
              <p className="text-[#202B27] font-semibold mt-0.5 text-xs capitalize">
                {language === 'hi' && career.stateScope === 'national' ? 'अखिल भारतीय' : career.stateScope}
              </p>
            </div>
          </div>
        </div>

        {/* Warnings Banner if student constraints trigger any */}
        {warnings.length > 0 && (
          <div className="p-4 rounded-2xl bg-[#FFF9E6] border border-[#F2B544]/40 text-xs text-[#8a6011] space-y-1.5">
            <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[11px]">
              <AlertTriangle className="w-4 h-4 text-[#F2B544] shrink-0" />
              <span>{language === 'hi' ? 'महत्वपूर्ण सूचना एवं सावधानियां' : 'Important Warnings & Advice'}</span>
            </div>
            {warnings.map((w, wi) => (
              <p key={wi} className="leading-relaxed">
                {language === 'hi' ? w.hi : w.en}
              </p>
            ))}
          </div>
        )}

        {/* 4-Step Verified Pathway to Success */}
        <section className="bg-white rounded-[20px] p-5 border border-[#21866F]/15">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-[#202B27] uppercase tracking-wider flex items-center gap-2">
              <Route className="w-4 h-4 text-[#176B5B]" />
              <span>{language === 'hi' ? '4-चरणीय करियर मार्ग' : '4-Step Career Pathway'}</span>
            </h3>
            <span className="text-[10px] text-[#176B5B] font-bold bg-[#DDF3E8] px-2 py-0.5 rounded-full">
              {language === 'hi' ? 'प्रमाणित रोडमैप' : 'Official Route'}
            </span>
          </div>

          <div className="space-y-3.5 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#21866F]/20">
            {career.pathway.map((stepText, idx) => (
              <div key={idx} className="relative flex items-start gap-3.5 pl-1">
                <div className="w-7 h-7 rounded-full bg-[#21866F] text-white flex items-center justify-center text-xs font-bold shrink-0 ring-4 ring-white shadow-xs">
                  {idx + 1}
                </div>

                <div className="flex-1 min-w-0 bg-[#FAF8F1] p-3 rounded-xl border border-[#21866F]/12">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-[#202B27]">
                      {language === 'hi' ? `चरण ${idx + 1}` : `Step ${idx + 1}`}
                    </h4>
                  </div>
                  <p className="text-xs text-[#202B27] leading-relaxed">
                    {stepText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Verified Data Source & Government Citation Card */}
        <section className="bg-white rounded-[20px] p-5 border border-[#21866F]/15">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-[#202B27] uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#176B5B]" />
              <span>{language === 'hi' ? 'सरकारी सत्यापन एवं स्रोत' : 'Government Verification & Source'}</span>
            </h3>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              career.status === 'verified'
                ? 'bg-[#DDF3E8] text-[#176B5B]'
                : 'bg-[#FFF9E6] text-[#8a6011]'
            }`}>
              {career.status === 'verified'
                ? (language === 'hi' ? 'सत्यापित' : 'Verified')
                : (language === 'hi' ? 'जाँचा नहीं गया' : 'Not Fully Verified')}
            </span>
          </div>

          {career.status !== 'verified' && (
            <p className="text-xs text-[#B3261E] bg-red-50 p-2 rounded-lg mb-2">
              {language === 'hi'
                ? 'यह ट्रेड विवरण पूरी तरह जाँचा नहीं गया है। आधिकारिक पोर्टल पर पुनः पुष्टि करें।'
                : 'Not fully verified. Please check the official portal before acting.'}
            </p>
          )}

          <div className="space-y-2 text-xs text-[#202B27] bg-[#FAF8F1] p-3 rounded-xl border border-[#21866F]/10">
            <p className="leading-relaxed text-[#65736C]">
              <span className="font-semibold text-[#202B27]">
                {language === 'hi' ? 'आधिकारिक स्रोत संदर्भ: ' : 'Official Reference: '}
              </span>
              {career.notes}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-[#21866F]/10 text-[11px]">
              <span className="text-[#65736C]">
                {language === 'hi' ? `सत्यापन तिथि: ${career.verifiedDate}` : `Verified Date: ${career.verifiedDate}`}
              </span>
              {career.sourceUrl && (
                <a
                  href={career.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#176B5B] hover:underline inline-flex items-center gap-1"
                >
                  <span>{language === 'hi' ? 'DGT गजट पत्र देखें' : 'View DGT Letter'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Related Verified Opportunities */}
        <section className="bg-white rounded-[20px] p-5 border border-[#21866F]/15">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-[#202B27] uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#176B5B]" />
              <span>{language === 'hi' ? 'जुड़ी हुई सरकारी योजनाएं' : 'Related Schemes & Grants'}</span>
            </h3>
            <button
              onClick={() => navigateTo('opportunity_finder')}
              className="text-xs font-bold text-[#176B5B] hover:underline"
            >
              {language === 'hi' ? 'सभी देखें' : 'View all'}
            </button>
          </div>

          <div className="space-y-2.5">
            {relatedOpportunities.map(opp => (
              <div
                key={opp.id}
                onClick={() => navigateTo('opportunity_finder')}
                className="p-3 rounded-xl bg-[#FAF8F1] border border-[#21866F]/15 cursor-pointer hover:border-[#21866F]/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#176B5B] uppercase">
                    {opp.type}
                  </span>
                  <span className="text-[10px] text-[#65736C]">
                    {opp.closesOn ? `Closes: ${opp.closesOn}` : opp.windowStatus}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#202B27] mt-0.5">
                  {language === 'hi' ? opp.nameHi : opp.nameEn}
                </h4>
                <p className="text-[11px] text-[#65736C] mt-0.5 line-clamp-1">
                  {opp.conditions.length > 0 ? opp.conditions.join(', ') : opp.notes}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Explainability Button */}
        <div className="p-4 rounded-2xl bg-[#DDF3E8]/60 border border-[#21866F]/20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <HelpCircle className="w-5 h-5 text-[#176B5B] shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#202B27]">
                {language === 'hi' ? 'यह सुझाव कैसे बना?' : 'Understand My Recommendation'}
              </p>
              <p className="text-[11px] text-[#65736C]">
                {language === 'hi' ? 'पारदर्शी नियम व प्रभाव देखें' : 'See matching rules & factor weights'}
              </p>
            </div>
          </div>
          <button
            onClick={() => navigateTo('ai_explanation')}
            className="text-xs font-bold text-[#176B5B] hover:underline shrink-0"
          >
            {language === 'hi' ? 'विवरण' : 'Explain'}
          </button>
        </div>
      </main>

      {/* Sticky Bottom Action */}
      <div className="fixed bottom-16 left-0 right-0 z-30 p-3 bg-gradient-to-t from-[#FAF8F1] via-[#FAF8F1] to-transparent max-w-lg mx-auto">
        <M3Button
          variant="filled"
          onClick={handleSetTargetCareer}
          icon={<Route className="w-4 h-4" />}
          className="w-full shadow-lg"
        >
          {language === 'hi' ? 'इसे मेरा मुख्य मार्ग बनाएं (Set as Target)' : 'Add to My Learning Path'}
        </M3Button>
      </div>

      <M3BottomNavBar />
    </div>
  );
};
