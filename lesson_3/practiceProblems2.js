let advice = "Few things in life are as important as house training your pet dinosaur. it's super important to be important and do important stuff in life!";

const regex = /important/gi;
console.log(advice.replace(regex, 'urgent'));

function updateStr(string, wordToReplace, replaceWith) {
  let words = string.split(' ');
  let updatedWords = [];
  words.forEach(element => {
    if (element === wordToReplace) {
      element = replaceWith.toString();
      updatedWords.push(element);
    } else {
      updatedWords.push(element);
    }
  });
  return updatedWords.join(' ');
}

console.log(updateStr(advice, 'important', 'urgent'));
