function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
} //function does not return anything??

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); //[̶"̶t̶w̶o̶"̶]̶ one
console.log(`two is: ${two}`); // two
console.log(`three is: ${three}`); //three