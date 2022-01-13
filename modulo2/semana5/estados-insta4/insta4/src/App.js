import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const InputContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  margin: 10px 0;
  border: 1px solid black;
  width: 300px;
`
const Botao = styled.button `
  margin: 10px;
  width: 80px;
  padding: 5px;

`

const Input = styled.input `
  margin: 10px;
  padding: 5px;
  width: 220px;
`

class App extends React.Component {

  state = {
    posts: [{
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150',
    },
    {
      nomeUsuario: 'carlos',
      fotoUsuario: 'https://picsum.photos/id/1005/50/50',
      fotoPost: 'https://picsum.photos/id/237/200/150'
    },
    {
      nomeUsuario: 'marina',
      fotoUsuario: 'https://picsum.photos/id/1027/50/50',
      fotoPost: 'https://i.picsum.photos/id/171/2048/1536.jpg?hmac=16eVtfmqTAEcr8VwTREQX4kV8dzZKcGWI5ouMlhRBuk'
    }
  ],
  valorInputNome: "",
  valorInputFotoUsuario: "",
  valorFotoPost: ""
}

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorFotoPost
    };

    const novosPosts = [...this.state.posts, novoPost];

    this.setState({posts: novosPosts, valorInputNome: "", valorInputFotoUsuario: "", valorFotoPost: ""});
  };

  onChangeInputNome = (event) => {
    this.setState({valorInputNome: event.target.value});
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value});
  };

  onChangeInputFotoPost = (event) => {
    this.setState({valorFotoPost: event.target.value})
  }



  render() {

    const listaDePosts = this.state.posts.map((post, index) => {
      return (
        <Post key={index}
          nomeUsuario={post.nomeUsuario} 
          fotoUsuario={post.fotoUsuario} 
          fotoPost ={post.fotoPost}
        />
      )
    })

    return (
      <MainContainer>
        {/* <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />        
        <Post
        nomeUsuario={'carlos'}
        fotoUsuario={'https://picsum.photos/id/1005/50/50'}
        fotoPost={'https://picsum.photos/id/237/200/150'}
        />
        <Post
          nomeUsuario={'marina'}
          fotoUsuario={'https://picsum.photos/id/1027/50/50'}
          fotoPost={'https://i.picsum.photos/id/171/2048/1536.jpg?hmac=16eVtfmqTAEcr8VwTREQX4kV8dzZKcGWI5ouMlhRBuk'}
        /> */}
        <InputContainer>
        <Input
        value={this.state.valorInputNome}
        onChange={this.onChangeInputNome}
        placeholder={'Nome de Usuário'}
        />
        <Input
        value={this.state.valorInputFotoUsuario}
        onChange={this.onChangeInputFotoUsuario}
        placeholder={'Link da Foto de Perfil'}
        />
        <Input
        value={this.state.valorFotoPost}
        onChange={this.onChangeInputFotoPost}
        placeholder={'Link da Foto do Post'}
        />
        <Botao onClick={this.adicionaPost}>Postar</Botao>
        </InputContainer>
        <div>
        {listaDePosts}
        </div>
      </MainContainer>
    );
  }
}

export default App;
