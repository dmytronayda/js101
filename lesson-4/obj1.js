let object = { fruit: 'apple', vegetable: 'carrot', fruit: 'pear' };

console.log(object);

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
arr.join(''); // => 'abcdef'

console.log(arr.join(''));

let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' };
obj['apple'] = 'Fruit';
obj.carrot = 'Vegetable';

obj.pear = 'Fruit';
obj.broccoli = 'Vegetable';

console.log(obj);

