import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModuleModule } from './module/user-module/user-module.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "chen991029",
    database: "test",
    entities: [],
    synchronize: true,
    autoLoadEntities: true,
  }), UserModuleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
