import React from "react";
import styled from "styled-components"


const CardContainer = styled.div `
border: 1px solid black;
width: 300px;
display: flex;
flex-direction: column;
align-items:center;
`
const PContainer = styled.p `
width: 100%;
border-bottom: 1px solid black ;
`

const CardPost = (props) => {
    return <CardContainer>
    <PContainer>{props.nome}</PContainer>
    <PContainer>{props.body}</PContainer>
    {props.voteSum}
    {props.commentCount? <p>{props.commentCount} comentários</p> : <p>0 comentários</p>}
    </CardContainer>
}

export default CardPost