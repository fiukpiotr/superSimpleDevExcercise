document.querySelector('.js-result')
  .innerHTML = 'Let\'s the game begin!';  

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

// const autoPlay = () => {

// }

// PRÓBA dodania addEventListener'a na `auto play` button
//
// document.querySelector('.js-auto-play-button')
//   .addEventListener('click', () => {
//     autoPlay()
//   }
// );

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  
    document.querySelector('.js-auto-play-btn')
      .innerHTML = 'Stop Playing';

  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.js-auto-play-btn')
      .innerHTML = 'Auto Play';
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  }
);
document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  }
);
document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  }
);

document.body.addEventListener('keydown', (event) => {
  if ( event.key === 'r' ) {
    playGame('rock');
  } 
  else if ( event.key === 'p' ) {
    playGame('paper');
  } 
  else if ( event.key === 's' ) {
    playGame('scissors');
  }
  console.log(event.key);
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'scissors') {
  if (computerMove === 'scissors') {
    result = 'It\'s a tie.';
  } else if (computerMove === 'rock') {
    result = 'You lose.';
  } else if (computerMove === 'paper') {
    result = 'YOU WIN!'
  }

  } else if (playerMove === 'paper') {
  if (computerMove === 'rock') {
    result = 'It\'s a tie.';
  } else if (computerMove === 'paper') {
    result = 'You lose.';
  } else if (computerMove === 'scissors') {
    result = 'YOU WIN!'
  }

  } else if (playerMove === 'rock') {
  if (computerMove === 'rock') {
    result = 'It\'s a tie.';
  } else if (computerMove === 'paper') {
    result = 'You lose.';
  } else if (computerMove === 'scissors') {
    result = 'YOU WIN!'
  }
  }

  if (result === 'YOU WIN!') {
  score.wins ++;
  }
  else if ( result === 'You lose.') {
  score.losses ++;
  }
  else {
  score.ties ++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
  .innerHTML = result;


  const playerMoveImgPath = 'static/img/' + playerMove + '.png';
  document.querySelector('.js-your-move')
  .innerHTML = `
    You picked <br>
    <img src="${playerMoveImgPath}" alt="${playerMove}" class="current-move-icon">`; 


  const computerMoveImgPath = 'static/img/' + computerMove + '.png';
  document.querySelector('.js-computer-move')
  .innerHTML = `
    Computer picked <br>
    <img src="${computerMoveImgPath}" alt="${computerMove}" class="current-move-icon">`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
  .innerHTML =`
    Wins: ${score.wins}<br>
    Losses: ${score.losses}<br>
    Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber <1 /3) {
  computerMove = 'rock';
  } else if ( randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'scissors';
  }
  return computerMove;
}



function resetScore() {
  if (score.wins > score.losses && score.losses != 0) {
  beginState();
  } else if (score.wins < score.losses && score.wins != 0) {
  loseState();
  } else {
  document.querySelector('.js-result')
  .innerHTML = 'Let\'s the game begin!';
  }

  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}

function beginState() {
  document.querySelector('.js-result')
  .innerHTML = 'Congratulations!<br>Would you like a rematch?'; 
}

function loseState() {
  document.querySelector('.js-result')
  .innerHTML = 'I\'m sorry!<br>You lose.<br>Would you like a rematch?'; 
}