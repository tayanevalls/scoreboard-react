import React, { Component } from 'react';
import './index.css';
import Scoreboard from './Scoreboard';


const dados = {
    match: {
      stadium: "Arena Corinthians",
      date: "22/01/2019",
      schedule: "19hrs",
      weather: "Nublado",
      championship: "Brasileiro",
  },

  home:{
      name: "Corinthians",
  },

  visitor: {
      name: "Santos",
  }
};

class App extends Component {
  render(){
      return <Scoreboard {...dados} />

      
  }
}



export default App;





  
