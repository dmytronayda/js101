let arr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3]
];

// Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]
// function sumOfOdds(arr) {
//   let sum = 0;
//   arr.forEach(element => {
//     if (element % 2 === 1) {
//       sum  += element;
//     }
//   });
//   return sum;
// }

let final = arr.sort((a, b) => {
  let sumOfOddsA = a.filter(num => num % 2 === 1)
                    .reduce((sum, next) => sum + next);

  let sumOfOddsB = b.filter(num => num % 2 === 1)
                    .reduce((sum, next) => sum + next);

  return sumOfOddsA - sumOfOddsB;
});
console.log(final);