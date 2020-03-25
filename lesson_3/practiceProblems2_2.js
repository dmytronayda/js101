let numbers = [1, 2, 3, 4, 5];

function reverse(array) {
  let newArr = array.slice(0);
  return newArr.reverse();
}

console.log(reverse(numbers));
console.log(numbers);

function reverseSort(array)