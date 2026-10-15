import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { M3TopAppBar, M3Button, M3Card, AndroidStatusBar } from '../common/MaterialComponents';
import { GraduationCap, Users, Check, Sparkles, Compass } from 'lucide-react';

export const Screen2RoleSelection: React.FC = () => {
  const { language, role, setRole, navigateTo, playSpeech } = useApp();
  const [selectedRole, setSelectedRole] = useState<'student' | 'facilitator'>(role || 'student');

  const handleSelectRole = (newRole: 'student' | 'facilitator') => {
    setSelectedRole(newRole);
    setRole(newRole);
    if (newRole === 'student') {
      playSpeech(language === 'hi' ? 'छात्र विकल्प चुना गया' : 'Student mode selected');
    } else {
      playSpeech(language === 'hi' ? 'शिक्षक एवं मेंटर विकल्प चुना गया' : 'Teacher and facilitator mode selected');
    }
  };

  const handleContinue = () => {
    if (selectedRole === 'student') {
      navigateTo('profile_setup');
    } else {
      navigateTo('facilitator_home');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF8F1] text-[#202B27] max-w-lg mx-auto">
      <div>
        <AndroidStatusBar />
        <M3TopAppBar
          title={language === 'hi' ? 'उड़ान में आपका स्वागत है' : 'Welcome to Udaan'}
          showBack={true}
          onBack={() => navigateTo('language_selection')}
          readAloudText={
            language === 'hi'
              ? 'जानिए आप क्या बन सकते हैं। अपनी भूमिका चुनें: छात्र या शिक्षक।'
              : 'Discover what you can become. Select your role: Student or Village Teacher and Facilitator.'
          }
        />

        <div className="p-6">
          {/* Abstract career illustration header */}
          <div className="rounded-[22px] bg-gradient-to-br from-[#176B5B] to-[#21866F] p-6 text-white shadow-md relative overflow-hidden mb-6">
            <div className="relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F2B544] bg-black/20 px-2.5 py-1 rounded-full">
                {language === 'hi' ? 'भविष्य की दिशा' : 'Career Navigation'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mt-2 leading-snug">
                {language === 'hi' ? 'जानिए आप क्या बन सकते हैं' : 'Discover what you can become.'}
              </h2>
              <p className="text-xs sm:text-sm text-[#DDF3E8] mt-1.5 leading-relaxed">
                {language === 'hi'
                  ? 'व्यावहारिक हुनर, सरकारी योजनाएं, छात्रवृत्तियां और स्थानीय आजीविका का सही मार्गदर्शन।'
                  : 'Practical vocational skills, scholarships, exams, and verified livelihood paths for rural youth.'}
              </p>
            </div>

            {/* Stylized vector icons */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-white/10 flex items-center justify-center pointer-events-none">
              <Compass className="w-20 h-20 text-white/20 stroke-[1.5]" />
            </div>
          </div>

          <label className="block text-xs font-bold text-[#65736C] uppercase tracking-wider mb-3">
            {language === 'hi' ? 'आप ऐप का उपयोग कैसे करना चाहते हैं?' : 'How would you like to use this app?'}
          </label>

          {/* Student Role Card */}
          <M3Card
            onClick={() => handleSelectRole('student')}
            className={`p-5 mb-4 border-2 transition-all cursor-pointer ${
              selectedRole === 'student'
                ? 'border-[#21866F] bg-white ring-2 ring-[#21866F]/15 shadow-md'
                : 'border-[#21866F]/15 bg-white/80 hover:bg-white'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                  selectedRole === 'student' ? 'bg-[#21866F] text-white' : 'bg-[#DDF3E8] text-[#176B5B]'
                }`}>
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#202B27]">
                    {language === 'hi' ? 'मैं एक विद्यार्थी / युवा हूँ' : "I am a Student / Youth"}
                  </h3>
                  <p className="text-xs text-[#65736C] mt-1 leading-relaxed">
                    {language === 'hi'
                      ? 'कक्षा 9 से स्नातक। अपनी रुचियों के आधार पर उपयुक्त करियर, वोकेशनल ट्रेड और छात्रवृत्ति खोजें।'
                      : 'Class 9 through graduation. Discover suitable careers, vocational trades, learning steps, and scholarships.'}
                  </p>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 transition-all ${
                selectedRole === 'student' ? 'bg-[#21866F] text-white' : 'border-2 border-[#65736C]/40'
              }`}>
                {selectedRole === 'student' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
            </div>
          </M3Card>

          {/* Facilitator / Teacher Role Card */}
          <M3Card
            onClick={() => handleSelectRole('facilitator')}
            className={`p-5 border-2 transition-all cursor-pointer ${
              selectedRole === 'facilitator'
                ? 'border-[#21866F] bg-white ring-2 ring-[#21866F]/15 shadow-md'
                : 'border-[#21866F]/15 bg-white/80 hover:bg-white'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                  selectedRole === 'facilitator' ? 'bg-[#21866F] text-white' : 'bg-[#DDF3E8] text-[#176B5B]'
                }`}>
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#202B27]">
                    {language === 'hi' ? 'मैं शिक्षक / ग्राम मेंटर हूँ' : 'I am a Teacher / Facilitator'}
                  </h3>
                  <p className="text-xs text-[#65736C] mt-1 leading-relaxed">
                    {language === 'hi'
                      ? 'अपने स्कूल या गांव के कई विद्यार्थियों के प्रोफाइल संभालें, योजनाएं सुझाएं और ऑफलाइन मार्गदर्शन दें।'
                      : 'Manage student rosters, recommend government schemes, and write offline mentorship guidance.'}
                  </p>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 transition-all ${
                selectedRole === 'facilitator' ? 'bg-[#21866F] text-white' : 'border-2 border-[#65736C]/40'
              }`}>
                {selectedRole === 'facilitator' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
            </div>
          </M3Card>
        </div>
      </div>

      {/* Bottom Continue Action */}
      <div className="p-6 pt-0">
        <M3Button
          variant="filled"
          onClick={handleContinue}
          className="w-full text-base py-3"
        >
          {selectedRole === 'student'
            ? (language === 'hi' ? 'प्रोफाइल शुरू करें' : 'Create My Profile')
            : (language === 'hi' ? 'शिक्षक डैशबोर्ड खोलें' : 'Open Facilitator Roster')}
        </M3Button>
      </div>
    </div>
  );
};
