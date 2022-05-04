import { app } from './controller/app';
import UserController from './controller/UserController';
import PostController from './controller/PostController'

const userController = new UserController()
const postController = new PostController()

app.post("/users/signup", userController.signUp)
app.post("/users/login", userController.login)

app.get("/posts/:id", postController.getPostById)
app.post("/posts", postController.createPost)