import { Injectable, NotFoundException } from '@nestjs/common';
import { format } from 'date-fns';
import { Fact } from './fact.interface';

const FACTS: Fact[] = [
  {
    date: '15/02/1995',
    description: 'My Birthday!',
  },
  {
    date: '12/11/1963',
    description:
      "Un président américain profite d'un moment en voiture pour se vider la tête",
  },
  {
    date: '19/11/1977',
    description: 'A New Hope!',
  },
  {
    date: format(new Date(), 'dd/MM/yyyy'),
    description:
      'Today is a great day, enjoy it and make at least someone smile 😊',
  },
];

@Injectable()
export class FactsService {
  public getAllFacts(): Fact[] {
    return FACTS;
  }

  public getFact(id: number): Fact {
    if (id >= FACTS.length) {
      throw new NotFoundException();
    }
    return FACTS[id];
  }

  public createFact(fact: Fact): number {
    const newLength = FACTS.push(fact);
    const newIndex = newLength - 1;
    return newIndex;
  }

  public updateFact(id: number, update: Fact): Fact {
    const fact = {
      ...this.getFact(id),
      ...update,
    };

    FACTS[id] = fact;

    return fact;
  }

  public deleteFact(id: number): Fact {
    const fact = this.getFact(id);

    FACTS.splice(id, 1);

    return fact;
  }
}
