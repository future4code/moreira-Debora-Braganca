import React from "react";
import axios from "axios";
import styled from "styled-components";
import ListaDePlaylists from "./components/ListaDePlaylists";
import CriarPlaylist from "./components/CriarPlaylist";

const urlPlaylists =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "deborah-luna-moreira"
  }
};

const ContainerApp = styled.div `
background-color: black;
min-height: 100vh;
`

export default class App extends React.Component {
  state = {
    playlistInput: "",
    visualizaLista: false,
  };

  createPlaylist = () => {
    const body = {
      name: this.state.playlistInput
    };

    axios
      .post(urlPlaylists, body, headers)
      .then((res) => {
        alert(`A playlist ${this.state.playlistInput} foi criada com sucesso!`);
        this.setState({ playlistInput: "" });
        this.setState({visualizaLista: false})
      })
      .catch((err) => {
        alert("Algo deu errado. Tente novamente.");
        this.setState({ playlistInput: "" });
      });
  };

  onPlaylistTextChange = (event) => {
    this.setState({ playlistInput: event.target.value });
  };

  visualizarLista = () => {
    this.setState({visualizaLista: true})
  }

  hideLista = () => {
    this.setState({visualizaLista: false})
  }

  render() {

    const renderizaTelaCorreta = () => {
      if (this.state.visualizaLista) {
        return <ListaDePlaylists botaoHide={this.hideLista} botaoDetalhe = {this.visualizarDetalhe}/>;
      } else {
        return <CriarPlaylist createPlaylist = {this.createPlaylist}
        playlistInput = {this.state.playlistInput}
        onPlaylistTextChange = {this.onPlaylistTextChange}
        visualizarLista = {this.visualizarLista}
        />
      }
    }

    return (
      <ContainerApp>
        {renderizaTelaCorreta()} 
      </ContainerApp>
    );
  }
}

