import React, { Component } from 'react';
import './index.css';
import PlacarContainer from './PlacarContainer';


const dados = {
  partida: {
      estadio: "Arena Corinthians",
      data: "22/01/2019",
      horario: "19hrs",
      clima: "Nublado",
      campeonato: "Brasileiro",
  },

  casa:{
      nome: "Corinthians",
  },

  visitante: {
      nome: "Santos",
  }
};

class App extends Component {
  render(){
      return <PlacarContainer {...dados} />

      
  }
}



export default App;





  
