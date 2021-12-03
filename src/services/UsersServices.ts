import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'


interface IUsersCreate{
    branch: string;
    login: string;
    name_user: string;
}


class UsersServices{
    async create({branch, login, name_user}: IUsersCreate){
        const usersRepository = getCustomRepository(UsersRepository)

        const users = await usersRepository.create({
            branch,
            login,
            name_user
        })

        await usersRepository.save(users)
        
        return users

    }

    async index(){
        const usersRepository = getCustomRepository(UsersRepository);
        const users = await usersRepository.find();
        return users
    }
}


export {UsersServices}