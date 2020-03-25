let object = { first: [1] };
let numArray = object["first"]; // pass by reference
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // {first: [1, 2]};