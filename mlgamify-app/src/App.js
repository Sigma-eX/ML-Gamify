import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';

import robot from './robot.png';
import './App.css';

//UI Button for Start 
/*const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));*/

//main body containing all elements
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="column left" >
            <img src={robot} alt="robot" className="robot"></img>
          </div>          
          <div className="column right" >
            <h1>Begin your journey <br /> with Machine Learning here with us !</h1>            
          </div>
        </div>
        <div className="column left">
          <button onClick={window.open("www.google.co.in", '_blank')} className="start" width={100} >Start</button>
        </div>

      </header>
    </div>
  );
}

export default App;
