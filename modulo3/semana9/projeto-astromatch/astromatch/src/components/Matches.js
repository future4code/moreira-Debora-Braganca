import axios from "axios";
import React, { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import styled from "styled-components";
import Button from "@mui/material/Button";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const ContainerMatch = styled.div `
display: flex;
flex-direction: row;
gap: 20px;
align-items: center;
`

const ContainerMatches = styled.div `
border: 1px solid red;
height: 600px;
width: 400px;
padding: 16px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 80px auto;
align-items: center;
`

const ContainerHeader = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const MatchesList = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 450px;
`


const Matches = (props) => {

    const aluna = "deborah-luna-moreira"

    const [matches, setMatches] = useState([])

    const getMatches = () => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluna}/matches`)
        .then((res) => {
            setMatches(res.data.matches)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getMatches()
      }, [matches])

    const matchesList = matches.map((match) => {
        return <ContainerMatch key={match.id} >
            <Avatar src={match.photo}/>
            <p>{match.name}</p>
        </ContainerMatch>
    })

    return (
        <ContainerMatches>
             <ContainerHeader>
        <h1>astromatch</h1>
            <PersonAddAlt1Icon onClick={props.onClickTelaProfile}
            color="secondary"
            sx={{ fontSize: 60 }}>
            </PersonAddAlt1Icon>
        </ContainerHeader>
            <MatchesList>
            {matchesList} 
            </MatchesList>
            <div>
            <Button variant="outlined"
            color="secondary"
            onClick={props.onClickClear}>
                Limpar Matches
            </Button>
        </div>
        </ContainerMatches>
    )
}

export default Matches