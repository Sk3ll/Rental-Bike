import { IsString, IsNumber, IsEmpty, IsBoolean } from 'class-validator';

export class CreateBikeDto {
  @IsString()
  @IsEmpty()
  name: string;

  @IsEmpty()
  @IsString()
  typeBike: string;

  @IsEmpty()
  @IsNumber()
  price: number;

  @IsEmpty()
  @IsBoolean()
  isRental: boolean;
}
