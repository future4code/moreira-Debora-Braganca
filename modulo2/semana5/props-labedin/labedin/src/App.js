import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import { CardPequeno } from './components/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://storage.alboom.ninja/sites/903/img/sobre/deborah.jpg?1479223934" 
          nome="Déborah Luna" 
          descricao="Olá, me chamo Déborah Luna e sou estudante, fotógrafa e baterista.
          Por ser fotógrafa a proximidade com a tecnologia fez com que eu me interessasse pela área e começasse os estudos para migrar de carreira.
          Hoje sou uma feliz estudante da Labenu e logo me tornarei uma desenvolvedora."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1641953874~hmac=fb461bb7d4c203e030d362180077ad19" email="deborahdlmb@gmail.com" imagem="https://cdn-icons-png.flaticon.com/512/1239/1239525.png" endereco="Rua Labenu" />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://storage.alboom.ninja/sites/903/img/logo/logotipo-cor.png?t=1568907466" 
          nome="Déborah Luna Photography" 
          descricao="Fotógrafa principal de casamentos e ensaios." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
