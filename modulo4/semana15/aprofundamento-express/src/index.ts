import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { toDos } from "./data";
import { appendFile } from "fs";
import * as fs from 'fs';

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
        if(toDo.completed === false){
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

    const allToDos = toDos
    const newToDos = allToDos.push(newToDo)

    fs.writeFile('./src/data.txt', JSON.stringify(allToDos), (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });

    fs.readFile('./src/data.txt','utf8', (err, data) => {
        if (err) throw err;
        console.log(data)
        res.send(data)
        })
    // res.status(200).send(newToDos)
})

//Exercício 06
app.put("/toDos/:toDoId", (req, res) => {
    //input
    const toDoId = Number(req.params.toDoId)

    const tarefaFiltrada = toDos.filter(toDo => {
        if(toDo.id === toDoId){
            // const newToDo = {
            //     ...toDo,
            //     completed: !toDo.completed
            // }
            return {
                ...toDo,
                completed: !toDo.completed
            }
    }
})

    res.status(200).send(tarefaFiltrada[0])
})

//Exercício 07
app.delete("/toDos/:toDoId", (req,res) => {
    const toDoId = Number(req.params.toDoId)

    const toDosUpdated = toDos.filter((toDo) => {
        if(toDoId !== toDo.id){
            return toDo
        } else{

        }
    })
    res.send(toDosUpdated)
})

//Exercício 08
type toDosArray = {
    selectedUser: any[],
    others: any[]
}

app.get("/toDos/:userId", (req, res) => {
    const usuario = Number(req.params.userId)
    const afazeres = toDos

    const tarefasUsuario = afazeres.filter((toDo) => {
        if(toDo.userId === usuario){
            return toDo
        }
    })

    const demaisTarefas = afazeres.filter((toDo) => {
        if(toDo.userId !== usuario){
            return toDo
        }
    })
    
    const todos = {
        selectedUser: tarefasUsuario,
        others: demaisTarefas
    }

    res.status(200).send(todos)
})

//Exercício 09
//Documentação do Postman

//Exercício 10
//alteração no exercício 08

//Exercício 11

