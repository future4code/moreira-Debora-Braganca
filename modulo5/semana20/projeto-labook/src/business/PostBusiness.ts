import Post from "../model/Post";
import IdGenerator from "../services/IdGenerator";
import PostDatabase from "../data/PostDatabase";
import { CreatePostDTO } from "../types/createPostDTO";
import Authenticator from "../services/Authenticator";


export default class UserBusiness {
  postData = new PostDatabase()
  idGenerator = new IdGenerator()
  authenticator = new Authenticator()

  createPost = async (input: CreatePostDTO, token: string) => {
  
    const {photo, description, role} = input
    const tokenData = this.authenticator.getTokenData(token)
    const author_id = tokenData.id
    console.log(author_id)
            
      if(!photo || !description || !role){
        throw new Error("Favor preencher todos os campos")
    }
    
    const id = this.idGenerator.generateId()
    const created_at = new Date()

    const newPost = new Post(id, photo, description, created_at, role, author_id)
    await this.postData.insert(newPost)
    
    return newPost
  }

  getPostById = async (id: string) => {

    const post = await this.postData.findPostByid(id)
    
    return post
  }

  getFeed = async (token: string) => {
    const tokenData = this.authenticator.getTokenData(token)
    const userId = tokenData.id

    const feed = await this.postData.getFeed(userId)
    
    return feed
  }
}