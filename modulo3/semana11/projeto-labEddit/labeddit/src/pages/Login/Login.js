import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../../constants/url"

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

const Login = () => {

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

    const onSubmitLogin = (event) => {
        event.preventDefault()

        const body = {
            email: email,
            password: senha
        }
        axios.post(`${BASE_URL}/users/login`, body)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                navigate("/feed")
                console.log(response.data.token)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }


    return(
        <ContainerLogin>
            <h3>Login</h3>
            <form onSubmit={onSubmitLogin}>
            <input placeholder="E-mail" type="email" value={email} onChange={onChangeEmail} required></input>
            <input placeholder="Senha" type="password" value={senha} onChange={onChangeSenha} required></input>
            <button>Entrar</button>
            </form>
            <div>
            <button onClick={goBack}>Voltar</button>
            </div>
        </ContainerLogin>
    )
}

export default Login