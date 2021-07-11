import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FactsService } from './facts.service';
import { Fact } from './fact.interface';
import { FactDto } from './fact.dto';

@Controller('facts')
export class FactsController {
  constructor(private factsService: FactsService) {}

  @Get()
  public getAllFacts(): Fact[] {
    return this.factsService.getAllFacts();
  }

  @Get('/:id')
  public getFact(@Param('id') id: number): Fact {
    return this.factsService.getFact(id);
  }

  @Post()
  public createFact(@Body() factDto: FactDto): number {
    return this.factsService.createFact(factDto);
  }
}
