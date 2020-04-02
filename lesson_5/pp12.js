let arr = [
  [2],
  [3, 5, 7],
  [9],
  [11, 15, 18]
];

let newArr = arr.slice().map(innerArr => {
  return innerArr.filter(num => num % 3 === 0);
})

console.log(newArr);
console.log(arr);