import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/url";
import axios from "axios";

const ContainerFormulário = styled.div `
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 500px;
    margin: 72px auto;
    align-items: center;
    border: 1px solid black;
    padding: 16px;

    h3{
        margin: 0;
    }

`
const ApplicationFormPage = () => {

    const [viagem, setViagem] = useState("")
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [texto, setTexto] = useState("")
    const [profissao, setProfissao] = useState("")
    const [pais, setPais] = useState("")

    const [trips] = useRequestData(`${BASE_URL}`)

    const listaDeViagens = trips && trips.map((trip) => {
        return <option key={trip.id}>{trip.name}</option>})


    const navigate = useNavigate()

    const goToTripList = () => {
        navigate("/trips/list")
    }

    const onChangeViagem = (e) => {
        setViagem(e.target.value)
    }

    const onChangeNome = (e) => {
        setNome(e.target.value)
    }

    const onChangeIdade = (e) => {
        setIdade(e.target.value)
    }

    const onChangeTexto = (e) => {
        setTexto(e.target.value)
    }

    const onChangeProfissao = (e) => {
        setProfissao(e.target.value)
    }

    const onChangePais = (e) => {
        setPais(e.target.value)
    }

    const viagemSelecionada = trips.find((trip) => {return trip.name === viagem})
    console.log(viagemSelecionada)
    const tripId = viagemSelecionada.id

    console.log(tripId)

    const body = {
        name: nome,
        age: idade,
        applicationText: texto,
        profession: profissao,
        country: pais,
    }

    const inscrever = (e) => {

        e.preventDefault()

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/deborah-luna-moreira/trips/${tripId}/apply`, body)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    return (
        <ContainerFormulário>
            <h3>Inscreva-se para uma viagem</h3>
            <form onSubmit={inscrever}>
            <select placeholder="Escolha uma viagem" value={viagem} onChange={onChangeViagem}>
                <option disabled>Escolha uma viagem</option>
                {listaDeViagens}
            </select>
            <input placeholder="Nome" value={nome} onChange={onChangeNome}/>
            <input placeholder="Idade" type="number" value={idade} onChange={onChangeIdade}/>
            <input placeholder="Texto de candidatura" value={texto} onChange={onChangeTexto}/>
            <input placeholder="Profissão" value={profissao} onChange={onChangeProfissao}/>
            <input placeholder="País" value={pais} onChange={onChangePais}></input>
            
            <button>Enviar</button>
            </form>
            <button onClick={goToTripList}>Voltar</button>
            
        </ContainerFormulário>
    )
}

export default ApplicationFormPage