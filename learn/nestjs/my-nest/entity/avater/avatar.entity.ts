import { Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn } from 'typeorm'
import {UsersEntity } from '../users/users.entity'

@Entity({ name: 'avatar' })
export class AvatarEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    url: string;

    @OneToOne(() => UsersEntity, (users) => users.avatar)
    @JoinColumn({ name: 'userinfo_id' })
    userinfo:UsersEntity

}
