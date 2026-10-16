// Udaan recommendation engine - TypeScript port + fixes. No dependencies. Runs in browser/Node, fully offline.
export type TagKey = 'hands_on'|'tech'|'people'|'helping'|'numbers'|'creative'|'outdoors'|'business'|'stable_income'|'earn_while_learning';
export const TAG_LABELS: Record<TagKey,{en:string;hi:string}> = {
  hands_on:{en:'hands-on work',hi:'हाथ से काम करना'}, tech:{en:'technology / computers',hi:'तकनीक / कंप्यूटर'},
  people:{en:'working with people',hi:'लोगों के साथ काम'}, helping:{en:'helping others',hi:'दूसरों की मदद'},
  numbers:{en:'numbers and accounts',hi:'हिसाब-किताब'}, creative:{en:'creative work',hi:'रचनात्मक काम'},
  outdoors:{en:'outdoor work',hi:'बाहर का काम'}, business:{en:'running your own work',hi:'अपना काम / व्यापार'},
  stable_income:{en:'steady income',hi:'पक्की कमाई'}, earn_while_learning:{en:'earning while learning',hi:'सीखते हुए कमाई'} };

export interface Student {
  classPassed: number;
  canRelocate?: boolean;
  canSupportWithoutIncome?: boolean;
  state: string;
  age?: number;
  gender?: 'female'|'male'|'other';
  hasItiCertificate?: boolean;
  enrolled?: boolean;
  tags: Partial<Record<TagKey,number>> /* strength 0-3 from the tap questions */
}

export interface Career {
  id: string;
  nameEn: string;
  nameHi: string;
  category: string;
  minClass: number;
  durationMonths: number;
  relocation: 'yes'|'no'|'unknown';
  stateScope: string;
  pathway: string[];
  tags: Record<string,number>;
  sourceUrl: string;
  verifiedDate: string;
  status: string;
  notes: string;
}

export interface Bi { en:string; hi:string }
export interface MatchedTag { tag:string; studentStrength:number; weight:number; points:number; text:Bi }
export interface RankedCareer { career:Career; score:number; maxScore:number; matched:MatchedTag[]; warnings:Bi[]; diversitySlot:boolean }
export interface CareerResult { insufficientSignal:boolean; careers:RankedCareer[] }

export function rankCareers(s: Student, all: Career[]): CareerResult {
  // Hard filters: only things the data can actually enforce.
  const eligible = all.filter(c => s.classPassed >= c.minClass && (c.stateScope==='national' || c.stateScope===s.state));
  const ranked: RankedCareer[] = eligible.map(c => {
    const matched: MatchedTag[] = []; let score = 0, maxScore = 0;
    for (const [tag, w] of Object.entries(c.tags)) {
      maxScore += 3*w;
      const st = s.tags[tag as TagKey] ?? 0;
      if (st > 0) { const pts = st*w; score += pts; const l = TAG_LABELS[tag as TagKey];
        matched.push({tag, studentStrength:st, weight:w, points:pts,
          text:{en:`You like ${l.en}; this trade rates ${w}/3 for it (+${pts}).`, hi:`आपको ${l.hi} पसंद है; इस ट्रेड में इसका वज़न ${w}/3 है (+${pts})।`}}); }
    }
    const warnings: Bi[] = [];
    if (s.canRelocate === false && c.relocation !== 'no') warnings.push({en:'You may need to travel to an ITI outside your village. Check the nearest ITI for this trade first.', hi:'इस ट्रेड के लिए गाँव से बाहर आईटीआई जाना पड़ सकता है। पहले नज़दीकी आईटीआई देखें।'});
    if (s.canSupportWithoutIncome === false && c.durationMonths > 12) warnings.push({en:`Takes ${c.durationMonths} months before you finish. Plan for living costs.`, hi:`इसे पूरा होने में ${c.durationMonths} महीने लगते हैं। खर्च की योजना बनाएँ।`});
    return { career:c, score, maxScore, matched, warnings, diversitySlot:false };
  });
  const sorted = ranked.sort((a,b) =>
    b.score-a.score || b.matched.length-a.matched.length ||
    (s.canSupportWithoutIncome === false ? a.career.durationMonths-b.career.durationMonths : 0) || a.career.id.localeCompare(b.career.id));
  // No tag matched anywhere: the ranking would be tie-breaks only. Say so instead of pretending.
  const scored = sorted.filter(r => r.score > 0);   // never pad the list with zero-match careers
  if (scored.length === 0) return { insufficientSignal:true, careers:[] };
  const top = scored.slice(0,3);
  // Diversity slot: best career from a category not already in the top 3. Empty while every career is iti_trade.
  const seen = new Set(top.map(t=>t.career.category));
  const extra = scored.slice(3).find(r => !seen.has(r.career.category));
  if (extra) extra.diversitySlot = true;
  return { insufficientSignal:false, careers: extra ? [...top, extra] : top };
}

// ---------- Opportunities ----------
export interface Opportunity {
  id: string;
  nameEn: string;
  nameHi: string;
  type: string;
  minClass: number|null;
  minAge: number|null;
  maxAge: number|null;
  gender: 'any'|'female'|'male';
  stateScope: string;
  requires: ('enrolled'|'iti_certificate')[];
  windowStatus: 'open'|'closed'|'rolling'|'upcoming'|'not_yet_announced'|'unverified';
  opensOn: string|null;
  closesOn: string|null;
  nextCycleNote: string|null;
  conditions: string[];
  link: string;
  verifiedDate: string;
  status: 'verified'|'partial'|'unverified';
  notes: string;
}

export type OppStatus = 'ELIGIBLE_NOW'|'CONDITIONAL'|'ALMOST_ELIGIBLE'|'WINDOW_CLOSED'|'UPCOMING'|'NOT_ELIGIBLE';
export interface EvaluatedOpp { opp:Opportunity; status:OppStatus; missing:Bi[]; caveat:Bi|null }

export function evaluateOpportunity(s: Student, o: Opportunity, today: string /* YYYY-MM-DD */): EvaluatedOpp {
  const out = (status:OppStatus, missing:Bi[]=[]): EvaluatedOpp => ({ opp:o, status, missing,
    caveat: o.status==='verified' ? null : {en:'Not fully verified. Check the official site before acting.', hi:'पूरी तरह जाँचा नहीं गया। आगे बढ़ने से पहले आधिकारिक साइट देखें।'} });
  if (o.stateScope!=='national' && o.stateScope!==s.state) return out('NOT_ELIGIBLE');
  if (o.gender!=='any' && s.gender && o.gender!==s.gender) return out('NOT_ELIGIBLE');
  if (s.age!==undefined && o.maxAge!==null && s.age>o.maxAge) return out('NOT_ELIGIBLE');
  const missing: Bi[] = []; let small = true;
  if (o.minClass!==null && s.classPassed < o.minClass) { const gap=o.minClass-s.classPassed;
    missing.push({en:`Pass class ${o.minClass} (you have class ${s.classPassed}).`, hi:`कक्षा ${o.minClass} पास करें (आपने कक्षा ${s.classPassed} की है)।`}); if (gap>2) small=false; }
  if (s.age!==undefined && o.minAge!==null && s.age < o.minAge) { missing.push({en:`Minimum age is ${o.minAge}.`, hi:`न्यूनतम आयु ${o.minAge} वर्ष है।`}); if (o.minAge-s.age>2) small=false; }
  if (o.requires.includes('iti_certificate') && !s.hasItiCertificate) missing.push({en:'Complete an ITI trade course first.', hi:'पहले आईटीआई का कोई ट्रेड कोर्स पूरा करें।'});
  if (missing.length) return out(small ? 'ALMOST_ELIGIBLE' : 'NOT_ELIGIBLE', missing);
  const closed = o.windowStatus==='closed' || (o.closesOn!==null && o.closesOn < today);
  if (closed) return out('WINDOW_CLOSED');
  if (o.windowStatus==='not_yet_announced' || o.windowStatus==='upcoming' || (o.opensOn!==null && o.opensOn > today)) return out('UPCOMING');
  const conds: Bi[] = o.conditions.map(c=>({en:c, hi:c}));   // TODO: add Hindi text per condition
  if (o.windowStatus==='unverified') conds.unshift({en:o.nextCycleNote ?? 'Dates not verified.', hi:'तारीखें जाँची नहीं गई हैं।'});
  if (o.requires.includes('enrolled') && !s.enrolled) conds.unshift({en:'You must first enrol in a recognised institution.', hi:'पहले किसी मान्यता प्राप्त संस्थान में प्रवेश लें।'});
  return out(conds.length ? 'CONDITIONAL' : 'ELIGIBLE_NOW', conds);
}

export const evaluateOpportunities = (s:Student, os:Opportunity[], today:string) => os.map(o=>evaluateOpportunity(s,o,today));
