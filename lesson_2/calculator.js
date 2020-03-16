const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// ask user for the language input
prompt(MESSAGES.language);
let language = readline.question();

// define the language config to use from calculator_messages.json
if (language === '1') { // choose English

  prompt(MESSAGES.english["welcome"]);
  let proceed = '';

  // ask user for input at least once
  do {
    // Ask the user for the first number.
    prompt(MESSAGES.english["firstNumMessage"]);
    let firstNum = readline.question();

    while (invalidNumber(firstNum)) {
      prompt(MESSAGES.english["invalidNumMessage"]);
      firstNum = readline.question();
    }

    // Ask the user for the second number.
    prompt("What's the second number?");
    let secondNum = readline.question();

    while (invalidNumber(secondNum)) {
      prompt(MESSAGES.english["invalidNumMessage"]);
      secondNum = readline.question();
    }

    // Ask the user for an operation to perform.
    prompt(MESSAGES.english["whatOperation"]);
    let operation = readline.question();

    while (!['1', '2', '3', '4'].includes(operation)) {
      prompt('Must choose 1, 2, 3 or 4');
      operation = readline.question();
    }

    // Perform the operation on the two numbers.
    let output;
    switch (operation) {
      case '1':
        output = Number(firstNum) + Number(secondNum);
        break;
      case '2':
        output = Number(firstNum) - Number(secondNum);
        break;
      case '3':
        output = Number(firstNum) * Number(secondNum);
        break;
      case '4':
        output = Number(firstNum) / Number(secondNum);
        break;
    }

    // Print the result to the terminal.
    prompt(`The result is: ${output}`);

    // ask if user wants one more calculation
    prompt('Want to calculate more? [y/n]');
    let answer = readline.question();

    if (answer === 'y') {
      proceed = 'y';
    } else if (answer === 'n') {
      break;
    } else if (answer !== 'y' || answer !== 'n') {
      prompt(MESSAGES.english["onlyYesOrNo"]);
    }

  } while (proceed === 'y');

} else if (language === '2') { // choose Ukrainian
  prompt(MESSAGES.ukrainian["welcome"]);
  let proceed = '';

  // ask user for input at least once
  do {
    // Ask the user for the first number.
    prompt(MESSAGES.ukrainian["firstNumMessage"]);
    let firstNum = readline.question();

    while (invalidNumber(firstNum)) {
      prompt(MESSAGES.ukrainian["invalidNumMessage"]);
      firstNum = readline.question();
    }

    // Ask the user for the second number.
    prompt(MESSAGES.ukrainian["secondNumMessage"]);
    let secondNum = readline.question();

    while (invalidNumber(secondNum)) {
      prompt(MESSAGES.ukrainian["invalidNumMessage"]);
      secondNum = readline.question();
    }

    // Ask the user for an operation to perform.
    prompt(MESSAGES.ukrainian["whatOperation"]);
    let operation = readline.question();

    while (!['1', '2', '3', '4'].includes(operation)) {
      prompt('Треба вибрати 1, 2, 3 чи 4');
      operation = readline.question();
    }

    // Perform the operation on the two numbers.
    let output;
    switch (operation) {
      case '1':
        output = Number(firstNum) + Number(secondNum);
        break;
      case '2':
        output = Number(firstNum) - Number(secondNum);
        break;
      case '3':
        output = Number(firstNum) * Number(secondNum);
        break;
      case '4':
        output = Number(firstNum) / Number(secondNum);
        break;
    }

    // Print the result to the terminal.
    prompt(`Результат операції: ${output}`);

    // ask if user wants one more calculation
    prompt('Хочете скористатися калькулятором ще? [так/ні]');
    let answer = readline.question();

    if (answer === 'так') {
      proceed = 'y';
    } else if (answer === 'ні') {
      break;
    } else if (answer !== 'y' || answer !== 'n') {
      prompt(MESSAGES.ukrainian["onlyYesOrNo"]);
    }

  } while (proceed === 'y');

} else {

  while (!['1', '2'].includes(language)) {
    prompt('Must choose 1 or 2');
    language = readline.question();
  }
}