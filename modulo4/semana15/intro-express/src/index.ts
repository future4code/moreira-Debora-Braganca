import express, { Express, Request, Response } from 'express';
import { AddressInfo } from "net";
import cors from "cors";
import { users } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})

//Exercício 01
app.get("/", (req, res)=> {
    res.send("Hello from Express")
    res.status(201).send("Primeiro endpoint criado!")
})

//Exercício 02
type user = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string,
    posts: any[]
}

//Exercício 03

//arquivo data.ts criado

//Exercício 04
app.get("/users", (req, res)=> {
    const allUsers = users
    res.send(allUsers)
    res.status(201).send("Usuários")
})

//Exercício 05
type post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

//Exercício 06
//arrays de posts criados
//melhor criar dentro do array de usuários, fica mais fácil de acessar pelos endpoints


//Exercício 07

app.get("/posts", (req, res)=> {
    const allPosts = users.map((user) => {
        return user.posts
    })
    const resultPosts = allPosts.flat(1)
    res.send(resultPosts)
    res.status(201).send("Posts")
})

//Exercício 08

app.get("/posts/:userId", (req, res)=> {
    const userId = Number(req.params.userId)
    const allUsers = users
    const allUserPosts = allUsers.map((user) => {
        if(user.id === userId){
            return user.posts
        }
    }).flat(1)
    res.send(allUserPosts)
    res.status(201).send("UserPosts")
})