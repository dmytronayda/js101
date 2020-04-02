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

Object.entries(munsters).map(entry => {
  prompt(`${entry[0]} is a ${entry[1].age}-year-old ${entry[1].gender}.`);
});

