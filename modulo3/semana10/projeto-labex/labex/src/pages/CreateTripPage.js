import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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
const CreateTripPage = () => {

    const [nameTrip, setNameTrip] = useState("")
    const [planetTrip, setPlanetTrip] = useState("")
    const [dateTrip, setDateTrip] = useState("")
    const [descriptionTrip, setDescriptionTrip] = useState("")
    const [durationTrip, setDurationTrip] = useState(0)

    const navigate = useNavigate()

    const goToTripList = () => {
        navigate("/admin/trips/list")
    }

    const body = {
        "name": nameTrip,
        "planet": planetTrip,
        "date": dateTrip,
        "description": descriptionTrip,
        "durationInDays": durationTrip
    }
    

    const onChangeNameTrip = (e) => {
        setNameTrip(e.target.value)
    }

    const onChangePlanetTrip = (e) => {
        setPlanetTrip(e.target.value)
    }

    const onChangeDateTrip = (e) => {
        setDateTrip(e.target.value)
    }

    const onChangeDescriptionTrip = (e) => {
        setDescriptionTrip(e.target.value)
    }

    const onChangeDurationTrip = (e) => {
        setDurationTrip(e.target.value)
    }

    const token = localStorage.getItem('token')
    const headers = {headers: {
        auth: token
     }}

    const createTrip = () => {
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/deborah-luna-moreira/trips', body, headers)
        .then((response) => {
            alert('Viagem adicionada')
            navigate('/admin/trips/list')
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    return (
        <ContainerFormulário>
            <h3>Adicione uma nova viagem:</h3>
            <input placeholder="Nome" value={nameTrip} onChange={onChangeNameTrip}/>
            <input placeholder="Planeta" value={planetTrip} onChange={onChangePlanetTrip}/>
            <input placeholder="Data" value={dateTrip} onChange={onChangeDateTrip}/>
            <input placeholder="Descrição" value={descriptionTrip} onChange={onChangeDescriptionTrip}/>
            <input placeholder="Duração em dias" value={durationTrip} onChange={onChangeDurationTrip}></input>
            <div>
            <button onClick={createTrip}>Enviar</button>
            <button onClick={goToTripList}>Voltar</button>
            </div>
        </ContainerFormulário>
    )
}

export default CreateTripPage