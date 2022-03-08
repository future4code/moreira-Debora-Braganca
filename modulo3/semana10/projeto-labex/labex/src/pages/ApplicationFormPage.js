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

    const [trips] = useRequestData(`${BASE_URL}`)

    const [viagem, setViagem] = useState("Surfando em Netuno")
    const [viagemId, setViagemId] = useState("")
    const [form, setForm] = useState({name:"", age: 18, applicationText: "", profession: "", country: ""})

    const listaDeViagens = trips && trips.map((trip) => {
        return <option key={trip.id}>{trip.name}</option>})


    const navigate = useNavigate()

    const goToTripList = () => {
        navigate("/trips/list")
    }

    const onChangeViagem = (e) => {
        setViagem(e.target.value)
    }

    const viagemSelecionada = trips && trips.find((trip) => {
     return trip.name === viagem
    })

    console.log(viagemSelecionada)



    const onChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }


    const body = form

    const inscrever = (event) => {

        event.preventDefault()

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/deborah-luna-moreira/trips/${viagemSelecionada}/apply`, body)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response)
        })

        setForm({name:"", age: 18, applicationText: "", profession: "", country: ""})
    }

    return (
        <ContainerFormulário>
            <h3>Inscreva-se para uma viagem</h3>
            <form onSubmit={inscrever}>
            <select placeholder="Escolha uma viagem" 
            value={viagem} 
            onChange={onChangeViagem} 
            required>
                <option disabled>Escolha uma viagem</option>
                {listaDeViagens}
            </select>
            <input
            name="name"
            placeholder="Nome" 
            value={form.name} 
            onChange={onChange} 
            required/>
            <input
            name="age"
            placeholder="Idade" 
            type="number" min={18} 
            value={form.age} 
            onChange={onChange} 
            required/>
            <input 
            name="applicationText"
            placeholder="Texto de candidatura" 
            value={form.applicationText} 
            onChange={onChange} 
            required/>
            <input 
            name="profession"
            placeholder="Profissão" 
            value={form.profession} 
            onChange={onChange} 
            required/>
            <input 
            name="country"
            placeholder="País" 
            value={form.country} 
            onChange={onChange} 
            required/>
            
            <button>Enviar</button>
            </form>
            <button onClick={goToTripList}>Voltar</button>
            
        </ContainerFormulário>
    )
}

export default ApplicationFormPage