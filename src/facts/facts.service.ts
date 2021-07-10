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
}
