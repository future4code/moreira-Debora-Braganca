import Post from "../model/Post";
import IdGenerator from "../services/IdGenerator";
import PostDatabase from "../data/PostDatabase";
import { CreatePostDTO } from "../types/createPostDTO";


export default class UserBusiness {
  postData = new PostDatabase()
  idGenerator = new IdGenerator()

  createPost = async (input: CreatePostDTO) => {
  
    const {photo, description, role} = input
            
      if(!photo || !description || !role){
        throw new Error("Favor preencher todos os campos")
    }
    
    const id = this.idGenerator.generateId()
    const createdAt = new Date()

    const newPost = new Post(id, photo, description, createdAt, role)
    await this.postData.insert(newPost)
    
    return id
  }
}