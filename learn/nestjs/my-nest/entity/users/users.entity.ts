import { Column, PrimaryGeneratedColumn, Entity, OneToOne } from 'typeorm'
import { AvatarEntity } from '../avater/avatar.entity'

@Entity({ name: 'users' })
export class UsersEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToOne(() => AvatarEntity, (avatar) => avatar.userinfo)
    avatar:AvatarEntity


}