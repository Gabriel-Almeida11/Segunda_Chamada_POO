import { 
    Entity,
    PrimaryColumn,
    Column,
    UpdateDateColumn,
    CreateDateColumn,
    JoinColumn,
    ManyToOne
} from 'typeorm';

import {v4 as uuid} from 'uuid'
import {Users} from './Users'
import {Modules} from './Modules'


@Entity('user_modules')
class User_Modules {
    
    @PrimaryColumn()
    id: string;

    @JoinColumn({name: 'users'})
    @ManyToOne(()=> Users )
    user: Users;

    @Column()
    user_id: string;

    @JoinColumn({name: 'modules'})
    @ManyToOne(()=> Modules )
    modules: Modules;

    @Column()
    modules_id: string;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;


    constructor(){
        if(this.id){
            this.id=uuid()
        }
    }

}

export {User_Modules}