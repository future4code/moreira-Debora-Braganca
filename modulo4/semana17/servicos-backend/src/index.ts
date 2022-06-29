import app from "./app"
import { connection } from "./data/connection"
import { createAddress } from "./endpoints/createAddress"
import createUser from './endpoints/createUser'

app.post('/users/signup', createUser)

app.get('/users', createAddress)
