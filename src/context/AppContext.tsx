import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Language,
  UserRole,
  StudentProfile,
  Opportunity,
  FacilitatorRecommendation,
  DiscoveryAnswers,
  Career,
  RankedCareer,
  EvaluatedOpp
} from '../types';
import { SAMPLE_STUDENTS_ROSTER } from '../data/studentsData';
import {
  CAREERS_DATA,
  OPPORTUNITIES_DATA,
  TransparentRecommendationEngine,
  getEvaluatedOpportunities
} from '../services/recommendationEngine';
import { speechService } from '../services/speechService';

export type ScreenId = 
  | 'language_selection'
  | 'role_selection'
  | 'profile_setup'
  | 'student_home'
  | 'career_discovery'
  | 'career_results'
  | 'career_details'
  | 'learning_path'
  | 'opportunity_finder'
  | 'ai_explanation'
  | 'facilitator_home'
  | 'facilitator_student_detail'
  | 'profile_settings'
  | 'kotlin_code_explorer';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  role: UserRole;
  setRole: (role: UserRole) => void;
  currentScreen: ScreenId;
  navigateTo: (screen: ScreenId, addToHistory?: boolean) => void;
  goBack: () => void;
  canGoBack: boolean;

  // Student State
  currentStudent: StudentProfile;
  updateStudentProfile: (updates: Partial<StudentProfile>) => void;
  
  // Roster & Facilitator
  studentRoster: StudentProfile[];
  selectedStudentId: string | null;
  setSelectedStudentId: (id: string | null) => void;
  facilitatorRecommendations: FacilitatorRecommendation[];
  addFacilitatorRecommendation: (rec: Omit<FacilitatorRecommendation, 'id' | 'date'>) => void;

  // Careers & Discovery
  selectedCareerId: string | null;
  setSelectedCareerId: (id: string | null) => void;
  discoveryAnswers: DiscoveryAnswers | null;
  setDiscoveryAnswers: (answers: DiscoveryAnswers | null) => void;
  recommendedCareers: Career[];
  rankedCareers: RankedCareer[];
  insufficientSignal: boolean;

  // Opportunities
  bookmarkedOpportunityIds: string[];
  toggleBookmark: (oppId: string) => void;
  evaluatedOpportunities: EvaluatedOpp[];

  // Offline & System
  isOffline: boolean;
  setIsOffline: (offline: boolean) => void;
  lastSyncTime: string;
  triggerManualSync: () => void;
  readAloudEnabled: boolean;
  setReadAloudEnabled: (enabled: boolean) => void;
  playSpeech: (text: string) => void;
  stopSpeech: () => void;

  // Snackbar Notification
  snackbar: { message: string; duration?: number } | null;
  showSnackbar: (msg: string) => void;
  hideSnackbar: () => void;

  // Reset
  resetAllData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const DEFAULT_STUDENT: StudentProfile = {
  id: 'current-user-1',
  name: 'Rameshwar',
  nameHi: 'रामेश्वर',
  educationLevel: 'Class 10',
  state: 'Uttar Pradesh',
  district: 'Jhansi',
  preferredLanguage: 'hi',
  subjects: ['Science', 'Mathematics'],
  activities: ['Repairing motorcycle lights', 'Setting up village amplifiers'],
  skills: ['Multimeter testing', 'Wiring', 'Soldering'],
  learningStyle: 'hands-on',
  careerAspiration: 'Solar technician or electrical workshop',
  deviceAccess: 'own-smartphone',
  createdAt: '2026-10-10',
  bookmarkedOpportunityIds: ['up_post_matric_scholarship', 'naps'],
  completedMilestones: ['step-1'],
  currentMilestoneId: 'step-2',
  targetCareerId: 'iti_solar_technician'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load saved language from localStorage if present
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('udaan_language');
    return (saved === 'hi' || saved === 'en') ? saved : 'en';
  });

  const [role, setRoleState] = useState<UserRole>(() => {
    const saved = localStorage.getItem('udaan_role');
    return (saved === 'facilitator') ? 'facilitator' : 'student';
  });

  const [currentScreen, setCurrentScreen] = useState<ScreenId>(() => {
    // If language was previously set, go to student_home or role_selection, else language_selection
    const hasOnboarded = localStorage.getItem('udaan_onboarded');
    return hasOnboarded ? 'student_home' : 'language_selection';
  });

  const [navigationHistory, setNavigationHistory] = useState<ScreenId[]>([]);

  const [currentStudent, setCurrentStudent] = useState<StudentProfile>(() => {
    const saved = localStorage.getItem('udaan_student_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return DEFAULT_STUDENT;
  });

  const [studentRoster, setStudentRoster] = useState<StudentProfile[]>(() => {
    const saved = localStorage.getItem('udaan_roster');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return SAMPLE_STUDENTS_ROSTER;
  });

  const [selectedStudentId, setSelectedStudentId] = useState<string | null>('std-101');
  const [selectedCareerId, setSelectedCareerId] = useState<string | null>('iti_solar_technician');
  const [discoveryAnswers, setDiscoveryAnswers] = useState<DiscoveryAnswers | null>(null);

  const [bookmarkedOpportunityIds, setBookmarkedOpportunityIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('udaan_bookmarks');
    return saved ? JSON.parse(saved) : ['up_post_matric_scholarship', 'naps'];
  });

  const [facilitatorRecommendations, setFacilitatorRecommendations] = useState<FacilitatorRecommendation[]>(() => {
    const saved = localStorage.getItem('udaan_facilitator_notes');
    return saved ? JSON.parse(saved) : [
      {
        id: 'rec-1',
        studentId: 'std-101',
        opportunityId: 'up_post_matric_scholarship',
        opportunityName: 'UP Post-Matric Scholarship (Dashmottar) - covers ITI',
        facilitatorName: 'Shri Anand Kumar (DIET Mentor)',
        note: 'Aarti shows exceptional interest in skilling. Please help her fill the scholarship form by next Tuesday.',
        date: '12 Oct 2026',
        isOfflineSaved: true
      }
    ];
  });

  const [isOffline, setIsOffline] = useState<boolean>(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>('Just now');
  const [readAloudEnabled, setReadAloudEnabled] = useState<boolean>(true);
  const [snackbar, setSnackbar] = useState<{ message: string; duration?: number } | null>(null);

  // Persistence helpers
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('udaan_language', lang);
  };

  const setRole = (r: UserRole) => {
    setRoleState(r);
    localStorage.setItem('udaan_role', r);
  };

  const navigateTo = (screen: ScreenId, addToHistory: boolean = true) => {
    speechService.stop();
    if (addToHistory && currentScreen !== screen) {
      setNavigationHistory(prev => [...prev, currentScreen]);
    }
    setCurrentScreen(screen);
    // Remember onboarding complete if passing initial screens
    if (screen === 'student_home' || screen === 'facilitator_home') {
      localStorage.setItem('udaan_onboarded', 'true');
    }
  };

  const goBack = () => {
    speechService.stop();
    if (navigationHistory.length > 0) {
      const prevScreen = navigationHistory[navigationHistory.length - 1];
      setNavigationHistory(prev => prev.slice(0, prev.length - 1));
      setCurrentScreen(prevScreen);
    } else {
      // Default fallback
      if (role === 'facilitator') {
        setCurrentScreen('facilitator_home');
      } else {
        setCurrentScreen('student_home');
      }
    }
  };

  const updateStudentProfile = (updates: Partial<StudentProfile>) => {
    setCurrentStudent(prev => {
      const next = { ...prev, ...updates };
      localStorage.setItem('udaan_student_profile', JSON.stringify(next));
      return next;
    });
  };

  const toggleBookmark = (oppId: string) => {
    setBookmarkedOpportunityIds(prev => {
      const exists = prev.includes(oppId);
      const next = exists ? prev.filter(id => id !== oppId) : [...prev, oppId];
      localStorage.setItem('udaan_bookmarks', JSON.stringify(next));
      showSnackbar(exists 
        ? (language === 'hi' ? 'बुकमार्क हटाया गया' : 'Bookmark removed')
        : (language === 'hi' ? 'अवसर बुकमार्क में सहेजा गया' : 'Saved to bookmarks')
      );
      return next;
    });
  };

  const addFacilitatorRecommendation = (rec: Omit<FacilitatorRecommendation, 'id' | 'date'>) => {
    const newRec: FacilitatorRecommendation = {
      ...rec,
      id: `rec-${Date.now()}`,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      isOfflineSaved: true
    };
    setFacilitatorRecommendations(prev => {
      const next = [newRec, ...prev];
      localStorage.setItem('udaan_facilitator_notes', JSON.stringify(next));
      return next;
    });
    showSnackbar(language === 'hi' 
      ? 'सिफारिश ऑफलाइन सुरक्षित सहेजी गई' 
      : 'Recommendation saved offline successfully'
    );
  };

  const showSnackbar = (message: string, duration: number = 3200) => {
    setSnackbar({ message, duration });
    setTimeout(() => {
      setSnackbar(current => (current?.message === message ? null : current));
    }, duration);
  };

  const hideSnackbar = () => setSnackbar(null);

  const playSpeech = (text: string) => {
    if (!readAloudEnabled) return;
    speechService.speak(text, language);
  };

  const stopSpeech = () => {
    speechService.stop();
  };

  const triggerManualSync = () => {
    showSnackbar(language === 'hi' ? 'सिंक हो रहा है...' : 'Synchronizing local database...');
    setTimeout(() => {
      setLastSyncTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      showSnackbar(language === 'hi' ? 'डेटा सफलतापूर्वक अपडेट हुआ' : 'Data synchronized successfully');
    }, 1200);
  };

  const resetAllData = () => {
    localStorage.clear();
    setLanguageState('en');
    setRoleState('student');
    setCurrentStudent(DEFAULT_STUDENT);
    setStudentRoster(SAMPLE_STUDENTS_ROSTER);
    setBookmarkedOpportunityIds(['up_post_matric_scholarship', 'naps']);
    setCurrentScreen('language_selection');
    setNavigationHistory([]);
    showSnackbar('All demo data cleared and reset to fresh state');
  };

  // Compute recommended careers dynamically using transparent rules
  const recommendationOutput = TransparentRecommendationEngine.recommend(
    currentStudent,
    discoveryAnswers || undefined
  );
  const recommendedCareers = recommendationOutput.careers;
  const rankedCareers = recommendationOutput.rankedCareers;
  const insufficientSignal = recommendationOutput.insufficientSignal;
  const evaluatedOpportunities = getEvaluatedOpportunities(
    currentStudent,
    discoveryAnswers || undefined
  );

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        role,
        setRole,
        currentScreen,
        navigateTo,
        goBack,
        canGoBack: navigationHistory.length > 0,
        currentStudent,
        updateStudentProfile,
        studentRoster,
        selectedStudentId,
        setSelectedStudentId,
        facilitatorRecommendations,
        addFacilitatorRecommendation,
        selectedCareerId,
        setSelectedCareerId,
        discoveryAnswers,
        setDiscoveryAnswers,
        recommendedCareers,
        rankedCareers,
        insufficientSignal,
        evaluatedOpportunities,
        bookmarkedOpportunityIds,
        toggleBookmark,
        isOffline,
        setIsOffline,
        lastSyncTime,
        triggerManualSync,
        readAloudEnabled,
        setReadAloudEnabled,
        playSpeech,
        stopSpeech,
        snackbar,
        showSnackbar,
        hideSnackbar,
        resetAllData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
