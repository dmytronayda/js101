// input array of objects 
// output new array of objects with each element incremented by 1
//   map each inner object to get { a: 1 }, { b: 2, c: 3 }, and { d: 4, e: 5, f: 6 }
//     make each inner object iterable (e.g. array)
//     change inner array[1] or inner array[index][1] // separate function
//   return changed array;

let original = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }]


let updated = original.map(innerObject => {
  let incrementedObj = {};
  for (let key in innerObject) {
    incrementedObj[key] = innerObject[key] + 1;
  }
  return incrementedObj;
})

console.log(original);
console.log(updated);


