import { Request, Response } from 'express'
import { UserModulesServices } from '../services/UserModulesServices'

class UserModulesController{
    async create(request: Request, response: Response){
        const{ user_id, modules_id} = request.body
        

        const usermodulesServices = new UserModulesServices()

        try{
            const UserModules= await usermodulesServices.create({user_id, modules_id})
            return response.json(UserModules)
        }catch(err){
            return response
                    .status(400)
                    .json({menssagem: err.message})

        }
    }
}

export {UserModulesController}