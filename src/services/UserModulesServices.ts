import { getCustomRepository } from 'typeorm'
import { UserModulesRepository } from '../repositories/UserModulesRepository'
import {UsersRepository } from '../repositories/UsersRepository'
import {ModulesRepository } from '../repositories/ModulesRepository'

interface IUserModulesCreate{
    user_id:string;
    modules_id:string;
}

class UserModulesServices{
    async create({user_id, modules_id}: IUserModulesCreate){
        
        const usersRepository = getCustomRepository(UsersRepository)

        const users = await usersRepository.findOne(user_id)

        if(!users){
            throw new Error('Usuário inexistente.')
        }
        
        const  modulesRepository = getCustomRepository(ModulesRepository)

        const modules = await modulesRepository.findOne(modules_id)

        if(!modules){
            throw new Error('Usuário inexistente.')
        }
           
        const usermodulesRepository = getCustomRepository(UserModulesRepository)

        const user_modules= await usermodulesRepository.create({
            user_id,
            modules_id
        })
        
        await usermodulesRepository.save(user_modules)
        return user_modules
    }
}

export {UserModulesServices} 