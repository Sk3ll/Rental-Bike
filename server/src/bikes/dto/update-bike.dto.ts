import { PartialType } from '@nestjs/mapped-types';
import { IsEmpty, IsNumber } from 'class-validator';
import { CreateBikeDto } from './create-bike.dto';

export class UpdateBikeDto extends PartialType(CreateBikeDto) {
  @IsEmpty()
  @IsNumber()
  id: number;
}
