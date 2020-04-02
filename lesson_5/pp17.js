let uuidFormat = '00112233445566778899aabbccddeeff';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomString(arr, num) {
  while (arr.length < num) {
    arr.push(uuidFormat.split('')[getRandomInt(uuidFormat.length)]);
  }
  return arr.join('');
}
function createUUID() {
  let newUUID = [[],[],[],[],[]];
  newUUID[0] = getRandomString(newUUID[0], 8);
  newUUID[1] = getRandomString(newUUID[1], 4);
  newUUID[2] = getRandomString(newUUID[2], 4);
  newUUID[3] = getRandomString(newUUID[3], 4);
  newUUID[4] = getRandomString(newUUID[4], 5);
  console.log(newUUID.join('-'));
}

createUUID();