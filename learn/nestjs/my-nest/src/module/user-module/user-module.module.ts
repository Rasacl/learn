import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UsersavatrController} from './usersavatr/usersavatr.controller'
import { TypeOrmModule } from  '@nestjs/typeorm'
import { UsersService } from '../../service/users/users.service';
import { UsersavatrService } from '../../service/usersavatr/usersavatr.service'
import { User } from '../../../entity/user/user.entity'
import { UsersEntity } from '../../../entity/users/users.entity'
import {AvatarEntity} from '../../../entity/avater/avatar.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User,UsersEntity,AvatarEntity])],
  controllers: [UserController,UsersavatrController],
  providers:[UsersService,UsersavatrService]
})
export class UserModuleModule {}
