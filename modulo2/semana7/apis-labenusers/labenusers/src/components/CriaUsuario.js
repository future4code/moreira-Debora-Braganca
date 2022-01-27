import React from "react";
import styled from "styled-components";
import axios from "axios";


const ContainerCriaUsuario = styled.div `
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Inputs = styled.input`
 width: 200px;
 margin: 8px auto;

`
const Botoes = styled.button`
  width: 200px;
  margin: 8px auto;
`

const urlUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "deborah-luna-moreira"
  }
};

export default class CriaUsuario extends React.Component {

    state = {
      usuarioInputNome: '',
      usuarioInputEmail: ''
    }
  
    createUser = () => {
      const body = {
        name: this.state.usuarioInputNome,
        email: this.state.usuarioInputEmail
      };
  
      axios
        .post(urlUsers, body, headers)
        .then((res) => {
          alert("Usuário criado com sucesso")
          this.setState({ usuarioInputNome: "", usuarioInputEmail:"" });
          this.getAllUsers();
        })
        .catch((err) => {
          alert(`${err.response.data.message}`)
          this.setState({ usuarioInputNome: "", usuarioInputEmail:"" });
        });
    };
  
  
    onNomeTextChange = (event) => {
      this.setState({ usuarioInputNome: event.target.value });
    };
  
    onEmailTextChange = (event) => {
      this.setState({ usuarioInputEmail: event.target.value });
    };
  
    render(){
  
      return (
        <ContainerCriaUsuario>
          <Inputs placeholder='Nome' 
          value={this.state.usuarioInputNome}
          onChange={this.onNomeTextChange}
          />
          <Inputs placeholder='E-mail' 
          value={this.state.usuarioInputEmail}
          onChange={this.onEmailTextChange}
          />
          <Botoes onClick={this.createUser}>Criar Usuário</Botoes>
  
          <Botoes onClick={this.props.botaoVisualizaLista}>Visualizar Usuários</Botoes>
        </ContainerCriaUsuario>
      )
    }
  }