import React from "react";


export class PerguntaOpcoes extends React.Component {
    state = {
        entradaInput: ""
    }

    pegarInput = (event) => {
        this.setState({entradaInput: event.target.value})
    }

    retornaOpcao = (props) => {
        const array = this.props.opcoes
        const listaDeOpcoes = array.map((opcao) => <option>{opcao}</option>)
        return <select name="" id="" value={this.state.entradaInput} onChange={this.pegarInput}>{listaDeOpcoes}</select>
    }

    render(){
        console.log(this.state.entradaInput)

        return(
            <div>
                <p>{this.props.pergunta}</p>
                {this.retornaOpcao()}
            </div>
        )
    }
}