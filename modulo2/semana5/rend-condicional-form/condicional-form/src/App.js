import React from 'react';

import logo from './logo.svg';
import './App.css';
import { Etapa2 } from './components/Etapa2';
import { Etapa1 } from './components/Etapa1';
import { Etapa3 } from './components/Etapa3';
import EtapaFinal from './components/EtapaFinal'

export default class App extends React.Component {

  state = {
    telaAtual: 1,
    ensinoMedio: false,
    ensinoSuperior: false,
    telaFim: false
  };

  onClickProximaEtapa = () => {
    this.setState({telaAtual: this.state.telaAtual + 1});
  }

  onClickFinalizar = () => {
    this.setState({telaAtual: this.state.telaAtual + 1, telaFim: true})
  }

  render(){

    const renderizaTelaCorreta = () => {
      if (this.state.telaAtual === 1) {
      return <Etapa1 botaoProximaEtapa={this.onClickProximaEtapa}/>;}
      else if (this.state.telaAtual === 2){
      return <Etapa2 botaoFinalizar={this.onClickFinalizar}/>;}
      else if (this.state.telaAtual === 3){
      return <Etapa3 botaoFinalizar={this.onClickFinalizar}/>;}
      else if (this.state.telaFim){
      return <EtapaFinal/>}
        
    };
  

  return (
    <div className="App">
      {renderizaTelaCorreta()}
    </div>
    );
  }
}

