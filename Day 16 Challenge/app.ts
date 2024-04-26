// Question no.46

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

let laptops = [
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
]
let [laptop1, laptop2, laptop3] = laptops
console.log(laptop1)
console.log(laptop2)
console.log(laptop3)

//Question no.48

let priceSet1: number[] = [111, 222, 333, 444]
let priceSet2: number[] = [555, 666, 777, 888]

let combinedPrices: number[] =[...priceSet1,...priceSet2].sort((a , b)=> a - b)
console.log(combinedPrices)











