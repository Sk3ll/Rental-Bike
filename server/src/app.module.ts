import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BikesModule } from './bikes/bikes.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), BikesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
