import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { v4 as uuidV4 } from 'uuid';
import { CreateBikeDto } from './dto/create-bike.dto';
import { Bike, BikeDocument } from './entities/bike.entity';
import { UpdateBikeDto } from './dto/update-bike.dto';

@Injectable()
export class BikesService {
  constructor(@InjectModel(Bike.name) private bikeModel: Model<BikeDocument>) {}

  async create(createBikeDto: CreateBikeDto): Promise<Bike | ForbiddenException> {
    const isExist = await this.bikeModel.findOne({ name: createBikeDto.name }).exec();

    if (isExist) {
      return new ForbiddenException('This name already exist');
    }

    const createdBike = new this.bikeModel({ ...createBikeDto, _id: uuidV4() });
    return createdBike.save();
  }

  findAll(isRental?: boolean): Promise<Bike[]> {
    return this.bikeModel.find({ isRental }).exec();
  }

  findOne(id: string): Promise<Bike> {
    return this.bikeModel.findOne({ _id: id }).exec();
  }

  update(updateBikeDto: UpdateBikeDto, id: string): Promise<UpdateWriteOpResult> {
    return this.bikeModel.updateOne({ _id: id }, updateBikeDto).exec();
  }

  remove(id: string): Promise<{ ok?: number | undefined; n?: number | undefined } & { deletedCount?: number }> {
    return this.bikeModel.deleteOne({ _id: id }).exec();
  }
}
