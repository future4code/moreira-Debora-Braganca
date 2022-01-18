import React from "react";


export class PerguntaAberta extends React.Component {
    state = {
        entradaInput: ""
    }

    pegarInput = (event) => {
        this.setState({entradaInput: event.target.value})
    }

    render(){
        console.log(this.state.entradaInput)
        return(
            <div>
                <p>{this.props.pergunta}</p>
                <input type="text" value={this.state.entradaInput} onChange={this.pegarInput}/>
            </div>
        )
    }
}