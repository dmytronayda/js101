const MESSAGES = require('./carLoanCalculator_messages.json');
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' ||
    Number.isNaN(Number(number)) ||
    Number(number) <= 0;
}

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

function toMonthlyInterest(num) {
  return num / 12 / 100;
}

function roundHalf(num) {
  return Math.round(num * 2) / 2;
}

function toMonths(years) {
  return roundHalf(years) * 12;
}

function hasYOrN(str) {
  return str.match(/[yYnN]/);
}
let proceed = false;

function isNewCalculation() {
  prompt('Want to calculate other loan options? [y/n]');
  let answer = readline.question();
  if (answer.match(/[yY]/)) {
    proceed = true;
  } else if (answer.match(/[nN]/)) {
    proceed = false;
  }

  while (!hasYOrN(answer)) {
    prompt("Please enter only 'y' or 'n'");
    answer = readline.question();
    if (answer.match(/[yY]/)) {
      proceed = true;
    } else if (answer.match(/[nN]/)) {
      proceed = false;
    }
  }
}

function calculatePayment(vehiclePrice, monthlyInterestRate, loanDuration) {
  return vehiclePrice * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-toMonths(loanDuration)))));
}

prompt(MESSAGES.welcome);

do {

  prompt(MESSAGES.vehiclePrice);
  let vehiclePrice = readline.question();
  while (invalidNumber(vehiclePrice)) {
    prompt(MESSAGES.notANumber);
    vehiclePrice = readline.question();
  }

  prompt(MESSAGES.percentageRate);
  let annualInterestRate = readline.question();
  while (invalidNumber(annualInterestRate)) {
    prompt(MESSAGES.notANumber);
    annualInterestRate = readline.question();
  }

  let monthlyInterestRate = toMonthlyInterest(annualInterestRate);

  prompt(MESSAGES.loanDuration);
  let loanDuration = readline.question();
  while (invalidNumber(loanDuration)) {
    prompt(MESSAGES.notANumber);
    loanDuration = readline.question();
  }

  let monthlyPayment = calculatePayment(vehiclePrice,
    monthlyInterestRate, loanDuration);
  prompt(MESSAGES.monthlySpent + financial(monthlyPayment));

  isNewCalculation();

} while (proceed === true);

console.clear();