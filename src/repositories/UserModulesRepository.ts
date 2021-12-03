import { EntityRepository, Repository } from 'typeorm'
import { User_Modules } from '../entities/UserModules'

@EntityRepository( User_Modules)
class UserModulesRepository extends Repository< User_Modules> {

}

export {  UserModulesRepository }