// Question no.106
// function isLeapYear(year: number): boolean{
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
// }
// console.log(isLeapYear(2020));
// console.log(isLeapYear(1999));
// Question no.107
// function isDivisibleByTwoAndThree(number: number): boolean{
//     return number % 2 === 0 && number % 3 === 0
// }
// console.log(isDivisibleByTwoAndThree(12));
// console.log(isDivisibleByTwoAndThree(14));
// Question no.108
function areStringsEqualIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringsEqualIgnoreCase("hello", "Hello"));
console.log(areStringsEqualIgnoreCase("world", "Word"));
