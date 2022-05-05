import UserDatabase from "../data/UserDataBase";
import User from "../model/User";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
import { LoginDTO } from "../types/loginDTO";
import { SignUpInputDTO } from "../types/signUpInputDTO";
import UserToFollow from "../model/UserToFollow";


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

  login = async (input: LoginDTO) => {
    const {email, password} = input
            
      if(!email || !password){
        throw new Error("Favor informar email e senha")
    }

    const registeredUser = await this.userData.findByEmail(email)
    if(!registeredUser){
      throw new Error("Este email não está cadastrado.")
  }
    const passwordIsCorrect = await this.hashManager.compare(password, registeredUser.password)
    if(!passwordIsCorrect){
      throw new Error("Email ou senha incorretos")
    }

    const token = this.authenticator.generateToken({id: registeredUser.id})
    return token
  }

  follow = async (userToFollowId: string, token: string) => {
    const followId = userToFollowId
    if(!followId){
      throw new Error("Favor informar um id de usuário para seguir")
  }

  const registeredUser = await this.userData.findById(followId)
    if(!registeredUser){
      throw new Error("Usuário não encontrado")
  }
  
  const id = this.idGenerator.generateId()
  const tokenData = this.authenticator.getTokenData(token)
  const idUser = tokenData.id

  const newUserToFollow = new UserToFollow(id, idUser, followId)
  await this.userData.insertFollower(newUserToFollow)
  
  return newUserToFollow
  }

  unFollow = async (userToUnfollowId: string) => {
    const unfollowId = userToUnfollowId
    if(!unfollowId){
      throw new Error("Favor informar um id de usuário para deixar de seguir")
  }

  const registeredUser = await this.userData.findById(unfollowId)
    if(!registeredUser){
      throw new Error("Usuário não encontrado entre os amigos")
  }

  await this.userData.deleteFollower(unfollowId)
  }
}
