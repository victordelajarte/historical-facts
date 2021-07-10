import { Controller, Get } from '@nestjs/common';
import { FactsService } from './facts.service';
import { Fact } from './fact.interface';

@Controller('facts')
export class FactsController {
  constructor(private factsService: FactsService) {}

  @Get()
  public getAllFacts(): Fact[] {
    return this.factsService.getAllFacts();
  }
}
