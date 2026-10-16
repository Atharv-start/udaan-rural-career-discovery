import careers from '../src/data/careers.json' with { type: 'json' };
import opps from '../src/data/opportunities.json' with { type: 'json' };
import { rankCareers, evaluateOpportunities, Student, Career, Opportunity } from '../src/services/engine.ts';

const C = careers as unknown as Career[];
const O = opps as unknown as Opportunity[];
const today = '2026-10-16';

const cases: [string, Student][] = [
  [
    'class10 male 16, cannot relocate, hands_on+tech',
    {
      classPassed: 10,
      canRelocate: false,
      canSupportWithoutIncome: true,
      state: 'uttar_pradesh',
      age: 16,
      gender: 'male',
      tags: { hands_on: 3, tech: 2 }
    }
  ],
  [
    'class10 girl 16, creative+people, needs income soon',
    {
      classPassed: 10,
      canRelocate: true,
      canSupportWithoutIncome: false,
      state: 'uttar_pradesh',
      age: 16,
      gender: 'female',
      tags: { creative: 3, people: 2 }
    }
  ],
  [
    'class8, only "helping"',
    {
      classPassed: 8,
      canRelocate: true,
      canSupportWithoutIncome: true,
      state: 'uttar_pradesh',
      age: 15,
      gender: 'male',
      tags: { helping: 3 }
    }
  ],
  [
    'class8 male 14, tags empty',
    {
      classPassed: 8,
      state: 'uttar_pradesh',
      age: 14,
      gender: 'male',
      tags: {}
    }
  ]
];

for (const [name, s] of cases) {
  const r = rankCareers(s, C);
  console.log('\n##', name, '| insufficientSignal =', r.insufficientSignal);
  r.careers.forEach((c, i) =>
    console.log(
      ` ${i + 1}. ${c.career.id} score=${c.score}/${c.maxScore} matched=${c.matched.length} warnings=${c.warnings.length}`
    )
  );
  console.log(
    ' opps:',
    evaluateOpportunities(s, O, today)
      .map(e => `${e.opp.id}:${e.status}`)
      .join(', ')
  );
}
