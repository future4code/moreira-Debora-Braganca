import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/url";

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
    const [viagemId, setViagemId] = useState("")
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(undefined)
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

    const body = {
        name: nome,
        age: idade,
        applicationText: texto,
        profession: profissao,
        country: pais,
    }
    

    const onChangeViagem = (e) => {
        setViagem(e.target.value)
    }

    console.log(viagem)
    console.log(viagemId)

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

    return (
        <ContainerFormulário>
            <h3>Inscreva-se para uma viagem</h3>
            <select placeholder="Escolha uma viagem" value={viagem} onChange={onChangeViagem}>
                <option disabled>Escolha uma viagem</option>
                {listaDeViagens}
            </select>
            <input placeholder="Nome" value={nome} onChange={onChangeNome}/>
            <input placeholder="Idade" value={idade} onChange={onChangeIdade}/>
            <input placeholder="Texto de candidatura" value={texto} onChange={onChangeTexto}/>
            <input placeholder="Profissão" value={profissao} onChange={onChangeProfissao}/>
            <input placeholder="País" value={pais} onChange={onChangePais}></input>
            <div>
            <button>Enviar</button>
            <button onClick={goToTripList}>Voltar</button>
            </div>
        </ContainerFormulário>
    )
}

export default ApplicationFormPage