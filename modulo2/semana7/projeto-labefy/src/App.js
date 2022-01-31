import React from "react";
import axios from "axios";
import styled from "styled-components";
import ListaDePlaylists from "./components/ListaDePlaylists";

const urlPlaylists =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "deborah-luna-moreira"
  }
};

const ContainerApp = styled.div `
background-color: black;
padding: 36px;
height: 100vh;

h1{
  color: white;
}
li{
  color: white;
  margin-top: 8px;
}
h3{
  color: white;
  margin-top: 54px;
}
`

const BotaoCriarPlaylist = styled.button `
  margin-left: 8px ;
`

export default class App extends React.Component {
  state = {
    playlistInput: ""
  };

  createPlaylsit = () => {
    const body = {
      name: this.state.playlistInput
    };

    axios
      .post(urlPlaylists, body, headers)
      .then((res) => {
        alert(`A playlist ${this.state.playlistInput} foi criada com sucesso!`);
        this.setState({ playlistInput: "" });
      })
      .catch((err) => {
        alert("Algo deu errado. Tente novamente.");
        this.setState({ playlistInput: "" });
      });
  };

  onPlaylistTextChange = (event) => {
    this.setState({ playlistInput: event.target.value });
  };

  render() {

    return (
      <ContainerApp>
        <h1>Labefy</h1>
        <input
          value={this.state.playlistInput}
          onChange={this.onPlaylistTextChange}
          placeholder="Playlist"
        />
        <BotaoCriarPlaylist onClick={this.createPlaylsit}>Enviar</BotaoCriarPlaylist>
        <h3>Suas playlists:</h3>
        <ListaDePlaylists />
      </ContainerApp>
    );
  }
}

