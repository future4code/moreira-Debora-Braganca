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
            const post = await this.postBusiness.createPost(input, token)
            res.status(201).send({message: "Post enviado", post})
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

    getFeed = async(req:Request, res:Response) => {
        const token = req.headers.authorization as string
        try {
            const feed = await this.postBusiness.getFeed(token)
            res.status(200).send(feed)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro ao buscar post")
        }
    }
}