import { useState } from "react";
import "./App.css";


function App() {

  const [final,setFinal]=useState('');
  var choice;
  const rockHandler = () => {
    choice = "rock";
  };

  const paperHandler = () => {
    choice = "paper";
  };

  const scissorHandler = () => {
    choice = "scissor";
  };

  var compChoice;
  var output;
  const computer = Math.random();


  if (computer > 0.34) {
    compChoice = "rock";
  } else if (computer > 0.67) {
    compChoice = "paper";
  } else {
    compChoice = "scissor";
  }
  console.log("comp choice"+compChoice);

  if (compChoice === choice) {
    console.log("inside draw");
    output = "draw";
  }

  if (compChoice === "paper") {
    if (choice === "rock") {
      output = "computer";
    } else {
      output = "player";
    }
  } else if (compChoice === "scissor") {
    if (choice === "paper") {
      output = "computer";
    } else {
      output = "player";
    }
  } else if (compChoice === "rock") {
    if (choice === "scissor") {
      output = "computer";
    } else {
      output = "player";
    }
  }
  setFinal(output)

  

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to ROCK PAPER SCISSOR GAME !</p>
        <button onclick={rockHandler}>ROCK</button>
        <button onclick={paperHandler}>PAPER</button>
        <button onclick={scissorHandler}>SCISSOR</button>

        <h1>{final}</h1>
      </header>
    </div>
  );
}

export default App;
