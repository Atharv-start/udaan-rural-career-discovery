import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  M3TopAppBar, 
  M3Button, 
  M3Card, 
  M3FilterChip, 
  M3BottomNavBar, 
  AndroidStatusBar 
} from '../common/MaterialComponents';
import { CAREERS_DATA } from '../../services/recommendationEngine';
import { 
  Users, 
  Search, 
  Filter, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  WifiOff, 
  Plus, 
  MapPin, 
  UserPlus, 
  X 
} from 'lucide-react';
import { EducationLevel } from '../../types';

export const Screen11FacilitatorHome: React.FC = () => {
  const { 
    language, 
    studentRoster, 
    setSelectedStudentId, 
    navigateTo, 
    isOffline, 
    lastSyncTime,
    facilitatorRecommendations 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const filteredStudents = studentRoster.filter(std => {
    if (selectedLevel !== 'all' && !std.educationLevel.includes(selectedLevel)) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = std.name.toLowerCase().includes(q) || (std.nameHi && std.nameHi.includes(q));
      const matchDist = std.district.toLowerCase().includes(q);
      const matchAsp = std.careerAspiration ? std.careerAspiration.toLowerCase().includes(q) : false;
      return matchName || matchDist || matchAsp;
    }
    return true;
  });

  const handleOpenStudent = (studentId: string) => {
    setSelectedStudentId(studentId);
    navigateTo('facilitator_student_detail');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#202B27] pb-24 max-w-lg mx-auto">
      <AndroidStatusBar isOffline={isOffline} />
      <M3TopAppBar
        title={language === 'hi' ? 'शिक्षक एवं मेंटर रोस्टर' : 'Teacher & Facilitator Roster'}
        subtitle={language === 'hi' ? 'ग्राम व विद्यालय विद्यार्थी प्रबंधन' : 'Village & School Student Directory'}
        showBack={true}
        onBack={() => navigateTo('student_home')}
        readAloudText={
          language === 'hi'
            ? 'शिक्षक डैशबोर्ड। स्थानीय रूप से सहेजे गए विद्यार्थियों की सूची देखें और योजनाएं सुझाएं।'
            : 'Facilitator dashboard. Review locally saved student profiles and recommend schemes.'
        }
      />

      <main className="p-4 space-y-4">
        {/* Local Offline Metrics Banner */}
        <div className="rounded-[22px] bg-white border border-[#21866F]/20 p-4 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-[#176B5B] uppercase tracking-wider">
              {language === 'hi' ? 'स्थानीय डेटा स्थिति' : 'Local Device Data Status'}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#21866F] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isOffline ? 'Offline Active' : `Synced: ${lastSyncTime}`}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 rounded-xl bg-[#FAF8F1] border border-[#21866F]/10">
              <span className="text-xl font-extrabold text-[#176B5B] block">
                {studentRoster.length}
              </span>
              <span className="text-[10px] text-[#65736C] font-semibold">
                {language === 'hi' ? 'सहेजे गए विद्यार्थी' : 'Saved Students'}
              </span>
            </div>

            <div className="p-2 rounded-xl bg-[#FAF8F1] border border-[#21866F]/10">
              <span className="text-xl font-extrabold text-[#21866F] block">
                {facilitatorRecommendations.length}
              </span>
              <span className="text-[10px] text-[#65736C] font-semibold">
                {language === 'hi' ? 'दी गई सिफारिशें' : 'Mentored Notes'}
              </span>
            </div>

            <div className="p-2 rounded-xl bg-[#FAF8F1] border border-[#21866F]/10">
              <span className="text-xl font-extrabold text-[#F2B544] block">
                {studentRoster.filter(s => !facilitatorRecommendations.some(r => r.studentId === s.id)).length}
              </span>
              <span className="text-[10px] text-[#65736C] font-semibold">
                {language === 'hi' ? 'लंबित समीक्षा' : 'Pending Review'}
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'hi' ? 'विद्यार्थी का नाम या जिला खोजें...' : 'Search student by name or district...'}
            className="w-full min-h-[46px] pl-10 pr-9 py-2.5 rounded-2xl bg-white border border-[#21866F]/20 text-xs sm:text-sm font-medium text-[#202B27] focus:outline-none focus:border-[#21866F]"
          />
          <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-[#65736C]" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 text-[#65736C] hover:text-[#202B27]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Level Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {[
            { id: 'all', en: 'All Students', hi: 'सभी छात्र' },
            { id: 'Class 9', en: 'Class 9', hi: 'कक्षा 9' },
            { id: 'Class 10', en: 'Class 10', hi: 'कक्षा 10' },
            { id: 'Class 11', en: 'Class 11', hi: 'कक्षा 11' },
            { id: 'Class 12', en: 'Class 12', hi: 'कक्षा 12' },
            { id: 'ITI', en: 'ITI / Trade', hi: 'आईटीआई' },
            { id: 'Degree', en: 'College', hi: 'कॉलेज' },
          ].map(lvl => (
            <M3FilterChip
              key={lvl.id}
              label={language === 'hi' ? lvl.hi : lvl.en}
              selected={selectedLevel === lvl.id}
              onClick={() => setSelectedLevel(lvl.id)}
            />
          ))}
        </div>

        {/* Student Roster Cards */}
        <div className="space-y-3">
          {filteredStudents.map(student => {
            const hasRec = facilitatorRecommendations.some(r => r.studentId === student.id);
            const targetCareerObj = CAREERS_DATA.find(c => c.id === student.targetCareerId);

            return (
              <M3Card
                key={student.id}
                onClick={() => handleOpenStudent(student.id)}
                className="p-4 border border-[#21866F]/15 hover:border-[#21866F]/35 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#DDF3E8] text-[#176B5B] flex items-center justify-center font-bold text-sm shrink-0">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-[#202B27]">
                          {language === 'hi' && student.nameHi ? student.nameHi : student.name}
                        </h4>
                        {hasRec && (
                          <span className="text-[9px] font-bold text-[#176B5B] bg-[#DDF3E8] px-2 py-0.2 rounded-full">
                            {language === 'hi' ? 'सलाह दी गई' : 'Mentored'}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#65736C] mt-0.5">
                        <span>{student.educationLevel}</span>
                        <span>·</span>
                        <span>{student.district}, {student.state}</span>
                      </div>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-[#176B5B] shrink-0 mt-2" />
                </div>

                {/* Key Interests & Recommended Career */}
                <div className="mt-3 pt-2.5 border-t border-[#21866F]/10 flex flex-col gap-1.5 text-xs">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-[#65736C]">
                      {language === 'hi' ? 'रुचियां:' : 'Interests:'}
                    </span>
                    <span className="font-semibold text-[#202B27] truncate max-w-[70%]">
                      {student.subjects.slice(0, 2).join(', ')}
                    </span>
                  </div>

                  {targetCareerObj && (
                    <div className="flex items-center justify-between text-[11px] bg-[#FAF8F1] p-1.5 rounded-lg">
                      <span className="text-[#176B5B] font-semibold">
                        {language === 'hi' ? 'लक्ष्य करियर:' : 'Target:'}
                      </span>
                      <span className="font-bold text-[#202B27] truncate">
                        {language === 'hi' ? targetCareerObj.nameHi : targetCareerObj.nameEn}
                      </span>
                    </div>
                  )}
                </div>
              </M3Card>
            );
          })}
        </div>
      </main>

      <M3BottomNavBar />
    </div>
  );
};
