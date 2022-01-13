import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
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
        />
      </MainContainer>
    );
  }
}

export default App;
