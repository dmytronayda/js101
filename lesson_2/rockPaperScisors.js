const readline = require('readline-sync');
const VALID_CHOICES = [
  ['r', 'rock'],
  ['p', 'paper'],
  ['s', 'scissors'],
  ['S', 'spock'],
  ['l', 'lizard']
];

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

function rockWins(choise1, choise2) {
  return (choise1 === 'r' && choise2 === 's') ||
    (choise1 === 'r' && choise2 === 'l');
}

function paperWins(choise1, choise2) {
  return (choise1 === 'p' && choise2 === 'r') ||
    (choise1 === 'p' && choise2 === 'S');
}

function scissorsWin(choise1, choise2) {
  return (choise1 === 's' && choise2 === 'p') ||
    (choise1 === 's' && choise2 === 'l');
}

function spockWins(choise1, choise2) {
  return (choise1 === 'S' && choise2 === 's') ||
    (choise1 === 'S' && choise2 === 'r');
}

function lizardWins(choise1, choise2) {
  return (choise1 === 'l' && choise2 === 'p') ||
    (choise1 === 'l' && choise2 === 'S');
}

function returnWinner(choice, computerChoice) {

  if (rockWins(choice, computerChoice) ||
    paperWins(choice, computerChoice) ||
    scissorsWin(choice, computerChoice) ||
    spockWins(choice, computerChoice) ||
    lizardWins(choice, computerChoice)) {
    return ('human');
  } else if (rockWins(computerChoice, choice) ||
    paperWins(computerChoice, choice) ||
    scissorsWin(computerChoice, choice) ||
    spockWins(computerChoice, choice) ||
    lizardWins(computerChoice, choice)) {
    return ('computer');
  } else {
    return ('tie');
  }
}


let humanCount = 0;
let computerCount = 0;
let ties = 0;

function addResult(str) {
  if (str === 'human') {
    humanCount += 1;
  } else if (str === 'computer') {
    computerCount += 1;
  } else if (str === 'tie') {
    ties += 1;
  }
}

function displayWinner() {
  if (humanCount > computerCount) {
    prompt('You win! 😎🥳');
  } else if (humanCount < computerCount) {
    prompt('Ugh-ho... Machine wins. 😔');
  } else {
    prompt('Tie?! For reals?? 😕');
  }
}


let answer;
do {
  prompt("Welcome to Rock, Paper, Scissors, Lizard, Spock! 🎰 You have to play 5 rounds.");
  console.log("________________________________________________________________________________");

  for (let index = 0; index < 5; index++) {

    prompt(`Round ${index + 1} -- Choose one:\n${appendExplanation(VALID_CHOICES).join(';\n')}`);
    let choice = readline.question();

    while (!getInnerArrIndex(VALID_CHOICES).includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex][0];


    prompt(`You chose ${choice}, computer chose ${computerChoice}`);

    let roundWinner = returnWinner(choice, computerChoice);

    if ((roundWinner === 'human') || (roundWinner === 'computer')) {
      prompt(`${roundWinner.toUpperCase()} wins this round!`);
    } else {
      prompt('A tie! Try again');
    }

    addResult(roundWinner);
  }
  console.log("________________________________________________________________________________");
  prompt(`Human: ${humanCount}; Computer: ${computerCount}; ties: ${ties}.`);
  displayWinner();
  console.log("________________________________________________________________________________");

  prompt('Do you want to play again (y/n)?');
  answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

} while (answer[0] === 'y');


console.clear();