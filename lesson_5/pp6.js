function prompt(input) {
  console.log(input);
}

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalMaleAge = Object.values(munsters).map(value => {
  if (value.gender === 'male') {
    return value.age;
  } else {
    return 0;
  }
}).reduce((a, b) => a + b);

prompt(totalMaleAge);