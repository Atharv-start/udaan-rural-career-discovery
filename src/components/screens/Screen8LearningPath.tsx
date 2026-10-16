import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  M3TopAppBar,
  M3Button,
  M3Card,
  M3BottomNavBar,
  AndroidStatusBar
} from '../common/MaterialComponents';
import { CAREERS_DATA } from '../../services/recommendationEngine';
import {
  CheckCircle2,
  Clock,
  PlayCircle,
  BookOpen,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export const Screen8LearningPath: React.FC = () => {
  const {
    language,
    currentStudent,
    showSnackbar,
    navigateTo,
    setSelectedCareerId
  } = useApp();

  const targetCareer = CAREERS_DATA.find(c => c.id === currentStudent.targetCareerId) || CAREERS_DATA[0];

  // Local state for completed milestone step numbers
  const [completedSteps, setCompletedSteps] = useState<number[]>(() => {
    return [1]; // Step 1 completed by default
  });

  const toggleStepCompletion = (stepNum: number) => {
    setCompletedSteps(prev => {
      const isDone = prev.includes(stepNum);
      const updated = isDone ? prev.filter(s => s !== stepNum) : [...prev, stepNum];
      showSnackbar(
        isDone
          ? (language === 'hi' ? 'चरण पुनः प्रगति में' : 'Step marked as in progress')
          : (language === 'hi' ? 'शाबाश! चरण पूर्ण चिह्नित किया गया' : 'Great job! Step marked as completed')
      );
      return updated;
    });
  };

  const currentActiveStep = Math.min(...[1, 2, 3, 4].filter(s => !completedSteps.includes(s)), 4);

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#202B27] pb-24 max-w-lg mx-auto">
      <AndroidStatusBar />
      <M3TopAppBar
        title={language === 'hi' ? 'मेरा सीखने का मार्ग' : 'My Learning Path'}
        subtitle={language === 'hi' ? targetCareer.nameHi : targetCareer.nameEn}
        showBack={true}
        onBack={() => navigateTo('student_home')}
        readAloudText={
          language === 'hi'
            ? `आपका लक्ष्य: ${targetCareer.nameHi}। 4 चरण देखें। पूरा होने पर टिक लगाएं।`
            : `Your target career: ${targetCareer.nameEn}. Review 4 milestone stages.`
        }
      />

      <main className="p-4 space-y-4">
        {/* Target Career Banner */}
        <div className="rounded-[22px] bg-gradient-to-r from-[#176B5B] to-[#21866F] text-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F2B544] bg-black/20 px-2.5 py-0.5 rounded-full">
                {language === 'hi' ? 'लक्ष्य आईटीआई ट्रेड' : 'Target ITI Trade'}
              </span>
              <h2 className="text-lg font-bold mt-1 text-white leading-tight">
                {language === 'hi' ? targetCareer.nameHi : targetCareer.nameEn}
              </h2>
              <p className="text-xs text-[#DDF3E8] mt-0.5">
                {language === 'hi'
                  ? `प्रगति: ${completedSteps.length} / 4 चरण पूरे हुए`
                  : `Progress: ${completedSteps.length} of 4 steps completed`}
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedCareerId(targetCareer.id);
                navigateTo('career_details');
              }}
              className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-semibold shrink-0"
            >
              {language === 'hi' ? 'बदलें' : 'Change'}
            </button>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden mt-3">
            <div
              className="bg-[#F2B544] h-full rounded-full transition-all duration-300"
              style={{ width: `${(completedSteps.length / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="space-y-4 relative before:absolute before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-[#21866F]/25">
          {targetCareer.pathway.map((stepText, idx) => {
            const stepNum = idx + 1;
            const isCompleted = completedSteps.includes(stepNum);
            const isCurrent = stepNum === currentActiveStep && !isCompleted;

            let statusLabelEn = 'Upcoming';
            let statusLabelHi = 'आगामी चरण';
            let statusColor = 'bg-[#FAF8F1] text-[#65736C] border-[#65736C]/20';

            if (isCompleted) {
              statusLabelEn = 'Completed';
              statusLabelHi = 'पूर्ण हुआ';
              statusColor = 'bg-[#21866F] text-white border-[#21866F]';
            } else if (isCurrent) {
              statusLabelEn = 'Start here / In Progress';
              statusLabelHi = 'यहाँ से शुरू करें (प्रगति में)';
              statusColor = 'bg-[#F2B544] text-[#202B27] border-[#F2B544] font-bold animate-pulse';
            }

            return (
              <div key={stepNum} className="relative flex items-start gap-4 pl-1">
                {/* Node icon */}
                <button
                  type="button"
                  onClick={() => toggleStepCompletion(stepNum)}
                  title={isCompleted ? 'Mark incomplete' : 'Mark completed'}
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 z-10 transition-all shadow-xs select-none ${
                    isCompleted
                      ? 'bg-[#21866F] text-white ring-4 ring-white'
                      : isCurrent
                      ? 'bg-[#F2B544] text-[#202B27] ring-4 ring-white'
                      : 'bg-white text-[#65736C] border-2 border-[#21866F]/30 ring-4 ring-white'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                  ) : isCurrent ? (
                    <PlayCircle className="w-5 h-5 stroke-[2.5]" />
                  ) : (
                    <span className="text-xs font-bold">{stepNum}</span>
                  )}
                </button>

                {/* Content Card */}
                <M3Card className={`flex-1 p-4 border transition-all ${
                  isCurrent
                    ? 'border-[#21866F] bg-white ring-2 ring-[#21866F]/10 shadow-md'
                    : isCompleted
                    ? 'border-[#21866F]/20 bg-white/90'
                    : 'border-[#21866F]/15 bg-white/70'
                }`}>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${statusColor}`}>
                      {language === 'hi' ? statusLabelHi : statusLabelEn}
                    </span>
                    <span className="text-[10px] text-[#65736C] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{language === 'hi' ? `चरण ${stepNum}` : `Step ${stepNum}`}</span>
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#202B27] mt-1 leading-snug">
                    {language === 'hi' ? `कदम ${stepNum}: आधिकारिक प्रक्रिया` : `Milestone ${stepNum}: Official Pathway`}
                  </h3>

                  <p className="text-xs text-[#202B27] mt-1 leading-relaxed">
                    {stepText}
                  </p>

                  {/* Toggle completion action */}
                  <div className="mt-3 pt-2.5 border-t border-[#21866F]/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => toggleStepCompletion(stepNum)}
                      className="text-xs font-semibold text-[#176B5B] hover:underline flex items-center gap-1"
                    >
                      <span>
                        {isCompleted
                          ? (language === 'hi' ? 'पूर्ण से हटाएं' : 'Mark incomplete')
                          : (language === 'hi' ? 'पूर्ण चिह्नित करें' : 'Mark as done')}
                      </span>
                    </button>

                    {stepNum === 2 && (
                      <button
                        onClick={() => navigateTo('opportunity_finder')}
                        className="text-[11px] font-bold text-[#176B5B] bg-[#DDF3E8] px-2.5 py-1 rounded-full flex items-center gap-1 hover:bg-[#DDF3E8]/80"
                      >
                        <span>{language === 'hi' ? 'प्रवेश योजनाएं' : 'Admission Schemes'}</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </M3Card>
              </div>
            );
          })}
        </div>

        {/* Free Study Material Box */}
        <div className="p-4 rounded-2xl bg-[#DDF3E8]/70 border border-[#21866F]/20">
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-[#176B5B] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#176B5B] uppercase tracking-wider">
                {language === 'hi' ? 'निःशुल्क अध्ययन संसाधन' : 'Free Learning Resources'}
              </h4>
              <p className="text-xs text-[#202B27] mt-0.5 leading-relaxed">
                {language === 'hi'
                  ? 'सरकारी भारत स्किल्स (Bharat Skills) और डीजीटी पोर्टल पर इस ट्रेड के पाठ्यक्रम, ई-पुस्तकें और प्रश्न बैंक मुफ्त उपलब्ध हैं।'
                  : 'Official curricula, e-books, and test questions for this trade are freely available via DGT Bharat Skills.'}
              </p>
              <button
                onClick={() => navigateTo('opportunity_finder')}
                className="mt-2 text-xs font-bold text-[#176B5B] hover:underline inline-flex items-center gap-1"
              >
                <span>{language === 'hi' ? 'संबंधित योजनाएं देखें' : 'View related schemes'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <M3BottomNavBar />
    </div>
  );
};
