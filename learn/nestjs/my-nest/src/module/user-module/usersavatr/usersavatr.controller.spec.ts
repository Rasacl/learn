import { Test, TestingModule } from '@nestjs/testing';
import { UsersavatrController } from './usersavatr.controller';

describe('UsersavatrController', () => {
  let controller: UsersavatrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersavatrController],
    }).compile();

    controller = module.get<UsersavatrController>(UsersavatrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
