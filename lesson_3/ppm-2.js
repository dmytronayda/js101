let munstersDescription = "The Munsters are creepy and spooky.";

// let capitalLetters = [...munstersDescription.match(/[A-Z]/g)];

// function swapLetterCase(munstersDescription) {
//   let newStringArr = [];
//   [...munstersDescription].forEach(element => {
//     if (capitalLetters.includes(element)) {
//       newStringArr.push(element.toLowerCase());
//     } else {
//       newStringArr.push(element.toUpperCase());
//     }
//   });
//   return newStringArr.join('');
// }


let swapCase = [...munstersDescription].map(function (element) {
  if (element === element.toUpperCase()) {
    return element.toLowerCase();
  } else {
    return element.toUpperCase();
  }
}).join("");

console.log(swapCase);