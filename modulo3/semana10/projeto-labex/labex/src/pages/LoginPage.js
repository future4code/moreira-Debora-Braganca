import React from "react";
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

    const navigate = useNavigate()

    const goBack = () => {
        navigate("/")
    }


    return(
        <ContainerLogin>
            <h3>Login</h3>
            <input placeholder="E-mail"></input>
            <input placeholder="Senha"></input>
            <div>
                <button onClick={goBack}>Voltar</button>
                <button>Entrar</button>
            </div>
        </ContainerLogin>
    )
}

export default LoginPage