import './App.css';
import React from 'react';
import styled from 'styled-components';
import CriaUsuario from './components/CriaUsuario';
import ListaDeUsuarios from './components/ListaDeUsuarios';

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`


export default class App extends React.Component {

  state = {
    visualizaLista: false
  }

  visualizarLista = () => {
    this.setState({visualizaLista: true})
  }

  visualizarCriarUsuĂˇrio = () => {
    this.setState({visualizaLista: false})
  }

  render(){
  
    const renderizaTelaCorreta = () => {
      if (this.state.visualizaLista) {
        return <ListaDeUsuarios botaoCriarUsuario={this.visualizarCriarUsuĂˇrio} />;
      } else {
        return <CriaUsuario botaoVisualizaLista={this.visualizarLista} />;
      }
    };

    return (
      <ContainerApp>
        {renderizaTelaCorreta()}
      </ContainerApp>
    )
  }
}