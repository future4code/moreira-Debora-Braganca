import express, {Express} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { users } from "./data"

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

//Exercício 01
//a)Método GET
//b)Através do path "/users"
app.get("/users", (req, res) => {
    let errorCode: number = 400
    try{
        res.status(200).send(users)

    } catch(error: any){
        res.status(errorCode).send({message: error.message})
    }
})

//Exercício 02
app.get("/users/:type", (req, res) => {
    let errorCode: number = 400
    try{
        const type: string = req.params.type.toUpperCase()

        if(type !== "ADMIN" && type !== "NORMAL"){
            errorCode = 422
            throw new Error("Please insert a valid type")
        }
        
        const filterUsers = users.filter((user) => user.type === type)
        res.status(200).send(filterUsers)

    } catch(error: any){
        res.status(errorCode).send({message: error.message})
    }
})

//a)Através do path params, pois é uma requisição com método GET, não poderia passar pelo body.
//b)O código já foi implementado.

//Exercício 03
app.get("/users", (req, res) => {
    let errorCode: number = 400
    try{
        const name: string = req.query.name as string
        
        const user = users.find((user) => user.name === name)

        if(!user){
            errorCode = 404
            throw new Error("User not found.")
        }
        res.status(200).send(user)

    } catch(error: any){
        res.status(errorCode).send({message: error.message})
    }
})
//a)Query params.
//b)Código implementado.

//Exercício 04
type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

app.post("/users", (req, res) => {
    let errorCode: number = 400
    try{
        const {id, name, email, type, age} = req.body
    
        const newUser: user = {
            id,
            name,
            email,
            type,
            age
        }

        users.push(newUser)
        res.status(201).send("User created")
        console.log(users)

    } catch(error: any){
        res.status(errorCode).send({ message: error.message})
    }
})

//a)Nada mudou.
//b)Não considero, pois é um método para alterar informacões,
//apesar de ter funcionado fica melhor organizado e para o entendimento utilizar o POST.