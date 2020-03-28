let myNumbers = [1, 4, 3, 7, 2, 6];

// input: array;
// output: mutated original array;
//   initiate a for loop;
//     inside loop multiply each number at a given index of an array by 2;
//   return updated original array;

function multiplyNumbers(array, multiplicator) {
  let newArr = [];
  for (let index = 0; index < array.length; index += 1) {
    newArr[index] = array[index] * multiplicator;
  }
  return newArr;
}

console.log(multiplyNumbers(myNumbers, 4));
console.log(multiplyNumbers(myNumbers, 5));
console.log(multiplyNumbers(myNumbers, 3));
console.log(myNumbers);