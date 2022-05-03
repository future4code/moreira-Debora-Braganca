import express from "express";

import { AddressInfo } from "net";
import { getUserInfo } from "./endpoints/getUserInfo";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";
import { getProfile } from "./endpoints/getProfile"
import { createRecipe } from "./endpoints/createRecipe";
import { getRecipe } from "./endpoints/getRecipe";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;


app.get("/users/profile", getUserInfo)
app.get("/users/:id", getProfile)
app.post("/users", signup)
app.post("/users/login", login)
app.get("/recipe/:id", getRecipe)
app.post("/recipe", createRecipe)
