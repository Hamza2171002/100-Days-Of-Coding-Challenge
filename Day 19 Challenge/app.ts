// Question no.55

let numbers = [1, 2, 3, 4, 5]
//Double number
let doubleNumber = numbers.map(number => number  * 2)
console.log(doubleNumber)

// Question no.56

let mixArray =[1, "apple", 2, "banana", true, "carrot"]

let stringArray = mixArray.filter(item => typeof item === "string")
console.log(stringArray)


// Question no.57

let grades = [78, 84, 88, 93, 97]

let averageGrade = grades.reduce((total, grade) => total + grade , 0 ) / grades.length

console.log(averageGrade)