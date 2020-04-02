let words = ['go', 'ahead', 'and', 'jump'];

// console.log(words.sort((a, b) => {
//   if (a.length < b.length) {
//     return -1;
//   } else if (b.length < a.length) {
//     return 1;
//   } else {
//     return 0;
//   }
// }));

console.log(words.sort((a, b) => a.length - b.length));