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
import { OPPORTUNITIES_DATA } from '../../data/opportunitiesData';
import { 
  CheckCircle2, 
  HelpCircle, 
  Route, 
  BookOpen, 
  Award, 
  TrendingUp, 
  IndianRupee, 
  Briefcase, 
  Sparkles,
  ArrowRight,
  Sun,
  Sprout,
  Radio,
  HeartPulse,
  Monitor,
  Wrench,
  Scissors,
  Droplets
} from 'lucide-react';

export const Screen7CareerDetails: React.FC = () => {
  const { 
    language, 
    selectedCareerId, 
    navigateTo, 
    updateStudentProfile, 
    showSnackbar, 
    playSpeech 
  } = useApp();

  const career = CAREERS_DATA.find(c => c.id === selectedCareerId) || CAREERS_DATA[0];

  const handleSetTargetCareer = () => {
    updateStudentProfile({ targetCareerId: career.id });
    showSnackbar(
      language === 'hi' 
        ? `${career.titleHi} आपके 'मार्ग' में जोड़ दिया गया` 
        : `${career.title} added to My Learning Path`
    );
    navigateTo('learning_path');
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

  const IconComponent = getCareerIcon(career.icon);

  // Find related opportunities
  const relatedOpportunities = OPPORTUNITIES_DATA.filter(opp => {
    if (career.isVocational && (opp.category === 'vocational' || opp.category === 'apprenticeship')) return true;
    if (opp.id === 'opp-nmms' || opp.id === 'opp-swayam-free-courses') return true;
    return false;
  }).slice(0, 2);

  const readText = language === 'hi'
    ? `${career.titleHi}। ${career.shortDescriptionHi}। अपेक्षित आय: ${career.indicativeSalaryHi}।`
    : `${career.title}. ${career.shortDescription}. Estimated earnings: ${career.indicativeSalary}.`;

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#202B27] pb-24 max-w-lg mx-auto">
      <AndroidStatusBar />
      <M3TopAppBar
        title={language === 'hi' ? career.titleHi : career.title}
        subtitle={language === 'hi' ? career.categoryHi : career.category}
        showBack={true}
        onBack={() => navigateTo('career_results')}
        readAloudText={readText}
      />

      <main className="p-4 space-y-5">
        {/* Hero Card */}
        <div className="rounded-[22px] bg-white border border-[#21866F]/20 p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#DDF3E8] text-[#176B5B] flex items-center justify-center shrink-0">
              <IconComponent className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#176B5B] bg-[#DDF3E8] px-2.5 py-0.5 rounded-full">
                  {language === 'hi' ? career.categoryHi : career.category}
                </span>
                {career.isVocational && (
                  <span className="text-[10px] font-semibold text-[#202B27] bg-[#F2B544]/30 px-2 py-0.5 rounded-full">
                    {language === 'hi' ? 'व्यावहारिक हुनर' : 'Vocational'}
                  </span>
                )}
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-[#202B27] leading-snug">
                {language === 'hi' ? career.titleHi : career.title}
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#202B27] mt-3 leading-relaxed">
            {language === 'hi' ? career.fullDescriptionHi : career.fullDescription}
          </p>

          {/* Quick Metrics Strip */}
          <div className="mt-4 pt-3 border-t border-[#21866F]/10 grid grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 rounded-xl bg-[#FAF8F1] border border-[#21866F]/10">
              <div className="flex items-center gap-1 text-[#176B5B] font-bold text-[10px] uppercase">
                <IndianRupee className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'संभावित मासिक आय' : 'Indicative Income'}</span>
              </div>
              <p className="text-[#202B27] font-semibold mt-0.5 text-xs">
                {language === 'hi' ? career.indicativeSalaryHi : career.indicativeSalary}
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-[#FAF8F1] border border-[#21866F]/10">
              <div className="flex items-center gap-1 text-[#21866F] font-bold text-[10px] uppercase">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'भविष्य की मांग' : 'Growth Scope'}</span>
              </div>
              <p className="text-[#202B27] font-semibold mt-0.5 text-xs truncate">
                {language === 'hi' ? 'उच्च ग्रामीण मांग' : 'High Local Growth'}
              </p>
            </div>
          </div>
        </div>

        {/* What they do day-to-day */}
        <section className="bg-white rounded-[20px] p-5 border border-[#21866F]/15">
          <h3 className="text-sm font-bold text-[#202B27] uppercase tracking-wider mb-3 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-[#176B5B]" />
            <span>{language === 'hi' ? 'दैनिक कार्य (What They Do)' : 'What The Person Does'}</span>
          </h3>

          <ul className="space-y-2.5">
            {career.whatTheyDo.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202B27]">
                <div className="w-5 h-5 rounded-full bg-[#DDF3E8] text-[#176B5B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  {idx + 1}
                </div>
                <span className="leading-relaxed">
                  {language === 'hi' ? item.hi : item.en}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* 4-Step Pathway to Success */}
        <section className="bg-white rounded-[20px] p-5 border border-[#21866F]/15">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-[#202B27] uppercase tracking-wider flex items-center gap-2">
              <Route className="w-4 h-4 text-[#176B5B]" />
              <span>{language === 'hi' ? '4-चरणीय करियर मार्ग' : '4-Step Career Pathway'}</span>
            </h3>
            <span className="text-[10px] text-[#65736C]">
              {language === 'hi' ? 'प्रमाणित रोडमैप' : 'Step-by-step'}
            </span>
          </div>

          <div className="space-y-4 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#21866F]/20">
            {career.pathwaySteps.map((step) => (
              <div key={step.step} className="relative flex items-start gap-3.5 pl-1">
                <div className="w-7 h-7 rounded-full bg-[#21866F] text-white flex items-center justify-center text-xs font-bold shrink-0 ring-4 ring-white shadow-xs">
                  {step.step}
                </div>

                <div className="flex-1 min-w-0 bg-[#FAF8F1] p-3 rounded-xl border border-[#21866F]/12">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-[#202B27]">
                      {language === 'hi' ? step.titleHi : step.title}
                    </h4>
                    <span className="text-[10px] text-[#176B5B] font-semibold bg-[#DDF3E8] px-2 py-0.5 rounded shrink-0">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-xs text-[#65736C] leading-relaxed">
                    {language === 'hi' ? step.descriptionHi : step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Required Skills & Training */}
        <section className="bg-white rounded-[20px] p-5 border border-[#21866F]/15">
          <h3 className="text-sm font-bold text-[#202B27] uppercase tracking-wider mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-[#176B5B]" />
            <span>{language === 'hi' ? 'आवश्यक हुनर एवं प्रशिक्षण' : 'Required Skills & Courses'}</span>
          </h3>

          <div className="space-y-3">
            <div>
              <span className="text-xs font-semibold text-[#65736C] block mb-1.5">
                {language === 'hi' ? 'सीखने योग्य मुख्य कौशल:' : 'Essential Technical Skills:'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {career.requiredSkills.map((sk, i) => (
                  <span 
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-[#DDF3E8] text-[#176B5B] font-medium"
                  >
                    {language === 'hi' ? sk.hi : sk.en}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-[#21866F]/10">
              <span className="text-xs font-semibold text-[#65736C] block mb-1.5">
                {language === 'hi' ? 'मान्यता प्राप्त कोर्स एवं परीक्षाएं:' : 'Recognized Exams / Trades:'}
              </span>
              <ul className="space-y-1.5">
                {career.coursesExams.map((exam, i) => (
                  <li key={i} className="text-xs text-[#202B27] flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#21866F]" />
                    <span>{language === 'hi' ? exam.hi : exam.en}</span>
                  </li>
                ))}
              </ul>
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
                    {language === 'hi' ? opp.categoryLabel.hi : opp.categoryLabel.en}
                  </span>
                  <span className="text-[10px] text-[#65736C]">
                    {language === 'hi' ? opp.deadlineHi : opp.deadline}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#202B27] mt-0.5">
                  {language === 'hi' ? opp.nameHi : opp.name}
                </h4>
                <p className="text-[11px] text-[#65736C] mt-0.5 line-clamp-1">
                  {language === 'hi' ? opp.eligibilitySummaryHi : opp.eligibilitySummary}
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
