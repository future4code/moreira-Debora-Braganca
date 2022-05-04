import {Request, Response} from 'express';
import { CreatePostDTO } from '../types/createPostDTO';
import PostBusiness from '../business/PostBusiness'



export default class UserController {
    postBusiness = new PostBusiness()

    createPost = async(req: Request, res:Response) => {
        const {photo, description, role} = req.body
        const token = req.headers.authorization as string

        const input: CreatePostDTO = {
            photo,
            description,
            role
        }
        try {
            const postId = await this.postBusiness.createPost(input)
            res.status(201).send({message: "Post enviado", postId})
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no signup")
        }
    }

    getPostById = async(req:Request, res:Response) => {
        const id = req.params.id
        try {
            const post = await this.postBusiness.getPostById(id)
            res.status(200).send(post)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro ao buscar post")
        }
    }
}