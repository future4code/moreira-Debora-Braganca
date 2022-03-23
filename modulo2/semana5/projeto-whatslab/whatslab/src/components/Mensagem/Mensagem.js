import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import styled from "styled-components";


const ContainerNovaMensagem = styled.div `
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 60%;
    margin-bottom: 1em;
    margin-left: 15px;
    padding: 10px;
    padding: 0.9em 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 1.3;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);

`


const CointainerInputs = styled.div `
    display: flex;
    justify-content: space-evenly;
    margin: 20px;

`

const InputNome = styled.input `
    width: 100px;
    border-radius: 0.5em;
    height: 24px;

`

const InputMensagem = styled.input `

border-radius: 0.5em;

`

const TelaCheia = styled.div `
height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-end;
background-color: #aacfc1;


`

const SpanNome = styled.span `
    color: #9AAC8C;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.2em;
`
const ContainerNovaMensagemEu = styled.div `
    
    background-color:#DDF7C8;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 60%;
    margin-bottom: 1em;
    margin-right: 15px;
    padding: 10px;
    padding: 0.9em 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 1.3;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    align-self: flex-end;

`




export class Mensagem extends React.Component {

    state = {
        inputNome: "",
        inputMensagem: "",
        mensagens: [{
            nome: "",
            mensagem: ""
        }]
    }

    pegarInputNome = (event) => this.setState({inputNome: event.target.value});
    pegarInputMensagem = (event) => this.setState ({inputMensagem: event.target.value});

    addMensagem = () => {
        const novaListaDeMensagens = [...this.state.mensagens, {nome: this.state.inputNome, mensagem: this.state.inputMensagem}];

        this.setState({
            mensagens:novaListaDeMensagens,
            inputNome: "",
            inputMensagem: ""
        })
    }



    render(){

    const listaDeMensagens = this.state.mensagens.map((item, indexEnviado) => {
       
        if(item.nome === "eu"){
            return ( <ContainerNovaMensagemEu key={indexEnviado}>
            <span>{item.mensagem}</span>
        </ContainerNovaMensagemEu>)

        } else {
            return(
                <ContainerNovaMensagem key={indexEnviado}>
                    <SpanNome>{item.nome}</SpanNome>
                    <span>{item.mensagem}</span>
                </ContainerNovaMensagem>
            )
        }       
    });


    // return(
    //     <ContainerNovaMensagem key={indexEnviado}>
    //         <SpanNome>{item.nome}</SpanNome>
    //         <span>{item.mensagem}</span>
    //     </ContainerNovaMensagem>
    // )
    
    
    // const nome = this.state.inputNome.toLowerCase()
    // if (nome === "eu") {
    //     return (
    //         <div>{this.props.inputMensagem}</div>
    //     )
    // } else {
    //     return (
    //         <div>
    //         <div>{this.props.inputNome}</div>
    //         <div>{this.props.inputMensagem}</div>
    //         </div>)
    // };


    return(
        <TelaCheia>

        {listaDeMensagens}
        
        <CointainerInputs>
        <InputNome type="text"
        placeholder="Nome"
        value={this.state.inputNome}
        onChange={this.pegarInputNome}
        />
        <InputMensagem type="text" 
        placeholder="Mensagem"
        value={this.state.inputMensagem}
        onChange={this.pegarInputMensagem}
        />
        <button onClick={this.addMensagem}>Enviar</button>
        </CointainerInputs>
        
        </TelaCheia>
    );

    }
}