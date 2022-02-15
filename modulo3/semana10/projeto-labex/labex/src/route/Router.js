import HomePage from "../pages/HomePage"
import AdminHomePage from "../pages/AdminHomePage"
import CreateTripPage from "../pages/CreateTripPage"
import ApplicationFormPage from "../pages/ApplicationFormPage"
import ListTripPage from "../pages/ListTripPage"
import LoginPage from "../pages/LoginPage"
import TripDetailsPage from "../pages/TripDetailsPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const Router = () => {
    return(
        <BrowserRouter>
        <Routes>

        <Route path='/' element={<HomePage/>} />

        <Route path='/trips/list' element={<ListTripPage/>} />

        <Route path='/trips/application' element={<ApplicationFormPage/>} />

        <Route path='/login' element={<LoginPage/>} />

        <Route path='/admin/trips/list' element={<AdminHomePage/>} />

        <Route path='/admin/trips/create' element={<CreateTripPage/>} />

        <Route path='/admin/trips/:id' element={<TripDetailsPage/>} />

        </Routes>
        </BrowserRouter>
    )
}