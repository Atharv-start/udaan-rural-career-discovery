import { Career, DiscoveryAnswers, RecommendationExplanation, StudentProfile } from '../types';
import { CAREERS_DATA } from '../data/careersData';

export interface RecommendationResult {
  careers: Career[];
  explanations: Record<string, RecommendationExplanation>;
}

export class TransparentRecommendationEngine {
  /**
   * Matches careers based on student profile or discovery questionnaire responses.
   * Uses clear rule intersections rather than opaque black-box scoring.
   */
  public static recommend(
    student: Partial<StudentProfile>,
    discovery?: DiscoveryAnswers
  ): RecommendationResult {
    // Collect active user signals
    const subjects = new Set((student.subjects || []).map(s => s.toLowerCase()));
    const activities = new Set((student.activities || []).map(a => a.toLowerCase()));
    const skills = new Set((student.skills || []).map(s => s.toLowerCase()));

    const workPrefs = new Set(discovery?.workPreference || []);
    const workDomains = new Set(discovery?.workDomain || []);
    const careerTypePref = discovery?.careerType || 'both';

    const scoredCareers = CAREERS_DATA.map(career => {
      let matchScore = 0;
      const matchedInterests: string[] = [];
      const appliedRules: { en: string; hi: string }[] = [];
      const influencingInterests: { en: string; hi: string }[] = [];

      // Check vocational preference match
      if (careerTypePref === 'vocational' && career.isVocational) {
        matchScore += 3;
        appliedRules.push({
          en: 'Prioritized hands-on vocational pathway based on preference',
          hi: 'आपकी पसंद के अनुसार व्यावहारिक वोकेशनल मार्ग को प्राथमिकता दी गई'
        });
      } else if (careerTypePref === 'academic' && !career.isVocational) {
        matchScore += 3;
        appliedRules.push({
          en: 'Matched formal academic qualification pathway',
          hi: 'औपचारिक शैक्षणिक योग्यता मार्ग से मेल खाता है'
        });
      } else {
        matchScore += 1;
      }

      // Check direct interest keywords in career tags
      career.matchedInterests.forEach(tag => {
        if (workDomains.has(tag)) {
          matchScore += 4;
          matchedInterests.push(tag);
          influencingInterests.push({
            en: `Interest in ${tag}`,
            hi: `${tag === 'technology' ? 'तकनीक' : tag === 'nature' ? 'प्रकृति' : tag === 'machines' ? 'मशीनें' : tag === 'people' ? 'लोग' : tag === 'art' ? 'कला' : 'व्यवसाय'} में रुचि`
          });
        }
        if (workPrefs.has(tag)) {
          matchScore += 3;
          matchedInterests.push(tag);
        }
      });

      // Check subject alignments
      subjects.forEach(sub => {
        if (
          (sub.includes('science') || sub.includes('physics')) &&
          (career.id.includes('solar') || career.id.includes('surveyor') || career.id.includes('mobile'))
        ) {
          matchScore += 2;
          appliedRules.push({
            en: `Applied Science alignment for ${career.title}`,
            hi: `विज्ञान विषय की उपयोगिता के आधार पर मिलान`
          });
        }
        if (
          (sub.includes('biology') || sub.includes('agriculture')) &&
          (career.id.includes('farm') || career.id.includes('health') || career.id.includes('veterinary') || career.id.includes('dairy') || career.id.includes('water'))
        ) {
          matchScore += 3;
          appliedRules.push({
            en: 'Applied Life Science & Biology knowledge requirement',
            hi: 'जीव विज्ञान एवं कृषि ज्ञान की आवश्यकता के अनुसार मिलान'
          });
        }
        if (
          (sub.includes('math') || sub.includes('account')) &&
          (career.id.includes('accounts') || career.id.includes('surveyor') || career.id.includes('banking'))
        ) {
          matchScore += 3;
          appliedRules.push({
            en: 'Applied Mathematics & Calculation aptitude rule',
            hi: 'गणित व गणना क्षमता के नियम का अनुप्रयोग'
          });
        }
      });

      // Check skill overlap
      const existingSkills: { en: string; hi: string }[] = [];
      career.requiredSkills.forEach(req => {
        const matchesSkill = Array.from(skills).some(s => 
          req.en.toLowerCase().includes(s) || req.hi.toLowerCase().includes(s)
        );
        if (matchesSkill) {
          matchScore += 2;
          existingSkills.push(req);
        }
      });

      // Fallback baseline explanation rules if few items matched
      if (appliedRules.length === 0) {
        appliedRules.push({
          en: 'High rural employment demand in village clusters',
          hi: 'ग्रामीण क्षेत्रों में उच्च रोजगार मांग एवं आजीविका अवसर'
        });
      }
      if (influencingInterests.length === 0) {
        influencingInterests.push({
          en: 'Hands-on practical problem solving',
          hi: 'व्यावहारिक समस्या समाधान एवं कार्य'
        });
      }

      // Format clean why-recommended statement
      const whyRecommended = {
        en: career.isVocational 
          ? `Combines practical hands-on work with immediate earning potential without requiring expensive city coaching.`
          : `Aligns with your education and service motivation, offering high social respect and stable growth in rural districts.`,
        hi: career.isVocational
          ? `महंगे शहर के कोचिंग के बिना व्यावहारिक काम सीखकर जल्दी आत्मनिर्भर बनने का सशक्त अवसर।`
          : `आपकी पढ़ाई और सेवा भावना के अनुकूल, गांव-कस्बे में सामाजिक प्रतिष्ठा और स्थिर प्रगति।`
      };

      const explanation: RecommendationExplanation = {
        careerId: career.id,
        careerTitle: career.title,
        careerTitleHi: career.titleHi,
        whyRecommended,
        influencingInterests,
        appliedRules,
        studentExistingSkills: existingSkills.length > 0 
          ? existingSkills 
          : [{ en: 'Fundamental literacy & eagerness to learn', hi: 'सीखने की गहरी ललक एवं बुनियादी समझ' }],
        skillsToDevelop: career.requiredSkills.slice(0, 3),
        recommendedNextSteps: career.pathwaySteps.map(p => ({
          en: `${p.title} (${p.duration})`,
          hi: `${p.titleHi} (${p.duration})`
        })),
        missingInformationNote: {
          en: student.educationLevel 
            ? `Recommendation is tailored for ${student.educationLevel}. You can update your subjects or preferred district anytime to refine this.`
            : `Add your Class 10/12 marks and state board to unlock location-specific scholarship matches.`,
          hi: student.educationLevel
            ? `यह सुझाव ${student.educationLevel} के अनुसार तैयार किया गया है। बेहतर परिणाम के लिए प्रोफाइल में विषय जोड़ सकते हैं।`
            : `सटीक छात्रवृत्ति मिलान के लिए अपनी कक्षा 10/12 के अंक दर्ज करें।`
        }
      };

      return {
        ...career,
        matchScore,
        matchExplanation: whyRecommended.en,
        matchExplanationHi: whyRecommended.hi,
        _explanation: explanation
      };
    });

    // Sort by match score descending
    scoredCareers.sort((a, b) => b.matchScore - a.matchScore);

    // Pick top 3 distinct careers (ensuring at least 1 vocational is included per prompt guidelines)
    const topThree: Career[] = [];
    const explanations: Record<string, RecommendationExplanation> = {};

    // Check if at least one vocational career is included
    const firstTwo = scoredCareers.slice(0, 2);
    topThree.push(...firstTwo);

    const hasVocational = topThree.some(c => c.isVocational);
    if (!hasVocational) {
      const bestVocational = scoredCareers.find(c => c.isVocational && !topThree.some(t => t.id === c.id));
      if (bestVocational) {
        topThree.push(bestVocational);
      } else if (scoredCareers[2]) {
        topThree.push(scoredCareers[2]);
      }
    } else if (scoredCareers[2]) {
      topThree.push(scoredCareers[2]);
    }

    // Build explanations map
    scoredCareers.forEach(c => {
      if ((c as any)._explanation) {
        explanations[c.id] = (c as any)._explanation;
      }
    });

    return {
      careers: topThree,
      explanations
    };
  }
}

/**
 * Interface definition for future server-side LLM explanation integration
 * (e.g., via backend route with Gemini SDK). Never exposes keys on client.
 */
export interface IExplanationService {
  getExplanation(careerId: string, studentProfile: StudentProfile): Promise<RecommendationExplanation>;
}

export class LocalTemplateExplanationService implements IExplanationService {
  async getExplanation(careerId: string, studentProfile: StudentProfile): Promise<RecommendationExplanation> {
    const result = TransparentRecommendationEngine.recommend(studentProfile);
    if (result.explanations[careerId]) {
      return result.explanations[careerId];
    }
    const career = CAREERS_DATA.find(c => c.id === careerId) || CAREERS_DATA[0];
    return {
      careerId: career.id,
      careerTitle: career.title,
      careerTitleHi: career.titleHi,
      whyRecommended: {
        en: `Selected based on high rural demand and your foundational interests.`,
        hi: `आपके बुनियादी विषयों और ग्रामीण क्षेत्र में उच्च मांग के आधार पर चयनित।`
      },
      influencingInterests: [{ en: 'Practical skill preference', hi: 'व्यावहारिक हुनर की प्राथमिकता' }],
      appliedRules: [{ en: 'Community livelihood relevance check', hi: 'सामुदायिक आजीविका प्रासंगिकता' }],
      studentExistingSkills: [{ en: 'Eagerness to work with community and tools', hi: 'औजारों व लोगों के साथ काम करने का उत्साह' }],
      skillsToDevelop: career.requiredSkills,
      recommendedNextSteps: career.pathwaySteps.map(p => ({ en: p.title, hi: p.titleHi })),
      missingInformationNote: {
        en: 'Add more details in your profile to refine this explanation further.',
        hi: 'और अधिक सटीक सुझाव के लिए अपनी प्रोफाइल में और विवरण जोड़ें।'
      }
    };
  }
}
