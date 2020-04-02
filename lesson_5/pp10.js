let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let final = arr.map(innerArr => {
  if (typeof innerArr[0] === "string") {
    return innerArr.slice().sort().reverse();
  } else if (typeof innerArr[0] === "number") {
    return innerArr.slice().sort((a, b) => b - a);
  }
});

console.log(final);