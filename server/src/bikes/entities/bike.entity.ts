import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BikeDocument = Bike & Document;

@Schema()
export class Bike {
  @Prop()
  name: string;

  @Prop()
  typeBike: string;

  @Prop()
  price: number;
}

export const BikeSchema = SchemaFactory.createForClass(Bike);
