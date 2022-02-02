import React from "react";
import styled from "styled-components";


// const urlPlaylists =
//   "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

// const headers = {
//   headers: {
//     Authorization: "deborah-luna-moreira"
//   }
// };

const ContainerCriarPlaylist = styled.div `
background-color: black;
padding: 36px;
min-height: 100vh;

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

const BotaoVisualizar = styled.button `
  margin-left: 36px;
`

export default class CriarPlaylist extends React.Component {

  render() {

    return (
      <ContainerCriarPlaylist>
        <h1>Labefy</h1>
        <input
          value={this.props.playlistInput}
          onChange={this.props.onPlaylistTextChange}
          placeholder="Playlist"
        />
        <BotaoCriarPlaylist onClick={this.props.createPlaylist}>Enviar</BotaoCriarPlaylist>
        <BotaoVisualizar onClick={this.props.visualizarLista}>Visualizar Playlists</BotaoVisualizar>
        
      </ContainerCriarPlaylist>
    );
  }
}