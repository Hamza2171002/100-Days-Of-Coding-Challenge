// Question no.46
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// let laptop = {
//     brand: "Dell",
//     model: "E5550",
//     year: 2021,
//     discribe: function(){
//         console.log(`This Laptop is ${this.brand},${this.model} and ${this.year}`)
//     }
// }
// laptop.discribe()
// Question no.47
var laptops = [
    {
        brand: "Dell",
        model: "E5550",
        year: 2021,
    },
    {
        brand: "Apple",
        model: "Macbook pro",
        year: 2020,
    },
    {
        brand: "Hp",
        model: "Surface",
        year: 2022
    }
];
var laptop1 = laptops[0], laptop2 = laptops[1], laptop3 = laptops[2];
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
//Question no.48
var priceSet1 = [111, 222, 333, 444];
var priceSet2 = [555, 666, 777, 888];
var combinedPrices = __spreadArray(__spreadArray([], priceSet1, true), priceSet2, true).sort(function (a, b) { return a - b; });
console.log(combinedPrices);
