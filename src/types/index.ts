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
}

export interface PathwayStep {
  step: number;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  duration: string;
  milestoneType: 'understand' | 'foundation' | 'qualification' | 'entry';
}

export interface Career {
  id: string;
  title: string;
  titleHi: string;
  category: string;
  categoryHi: string;
  shortDescription: string;
  shortDescriptionHi: string;
  fullDescription: string;
  fullDescriptionHi: string;
  isVocational: boolean;
  matchScore?: number; // transparent rule score
  matchExplanation?: string;
  matchExplanationHi?: string;
  whatTheyDo: { en: string; hi: string }[];
  requiredSkills: { en: string; hi: string }[];
  studyRoutes: { stage: string; stageHi: string; description: string; descriptionHi: string }[];
  coursesExams: { en: string; hi: string }[];
  vocationalTraining: { en: string; hi: string }[];
  indicativeSalary: string;
  indicativeSalaryHi: string;
  growthPotential: string;
  growthPotentialHi: string;
  pathwaySteps: PathwayStep[];
  matchedInterests: string[];
  icon: string;
}

export type OpportunityCategory = 
  | 'scholarship' 
  | 'scheme' 
  | 'course' 
  | 'vocational' 
  | 'apprenticeship' 
  | 'internship' 
  | 'mentorship';

export interface Opportunity {
  id: string;
  name: string;
  nameHi: string;
  provider: string;
  providerHi: string;
  category: OpportunityCategory;
  categoryLabel: { en: string; hi: string };
  eligibilitySummary: string;
  eligibilitySummaryHi: string;
  requiredQualifications: string;
  requiredQualificationsHi: string;
  deadline: string;
  deadlineHi: string;
  sourceLink: string;
  lastVerifiedDate: string;
  isSampleData: boolean;
  matchReason: string;
  matchReasonHi: string;
  stateCoverage: string;
  financialBenefit?: string;
  financialBenefitHi?: string;
}

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
  activities: string[];
  workPreference: string[]; // 'problem-solving', 'helping-people', 'creating', 'outdoors', 'repairing'
  subjects: string[];
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
