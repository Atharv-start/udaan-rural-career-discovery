import {
  Career,
  CareerResult,
  DiscoveryAnswers,
  EvaluatedOpp,
  Opportunity,
  RankedCareer,
  RecommendationExplanation,
  Student,
  StudentProfile,
  TagKey
} from '../types';
import { rankCareers, evaluateOpportunities, TAG_LABELS } from './engine';
import careersJson from '../data/careers.json' with { type: 'json' };
import opportunitiesJson from '../data/opportunities.json' with { type: 'json' };
import { getTodayDate } from '../utils/dateHelper';

export const CAREERS_DATA: Career[] = careersJson as unknown as Career[];
export const OPPORTUNITIES_DATA: Opportunity[] = opportunitiesJson as unknown as Opportunity[];

export interface RecommendationResult {
  insufficientSignal: boolean;
  rankedCareers: RankedCareer[];
  // For backwards compatibility with screens expecting Career[]
  careers: Career[];
  explanations: Record<string, RecommendationExplanation>;
}

/**
 * Maps Screen 3 education level to passed class number.
 * Note: Screen 3 phrases the field as "Current Class or Level" ("वर्तमान कक्षा या स्तर").
 */
export function mapEducationLevelToClassPassed(level?: string): number {
  if (!level) return 10;
  if (level.includes('Class 8')) return 8;
  if (level.includes('Class 9')) return 8; // Currently studying in Class 9 -> Class 8 passed
  if (level.includes('Class 10')) return 10;
  if (level.includes('Class 11')) return 10; // Studying in Class 11 -> Class 10 passed
  if (level.includes('Class 12')) return 12;
  if (level.includes('ITI')) return 10;
  if (level.includes('Polytechnic')) return 10;
  if (level.includes('Degree') || level.includes('Graduate')) return 12;
  return 10;
}

/**
 * Maps Screen 5 questionnaire answers to student tags (0-3 scale).
 * Tags are derived strictly from explicit answers:
 * - stable_income and earn_while_learning are NOT inferred from careerType.
 */
export function mapDiscoveryToTags(discovery?: DiscoveryAnswers): Partial<Record<TagKey, number>> {
  const tags: Record<TagKey, number> = {
    hands_on: 0,
    tech: 0,
    people: 0,
    helping: 0,
    numbers: 0,
    creative: 0,
    outdoors: 0,
    business: 0,
    stable_income: 0,
    earn_while_learning: 0,
  };

  if (!discovery) return {};

  const prefs = new Set(discovery.workPreference || []);
  const domains = new Set(discovery.workDomain || []);

  // Q1: Daily work preferences
  if (prefs.has('repairing')) tags.hands_on += 2;
  if (prefs.has('outdoors')) tags.outdoors += 2;
  if (prefs.has('helping-people')) {
    tags.helping += 3;
    tags.people += 1;
  }
  if (prefs.has('creating')) tags.creative += 2;
  if (prefs.has('problem-solving')) tags.numbers += 3;

  // Q2: Work domains
  if (domains.has('machines')) {
    tags.hands_on += 1;
    tags.tech += 1;
  }
  if (domains.has('nature')) tags.outdoors += 2;
  if (domains.has('people')) {
    tags.people += 3;
    tags.helping += 1;
  }
  if (domains.has('technology')) tags.tech += 3;
  if (domains.has('business')) tags.business += 3;
  if (domains.has('art')) tags.creative += 2;

  // Notice: stable_income and earn_while_learning are intentionally NOT inferred
  // from careerType per prompt instruction. They are only added if an explicit answer is given.

  const result: Partial<Record<TagKey, number>> = {};
  (Object.keys(tags) as TagKey[]).forEach(k => {
    const val = Math.min(3, tags[k]);
    if (val > 0) result[k] = val;
  });

  return result;
}

/**
 * Converts a StudentProfile into the engine's Student model.
 * Does not default gender, age, enrolled, canRelocate, or canSupportWithoutIncome.
 */
export function mapProfileToStudent(
  profile: Partial<StudentProfile>,
  discovery?: DiscoveryAnswers
): Student {
  const classPassed = profile.classPassed ?? mapEducationLevelToClassPassed(profile.educationLevel);
  const state = (profile.state || 'uttar_pradesh').toLowerCase().replace(/\s+/g, '_');

  const student: Student = {
    classPassed,
    state,
    tags: mapDiscoveryToTags(discovery)
  };

  if (profile.canRelocate !== undefined) student.canRelocate = profile.canRelocate;
  if (profile.canSupportWithoutIncome !== undefined) student.canSupportWithoutIncome = profile.canSupportWithoutIncome;
  if (profile.age !== undefined) student.age = profile.age;
  if (profile.gender !== undefined) student.gender = profile.gender;
  if (profile.enrolled !== undefined) student.enrolled = profile.enrolled;
  if (profile.hasItiCertificate !== undefined) {
    student.hasItiCertificate = profile.hasItiCertificate;
  } else if (profile.educationLevel === 'ITI / Vocational Certificate') {
    student.hasItiCertificate = true;
  }

  return student;
}

export class TransparentRecommendationEngine {
  public static recommend(
    student: Partial<StudentProfile>,
    discovery?: DiscoveryAnswers
  ): RecommendationResult {
    const engineStudent = mapProfileToStudent(student, discovery);
    const result: CareerResult = rankCareers(engineStudent, CAREERS_DATA);

    const explanations: Record<string, RecommendationExplanation> = {};

    result.careers.forEach(rc => {
      const c = rc.career;
      const strengthsMatched = rc.matched.length;

      const whyRecommended = {
        en: strengthsMatched > 0
          ? `Matched ${strengthsMatched} strength${strengthsMatched > 1 ? 's' : ''} (${rc.matched.map(m => TAG_LABELS[m.tag as TagKey]?.en || m.tag).join(', ')}) with a suitability score of ${rc.score}/${rc.maxScore}.`
          : `Recommended based on eligibility for Class ${c.minClass} qualification.`,
        hi: strengthsMatched > 0
          ? `आपकी ${strengthsMatched} खूबियों (${rc.matched.map(m => TAG_LABELS[m.tag as TagKey]?.hi || m.tag).join(', ')}) से मेल, उपयुक्तता स्कोर ${rc.score}/${rc.maxScore}।`
          : `कक्षा ${c.minClass} की पात्रता के आधार पर अनुशंसित।`
      };

      const appliedRules = [
        {
          en: `DGT CTS Official Letter (Dec 2024): Min Class ${c.minClass}, ${c.durationMonths} months`,
          hi: `डीजीटी सीटीएस आधिकारिक अधिसूचना (दिसंबर 2024): न्यूनतम कक्षा ${c.minClass}, ${c.durationMonths} माह`
        },
        ...rc.warnings.map(w => ({ en: `Notice: ${w.en}`, hi: `सूचना: ${w.hi}` }))
      ];

      explanations[c.id] = {
        careerId: c.id,
        careerTitle: c.nameEn,
        careerTitleHi: c.nameHi,
        whyRecommended,
        influencingInterests: rc.matched.map(m => m.text),
        appliedRules,
        studentExistingSkills: rc.matched.map(m => ({
          en: `${TAG_LABELS[m.tag as TagKey]?.en || m.tag} (Strength: ${m.studentStrength}/3)`,
          hi: `${TAG_LABELS[m.tag as TagKey]?.hi || m.tag} (क्षमता: ${m.studentStrength}/3)`
        })),
        skillsToDevelop: [
          { en: `Practical trade skills for ${c.nameEn}`, hi: `${c.nameHi} हेतु ट्रेड प्रैक्टिकल कौशल` },
          { en: 'Workshop safety and tool maintenance', hi: 'कार्यशाला सुरक्षा एवं टूल रखरखाव' }
        ],
        recommendedNextSteps: c.pathway.map((step, idx) => ({
          en: `Step ${idx + 1}: ${step}`,
          hi: `चरण ${idx + 1}: ${step}`
        })),
        missingInformationNote: {
          en: 'You can update your interests in Career Discovery anytime to refine these recommendations.',
          hi: 'सुझावों को अधिक सटीक बनाने के लिए आप कभी भी करियर खोज में रुचियां बदल सकते हैं।'
        }
      };
    });

    return {
      insufficientSignal: result.insufficientSignal,
      rankedCareers: result.careers,
      careers: result.careers.map(rc => rc.career),
      explanations
    };
  }
}

/**
 * Evaluates opportunities for a student with date override support.
 */
export function getEvaluatedOpportunities(
  profile: Partial<StudentProfile>,
  discovery?: DiscoveryAnswers,
  overrideDate?: string
): EvaluatedOpp[] {
  const student = mapProfileToStudent(profile, discovery);
  const today = overrideDate || getTodayDate();
  return evaluateOpportunities(student, OPPORTUNITIES_DATA, today);
}
