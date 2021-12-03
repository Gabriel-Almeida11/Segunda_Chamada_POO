import { Router } from 'express'

import { UsersController } from './controllers/UsersController'
import { ModulesController } from './controllers/ModulesController'
import {UserModulesController } from './controllers/UserModulesController'



const routes = Router()


const usersController = new UsersController()
const modulesController = new ModulesController()
const usermodulersController = new UserModulesController()




routes.post('/users', usersController.create)
routes.get('/users', usersController.index)

routes.post('/modules', modulesController.create)
routes.get('/modules', modulesController.index)


routes.post('/user_modules', usermodulersController.create )




export {routes}