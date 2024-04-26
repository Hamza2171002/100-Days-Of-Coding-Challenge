//Question no.22

//Intentional Error:

// let newArray :string[] = ['Will smith','james Bond','Tom Cruise'];

// console.log(newArray[5]);

// console.log(newArray[1])


//Question no.23

// let car = 'subaru'

// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru'); //true

// console.log("Is car == 'Toyota'? I predict False.")
// console.log(car == 'Toyota');//false

// console.log("Is car === 'subaru'? I predict True.")
// console.log(car === 'subaru'); //true

// console.log("Is car == 'Subaru'? I predict False.")
// console.log(car == 'Subaru'); //false

// console.log("Is car !== 'Honda'? I predict True.")
// console.log(car !== 'Honda'); //true

// console.log("Is car !== 'subaru'? I predict False.")
// console.log(car !== 'subaru'); //false

// console.log("Is car != 'Suzuki'? I predict True.")
// console.log(car != 'Suzuki'); //true

// console.log("Is car == 'Suzuki'? I predict False.")
// console.log(car == 'Suzuki'); //false

// console.log("Is car != 'BMW'? I predict True.")
// console.log(car != 'BMW'); //true

// console.log("Is car == 'BMW'? I predict False.")
// console.log(car == 'BMW'); //false

//Question no.24
//test for equality and inequality with string.
const str1 :string = "Hello";
const str2 :string = "hello";
console.log(str1 === str2);  //false
console.log(str1 !== str2);  //true

//test using the lowercase function.
const text1 :string = "Hello, World!";
const text2 :string = "hello, world!";
console.log(text1===text2);  //false
console.log(text1.toLowerCase() === text1);  //true

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 :number = 12;
const num2 :number = 6;
console.log(num1 === num1);  //false
console.log(num1 !== num1);  //true
console.log(num1 < num1);  //false
console.log(num1 > num1);  //true
console.log(num1 <= num1);  //false
console.log(num1 >= num1);  //true

//test using "and" and "or" operation.
const x :number = 6;
const y :number = 12;
const z :number = 16;
console.log(x < y && y < z);  //true
console.log(x < y || y < z); //true
console.log(x > y && y > z); //false
console.log(x > y || y > z); //false

//test whether an item is in array.
const flowers :string[] = ['Rose','Freesia','Jasmine'];
console.log('Test "Jasmine" in the array: ',flowers.includes('Jasmine')); //true

//test whether an item is not in an array.
const colours :string[] = ['Blue','Orange','Pink','Purple'];
console.log('Test "Black" is not in  array:', !colours.includes('Black')); //true













