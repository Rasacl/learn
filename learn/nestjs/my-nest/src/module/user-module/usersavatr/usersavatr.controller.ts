import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersavatrService } from '../../../service/usersavatr/usersavatr.service'
import { Transaction, TransactionManager, EntityManager } from 'typeorm';  //开启事务第一步：引入
@Controller('usersavatr')
export class UsersavatrController {
    constructor(private readonly usersService: UsersavatrService) { }
    
    @Get('list')
    async findAll() {
        const [data, count] = await this.usersService.findAll()
        return {
            data,count
        }
    }

    @Get('one')
    async findOne(@Query() req) {
        let id = req.id
        const result = this.usersService.findOne(id)
        return result
    }

    @Post('add')
    @Transaction()
    async create(@Query() req, @Body() body) {
        
    }
}
