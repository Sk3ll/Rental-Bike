import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  NotFoundException,
  Patch,
  ForbiddenException,
} from '@nestjs/common';
import { UpdateWriteOpResult } from 'mongoose';
import { BikesService } from './bikes.service';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { Bike } from './entities/bike.entity';

@Controller('bikes')
export class BikesController {
  constructor(private readonly bikesService: BikesService) {}

  @Post()
  create(@Body() createBikeDto: CreateBikeDto): Promise<Bike | ForbiddenException> {
    return this.bikesService.create(createBikeDto);
  }

  @Get()
  findNotRentals(): Promise<Bike[]> {
    return this.bikesService.findAll(false);
  }

  @Get('/rentals')
  findRentals(): Promise<Bike[]> {
    return this.bikesService.findAll(true);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Bike | NotFoundException> {
    const bike = await this.bikesService.findOne(id);

    return bike || new NotFoundException('Not found error');
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBikeDto: UpdateBikeDto): Promise<UpdateWriteOpResult> {
    return this.bikesService.update(updateBikeDto, id);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string
  ): Promise<{ ok?: number | undefined; n?: number | undefined } & { deletedCount?: number }> {
    return this.bikesService.remove(id);
  }
}
