import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const TripDetailsPage = () => {

    const [tripDetails, setTripDetails] = useState({})
    const [candidates, setCandidates] = useState([])
    const [approved, setApproved] = useState([])

    const navigate = useNavigate()

    const params = useParams().id

    const token = localStorage.getItem('token')

    const headers = {headers: {
        auth: token
     }}


    useEffect(() => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/deborah-luna-moreira/trip/${params}`, headers)
        .then((res) => {
            setTripDetails(res.data.trip)
            setCandidates(res.data.trip.candidates)
            setApproved(res.data.trip.approved)
        })
        .catch((error) => {
            console.log(error.response)
        })
    }, [])

    const onClickVoltar = () => {
        navigate('/admin/trips/list')
    }

    const onClickAprovar = (candidateId) => {
        const bodyDecide = {
            approve: true
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/deborah-luna-moreira/trips/${params}/candidates/${candidateId}/decide`, bodyDecide, headers)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const onClickReprovar = (candidateId) => {
        const bodyDecide = {
            approve: false
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/deborah-luna-moreira/trips/${params}/candidates/${candidateId}/decide`, bodyDecide, headers)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }


    const candidatosPendentes = candidates && candidates.map((candidato) => {
        return <div key={candidato.id}>
            <li>Nome: {candidato.name}</li>
            <li>Profissão: {candidato.profession}</li>
            <li>Idade: {candidato.age}</li>
            <li>País: {candidato.country}</li>
            <li>Texto de aplicação: {candidato.applicationText}</li>
            <button onClick={() => {onClickAprovar(candidato.id)}}>Aprovar</button>
            <button onClick={() => {onClickReprovar(candidato.id)}}>Reprovar</button>
        </div>
    })

    const candidatosAprovados = approved.map((candidato) => {
        return <li key={candidato.id}>{candidato.name}</li>    
    })

    return (
        <div>
            Detalhes da Viagem!
            <h2>{tripDetails.name}</h2>
            <p>Planeta: {tripDetails.planet}</p>
            <p>Descrição: {tripDetails.description}</p>
            <h3>Candidatos Pendentes:</h3>
            {candidatosPendentes}
            <h3>Candidatos Aprovados:</h3>
            {approved.length > 0 ? candidatosAprovados : <p>Nenhum candidato aprovado.</p>}
            <button onClick={onClickVoltar}>Voltar</button>

        </div>
    )
}

export default TripDetailsPage