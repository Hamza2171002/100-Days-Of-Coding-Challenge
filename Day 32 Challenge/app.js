// Question no.94
// const words: string[] = ["Hello", "World", "TypeScript", "JavaScript"]
// const lenghts: number[] = words.map(word => word.length)
// console.log(lenghts)
// Question no.95
// function filterGreater(numbers: number[]):  number[]{
//     return numbers.filter(number => number > 10)
// }
// const numbers: number[] = [5, 10, 15, 20, 25]
// console.log(filterGreater(numbers));
// Question no.96
function calculateSum(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numbers = [1, 2, 3, 4,];
console.log(calculateSum(numbers));
