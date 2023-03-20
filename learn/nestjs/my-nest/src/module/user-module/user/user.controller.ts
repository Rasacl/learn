
import { Body, Controller, Get, Post, Query, Response } from '@nestjs/common';
import {UsersService} from '../../../service/users/users.service'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UsersService) { }
    
    @Post('add')
    async create(@Body() body) {
        console.log(body);
        let result = await this.userService.create(body)
        
        return result
    }
    @Post('update')
    async update(@Body() body, @Query() req) {
        console.log(body);
        let id = req.id
        let result = await this.userService.updateOne(id,body)
        return result
    }

    @Post('delete')
    async delete(@Query() req) {
        let id = req.id
        return await this.userService.delete(id)
    }
    @Get('list')
    async getList() {
        return await this.userService.findAll()
    }
    @Get('listOne')
    async getOneData(@Query() req) {
        let id = req.id
        return await this.userService.findOne(id)

    }
}
