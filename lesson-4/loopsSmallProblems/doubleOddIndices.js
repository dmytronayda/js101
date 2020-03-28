let myNumbers = [1, 4, 3, 7, 2, 6];

// input array;
// output new array;
//   initiate new array;
//   start a for loop for the input array;
//     if (array[index] === (idex % 2 === 0))
//       double the number at given index;
//       push the doubled number to the new array;
//     else push number at a given indice as is;
//   return new array;
function checkOdd(num) {
  if (num % 2 === 1) return num;
}

function doubleOddIndices(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (checkOdd(index)) {
      newArray.push(array[index] * 2);
    } else {
      newArray.push(array[index]);
    }
  }
  return newArray;
}

console.log(doubleOddIndices(myNumbers));
console.log(myNumbers);


