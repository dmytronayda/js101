let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// input array;
// output object;
//   create empty object
//   set origin index = 0;
//   create a loop with 2 inputs (element, index)
//     object[key] = assigned to index
//   return new object;

function returnObj(array) {
  let object = {};

  array.forEach((element, index) => {
    object[element] = index;
  });

  return object;
}

console.log(returnObj(flintstones));