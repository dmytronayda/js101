let str = 'Hello';
console.log(str + ' World');
console.log(str.concat(' World'));
console.log(str);
str = str.concat(' World');
console.log(str);


console.log(str.concat('!', ' We gonna make it! We gonna be big!', ' Whatever comes our way.'));
console.log('Eeny, meeny, miny, moe'.split(', '));

let stringy = '     whatever     \n';
console.log(stringy.trim()); // 'whatever'
console.log(stringy.trimEnd()); // '     whatever'
console.log(stringy.trimStart()); // 'whatever     \n'

console.log(`D at the unicode level is: ${'D'.charCodeAt()}`);
console.log(`i at the unicode level is: ${'i'.charCodeAt()}`);
console.log(`m at the unicode level is: ${'m'.charCodeAt()}`);
console.log(`a at the unicode level is: ${'a'.charCodeAt()}`);
