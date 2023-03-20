import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import {User} from '../../../entity/user/user.entity'


@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }
    async create(json) {
        return await this.userRepository.save(json)
    }

   async findAll() {
        return await this.userRepository.query(`SELECT * FROM user`)
   }
   async findOne(id) {
       return await this.userRepository.createQueryBuilder('user').where("user.id = :id",{id:id}).getOne()
   }
    async updateOne(id, json) {
       return await this.userRepository.update(id,json)
    }
    
    async delete(id) {
        return await this.userRepository.delete(id)
    }
}
