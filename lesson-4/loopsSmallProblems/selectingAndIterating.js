let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

// input: object
// output: new object
  //    initiate new object
    //    create a for in loop for object
    //    select key-val pairs that has 'Fruit' in it
    //    add these key-val pair to new object
  //    return new object

function returnFruits(produce) {
  let newObject = {};
  for (let key in produce) {
    if (produce[key] === 'Fruit') {
      newObject[key] = produce[key];
    }
  }
  return newObject;
}

console.log(returnFruits(produce));