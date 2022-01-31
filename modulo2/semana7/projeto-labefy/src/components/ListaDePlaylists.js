import React from "react";
import styled from "styled-components";
import axios from "axios";


const urlPlaylists = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "deborah-luna-moreira"
  }
};

const ContainerListaDePlaylists = styled.div ` 
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

export default class ListaDePlaylists extends React.Component {

    state = {
      playlists: [],
      playlist: {}
    }
  
    componentDidMount() {
      this.getAllPlaylists();
    }
  
    getAllPlaylists = () => {
      axios
        .get(urlPlaylists, headers)
        .then((res) => {
          this.setState({ playlists: res.data.result.list });
        })
        .catch((err) => {
          alert("Algo deu errado, tente novamente");
        });
    };

    deletePlaylist = (id) => {
      if (window.confirm("Tem certeza que deseja deletar?")){
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, headers)
        .then((res) => {
            alert('Playlist deletada com sucesso.');
          this.getAllPlaylists();
        })
        .catch((err) => {
            console.log(err)
          alert("algo deu errado");
      });
    } else {
      alert("A playlist não foi deletada.")
    }
  }


    render(){

        const playlists = this.state.playlists.map((playlist) => {
          return (<ItemLista key={playlist.id}>
          {playlist.name}
          <Botao  onClick={() => {this.deletePlaylist(playlist.id)}}>Deletar</Botao>
          </ItemLista>)
        });
    
        return (
        
        <ContainerListaDePlaylists>
            {playlists}
        </ContainerListaDePlaylists>
    
        )
    }
} 