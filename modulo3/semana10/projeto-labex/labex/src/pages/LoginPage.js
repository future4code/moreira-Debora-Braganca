import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ContainerLogin = styled.div `
    margin: 144px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 24px 0;

    div{
        display: flex;
        flex-direction: row;
        gap: 24px;
    }

    h3{
        margin: 0;
    }
`

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const navigate = useNavigate()

    const goBack = () => {
        navigate("/")
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangeSenha = (event) => {
        setSenha(event.target.value)
    }

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: senha
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/deborah-luna-moreira/login', body)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                navigate("/admin/trips/list")
            })
            .catch((error) => {
                console.log(error.response)
            })
    }


    return(
        <ContainerLogin>
            <h3>Login</h3>
            <input placeholder="E-mail" value={email} onChange={onChangeEmail}></input>
            <input placeholder="Senha" value={senha} onChange={onChangeSenha}></input>
            <div>
                <button onClick={goBack}>Voltar</button>
                <button onClick={onSubmitLogin}>Entrar</button>
            </div>
        </ContainerLogin>
    )
}

export default LoginPage