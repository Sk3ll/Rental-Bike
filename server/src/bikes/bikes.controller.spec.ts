import { Test, TestingModule } from '@nestjs/2.00testing';
import { MongooseModule } from '@nestjs/mongoose';
import { BikesController } from './bikes.controller';
import { BikesService } from './bikes.service';
import { Bike, BikeSchema } from './entities/bike.entity';

describe('BikesController', () => {
  let bikesController: BikesController;
  let bikesService: BikesService;
  const mockBike: Bike = {
    _id: 'faf182e5-0226-4bbb-9035-fae2b81d7826',
    name: 'string',
    typeBike: 'string',
    price: 100,
    isRental: false,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MongooseModule.forFeature([{ name: Bike.name, schema: BikeSchema }])],
      controllers: [BikesController],
      providers: [BikesService],
    }).compile();

    bikesController = module.get<BikesController>(BikesController);
    bikesService = module.get<BikesService>(BikesService);
  });

  it('find all', async () => {
    const result: Bike[] = [mockBike];
    jest.spyOn(bikesService, 'findAll').mockImplementation(() => Promise.resolve(result));

    expect(await bikesController.findRentals()).toBe(result);
  });
});
