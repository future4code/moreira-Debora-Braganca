import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const ContainerHomePage = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 32px;
`

const ContainerBotoes = styled.div `
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin-top: 72px;
`

const HomePage = () => {

    const navigate = useNavigate()

    const goToTripList = () => {
        navigate("/trips/list")
    }

    const goToLoginArea = () => {
        navigate("/login")
    }

    return (
        <ContainerHomePage>
            <h1>Olá! Bem Vindo(a)!!</h1>
            <ContainerBotoes>
            <button onClick={goToLoginArea}>Login Admin</button>
            <button onClick={goToTripList}>Ver Viagens</button>
            </ContainerBotoes>
        </ContainerHomePage>
    )
}

export default HomePage