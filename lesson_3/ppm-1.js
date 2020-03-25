let string = "The Flintstones Rock!";
let padLen = 0;

function printWithPads(string) {
  let i;
  for (i = 0; i < 10; i += 1) {
    console.log(`${string.padStart(padLen + string.length)}`);
    padLen += 1;
  }
}
printWithPads(string);

for (let padding = 0; padding < 10; padding += 1) {
  console.log(" ".repeat(padding) + string);
}

