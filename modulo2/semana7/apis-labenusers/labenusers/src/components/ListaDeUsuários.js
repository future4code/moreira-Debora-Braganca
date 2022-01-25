import React from "react";
import styled from "styled-components";
import axios from "axios";

const ListaDeUsuarios = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

const ItemLista = styled.li `
    
    margin-top: 15px

`

const Botao = styled.button `
    margin-top: 15px
`

const urlUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "deborah-luna-moreira"
  }
};

const urlDeleteUser = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id";

export default class App extends React.Component {

    state = {
      usuarios: [],
    }
  
    componentDidMount() {
      this.getAllUsers();
    }
  
    getAllUsers = () => {
      axios
        .get(urlUsers, headers)
        .then((res) => {
          this.setState({ usuarios: res.data });
          console.log(res.data);
        })
        .catch((err) => {
          alert("Algo deu errado, tente novamente");
        });
    };

    deleteUser = (id) => {

        axios.delete(urlDeleteUser, id, headers)
        .then((res) => {
            alert('Usuário deletado com sucesso.');
          this.getAllUsers();
        })
        .catch((err) => {
          alert(err.response.data.message);
      });
    };

    render(){

        const users = this.state.usuarios.map((user) => {
          return <ItemLista key={user.id}>{user.name} <button  onClick={() => {this.deleteUser(user.id)}}>Deletar</button></ItemLista>;
        });
    
        return (
        
        <ListaDeUsuarios>
            {users}
        <Botao onClick={this.props.botaoCriarUsuario}>Voltar</Botao>
        </ListaDeUsuarios>
    
        )
    }
} 