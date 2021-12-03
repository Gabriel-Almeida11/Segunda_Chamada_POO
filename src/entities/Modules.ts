import {
    Column,
    CreateDateColumn,
    Entity, PrimaryColumn, UpdateDateColumn,
  } from 'typeorm'

import {v4 as uuid} from 'uuid'

@Entity('modules')
class Modules{

    @PrimaryColumn()
    id: string;

    @Column()
    modules_name: string;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id=uuid()
        }
    }

}

export {Modules}
