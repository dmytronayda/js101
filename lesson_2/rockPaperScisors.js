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

const STARTING_SCORES = {
  humanCount : 0,
  computerCount : 0,
  ties : 0
}

function returnIndexVal(val, array) {
  let explanation = '';
  array.forEach(element => {
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

function getInnerArrIndex(arr) {
  let newArr = [];
  arr.forEach(element => {
    newArr.push(element[0]);
  });
  return newArr;
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

function addResult(str, obj) {
  if (str === 'human') {
    obj.humanCount += 1;
  } else if (str === 'computer') {
    obj.computerCount += 1;
  } else if (str === 'tie') {
    obj.ties += 1;
  }
}

function displayWinner(obj) {
  if (obj.humanCount > obj.computerCount) {
    prompt('You win! 😎🥳');
  } else if (obj.humanCount < obj.computerCount) {
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
    ties : 0
  };
  for (let index = 0; index < 5; index++) {

    prompt(`Current score:\n🤴 Human: ${gameScores.humanCount}; 💻 Computer: ${gameScores.computerCount}; Ties: ${gameScores.ties}.`);

    prompt(`Round ${index + 1} -- Choose one:\n${appendExplanation(VALID_CHOICES).join(';\n')}`);
    let choice = readline.question().toLowerCase();

    while (!getInnerArrIndex(VALID_CHOICES).includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question().toLowerCase();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex][0];


    prompt(`You chose ${returnIndexVal(choice, VALID_CHOICES)}, computer chose ${returnIndexVal(computerChoice, VALID_CHOICES)}`);

    let roundWinner = returnWinner((returnIndexVal(choice, VALID_CHOICES)), returnIndexVal(computerChoice, VALID_CHOICES));

    if ((roundWinner === 'human') || (roundWinner === 'computer')) {
      prompt(`${roundWinner.toUpperCase()} wins this round!`);
    } else {
      prompt('A tie! Try again');
    }
    addResult(roundWinner, gameScores);

    prompt("Tap 'Enter' to continue.")
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
  gameScores = STARTING_SCORES;
  console.clear();
} while (answer[0] === 'y');


console.clear();