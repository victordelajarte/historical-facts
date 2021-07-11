import { Injectable } from '@nestjs/common';
import { Fact } from './fact.interface';

const FACTS: Fact[] = [
  {
    date: '15/02/1995',
    description: 'My Birthday!',
  },
];

@Injectable()
export class FactsService {
  public getAllFacts(): Fact[] {
    return FACTS;
  }

  public getFact(id: number): Fact {
    if (id >= FACTS.length) {
      throw new Error('Not found');
    }
    return FACTS[id];
  }

  public createFact(fact: Fact): number {
    const newLength = FACTS.push(fact);
    const newIndex = newLength - 1;
    return newIndex;
  }
}
