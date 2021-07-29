import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BikeDocument = Bike & Document;

@Schema()
export class Bike {
  @Prop()
  _id: string;

  @Prop()
  name: string;

  @Prop()
  typeBike: string;

  @Prop()
  price: number;

  @Prop()
  isRental: boolean;
}

export const BikeSchema = SchemaFactory.createForClass(Bike);
