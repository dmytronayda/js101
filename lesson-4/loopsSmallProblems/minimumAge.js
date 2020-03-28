let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,

};

// input Object 
// output number
//   function define the test(element) = return element < all other element;
//   make arr of object val.filter only the number that passes the test(define the test)
//   return filtered array;

function youngest(array) {
  let checkWith = array[0];
  array.forEach(element => {
    if (element < checkWith) {
      checkWith = element;
    }
  });
  return checkWith;
}

let agesArr = Object.values(ages);
console.log(youngest(agesArr));