import React from "react";
import styled from "styled-components";


// const urlPlaylistTracks = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;

const headers = {
  headers: {
    Authorization: "deborah-luna-moreira"
  }
};

const Container = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 18px;
  column-gap: 24px;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {

  display: flex;
  flex-direction: column;
}
`

const Titulo = styled.p `
  color: white;
  margin-top: 36px;
`

const Botao = styled.button `
    margin-top: 10px;
    margin-left: 8px;
`;

const BotaoVoltar = styled.button `
    margin: 16px auto;
    display: block;
    grid-column: 1 / -1;
    padding: 8px;
`;

const Input = styled.input `
  display: block;
  margin-top: 10px;
`
const Inputs = styled.div `
  width: 300px;
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  margin: 0 auto;

  button{
    margin: 16px auto;
    padding: 2px 8px;
  }
  
`

const ContainerLink = styled.div `
  margin-top: 16px;
`

const ContainerMusicas = styled.div `
  li{
    margin-top: 0;
  }
`

const TituloMusicas = styled.p `
  grid-column: 1 / -1;
  color: white;
  margin-top: 36px;
  font-size: 18px;
`


export class DetalhePlaylist extends React.Component {

    render (){

        const musicas = this.props.musicas.map((musica) => {
            return (<ContainerMusicas key={musica.id}>
            <li key={musica.id}>
            {musica.name}
            <Botao  onClick={() => this.props.deleteTrack(this.props.playlistId, musica.id)}>Deletar</Botao>
            <ContainerLink>
              <video src={musica.url} controls></video >
            </ContainerLink>
            </li>
            </ContainerMusicas>)
          });


        return(
            <Container>
              <TituloMusicas>Músicas da Playlist:</TituloMusicas>
                {musicas}
                <Inputs>
                <Titulo>Adicionar Música:</Titulo>
                <Input value = {this.props.valorNome} onChange = {this.props.inputNome} placeholder="Nome da música"/>
                <Input value = {this.props.valorArtista} onChange = {this.props.inputArtista} placeholder="Nome do artista"/>
                <Input value = {this.props.valorUrl} onChange = {this.props.inputUrl} placeholder="Url da música"/>
                <button onClick={() => this.props.botaoAddMusica(this.props.playlistId)}>Enviar</button>
                </Inputs>
                <BotaoVoltar onClick={this.props.botaoHidePlaylist}>Voltar para playlists</BotaoVoltar>
            </Container>
        )
    }
}