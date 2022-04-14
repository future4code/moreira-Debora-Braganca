import express , {request, response} from "express";
import cors from 'cors';
import { AddressInfo } from "net";
import { produtos } from "./data"

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
app.get("/test", (req,res) => {
    res.status(200).send("API funcionando!")
})

//Exercício 02
//arquivo data.js criado

//Exercício 03
type product = {
    id: string,
    name: string,
    price: number
}
app.post("/newProduct", (req,res) => {
    const name = req.body.name
    const price = req.body.price
    const newProduct: product = {
        id: Date.now().toString(),
        name: name,
        price: price
    }
    const allProducts = produtos
    const novaLista = produtos.push(newProduct)
    res.status(201).send(allProducts)
})

//Exercício 04
app.get("/products", (req,res) => {
    res.status(200).send(produtos)
})

//Exercício 05
app.put("/edit/:id", (req, res) => {
    const newPrice = req.body.price
    const id = req.params.id

    const products = produtos.map((produto) => {
        if(produto.id === id){
            return produto = {
                ...produto,
                price: newPrice
            }
        } else {
            return produto
        }
    })

    res.status(200).send(products)
})

//Exercício 06
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id

    const index = produtos.findIndex((produto) => {
        if(produto.id === id){
            return true
        } else {
            return false
        }
    })

    const newList = produtos.splice(index, 1)
    res.status(200).send(produtos)
})

//Exercício 06
