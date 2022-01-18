import React from "react";
import { PerguntaAberta } from "./PerguntaAberta";
import { PerguntaOpcoes } from "./PerguntaOpcoes";



export class Etapa3 extends React.Component {

    render(){

    return(
        <div>
            <h1>ETAPA 3 - INFORMACÕES GERAIS DE ENSINO</h1>
            <PerguntaAberta pergunta={"5. Por que você não terminou um curso de graduação?"}/>
            <PerguntaOpcoes pergunta={"6. Você fez algum curso complementar?"}
            opcoes={["Nenhum", "Curso Técnico","Curso de inglês",]}/>
            <p>
                <button onClick={this.props.botaoFinalizar}>Finalizar</button>
            </p>
        </div>
    )
}
}