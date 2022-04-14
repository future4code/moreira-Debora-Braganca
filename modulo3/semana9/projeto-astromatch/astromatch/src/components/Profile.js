import axios from 'axios';
import { useEffect, useState } from 'react';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import GroupIcon from "@mui/icons-material/Group";
import styled from "styled-components";


const ContainerPerfil = styled.div `
border: 1px solid black;
border-radius: 8px;
height: 600px;
width: 400px;
display: flex;
flex-direction: column;
justify-content: space-around;
margin: 80px auto;
align-items: center;
`

const ContainerImagem = styled.div `
width: 300px;
height: 300px;
display: flex;
align-items: center;
justify-content: center;

    img{
    max-height: 300px;
    max-width: 300px;
    object-fit: cover;
}
`
const ContainerTexto = styled.div `
    height: 72px;
    
    p{
        margin: 0 0 8px 0;
    }
`

const ContainerHeader = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid black;
`

const ContainerBotoes = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`

const Profile = (props) => {

  const aluna = "deborah-luna-moreira"

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState()
  const [foto, setFoto] = useState("")
  const [bio, setBio] = useState("")
  const [matches, setMatches] = useState([])
  const [id, setId] = useState("")

  const getProfileToChose = () => {
    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluna}/person`)
    .then((res) => {
      setNome(res.data.profile.name)
      setIdade(res.data.profile.age)
      setFoto(res.data.profile.photo)
      setBio(res.data.profile.bio)
      setId(res.data.profile.id)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getProfileToChose()
  }, [])

  const choosePerson = (id) => {
    const body = {
      id: id,
      choice: true
    }

    axios
    .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluna}/choose-person`, body)
    .then((res) => {
      setMatches([...matches, res.data])
      getProfileToChose()
    })
    .catch((err) => {
      console.log(err)
    })
  }


  return (
    <ContainerPerfil className="App">
        <ContainerHeader>
        <h1>astromatch</h1>
            <GroupIcon onClick={props.onClickTelaMatches}
            color="secondary"
            sx={{ fontSize: 60 }}
            >
            </GroupIcon>
        </ContainerHeader>
        <ContainerImagem>
        <img src={foto} alt="foto" />
        </ContainerImagem>
        <ContainerTexto>
        <p>
          {nome}, {idade}
        </p>
        <p>
            {bio}
        </p>
        </ContainerTexto>
        <ContainerBotoes>
        <Fab color="error" aria-label="cancel"
        onClick={() => {getProfileToChose()}}>
            <CancelIcon/>
        </Fab>
        <Fab color="primary" aria-label="like" onClick={() => {choosePerson(id)}}>
            <FavoriteIcon />   
        </Fab>
        </ContainerBotoes>
        <div>
            <Button variant="outlined"
            color="secondary"
            onClick={props.onClickClear}>
                Limpar Matches
            </Button>
        </div>
       
    </ContainerPerfil>
  );
}

export default Profile;