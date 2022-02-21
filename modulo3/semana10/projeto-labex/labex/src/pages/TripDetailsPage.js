import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const TripDetailsPage = () => {

    const [tripDetails, setTripDetails] = useState(undefined)


    const params = useParams().id
    console.log(params)

    const token = localStorage.getItem('token')
    console.log(token)
 
    const getTripDetails = () => {

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/deborah-luna-moreira/trip/${params}`, {
            headers: {
               auth: token
            }})
        .then((response) => {
            console.log(response.data)
            setTripDetails(response.data)
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    useEffect(() => {
        getTripDetails()
    }, [])


    console.log(tripDetails)

    const candidatosPendentes = tripDetails.trip.candidates.map((candidato) => {
        return <div>
            <p>Nome: {candidato.name}</p>
            <p>Profissão: {candidato.profession}</p>
            <p>Idade: {candidato.age}</p>
            <p>País: {candidato.country}</p>
            <p>Texto de aplicação: {candidato.applicationText}</p>
        </div>
    })

    const candidatosAprovados = tripDetails.trip.approved.map((candidato) => {
        if (tripDetails.trip.approved > 0) {
            return <li>{candidato.name}</li>
        } else {
            return <p>Nenhum candidato aprovado.</p>
        }
    })

    return (
        <div>
            Detalhes da Viagem!
            <h2>{tripDetails.trip.name}</h2>
            <p>Planeta: {tripDetails.trip.planet}</p>
            <p>Descrição: {tripDetails.trip.description}</p>
            <h3>Candidatos Pendentes:</h3>
            <div>{candidatosPendentes}</div>
            <h3>Candidatos Aprovados:</h3>
            {candidatosAprovados}

        </div>
    )
}

export default TripDetailsPage