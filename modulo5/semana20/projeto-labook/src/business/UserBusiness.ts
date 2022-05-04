import UserDatabase from "../data/UserDataBase";
import User from "../model/User";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
import { SignUpInputDTO } from "../types/signUpInputDTO";


export default class UserBusiness {
  userData = new UserDatabase()
  idGenerator = new IdGenerator()
  authenticator = new Authenticator()
  hashManager = new HashManager()

  signUp = async (input: SignUpInputDTO) => {
  
    const {name, email, password} = input
            
      if(!name || !email || !password){
        throw new Error("Favor preencher todos os campos")
    }

    const registeredUser = await this.userData.findByEmail(email)
      if(registeredUser){
        throw new Error("Email já cadastrado")
    }
    
    const id = this.idGenerator.generateId()
    const hashPassword = await this.hashManager.hash(password)

    const newUser = new User(id, name, email, hashPassword)
    await this.userData.insert(newUser)
    
    const token = this.authenticator.generateToken({id})
    return token
  }
}
