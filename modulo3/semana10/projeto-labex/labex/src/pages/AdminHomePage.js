import React, { useState } from "react";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/url";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContainerListPage = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 32px;
`

const ContainerLista = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
`

const ContainerTrip = styled.div `
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
`

const AdminHomePage = () => {
    const [trips, loadingTrips, tripsError] = useRequestData(`${BASE_URL}`)

    const navigate = useNavigate()

    const goToHome = () => {
        navigate("/")
    }

    const goToCreate = () => {
        navigate("/admin/trips/create")
    }

    const goToDetails = (id) => {
        navigate(`/admin/trips/${id}`)
    }

    const token = localStorage.getItem('token')
    const headers = {headers: {
        auth: token
     }}

    const deleteTrip = (id) => {
        if (window.confirm("Tem certeza que deseja deletar?")){
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/deborah-luna-moreira/trips/${id}`, headers)
        .then((response) => {
            console.log(response.data)
            alert('Viagem deletada com sucesso.')
            navigate(0)
        })
        .catch((error) => {
            console.log(error.response)
        })
    } else {
        alert('Viagem não deletada.')
    }
    }


    const listaDeViagens = trips && trips.map((trip) => {
        return <ContainerTrip key={trip.id}>
            <h3>{trip.name}</h3>
            <p>{trip.description}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Duração: {trip.durationInDays} dias</p>
            <button onClick={() => {goToDetails(trip.id)}}>Detalhes da Viagem</button>
            <button onClick={() => {deleteTrip(trip.id)}}>Deletar</button>
            </ContainerTrip>
    })
    
    return <ContainerListPage>
        <h1>Lista de Viagens:</h1>
        {loadingTrips && <p>Carregando...</p>}
        {!loadingTrips && tripsError && <p>Ocorreu um erro!</p>}
        {!loadingTrips && trips && trips.length === 0 && (<p>Nenhuma viagem encontrada</p>)}
        {!loadingTrips && trips && trips.length > 0 && <ContainerLista>{listaDeViagens}</ContainerLista>}

        <div>
            <button onClick={goToHome}>Voltar</button>
            <button onClick={goToCreate}>Adicionar Viagem</button>
        </div>
    </ContainerListPage>
}

export default AdminHomePage