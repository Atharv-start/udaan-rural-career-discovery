export type Language = 'en' | 'hi';
export type UserRole = 'student' | 'facilitator';

export type EducationLevel =
  | 'Class 9'
  | 'Class 10'
  | 'Class 11'
  | 'Class 12'
  | 'ITI / Vocational Certificate'
  | 'Polytechnic Diploma'
  | 'Undergraduate Degree (BA/BSc/BCom)'
  | 'Graduate / Completed';

export interface StudentProfile {
  id: string;
  name: string;
  nameHi?: string;
  educationLevel: EducationLevel;
  state: string;
  district: string;
  preferredLanguage: Language;
  subjects: string[];
  activities: string[];
  skills: string[];
  learningStyle: 'hands-on' | 'visual' | 'reading' | 'group';
  careerAspiration?: string;
  deviceAccess: 'own-smartphone' | 'family-phone' | 'school-center' | 'limited';
  createdAt: string;
  bookmarkedOpportunityIds: string[];
  completedMilestones: string[];
  currentMilestoneId?: string;
  targetCareerId?: string;
  classPassed?: number;
  canRelocate?: boolean;
  canSupportWithoutIncome?: boolean;
  age?: number;
  gender?: 'female' | 'male' | 'other';
  hasItiCertificate?: boolean;
  enrolled?: boolean;
}

export type {
  TagKey,
  Student,
  Career,
  Opportunity,
  OppStatus,
  Bi,
  MatchedTag,
  RankedCareer,
  CareerResult,
  EvaluatedOpp
} from '../services/engine';

export { TAG_LABELS } from '../services/engine';

export interface FacilitatorRecommendation {
  id: string;
  studentId: string;
  opportunityId: string;
  opportunityName: string;
  facilitatorName: string;
  note: string;
  date: string;
  isOfflineSaved: boolean;
}

export interface DiscoveryAnswers {
  activities?: string[];
  workPreference: string[]; // 'problem-solving', 'helping-people', 'creating', 'outdoors', 'repairing'
  subjects?: string[];
  workDomain: string[]; // 'technology', 'people', 'nature', 'machines', 'art', 'business'
  careerType: 'academic' | 'vocational' | 'both';
}

export interface RecommendationExplanation {
  careerId: string;
  careerTitle: string;
  careerTitleHi: string;
  whyRecommended: { en: string; hi: string };
  influencingInterests: { en: string; hi: string }[];
  appliedRules: { en: string; hi: string }[];
  studentExistingSkills: { en: string; hi: string }[];
  skillsToDevelop: { en: string; hi: string }[];
  recommendedNextSteps: { en: string; hi: string }[];
  missingInformationNote: { en: string; hi: string };
}
