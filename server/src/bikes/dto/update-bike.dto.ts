import { PartialType } from '@nestjs/mapped-types';
import { IsEmpty, IsString } from 'class-validator';
import { CreateBikeDto } from './create-bike.dto';

export class UpdateBikeDto extends PartialType(CreateBikeDto) {
  @IsEmpty()
  @IsString()
  _id: string;
}
