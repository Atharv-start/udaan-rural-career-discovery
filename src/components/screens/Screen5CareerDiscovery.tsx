import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  M3TopAppBar, 
  M3Button, 
  M3Card, 
  AndroidStatusBar 
} from '../common/MaterialComponents';
import { DiscoveryAnswers } from '../../types';
import { 
  Wrench, 
  Users, 
  Palette, 
  Trees, 
  HelpCircle, 
  Cpu, 
  Check, 
  Briefcase, 
  GraduationCap, 
  Volume2, 
  ArrowLeft 
} from 'lucide-react';

interface DiscoveryQuestion {
  id: number;
  titleEn: string;
  titleHi: string;
  subtitleEn: string;
  subtitleHi: string;
  field: keyof DiscoveryAnswers;
  isMulti: boolean;
  options: { id: string; labelEn: string; labelHi: string; icon?: React.ReactNode }[];
}

const QUESTIONS: DiscoveryQuestion[] = [
  {
    id: 1,
    titleEn: 'What type of daily work energizes you most?',
    titleHi: 'आपको किस तरह का काम करने में सबसे ज्यादा आनंद आता है?',
    subtitleEn: 'Choose one or two activities that feel natural to you.',
    subtitleHi: 'वे काम चुनें जो आपको स्वाभाविक रूप से पसंद हैं।',
    field: 'workPreference',
    isMulti: true,
    options: [
      { id: 'repairing', labelEn: 'Fixing machines, wiring, or tools', labelHi: 'मशीनें, बिजली या उपकरण ठीक करना' },
      { id: 'outdoors', labelEn: 'Working outdoors in fields and nature', labelHi: 'खेतों और खुली प्रकृति में काम करना' },
      { id: 'helping-people', labelEn: 'Helping patients, children, or villagers', labelHi: 'मरीजों, बच्चों या ग्रामीणों की मदद करना' },
      { id: 'creating', labelEn: 'Crafting, designing, or tailoring items', labelHi: 'कपड़े, फर्नीचर या कलात्मक चीजें बनाना' },
      { id: 'problem-solving', labelEn: 'Calculating numbers, accounts, and records', labelHi: 'हिसाब-किताब, आंकड़े और फाइलें सुलझाना' }
    ]
  },
  {
    id: 2,
    titleEn: 'Where do you feel happiest spending your time?',
    titleHi: 'आप किस क्षेत्र (डोमेन) में काम करना पसंद करेंगे?',
    subtitleEn: 'Select the environments you are drawn toward.',
    subtitleHi: 'अपनी रुचि के अनुसार पसंदीदा क्षेत्र चुनें।',
    field: 'workDomain',
    isMulti: true,
    options: [
      { id: 'machines', labelEn: 'Machines & Mechanical Equipment', labelHi: 'मशीनें एवं तकनीकी उपकरण' },
      { id: 'nature', labelEn: 'Farms, Crops, Forests & Animals', labelHi: 'खेती, फसलें, जंगल एवं पशुपालन' },
      { id: 'people', labelEn: 'Community, Teaching & Healthcare', labelHi: 'समाज, शिक्षण एवं स्वास्थ्य सेवाएं' },
      { id: 'technology', labelEn: 'Smartphones, Computers & Software', labelHi: 'कंप्यूटर, स्मार्टफोन एवं ऑनलाइन सेवाएं' },
      { id: 'business', labelEn: 'Mandi Trade, Stores & Logistics', labelHi: 'मंडी व्यापार, दुकानदारी एवं माल आपूर्ति' },
      { id: 'art', labelEn: 'Textiles, Crafts & Visual Art', labelHi: 'हथकरघा वस्त्र, हस्तशिल्प एवं डिजाइन' }
    ]
  },
  {
    id: 3,
    titleEn: 'What kind of career pathways would you like to explore?',
    titleHi: 'आप किस प्रकार के करियर मार्ग देखना चाहते हैं?',
    subtitleEn: 'Both options provide steady livelihood and self-reliance.',
    subtitleHi: 'दोनों रास्ते सम्मानजनक आजीविका और आत्मनिर्भरता देते हैं।',
    field: 'careerType',
    isMulti: false,
    options: [
      { id: 'both', labelEn: 'Both Vocational & Academic (Recommended)', labelHi: 'दोनों (व्यावहारिक हुनर + डिग्री) — अनुशंसित' },
      { id: 'vocational', labelEn: 'Vocational Skilling (ITI, NAPS, fast livelihood)', labelHi: 'व्यावहारिक हुनर (कम समय में आत्मनिर्भरता)' },
      { id: 'academic', labelEn: 'Formal Higher Education (College degree, TET, UPSC)', labelHi: 'औपचारिक उच्च शिक्षा (कॉलेज डिग्री, प्रतियोगी परीक्षा)' }
    ]
  }
];

export const Screen5CareerDiscovery: React.FC = () => {
  const { language, navigateTo, setDiscoveryAnswers, playSpeech } = useApp();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<DiscoveryAnswers>({
    activities: [],
    workPreference: ['repairing', 'outdoors'],
    subjects: ['Science'],
    workDomain: ['machines', 'nature'],
    careerType: 'both'
  });
  const [additionalNote, setAdditionalNote] = useState<string>('');

  const q = QUESTIONS[currentStep];

  const handleSelectOption = (optionId: string) => {
    if (q.isMulti) {
      const currentList = (answers[q.field] as string[]) || [];
      const updated = currentList.includes(optionId)
        ? currentList.filter(id => id !== optionId)
        : [...currentList, optionId];
      setAnswers({ ...answers, [q.field]: updated });
    } else {
      setAnswers({ ...answers, [q.field]: optionId });
    }
  };

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Save completed answers and go to results
      setDiscoveryAnswers(answers);
      navigateTo('career_results');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigateTo('student_home');
    }
  };

  const currentSelection = answers[q.field];
  const readText = language === 'hi' 
    ? `${q.titleHi} ${q.subtitleHi}` 
    : `${q.titleEn} ${q.subtitleEn}`;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF8F1] text-[#202B27] max-w-lg mx-auto">
      <div>
        <AndroidStatusBar />
        <M3TopAppBar
          title={language === 'hi' ? 'करियर खोज' : 'Career Discovery'}
          subtitle={language === 'hi' ? `प्रश्न ${currentStep + 1} / ${QUESTIONS.length}` : `Question ${currentStep + 1} of ${QUESTIONS.length}`}
          showBack={true}
          onBack={handleBack}
          readAloudText={readText}
        />

        {/* Progress bar */}
        <div className="w-full bg-[#21866F]/15 h-1.5 overflow-hidden">
          <div 
            className="bg-[#21866F] h-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
          />
        </div>

        <div className="p-5">
          {/* Question Card */}
          <div className="mb-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#176B5B] bg-[#DDF3E8] px-2.5 py-0.5 rounded-full">
              {language === 'hi' ? `कदम ${currentStep + 1}` : `Step ${currentStep + 1}`}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#202B27] mt-2 leading-snug">
              {language === 'hi' ? q.titleHi : q.titleEn}
            </h2>
            <p className="text-xs sm:text-sm text-[#65736C] mt-1.5 leading-relaxed">
              {language === 'hi' ? q.subtitleHi : q.subtitleEn}
            </p>
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {q.options.map(opt => {
              const isSelected = q.isMulti
                ? ((currentSelection as string[]) || []).includes(opt.id)
                : currentSelection === opt.id;

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectOption(opt.id)}
                  className={`w-full min-h-[60px] p-4 rounded-2xl border-2 text-left flex items-center justify-between transition-all select-none active:scale-[0.99] ${
                    isSelected
                      ? 'border-[#21866F] bg-white shadow-md shadow-[#21866F]/10 ring-2 ring-[#21866F]/15'
                      : 'border-[#21866F]/15 bg-white/70 hover:bg-white'
                  }`}
                >
                  <span className={`text-sm font-semibold leading-snug ${
                    isSelected ? 'text-[#176B5B]' : 'text-[#202B27]'
                  }`}>
                    {language === 'hi' ? opt.labelHi : opt.labelEn}
                  </span>

                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ml-3 transition-all ${
                    isSelected ? 'bg-[#21866F] text-white shadow-xs' : 'border-2 border-[#65736C]/30'
                  }`}>
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Optional Open Text Feedback */}
          {currentStep === QUESTIONS.length - 1 && (
            <div className="mt-5 pt-4 border-t border-[#21866F]/15">
              <label className="block text-xs font-semibold text-[#202B27] mb-1.5">
                {language === 'hi' 
                  ? 'कोई अन्य बात जो आप बताना चाहते हैं? (वैकल्पिक)' 
                  : 'Any specific constraint or preference? (Optional)'}
              </label>
              <textarea
                rows={2}
                value={additionalNote}
                onChange={(e) => setAdditionalNote(e.target.value)}
                placeholder={language === 'hi' ? 'उदा. मैं अपने जिले के बाहर नहीं जा सकता / मुझे धूप में काम पसंद है' : 'e.g. Prefer to work within district / interested in green jobs'}
                className="w-full p-3 rounded-xl bg-white border border-[#21866F]/30 text-xs text-[#202B27] focus:outline-none"
              />
            </div>
          )}
        </div>
      </div>

      {/* Bottom Sticky Controls */}
      <div className="p-5 pt-2 border-t border-[#21866F]/10 bg-[#FAF8F1]">
        <div className="flex items-center gap-3">
          {currentStep > 0 && (
            <M3Button
              variant="outlined"
              onClick={handleBack}
              className="px-4"
            >
              {language === 'hi' ? 'पीछे' : 'Back'}
            </M3Button>
          )}
          <M3Button
            variant="filled"
            onClick={handleNext}
            className="flex-1 py-3 text-base"
          >
            {currentStep === QUESTIONS.length - 1
              ? (language === 'hi' ? 'परिणाम देखें' : 'View Matching Careers')
              : (language === 'hi' ? 'अगला प्रश्न' : 'Next Question')}
          </M3Button>
        </div>
      </div>
    </div>
  );
};
