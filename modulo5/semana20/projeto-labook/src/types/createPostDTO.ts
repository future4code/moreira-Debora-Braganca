import { POST_ROLES } from "../model/Post"

export type CreatePostDTO = {
    photo: string
    description: string
    role: POST_ROLES
}