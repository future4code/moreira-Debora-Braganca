export enum POST_ROLES{
    NORMAL="NORMAL",
    EVENTO="EVENT"
}


export default class Post {
    constructor(
        private id:string,
        private photo:string,
        private description:string,
        private created_at:Date,
        private role: POST_ROLES,
        private author_id: string
    ){}
}

 
export interface AuthenticationData {
    id:string,
    role:POST_ROLES
}