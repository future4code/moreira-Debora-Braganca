import { POST_ROLES } from "../model/Post"

export type FindPostByIdRes = {
    id: string
    photo: string
    description: string
    createdAt: string
    role: POST_ROLES
}[]