import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Matches from "./components/Matches"
import Profile from './components/Profile';

function App() {

  const aluna = "deborah-luna-moreira"

  const [tela, setTela] = useState("profile")

  const onClickTelaMatches = () => {
    setTela("matches")
  }

  const onClickTelaProfile = () => {
    setTela("profile")
  }

  const telaCorreta = () => {
    if(tela === "profile"){
      return <Profile onClickTelaMatches={onClickTelaMatches}
      onClickClear = {clearAll}
      />
    } else if(tela === "matches"){
      return <Matches onClickTelaProfile={onClickTelaProfile}
      onClickClear = {clearAll}
      />
    }
  }

  const clearAll = () => {
    axios
    .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluna}/clear`)
    .then((res) => {
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="App">
       {telaCorreta()}
    </div>
  );
}

export default App;
