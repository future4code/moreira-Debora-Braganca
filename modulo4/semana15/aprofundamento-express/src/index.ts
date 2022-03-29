import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { toDos } from "./data";

const app = express();

app.use(express.json());
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

//Exercício 01

app.get("/ping", (req,res) => {
    res.status(200).send("pong")
})

//Exercício 02

type toDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//Exercício 03
//arquivo data.ts criado

//Exercício 04
app.get("/toDos", (req,res) => {
    const afazeres = toDos
    const concluidos = afazeres.filter((toDo) => {
        if(toDo.completed === true){
            return toDo
        }
    })
    res.status(200).send(concluidos)
})

//Exercício 05
app.post("/toDos", (req, res) => {
    const usuario = Number(req.body.userId)
    const nomeDoAfazer = req.body.title
    const terminada = req.body.completed

    const newToDo: toDo = {
        userId: usuario,
        id: Number(Date.now()),
        title: nomeDoAfazer,
        completed: terminada
    }

    const newToDos = [...toDos, newToDo]
    res.status(200).send(newToDos)
})

//Exercício 06
app.put("/toDos/:userId/toDo", (req, res) => {
    //input
    const userId = req.params.userId
    

//tratamento de dados
//     for(let i = 0; i < users.length; i++){
//         if(users[i].id === usuario){
//             for(let j = 0; j < users[i].playlists.length; j++){
//                 if(users[i].playlists[j].id === playlistId){
//                     users[i].playlists[j].tracks.push(novaMusica)
//                 }
//             }
//         }
//     }


// res.send(users)

})