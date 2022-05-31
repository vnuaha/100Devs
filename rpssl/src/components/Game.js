import { useState, useEffect } from "react";

const Game = () => {
  const [computerChoice, setComputerChoice] = useState(null);
  const [humanChoice, setHumanChoice] = useState(null);
  const [resultChoice, setResultChoice] = useState(null);
  const choices = ["🧱", "📰", "✂️", "🦎", "🖖"];

  //Generate random computer choice

  const randomChoice = choices[Math.floor(Math.random() * choices.length)];

  // player choices
  const humanPlays = (value) => {
    setHumanChoice(value);
    setComputerChoice(randomChoice);
  };

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
  useEffect(() => {
    {
      switch (humanChoice + computerChoice) {
        case "✂️📰": 
        case "🧱✂️":
        case "📰🧱":
        case "🦎📰":
        case "🖖✂️":
        case "🧱🦎":
        case "📰🖖":
        case "🖖🧱":
        case "✂️🦎":
        case "🦎🖖":
          setResultChoice("👩🏾‍💻 WINS! 🎉");
          break;
        case "📰✂️":
        case "✂️🧱":
        case "🧱📰":
        case "📰🦎":
        case "✂️🖖":
        case "🦎🧱":
        case "🖖📰":
        case "🧱🖖":
        case "🦎✂️":
        case "🖖🦎":
          setResultChoice("👩🏾‍💻 LOSES! 👎 ");
          break;
        case "🧱🧱":
        case "📰📰":
        case "✂️✂️":
        case "🦎🦎":
        case "🖖🖖":
          setResultChoice("ITS A DRAW! 💥 ");
          break;
      }
    }
  }, [computerChoice, humanChoice]);

  //   function compare(computerChoice) {
  // 	if (humanChoice === computerChoice) {
  //     return "The computer also chose " + computerChoice + ":" + "<br>" + "the result is a tie! :\|";
  // 	} else if (humanChoice === "rock") {
  // 		if (computerChoice === "paper") {
  //       return "paper covers rock <br> You Lose :\(";
  // 		} else if (computerChoice === "scissors") {
  //       return "rock crushes scissors <br> You Win! :\)";
  // 		} else if (computerChoice === "lizard") {
  // 			return "rock crushes lizard <br> You Win! :\) ";
  // 		} else {
  // 			return "spock vaporizes rock <br> You Lose :\(";
  // 		}
  // 	} else if (humanChoice === "paper") {
  // 		if (computerChoice === "rock") {
  // 			return "paper covers rock <br> You Win! :\)";
  // 		} else if (computerChoice === "scissors") {
  // 			return "scissors cut paper <br> You Lose :\(";
  // 		} else if (computerChoice === "lizard") {
  // 			return "lizard eats paper <br> You Lose :\(";
  // 		} else {
  // 			return "paper disproves spock <br> You Win! :\)";
  // 		}
  // 	}else if (humanChoice === "scissors") {
  // 		if (computerChoice === "rock") {
  // 			return "rock crushes scissors <br> You Lose :\(";
  // 		} else if (computerChoice === "paper") {
  // 			return "scissors cut paper <br> You Win! :\)";
  // 		} else if (computerChoice === "lizard") {
  // 			return "scissors decapitate lizard <br> You Win! :\)";
  // 		} else {
  // 			return "spock smashes scissors <br> You Lose :\(";
  // 		}
  // 	} else if (humanChoice === "lizard") {
  // 		if (computerChoice === "rock") {
  // 			return "rock crushes lizard <br> You Lose :\(";
  // 		} else if (computerChoice === "paper") {
  // 			return "lizard eats paper <br> You Win! :\)";
  // 		} else if (computerChoice === "scissors") {
  // 			return "scissors decapitate lizard <br> You Lose :\(";
  // 		} else {
  // 			return "lizard poisons spock <br> You Win! :\)";
  // 		}
  // 	} else if (humanChoice === "spock") {
  // 		if (computerChoice === "rock") {
  // 			return "spock vaporizes rock <br> You Win! :\)";
  // 		} else if (computerChoice === "paper") {
  // 			return "paper disproves spock <br> You Lose :\(";
  // 		} else if (computerChoice === "scissors") {
  // 			return "spock smashes scissors <br> You Win! :\) ";
  // 		} else {
  // 			return "lizard poisons spock <br> You Lose :\(";
  // 		}
  // 	}
  // };

  return (
    <>
   <h1>Rock Paper Scissors lizard Spock</h1>
      <h2>Man 👩🏾‍💻 Vs Machine 💻</h2>
      <div>
        <div className="container">
          {/* Computer plays */}
          <div className="player">
            <div className="info">
              <h3>Computer 💻</h3>
            </div>
            <div className="show computer"> {computerChoice}</div>
          </div>
          {/* Man plays */}
          
          <div className="player">
            <div className="info">
              <h3>Wo(Man) 👩🏾‍💻</h3>
            </div>
            <div className="show"> {humanChoice}</div>
          </div>
          
        </div>
      
        {/* <button onClick={() => humanPlays("🧱")}>🧱</button>
        <button onClick={() => humanPlays("📰")}>📰</button>
        <button onClick={() => humanPlays("✂️")}>✂️</button>
        <button onClick={() => humanPlays("🦎")}>🦎</button>
        <button onClick={() => humanPlays("🖖")}>🖖</button> */}
    
        <h2>{resultChoice}</h2>
        <div className="attack-btn">
          {choices.map((select, index) =>(
          <button key={index} onClick={() => humanPlays(select)}>
            {select}
          </button>
          ))};
        </div>
      
      </div>
    </>
  );
};

export default Game;
