import React from "react";
import './CardPequeno.css'

 export function CardPequeno(props) {
     return <div className="littlecard-container">
         <p><img src={props.imagem}/>E-mail: {props.email}</p>
         <p><img src={props.imagem}/>Endereço: {props.endereco}</p>
     </div>
 }