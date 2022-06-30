import React from "react";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/url";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const ListTripPage = () => {
    const [trips, loadingTrips, tripsError] = useRequestData(`${BASE_URL}`)

    const listaDeViagens = trips && trips.map((trip) => {
        return <ContainerTrip key={trip.id}>
            <h3>{trip.name}</h3>
            <p>{trip.description}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Duração: {trip.durationInDays} dias</p>
            </ContainerTrip>
    })


    const navigate = useNavigate()

    const goToHome = () => {
        navigate("/")
    }
    
    const goToApplication = () => {
        navigate("/trips/application")
    }
    
    return <ContainerListPage>
        <h1>Lista de Viagens:</h1>
        {loadingTrips && <p>Carregando...</p>}
        {!loadingTrips && tripsError && <p>Ocorreu um erro!</p>}
        {!loadingTrips && trips && trips.length === 0 && (<p>Nenhuma viagem encontrada</p>)}
        {!loadingTrips && trips && trips.length > 0 && <ContainerLista>{listaDeViagens}</ContainerLista>}

        <div>
            <button onClick={goToHome}>Voltar</button>
            <button onClick={goToApplication}>Inscrever-se</button>
        </div>
    </ContainerListPage>
}

export default ListTripPage