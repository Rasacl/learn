import { Test, TestingModule } from '@nestjs/testing';
import { UsersavatrService } from './usersavatr.service';

describe('UsersavatrService', () => {
  let service: UsersavatrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersavatrService],
    }).compile();

    service = module.get<UsersavatrService>(UsersavatrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
