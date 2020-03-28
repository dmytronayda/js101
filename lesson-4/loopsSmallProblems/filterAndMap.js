function prompt(stuff) {
  console.log(stuff);
}

let result = ['dmytro', 'anatoliyovich', 'naida'].pop() // 'naida'
  .split('') // ['n', 'a', 'i', 'd', 'a']
  .reverse() // ['a', 'd', 'i', 'a', 'n']
  .join(''); // 'adian' 

console.log(result);