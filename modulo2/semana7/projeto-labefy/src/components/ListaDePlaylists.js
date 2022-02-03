import React from "react";
import styled from "styled-components";
import axios from "axios";
import { DetalhePlaylist } from "./DetalhePlaylist";
import { BsSoundwave } from "react-icons/bs";


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

h1{
  color: white;
}
li{
  color: white;
  margin-top: 8px;
}
h3{
  color: white;
  margin-top: 48px;
}
`;

const ItemLista = styled.li `
    margin-top: 10px;
`;

const Botao = styled.button `
    margin-top: 10px;
    margin-left: 8px;
`;

const BotaoHide = styled.button `
margin-top: 20px;
`
const Header = styled.div `
  display: flex;
  align-items: center;
  padding: 18px 0;
  background-color: #6a90af;
  width: 100vw;

  h1{
    margin-left: 54px;
    color: white;
    margin-right: 24px;
  }
`

export default class ListaDePlaylists extends React.Component {

    state = {
      playlists: [],
      visualizaDetalhe: false,
      tracks: [],
      playlistSelecionada: "",
      nomePlaylistSelecionada: '',
      nomeMusicaInput: '',
      nomeArtistaInput: '',
      urlMusicaInput: ''
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

  hideDetalhe = () => {
    this.setState({visualizaDetalhe: false})
  }

  getPlaylistTracks = (id) => {

    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, headers)
    .then((res) => {
      this.setState({tracks: res.data.result.tracks });
      this.setState({visualizaDetalhe: true})
      this.setState({playlistSelecionada: `${id}`})
    })
    .catch((err) => {
      alert("Algo deu errado, tente novamente");
    });
}

  addTrackToPlaylist = (id) => {
    const body = {
      name: this.state.nomeMusicaInput,
      artist: this.state.nomeArtistaInput,
      url: this.state.urlMusicaInput
    }
    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, headers)
    .then((res) => {
      this.setState({tracks: [...this.state.tracks, res.data]})
      this.setState({inputNome: ''})
      this.setState({inputArtista: ''})
      this.setState({inputUrl: ''})
      this.getPlaylistTracks(this.state.playlistSelecionada)
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
  }

  pegaInputNome = (e) => {
    this.setState({nomeMusicaInput: e.target.value})
  }

  pegaInputArtista = (e) => {
    this.setState({nomeArtistaInput: e.target.value})
  }

  pegaInputUrl = (e) => {
    this.setState({urlMusicaInput: e.target.value})
  }
  deleteTrack = (playlistId, trackId) => {
    if (window.confirm("Tem certeza que deseja deletar?")){
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}`, headers)
      .then((res) => {
          alert('Música deletada com sucesso.');
          this.getPlaylistTracks(playlistId)
      })
      .catch((err) => {
          console.log(err)
        alert("algo deu errado");
    });
  } else {
    alert("A música não foi deletada.")
  }
  }



    render(){

        const playlists = this.state.playlists.map((playlist) => {  
          return <ItemLista key={playlist.id} idPlaylist = {playlist.id}>
          {playlist.name}
          <Botao onClick={() =>this.getPlaylistTracks(playlist.id)}>Ver Detalhes</Botao>
          <Botao  onClick={() => {this.deletePlaylist(playlist.id)}}>Deletar</Botao>
          </ItemLista>}
        );

        const renderizaTelaCorreta = () => {
        if (this.state.visualizaDetalhe) {
          return <DetalhePlaylist
          playlistId = {this.state.playlistSelecionada}
          musicas = {this.state.tracks}
          botaoHidePlaylist = {this.hideDetalhe}
          inputNome = {this.pegaInputNome}
          valorNome = {this.state.inputNome}
          inputArtista = {this.pegaInputArtista}
          valorArtista = {this.state.inputArtista}
          inputUrl = {this.pegaInputUrl}
          valorUrl = {this.state.inputUrl}
          botaoAddMusica = {this.addTrackToPlaylist}
          deleteTrack = {this.deleteTrack}
          // nomePlaylist = {playlist.name}
          />}
      }  

        return (
        
        <ContainerListaDePlaylists>
        <Header>
        <h1>Labefy</h1>
        <BsSoundwave color="white" size={60}/>
        </Header>
          <h3>Suas playlists:</h3>
            {playlists}
            <BotaoHide onClick={this.props.botaoHide}>Esconder Lista</BotaoHide>
            {renderizaTelaCorreta()}
        </ContainerListaDePlaylists>
    
        )
    }
} 