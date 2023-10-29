import { Test, TestingModule } from '@nestjs/testing';
import { LibreriaController } from './libreria.controller';

describe('LibreriaController', () => {
  let controller: LibreriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibreriaController],
    }).compile();

    controller = module.get<LibreriaController>(LibreriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
