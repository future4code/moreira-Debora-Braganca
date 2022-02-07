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

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  height: 40px;

  h1{
    margin-left: 30px;
    margin-right: 8px;
    font-size: 30px;
  }
}
`

const BotaoCriarPlaylist = styled.button `
  margin-left: 8px ;
  padding: 0 6px;
  font-size: 18px;
  height: 32px;
`

const BotaoVisualizar = styled.button `
  margin-top: 54px;
  padding: 8px;
  margin-left: 54px;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin: 0 18px;
  }
`

const ContainerCriar = styled.div `
  margin-top: 72px;
  margin-left: 54px;

  h3 {
    color: white;
    font-size: 24px;
  }

  input{
    height: 25px;
    width: 300px;
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin: 72px 18px;
  }
`
const ContainerInput = styled.div `
  display: flex;
  align-items: center;
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
          <ContainerInput>
          <input
          value={this.props.playlistInput}
          onChange={this.props.onPlaylistTextChange}
          placeholder="Nome da Playlist"
          />
          <BotaoCriarPlaylist onClick={this.props.createPlaylist}>Criar</BotaoCriarPlaylist>
          </ContainerInput>
        </ContainerCriar> 
        <BotaoVisualizar onClick={this.props.visualizarLista}>Visualizar Playlists</BotaoVisualizar>
        
      </ContainerCriarPlaylist>
    );
  }
}