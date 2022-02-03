import React from "react";
import styled from "styled-components";
import { BsSoundwave } from "react-icons/bs";


const ContainerCriarPlaylist = styled.div `
background-color: black;
min-height: 100vh;

li{
  color: white;
  margin-top: 8px;
}
h3{
  color: white;
  margin-top: 54px;
}
`

const Header = styled.div `
  display: flex;
  align-items: center;
  padding: 18px 0;
  background-color: #6a90af;
  h1{
    margin-left: 54px;
    color: white;
    margin-right: 24px;
  }
`

const BotaoCriarPlaylist = styled.button `
  margin-left: 8px ;
  padding: 6px;
`

const BotaoVisualizar = styled.button `
  margin-top: 54px;
  padding: 8px;
  margin-left: 54px;
`

const ContainerCriar = styled.div `
  margin-top: 72px;
  margin-left: 54px;

  h3 {
    color: white;
  }

  input{
    height: 25px;
    width: fit-content;
  }
`

export default class CriarPlaylist extends React.Component {

  render() {

    return (
      <ContainerCriarPlaylist>
        <Header>
        <h1>Labefy</h1>
        <BsSoundwave color="white" size={60}/>
        </Header>
        <ContainerCriar>
          <h3>Criar Nova Playlist:</h3>
          <input
          value={this.props.playlistInput}
          onChange={this.props.onPlaylistTextChange}
          placeholder="Playlist"
          />
          <BotaoCriarPlaylist onClick={this.props.createPlaylist}>Enviar</BotaoCriarPlaylist>
        </ContainerCriar> 
        <BotaoVisualizar onClick={this.props.visualizarLista}>Visualizar Playlists</BotaoVisualizar>
        
      </ContainerCriarPlaylist>
    );
  }
}