import {
    Column,
    CreateDateColumn,
    Entity, PrimaryColumn, UpdateDateColumn,
  } from 'typeorm'

import {v4 as uuid} from 'uuid'

@Entity('users')
class Users {

    @PrimaryColumn()
    id: string;

    @Column()
    branch: string;

    @Column()
    login: string;

    @Column()
    name_user: string;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id= uuid()
        }
    }

}

export {Users}