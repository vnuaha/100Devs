let deckId = ''

fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        deckId = data.deck_id
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#player1').src = data.cards[0].image 
        document.querySelector('#player2').src = data.cards[1].image
        let player1Val = convertToNum(data.cards[0].value)
        let player2Val = convertToNum(data.cards[1].value)
        if(player1Val > player2Val){
          document.querySelector('.result').innerText = 'Player 1 Wins !'
        }else if(player1Val < player2Val){
          document.querySelector('.result').innerText = 'Player 2 Wins !'
        }else{
          document.querySelector('.result').innerText = 'Time for War!'
        }

        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function convertToNum(val){
  if(val === 'ACE'){
    return 14
  }else if(val === 'KING'){
    return 13
  }else if(val === 'QUEEN'){
    return 12
  }else if(val === 'JACK'){
    return 11
  }else{
    return Number(val)
  }
}



// Scissors cuts Paper
// Scissors decapitates Lizard
// Paper covers Rock
// Paper disproves Spock
// Rock crushes Lizard
// Rock crushes scissors
// Lizard poisons Spock
// Lizard eats Paper
// Spock smashes Scissors
// Spock vaporizes Rock



// var RULES = {
//   rock: {
//       lizard: 'Rock crushes lizard',
//       scissors: 'Rock crushes scissors'
//   },
//   paper: {
//       spock: 'Paper disproves Spock',
//       rock: 'Paper covers rock'
//   },
//   scissors: {
//       lizard: 'Scissors beheads lizard',
//       paper: 'Scissors cuts paper'
//   },
//   lizard: {
//       spock: 'Lizard poisons Spock',
//       paper: 'Lizard eats paper'
//   },
//   spock: {
//       scissors: 'Spock distroys scissors',
//       rock: 'Spock vaporizes rock'
//   }

// https://codereview.stackexchange.com/questions/102057/rock-paper-scissors-lizard-and-spock
//https://discuss.codecademy.com/t/rock-paper-scissors-multiple-questions/534452
//https://betterprogramming.pub/7-ways-to-code-rock-paper-scissors-in-javascript-4189a5e7e535