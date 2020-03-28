let statement = "In autumn and winter the wind chill effect is particularly critical, the wind literally drains the heat from you. This is exactly where the Airstop membrane comes in. The particularly important locations are equipped with airstop, all other areas rely on 3D-Roubaix material. In combination with the brushed inner side, the heat output is top – which makes the Ventum bibtights ideal for the transition period and winter. The high-quality Peloton 2 pad guarantees top seat comfort.";

// input string;
// output object; 
//   initiate empty object to be updated; 
//   create array out of the string
//   loop over array
//     let currectChar = character at this loop;
//     let currentCharCount = 0
//     let repeatitionsOfChar = (...string).matchAll(currenChar).length;
//     object[currectChar] = repetitionsOfChar;

function sumOfReps(element, array) {
  let indices = [];
  let idx = array.lastIndexOf(element);
  while (idx !== -1) {
    indices.push(idx);
    idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
  }
  return indices.length;
}

//   return updated object;
function charFrequency(string) {
  let returnObj = {};
  let stringArr = string.split(''); 
  stringArr.forEach(element => {
    let frequency = sumOfReps(element,stringArr);
    returnObj[element] = frequency;
  });

  return returnObj;
}

console.log(charFrequency(statement));