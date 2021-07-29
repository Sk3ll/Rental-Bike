import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BikesModule } from './bikes/bikes.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), BikesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
