import { getCustomRepository } from 'typeorm'
import { ModulesRepository } from '../repositories/ModulesRepository'

interface IModulesCreate {
    modules_name: string;
}

class ModulesServices{
    async create({modules_name}: IModulesCreate){
        const modulesRepository = getCustomRepository(ModulesRepository )

        const modules = await modulesRepository.create({
            modules_name
        })

        await modulesRepository.save(modules)

        return modules
    }

    async index(){
        const modulesRepository = getCustomRepository(ModulesRepository);
        const modules = await modulesRepository.find()
        return modules
    }
}









export {ModulesServices}