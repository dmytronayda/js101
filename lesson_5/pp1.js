let array = ['10', '11', '9', '7', '8'];

// let sorted = array.sort((a, b) => Number(b) - Number(a));
// console.log(sorted); // logs expeted result [ '11', '10', '9', '8', '7' ]

let sortedArr = array.sort((a, b) => {
  if (Number(a) > Number(b)) {
    return -1; // place a before b
  } else if (Number(a) < Number(b)) {
    return 1; // place a after b
  } else {
    return 0; // do not change order
  }
});

console.log(sortedArr); // logs expected result [ '11', '10', '9', '8', '7' ]