//Create a button that adds 1 to a botScore stored in localStorage 
document.querySelector('button').addEventListener('click',drawTwo)

function drawTwo(){
   // const choice = document.querySelector('input').value
    const url = 'https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2'
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          document.querySelector('#player1').src = data.cards[0].image
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }
