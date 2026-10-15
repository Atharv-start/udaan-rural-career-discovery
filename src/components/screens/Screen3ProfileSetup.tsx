import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { M3TopAppBar, M3Button, M3Card, M3FilterChip, AndroidStatusBar } from '../common/MaterialComponents';
import { EducationLevel, StudentProfile } from '../../types';
import { User, BookOpen, Heart, Award, Sparkles, Smartphone, Check } from 'lucide-react';

const EDUCATION_LEVELS: { id: EducationLevel; labelEn: string; labelHi: string }[] = [
  { id: 'Class 9', labelEn: 'Class 9', labelHi: 'कक्षा 9' },
  { id: 'Class 10', labelEn: 'Class 10', labelHi: 'कक्षा 10' },
  { id: 'Class 11', labelEn: 'Class 11', labelHi: 'कक्षा 11' },
  { id: 'Class 12', labelEn: 'Class 12', labelHi: 'कक्षा 12' },
  { id: 'ITI / Vocational Certificate', labelEn: 'ITI / Vocational', labelHi: 'आईटीआई / वोकेशनल' },
  { id: 'Polytechnic Diploma', labelEn: 'Polytechnic Diploma', labelHi: 'पॉलिटेक्निक डिप्लोमा' },
  { id: 'Undergraduate Degree (BA/BSc/BCom)', labelEn: 'College (BA/BSc/BCom)', labelHi: 'कॉलेज स्नातक' },
  { id: 'Graduate / Completed', labelEn: 'Completed Studies', labelHi: 'पढ़ाई पूरी कर ली' },
];

const SUBJECTS_LIST = [
  { en: 'Science', hi: 'विज्ञान' },
  { en: 'Mathematics', hi: 'गणित' },
  { en: 'Social Science / History', hi: 'सामाजिक विज्ञान' },
  { en: 'Hindi / Regional Language', hi: 'हिंदी / भाषा' },
  { en: 'Agriculture', hi: 'कृषि विज्ञान' },
  { en: 'Computer Basics', hi: 'कंप्यूटर' },
  { en: 'Arts & Drawing', hi: 'कला एवं चित्रकला' },
  { en: 'Commerce / Accounts', hi: 'वाणिज्य / बहीखाता' }
];

const ACTIVITIES_LIST = [
  { en: 'Repairing bikes, pumps or electronics', hi: 'साइकिल, पंप या बिजली के सामान ठीक करना' },
  { en: 'Farming, composting & tree planting', hi: 'खेती, बागवानी और पौधे लगाना' },
  { en: 'Helping younger students study', hi: 'छोटे बच्चों को पढ़ाई में मदद करना' },
  { en: 'Sewing, embroidery & woodcraft', hi: 'सिलाई, कढ़ाई या हस्तशिल्प बनाना' },
  { en: 'Drawing, photography & video making', hi: 'चित्र बनाना या वीडियो बनाना' },
  { en: 'Outdoor sports & physical fitness', hi: 'दौड़, खेलकूद और व्यायाम' }
];

const SKILLS_LIST = [
  { en: 'Practical tool work with hands', hi: 'हाथ के औजारों से काम करना' },
  { en: 'Mental calculation & budgeting', hi: 'हिसाब-किताब और गणना' },
  { en: 'Patient listening & helping elders', hi: 'धैर्य से सुनना व मदद करना' },
  { en: 'Fast mobile typing & digital browsing', hi: 'तेज मोबाइल टाइपिंग व इंटरनेट' },
  { en: 'Public speaking & community leadership', hi: 'लोगों के सामने बात करना' },
  { en: 'Patience & observing details', hi: 'बारीकी से निरीक्षण करना' }
];

export const Screen3ProfileSetup: React.FC = () => {
  const { language, currentStudent, updateStudentProfile, navigateTo, showSnackbar, playSpeech } = useApp();
  
  const [step, setStep] = useState<number>(1);
  const totalSteps = 4;

  // Form State initialized from current student
  const [name, setName] = useState(currentStudent.name || '');
  const [educationLevel, setEducationLevel] = useState<EducationLevel>(currentStudent.educationLevel || 'Class 10');
  const [state, setState] = useState(currentStudent.state || 'Uttar Pradesh');
  const [district, setDistrict] = useState(currentStudent.district || 'Jhansi');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(currentStudent.subjects || ['Science', 'Mathematics']);
  const [selectedActivities, setSelectedActivities] = useState<string[]>(currentStudent.activities || []);
  const [selectedSkills, setSelectedSkills] = useState<string[]>(currentStudent.skills || []);
  const [learningStyle, setLearningStyle] = useState<'hands-on' | 'visual' | 'reading' | 'group'>(currentStudent.learningStyle || 'hands-on');
  const [aspiration, setAspiration] = useState(currentStudent.careerAspiration || '');
  const [deviceAccess, setDeviceAccess] = useState<'own-smartphone' | 'family-phone' | 'school-center' | 'limited'>(
    currentStudent.deviceAccess || 'own-smartphone'
  );

  const toggleItem = (list: string[], setList: (val: string[]) => void, item: string) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleNext = () => {
    // Save current step data locally
    updateStudentProfile({
      name: name.trim() || 'Student',
      educationLevel,
      state,
      district,
      subjects: selectedSubjects,
      activities: selectedActivities,
      skills: selectedSkills,
      learningStyle,
      careerAspiration: aspiration,
      deviceAccess
    });

    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      showSnackbar(language === 'hi' ? 'आपकी प्रोफाइल सफलतापूर्वक सहेज ली गई!' : 'Profile saved successfully!');
      navigateTo('student_home');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigateTo('role_selection');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF8F1] text-[#202B27] max-w-lg mx-auto">
      <div>
        <AndroidStatusBar />
        <M3TopAppBar
          title={language === 'hi' ? 'विद्यार्थी प्रोफाइल' : 'Student Profile'}
          subtitle={language === 'hi' ? `चरण ${step} / ${totalSteps}` : `Step ${step} of ${totalSteps}`}
          showBack={true}
          onBack={handleBack}
          readAloudText={
            step === 1 
              ? (language === 'hi' ? 'अपना नाम, कक्षा और जिला चुनें।' : 'Enter your name, class, state and district.')
              : step === 2
              ? (language === 'hi' ? 'वे विषय चुनें जो आपको पसंद हैं।' : 'Select the subjects you enjoy studying.')
              : step === 3
              ? (language === 'hi' ? 'वे गतिविधियां और हुनर चुनें जो आप करते हैं।' : 'Select the activities and skills you possess.')
              : (language === 'hi' ? 'आप कैसे सीखना पसंद करते हैं और मोबाइल सुविधा।' : 'Select your preferred learning style and device access.')
          }
        />

        {/* Linear Progress Bar */}
        <div className="w-full bg-[#21866F]/15 h-1.5 overflow-hidden">
          <div 
            className="bg-[#21866F] h-full transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        <div className="p-5">
          {/* STEP 1: Basic Identity & Class */}
          {step === 1 && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <span className="text-xs font-bold text-[#176B5B] uppercase tracking-wider">
                  {language === 'hi' ? 'बुनियादी जानकारी' : 'Basic Information'}
                </span>
                <h2 className="text-xl font-bold text-[#202B27] mt-0.5">
                  {language === 'hi' ? 'आपकी पहचान और कक्षा' : 'What should we call you?'}
                </h2>
                <p className="text-xs text-[#65736C] mt-1">
                  {language === 'hi' 
                    ? 'हम कभी भी आधार या संवेदनशील दस्तावेज नहीं मांगते।' 
                    : 'We never ask for Aadhaar or private sensitive documents.'}
                </p>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-xs font-semibold text-[#202B27] mb-1.5">
                  {language === 'hi' ? 'आपका नाम (या उपनाम)' : 'Your Name / Preferred Name'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'hi' ? 'उदा. रामेश्वर, आरती' : 'e.g. Rameshwar, Aarti'}
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-2xl bg-white border border-[#21866F]/30 focus:border-[#21866F] focus:outline-none focus:ring-2 focus:ring-[#21866F]/20 text-[#202B27] text-sm font-medium"
                  />
                  <User className="absolute right-3.5 top-3.5 w-5 h-5 text-[#65736C]" />
                </div>
              </div>

              {/* Class Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#202B27] mb-2">
                  {language === 'hi' ? 'वर्तमान कक्षा या स्तर' : 'Current Class or Level'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {EDUCATION_LEVELS.map(lvl => (
                    <button
                      key={lvl.id}
                      type="button"
                      onClick={() => setEducationLevel(lvl.id)}
                      className={`min-h-[48px] px-3 py-2 rounded-xl text-xs font-semibold border text-left flex items-center justify-between transition-all ${
                        educationLevel === lvl.id
                          ? 'border-[#21866F] bg-[#DDF3E8] text-[#176B5B] shadow-xs'
                          : 'border-[#21866F]/15 bg-white text-[#202B27] hover:bg-white/80'
                      }`}
                    >
                      <span className="truncate">{language === 'hi' ? lvl.labelHi : lvl.labelEn}</span>
                      {educationLevel === lvl.id && <Check className="w-3.5 h-3.5 text-[#176B5B] shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* State & District */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#202B27] mb-1">
                    {language === 'hi' ? 'राज्य' : 'State'}
                  </label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full min-h-[46px] px-3 py-2 rounded-xl bg-white border border-[#21866F]/30 text-xs font-medium text-[#202B27] focus:outline-none"
                  >
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Assam">Assam</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="Punjab">Punjab</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#202B27] mb-1">
                    {language === 'hi' ? 'जिला' : 'District'}
                  </label>
                  <input
                    type="text"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder="e.g. Jhansi"
                    className="w-full min-h-[46px] px-3 py-2 rounded-xl bg-white border border-[#21866F]/30 text-xs font-medium text-[#202B27] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Subjects of Interest */}
          {step === 2 && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <span className="text-xs font-bold text-[#176B5B] uppercase tracking-wider">
                  {language === 'hi' ? 'विषय एवं पढ़ाई' : 'Subjects & Studies'}
                </span>
                <h2 className="text-xl font-bold text-[#202B27] mt-0.5">
                  {language === 'hi' ? 'आपको कौन से विषय पसंद हैं?' : 'Which subjects do you enjoy?'}
                </h2>
                <p className="text-xs text-[#65736C] mt-1">
                  {language === 'hi' 
                    ? 'एक या एक से अधिक विषय चुनें। (कोई भी गलत विकल्प नहीं है)' 
                    : 'Select one or more subjects you find engaging.'}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {SUBJECTS_LIST.map(sub => {
                  const isSelected = selectedSubjects.includes(sub.en);
                  return (
                    <button
                      key={sub.en}
                      type="button"
                      onClick={() => toggleItem(selectedSubjects, setSelectedSubjects, sub.en)}
                      className={`min-h-[50px] p-3 rounded-2xl border text-left flex items-center justify-between transition-all select-none active:scale-[0.99] ${
                        isSelected 
                          ? 'border-[#21866F] bg-[#DDF3E8] text-[#176B5B] font-bold shadow-xs' 
                          : 'border-[#21866F]/15 bg-white text-[#202B27] hover:bg-white/80'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <BookOpen className={`w-4 h-4 ${isSelected ? 'text-[#176B5B]' : 'text-[#65736C]'}`} />
                        <span className="text-sm">
                          {language === 'hi' ? sub.hi : sub.en}
                        </span>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        isSelected ? 'bg-[#21866F] text-white' : 'border border-[#65736C]/40'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Activities & Skills */}
          {step === 3 && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <span className="text-xs font-bold text-[#176B5B] uppercase tracking-wider">
                  {language === 'hi' ? 'रुचियां और हुनर' : 'Activities & Talents'}
                </span>
                <h2 className="text-xl font-bold text-[#202B27] mt-0.5">
                  {language === 'hi' ? 'आपको क्या करना अच्छा लगता है?' : 'What do you enjoy doing?'}
                </h2>
                <p className="text-xs text-[#65736C] mt-1">
                  {language === 'hi'
                    ? 'वे काम चुनें जो आप खाली समय या घर-खेत में करते हैं।'
                    : 'Choose practical things you enjoy at home, farm, or school.'}
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#202B27] mb-2 uppercase tracking-wider">
                  {language === 'hi' ? 'पसंदीदा गतिविधियां' : 'Favorite Activities'}
                </label>
                <div className="space-y-2">
                  {ACTIVITIES_LIST.map(act => {
                    const isSelected = selectedActivities.includes(act.en);
                    return (
                      <button
                        key={act.en}
                        type="button"
                        onClick={() => toggleItem(selectedActivities, setSelectedActivities, act.en)}
                        className={`w-full min-h-[48px] p-3 rounded-2xl border text-left flex items-center justify-between text-xs sm:text-sm transition-all ${
                          isSelected
                            ? 'border-[#21866F] bg-[#DDF3E8] text-[#176B5B] font-semibold'
                            : 'border-[#21866F]/15 bg-white text-[#202B27]'
                        }`}
                      >
                        <span>{language === 'hi' ? act.hi : act.en}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#176B5B] shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2">
                <label className="block text-xs font-bold text-[#202B27] mb-2 uppercase tracking-wider">
                  {language === 'hi' ? 'आपके हुनर / क्षमताएं' : 'Your Key Strengths'}
                </label>
                <div className="space-y-2">
                  {SKILLS_LIST.map(skill => {
                    const isSelected = selectedSkills.includes(skill.en);
                    return (
                      <button
                        key={skill.en}
                        type="button"
                        onClick={() => toggleItem(selectedSkills, setSelectedSkills, skill.en)}
                        className={`w-full min-h-[48px] p-3 rounded-2xl border text-left flex items-center justify-between text-xs sm:text-sm transition-all ${
                          isSelected
                            ? 'border-[#21866F] bg-[#DDF3E8] text-[#176B5B] font-semibold'
                            : 'border-[#21866F]/15 bg-white text-[#202B27]'
                        }`}
                      >
                        <span>{language === 'hi' ? skill.hi : skill.en}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#176B5B] shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Learning Style, Device Access & Aspirations */}
          {step === 4 && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <span className="text-xs font-bold text-[#176B5B] uppercase tracking-wider">
                  {language === 'hi' ? 'सीखने की शैली एवं लक्ष्य' : 'Learning Style & Goals'}
                </span>
                <h2 className="text-xl font-bold text-[#202B27] mt-0.5">
                  {language === 'hi' ? 'आप कैसे सबसे अच्छा सीखते हैं?' : 'How do you learn best?'}
                </h2>
              </div>

              {/* Learning Style */}
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'hands-on', en: 'Hands-on Doing', hi: 'करके सीखना (प्रैक्टिकल)' },
                  { id: 'visual', en: 'Watching Videos', hi: 'चित्र व वीडियो देखकर' },
                  { id: 'reading', en: 'Reading Books', hi: 'किताबें पढ़कर' },
                  { id: 'group', en: 'Group Discussion', hi: 'साथियों से चर्चा करके' },
                ].map(style => (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setLearningStyle(style.id as any)}
                    className={`min-h-[54px] p-3 rounded-2xl border text-left text-xs font-semibold transition-all ${
                      learningStyle === style.id
                        ? 'border-[#21866F] bg-[#DDF3E8] text-[#176B5B] shadow-xs'
                        : 'border-[#21866F]/15 bg-white text-[#202B27]'
                    }`}
                  >
                    <span>{language === 'hi' ? style.hi : style.en}</span>
                  </button>
                ))}
              </div>

              {/* Device Access */}
              <div>
                <label className="block text-xs font-bold text-[#202B27] mb-2 uppercase tracking-wider">
                  {language === 'hi' ? 'फोन / इंटरनेट की उपलब्धता' : 'Phone & Internet Availability'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'own-smartphone', en: 'My Own Phone', hi: 'खुद का स्मार्टफोन' },
                    { id: 'family-phone', en: 'Family Phone', hi: 'परिवार का फोन' },
                    { id: 'school-center', en: 'School / CSC', hi: 'स्कूल / सीएससी' },
                    { id: 'limited', en: 'Limited / Weak Network', hi: 'कम नेटवर्क' },
                  ].map(dev => (
                    <button
                      key={dev.id}
                      type="button"
                      onClick={() => setDeviceAccess(dev.id as any)}
                      className={`min-h-[48px] p-2.5 rounded-xl border text-left text-xs font-medium transition-all ${
                        deviceAccess === dev.id
                          ? 'border-[#21866F] bg-[#DDF3E8] text-[#176B5B] font-bold'
                          : 'border-[#21866F]/15 bg-white text-[#202B27]'
                      }`}
                    >
                      <span>{language === 'hi' ? dev.hi : dev.en}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Career Aspiration */}
              <div>
                <label className="block text-xs font-bold text-[#202B27] mb-1.5 uppercase tracking-wider">
                  {language === 'hi' ? 'कोई विशेष सपना या लक्ष्य (वैकल्पिक)' : 'Specific Career Dream (Optional)'}
                </label>
                <input
                  type="text"
                  value={aspiration}
                  onChange={(e) => setAspiration(e.target.value)}
                  placeholder={language === 'hi' ? 'उदा. सोलर इंजीनियर, स्वास्थ्य कार्यकर्ता, सरकारी शिक्षक' : 'e.g. Solar Engineer, Health Worker, Teacher'}
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-2xl bg-white border border-[#21866F]/30 text-xs sm:text-sm font-medium text-[#202B27] focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="p-5 pt-2 border-t border-[#21866F]/10 bg-[#FAF8F1]">
        <div className="flex items-center gap-3">
          {step > 1 && (
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
            {step === totalSteps 
              ? (language === 'hi' ? 'प्रोफाइल सहेजें एवं आगे बढ़ें' : 'Save & Explore My Dashboard')
              : (language === 'hi' ? 'आगे बढ़ें' : 'Next Step')}
          </M3Button>
        </div>
      </div>
    </div>
  );
};
