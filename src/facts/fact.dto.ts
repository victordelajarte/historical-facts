import { IsNotEmpty, IsString } from 'class-validator';
import { IsProperlyFormattedDate } from 'src/common/decorators';

export class FactDto {
  @IsString()
  @IsNotEmpty()
  @IsProperlyFormattedDate()
  date: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
