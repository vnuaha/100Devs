import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Computers vs Human
//Rock Paper Scissors Spock Lizard
/*
scissor [Paper, Lizard]
Scissors cuts Paper = Scissor wins
Scissors decapitates Lizard = Scissors win

Rock =[Rock, Scissors]
Rock crushes Lizard = Rock Wins
Rock crushes Scissors* = Rock wins

Lizard = [Spock, Paper]
Lizard poisons Spock = Lizard wins
Lizard eats Paper = Lizard wins

Spock =[Scissors, Rock]
Spock smashes Scissors = Spock wins
Spock vaporizes Rock = Spock wins

Paper =[Rock, Spock]
Paper covers Rock = > Paper wins
Paper disproves Spock = Paper wins
 */