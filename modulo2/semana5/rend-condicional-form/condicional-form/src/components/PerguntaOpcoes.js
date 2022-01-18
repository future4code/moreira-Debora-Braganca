import React from "react";


export class PerguntaOpcoes extends React.Component {
    
    retornaOpcao = (props) => {
        const array = this.props.opcoes
        const listaDeOpcoes = array.map((opcao) => <option>{opcao}</option>)
        return <select name="" id="">{listaDeOpcoes}</select>
    }

    render(){
        
        return(
            <div>
                <p>{this.props.pergunta}</p>
                {this.retornaOpcao()}
            </div>
        )
    }
}