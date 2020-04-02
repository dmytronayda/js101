let arr1 = [
  ['b', 'c', 'a'],
  [2, 1, 3],
  ['blue', 'black', 'green']
];

let final = arr1.map(innerArr => {
  if (typeof innerArr[0] === "string") {
    return innerArr.slice().sort();
  } else if (typeof innerArr[0] === "number") {
    return innerArr.slice().sort((a, b) => a - b);
  }
});

console.log(final);
console.log(arr1);