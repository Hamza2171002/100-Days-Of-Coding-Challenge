// Question no.91
// let favoritFruits: string[] = ["Apple", "Banana", "Cheery"]
// favoritFruits.push("Mango")
// console.log(favoritFruits)
// Question no.92
// function removeLastElement<T>(arr: T[]): T | undefined{
//     return arr.pop()
// }
// const fruits: string[] = ["Apple", "Banana", "Cherry"]
// console.log(removeLastElement(fruits))
// console.log(fruits);
// Question no.93
function replaceBananaWithMango(fruits) {
    var index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
var fruits = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits);
