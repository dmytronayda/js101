const readline = require('readline-sync');
const VALID_CHOICES = [
  ['r', 'rock'],
  ['p', 'paper'],
  ['s', 'scissors'],
  ['k', 'spock'],
  ['l', 'lizard']
];

const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
};

function returnMoveName(val) {
  let explanation = '';
  VALID_CHOICES.forEach(element => {
    if (element[0] === val) {
      explanation = element[1];
    }
  });
  return explanation;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function appendExplanation(arr) {
  let newArr = [];
  arr.forEach(innerArr => {
    newArr.push(`"${innerArr[0]}" - for ${innerArr[1]}`);
  });
  return newArr;
}

function validate(choice) {
  let newArr = [];
  VALID_CHOICES.forEach(element => {
    newArr.push(element[0]);
  });
  return newArr.includes(choice);
}


function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function returnWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    return ('human');
  } else if (playerWins(computerChoice, choice)) {
    return ('computer');
  } else {
    return ('tie');
  }
}

function addResult(winner, scores) {
  if (winner === 'human') {
    scores.humanCount += 1;
  } else if (winner === 'computer') {
    scores.computerCount += 1;
  } else if (winner === 'tie') {
    scores.ties += 1;
  }
}

function displayWinner(scores) {
  if (scores.humanCount > scores.computerCount) {
    prompt('You win! 😎🥳');
  } else if (scores.humanCount < scores.computerCount) {
    prompt('Ugh-ho... Machine wins. 😔');
  } else {
    prompt('Tie?! For reals?? 😕');
  }
}

prompt("Welcome to Rock, Paper, Scissors, Lizard, Spock! 🎰 You have to play 5 rounds.");
console.log("________________________________________________________________________________");

let answer;
do {
  let gameScores = {
    humanCount : 0,
    computerCount : 0,
    ties : 0,
    round : 0
  };
  while ((gameScores.humanCount !== 5) && (gameScores.computerCount !== 5)) {

    prompt(`Current score:\n🤴 Human: ${gameScores.humanCount}; 💻 Computer: ${gameScores.computerCount}; Ties: ${gameScores.ties}.`);

    prompt(`Round ${gameScores.round + 1} -- Choose one:\n${appendExplanation(VALID_CHOICES).join(';\n')}`);
    let choice = readline.question().toLowerCase();

    while (!validate(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question().toLowerCase();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex][0];


    prompt(`You chose ${returnMoveName(choice)}, computer chose ${returnMoveName(computerChoice)}`);

    let roundWinner = returnWinner((returnMoveName(choice)),
      returnMoveName(computerChoice));

    if ((roundWinner === 'human') || (roundWinner === 'computer')) {
      prompt(`${roundWinner.toUpperCase()} wins this round!`);
    } else {
      prompt('A tie! Try again');
    }
    addResult(roundWinner, gameScores);

    prompt("Tap 'Enter' to continue.");
    readline.question();
    console.clear();
  }
  console.log("________________________________________________________________________________");
  prompt(`Human: ${gameScores.humanCount}; Computer: ${gameScores.computerCount}; ties: ${gameScores.ties}.`);
  displayWinner(gameScores);
  console.log("________________________________________________________________________________");

  prompt('Do you want to play again (y/n)?');
  answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  console.clear();
} while (answer[0] === 'y');


console.clear();