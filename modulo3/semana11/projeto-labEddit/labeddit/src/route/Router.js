import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro"
import Feed from "../pages/Feed/Feed"
import Post from "../pages/Post/Post"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>

        <Route path='/' element={<Login/>}/>

        <Route path='/cadastro' element={<Cadastro/>}/>

        <Route path='/feed' element={<Feed/>}/>

        <Route path='/post' element={<Post/>}/>

        </Routes>
        </BrowserRouter>
    )
}

export default Router;