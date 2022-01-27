import React from "react";
import styled from "styled-components";
import axios from "axios";
import DetalheUsuario from "./DetalheUsuario";


const urlUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "deborah-luna-moreira"
  }
};

const ContainerListaDeUsuarios = styled.div ` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ItemLista = styled.li `
    margin-top: 10px;
`;

const Botao = styled.button `
    margin-top: 10px;
    margin-left: 8px;
`;

export default class ListaDeUsuarios extends React.Component {

    state = {
      usuarios: [],
      usuario: {}
    }
  
    componentDidMount() {
      this.getAllUsers();
    }
  
    getAllUsers = () => {
      axios
        .get(urlUsers, headers)
        .then((res) => {
          this.setState({ usuarios: res.data });
        })
        .catch((err) => {
          alert("Algo deu errado, tente novamente");
        });
    };

    deleteUser = (id) => {
      if (window.confirm("Tem certeza que deseja deletar?")){
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers)
        .then((res) => {
            alert('Usuário deletado com sucesso.');
          this.getAllUsers();
        })
        .catch((err) => {
          alert(err.response.data.message);
      });
    } else {
      alert("O usuário não foi deletado.")
    }
  }


    render(){

        const users = this.state.usuarios.map((user) => {
          return (<ItemLista key={user.id}>
          {user.name}
          <Botao  onClick={() => {this.deleteUser(user.id)}}>Deletar</Botao>
          </ItemLista>)
        });
    
        return (
        
        <ContainerListaDeUsuarios>
            {users}
        <Botao onClick={this.props.botaoCriarUsuario}>Voltar</Botao>

        </ContainerListaDeUsuarios>
    
        )
    }
} 