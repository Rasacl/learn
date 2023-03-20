import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, EntityManager } from 'typeorm'
import {InjectRepository } from '@nestjs/typeorm'
import { UsersEntity } from '../../../entity/users/users.entity'
import {AvatarEntity } from '../../../entity/avater/avatar.entity'

@Injectable()
export class UsersavatrService {
    constructor(@InjectRepository(UsersEntity) private readonly usersRepository: Repository<UsersEntity>,
    @InjectRepository(AvatarEntity) private readonly avatarRepository:Repository<AvatarEntity>
    ) { }
    
    //一对一查询 查找全部

    async findAll() {
        const list = await this.usersRepository.createQueryBuilder('UsersEntity').leftJoinAndSelect('UsersEntity.avatar', 'AvatarEntity.userinfo').getManyAndCount()
        return list
    }

    //根据主表id查找一对一
    async findOne(id) {
        const result = await this.usersRepository.findOne({
            where: { id: id }, relations: ['avatar'],
        });
        
        return result
   }
    async create(id,params,manger) {
        const user = await this.usersRepository.findOne({ where: { id: id } })
        if (user) {
            const avatarEntity = this.avatarRepository.create({ url: params.url })
            const avatarUrl = await manger.save(avatarEntity)
            user.avatar = avatarUrl
            await manger.save(user)
            return '新增成功'
        } else {
            return '用户不存在'
        }
    }
}
