const VOWELS = 'aeiou';
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowelArr = [];
Object.values(obj).forEach(innerArr => {
  innerArr.forEach(word => {
    let wordArr = word.split('');
    wordArr.forEach(char => {
      if (VOWELS.includes(char)) {
        vowelArr.push(char);
      }
    });
  });
});

console.log(vowelArr);