let arr = [{
    a: [1, 2, 3]
  },
  {
    b: [2, 4, 6],
    c: [3, 6],
    d: [4]
  },
  {
    e: [8],
    f: [6, 10]
  },
];

// input array;
// output array of objects with only even (num % 2 === 0) ; // [{e: [8], f: [6, 10]}];
//   change values for each of the inner objects:


console.log(arr.map(obj => {
  let newObj = {};
  for (let key in obj) {
    if (obj[key].some(num => (num % 2 === 1))) {
      newObj[key] = 'odd';
    } else {
      newObj[key] = obj[key];
    }
  }
  if (Object.values(newObj).includes('odd')) {
    newObj = {};
  }
  return newObj;
}));

let final = arr.filter(obj => {
  return Object.values(obj).every(arr => {
    return arr.every(num => (num % 2 === 0));
  })
})

console.log(arr.filter(obj => {
  return Object.values(obj).every(innerArr => {
    return innerArr.every(num => (num % 2 === 0));
  });
}));

console.log(final);