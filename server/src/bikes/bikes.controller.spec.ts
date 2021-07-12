import { Test, TestingModule } from '@nestjs/testing';
import { BikesController } from './bikes.controller';
import { BikesService } from './bikes.service';

describe('BikesController', () => {
  let controller: BikesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BikesController],
      providers: [BikesService],
    }).compile();

    controller = module.get<BikesController>(BikesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
