function prompt(input) {
  console.log(`=> ${input}`);
}

function ifEndsExlamation(str) {
  if (str[str.length - 1] === '!') {
    return true;
  } else {
    return false;
  }
}

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

let indexOfHouse = advice.indexOf('house');
prompt(advice.slice(0, indexOfHouse));


// let arr = advice.split('house');
// arr.pop();
// prompt(arr);