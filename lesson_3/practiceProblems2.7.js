let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5
};

let flintstonesArr = Object.entries(flintstones);
console.log(flintstonesArr.filter(element => element[0] === 'Barney').shift());