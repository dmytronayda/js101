const MESSAGES = require('./carLoanCalculator_messages.json');
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' ||
    Number.isNaN(Number(number)) ||
    number.trimStart() < 0; // check if user input is less than 0
}

// make a number with 2 floating points for monthly payments output
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

// welcome customer at the loan calculator
prompt(MESSAGES.welcome);
let proceed = ''; // used to define whether user wants
//to calculate another loan option

do {
  // ask for loan amount
  prompt(MESSAGES.vehiclePrice);
  let vehiclePrice = readline.question();
  while (invalidNumber(vehiclePrice)) {
    prompt(MESSAGES.notANumber);
    vehiclePrice = readline.question();
  }

  // ask for Annual Percentage Rate (APR)
  prompt(MESSAGES.percentageRate);

  let annualInterestRate = readline.question();
  while (invalidNumber(annualInterestRate)) {
    prompt(MESSAGES.notANumber);
    annualInterestRate = readline.question();
  }

  /* convert annual rate to monthly:
     1) divide by 12 months
     2) divide by 100 to make percents from full number input
  */
  let monthlyInterestRate = annualInterestRate / 12 / 100;

  // ask for loan duration in years
  prompt(MESSAGES.loanDuration);
  let loanDurationInYears = readline.question();

  let loanDurationInMonts = loanDurationInYears * 12;

  //  monthly payment formula
  let monthlyPayment = vehiclePrice * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonts))));

  // print the result to console
  prompt(MESSAGES.monthlySpent + financial(monthlyPayment));

  do {
    prompt('Want to calculate other vehicle or loan options? [y/n]');
    answer = readline.question();

    if (answer === 'y') {
      proceed = 'y';
    } else if (answer === 'n') {
      break;
    }
  } while (answer !== 'y' && answer !== 'n');


} while (proceed === 'y');