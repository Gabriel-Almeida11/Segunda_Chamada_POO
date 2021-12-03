import { Request, Response } from 'express'

import { UsersServices } from '../services/UsersServices'

class UsersController{
    async create(request: Request, response: Response){
        const {branch, login, name_user} = request.body

        const usersServices = new UsersServices()
        
        try{
            const users = await usersServices.create({branch, login, name_user})
            return response.json(users)
        }catch(err){
            return response
                    .status(400)
                    .json({mensagem: err.message})
        }
    }

    async index(request: Request, response: Response){
        const usersServices = new UsersServices();

        try{
            const users = await usersServices.index()
            return response.status(200).json(users)
        }catch(err: any){
            return response
                    .status(400)
                    .json({mensagem: err.message})
        }
    }

}

export {UsersController}
