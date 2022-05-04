export enum POST_ROLES{
    NORMAL="NORMAL",
    EVENTO="EVENTO"
}


export default class Post {
    constructor(
        private id:string,
        private photo:string,
        private description:string,
        private createdAt:Date,
        private role: POST_ROLES
    ){}
}

 
export interface AuthenticationData {
    id:string,
    role:POST_ROLES
}