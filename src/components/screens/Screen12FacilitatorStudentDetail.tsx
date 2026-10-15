import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  M3TopAppBar, 
  M3Button, 
  M3Card, 
  M3BottomNavBar, 
  AndroidStatusBar 
} from '../common/MaterialComponents';
import { OPPORTUNITIES_DATA } from '../../data/opportunitiesData';
import { CAREERS_DATA } from '../../data/careersData';
import { TransparentRecommendationEngine } from '../../services/recommendationEngine';
import { 
  User, 
  CheckCircle2, 
  BookOpen, 
  Sparkles, 
  Bookmark, 
  MessageSquare, 
  Save, 
  ArrowLeft,
  Calendar,
  Check
} from 'lucide-react';

export const Screen12FacilitatorStudentDetail: React.FC = () => {
  const { 
    language, 
    selectedStudentId, 
    studentRoster, 
    facilitatorRecommendations, 
    addFacilitatorRecommendation, 
    navigateTo 
  } = useApp();

  const student = studentRoster.find(s => s.id === selectedStudentId) || studentRoster[0];

  // Recommendations for this student
  const recommendationResult = TransparentRecommendationEngine.recommend(student);
  const studentRecCareer = recommendationResult.careers[0];

  // Filter suitable opportunities
  const suitableOpportunities = OPPORTUNITIES_DATA.slice(0, 4);

  // Form states for mentor note
  const [selectedOppId, setSelectedOppId] = useState<string>(suitableOpportunities[0].id);
  const [mentorNote, setMentorNote] = useState<string>('');
  const [mentorName, setMentorName] = useState<string>('Shri Anand Kumar (DIET Mentor)');

  const existingNotes = facilitatorRecommendations.filter(r => r.studentId === student.id);

  const handleSaveRecommendation = (e: React.FormEvent) => {
    e.preventDefault();
    const chosenOpp = OPPORTUNITIES_DATA.find(o => o.id === selectedOppId);
    if (!chosenOpp) return;

    addFacilitatorRecommendation({
      studentId: student.id,
      opportunityId: chosenOpp.id,
      opportunityName: language === 'hi' ? chosenOpp.nameHi : chosenOpp.name,
      facilitatorName: mentorName.trim() || 'Village Teacher',
      note: mentorNote.trim() || 'Recommended based on academic performance and local trade suitability.',
      isOfflineSaved: true
    });

    setMentorNote('');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#202B27] pb-24 max-w-lg mx-auto">
      <AndroidStatusBar />
      <M3TopAppBar
        title={language === 'hi' ? 'विद्यार्थी समीक्षा' : 'Student Review'}
        subtitle={student.name}
        showBack={true}
        onBack={() => navigateTo('facilitator_home')}
        readAloudText={
          language === 'hi'
            ? `${student.name} का विवरण। कक्षा ${student.educationLevel}। अनुशंसित करियर: ${studentRecCareer.titleHi}।`
            : `Review profile for ${student.name}. Education: ${student.educationLevel}. Recommended: ${studentRecCareer.title}.`
        }
      />

      <main className="p-4 space-y-4">
        {/* Student Profile Overview Card */}
        <div className="rounded-[22px] bg-white border border-[#21866F]/20 p-5 shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-[#DDF3E8] text-[#176B5B] flex items-center justify-center font-bold text-xl shrink-0">
              {student.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#202B27]">
                {language === 'hi' && student.nameHi ? student.nameHi : student.name}
              </h2>
              <p className="text-xs text-[#65736C] mt-0.5">
                {student.educationLevel} · {student.district}, {student.state}
              </p>
              {student.careerAspiration && (
                <p className="text-xs text-[#176B5B] font-semibold mt-1 bg-[#DDF3E8]/60 px-2 py-0.5 rounded-md inline-block">
                  {language === 'hi' ? `आकांक्षा: ${student.careerAspiration}` : `Goal: ${student.careerAspiration}`}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#21866F]/10 grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#65736C]">
                {language === 'hi' ? 'पसंदीदा विषय' : 'Subjects'}
              </span>
              <p className="text-[#202B27] font-medium mt-0.5">
                {student.subjects.join(', ')}
              </p>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#65736C]">
                {language === 'hi' ? 'हुनर / क्षमताएं' : 'Key Skills'}
              </span>
              <p className="text-[#202B27] font-medium mt-0.5">
                {student.skills.slice(0, 2).join(', ')}
              </p>
            </div>
          </div>
        </div>

        {/* System Recommended Career for this Student */}
        <section className="bg-white rounded-[20px] p-4 border border-[#21866F]/15">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#176B5B] bg-[#DDF3E8] px-2.5 py-0.5 rounded-full">
            {language === 'hi' ? 'सिस्टम मिलान करियर' : 'AI Match Analysis'}
          </span>
          <h3 className="text-sm sm:text-base font-bold text-[#202B27] mt-1.5">
            {language === 'hi' ? studentRecCareer.titleHi : studentRecCareer.title}
          </h3>
          <p className="text-xs text-[#65736C] mt-1">
            {language === 'hi' ? studentRecCareer.shortDescriptionHi : studentRecCareer.shortDescription}
          </p>
          <div className="mt-2.5 p-2 rounded-xl bg-[#FAF8F1] border border-[#21866F]/10 text-xs text-[#202B27]">
            <span className="font-semibold text-[#176B5B]">
              {language === 'hi' ? 'मिलान का कारण: ' : 'Match Rule: '}
            </span>
            {language === 'hi' ? studentRecCareer.matchExplanationHi : studentRecCareer.matchExplanation}
          </div>
        </section>

        {/* Existing Mentor Recommendations History */}
        {existingNotes.length > 0 && (
          <section className="bg-[#DDF3E8]/40 rounded-[20px] p-4 border border-[#21866F]/20">
            <h4 className="text-xs font-bold text-[#176B5B] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#21866F]" />
              <span>{language === 'hi' ? 'पूर्व में दी गई मार्गदर्शन टिप्पणियां' : 'Saved Mentorship Notes'}</span>
            </h4>
            <div className="space-y-2">
              {existingNotes.map(rec => (
                <div key={rec.id} className="p-3 bg-white rounded-xl border border-[#21866F]/15 text-xs">
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-bold text-[#176B5B]">{rec.opportunityName}</span>
                    <span className="text-[#65736C]">{rec.date}</span>
                  </div>
                  <p className="text-[#202B27] italic">"{rec.note}"</p>
                  <p className="text-[10px] text-[#65736C] mt-1">— {rec.facilitatorName}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Action Form: Recommend a Scheme with Mentor Note */}
        <section className="bg-white rounded-[20px] p-5 border-2 border-[#21866F]/20 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="w-4 h-4 text-[#176B5B]" />
            <h3 className="text-sm font-bold text-[#202B27] uppercase tracking-wider">
              {language === 'hi' ? 'विद्यार्थी को योजना सुझाएं (ऑफलाइन)' : 'Recommend Scheme & Add Note'}
            </h3>
          </div>

          <form onSubmit={handleSaveRecommendation} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-[#202B27] mb-1.5">
                {language === 'hi' ? '1. उपयुक्त योजना / अवसर चुनें:' : '1. Select Matching Opportunity:'}
              </label>
              <div className="space-y-2">
                {suitableOpportunities.map(opp => (
                  <button
                    key={opp.id}
                    type="button"
                    onClick={() => setSelectedOppId(opp.id)}
                    className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                      selectedOppId === opp.id
                        ? 'border-[#21866F] bg-[#DDF3E8] font-bold text-[#176B5B]'
                        : 'border-[#21866F]/15 bg-[#FAF8F1] text-[#202B27]'
                    }`}
                  >
                    <div>
                      <span>{language === 'hi' ? opp.nameHi : opp.name}</span>
                      <span className="block text-[10px] text-[#65736C] font-normal mt-0.5">
                        {opp.financialBenefit || opp.provider}
                      </span>
                    </div>
                    {selectedOppId === opp.id && <Check className="w-4 h-4 text-[#176B5B] shrink-0 ml-2" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#202B27] mb-1">
                {language === 'hi' ? '2. आपकी मार्गदर्शन टिप्पणी:' : '2. Facilitator Guidance Note:'}
              </label>
              <textarea
                rows={3}
                required
                value={mentorNote}
                onChange={(e) => setMentorNote(e.target.value)}
                placeholder={language === 'hi' ? 'उदा. आरती को इस छात्रवृत्ति का ऑफलाइन फॉर्म अगले मंगलवार तक भरवाएं।' : 'e.g. Advise student to submit caste certificate and application to Block Officer.'}
                className="w-full p-3 rounded-xl bg-[#FAF8F1] border border-[#21866F]/30 text-xs text-[#202B27] focus:outline-none"
              />
            </div>

            <M3Button
              type="submit"
              variant="filled"
              icon={<Save className="w-4 h-4" />}
              className="w-full py-3"
            >
              {language === 'hi' ? 'सिफारिश ऑफलाइन सहेजें' : 'Save Recommendation Offline'}
            </M3Button>
          </form>
        </section>
      </main>

      <M3BottomNavBar />
    </div>
  );
};
