// Question no.55
var numbers = [1, 2, 3, 4, 5];
//Double number
var doubleNumber = numbers.map(function (number) { return number * 2; });
console.log(doubleNumber);
// Question no.56
var mixArray = [1, "apple", 2, "banana", true, "carrot"];
var stringArray = mixArray.filter(function (item) { return typeof item === "string"; });
console.log(stringArray);
// Question no.57
var grades = [78, 84, 88, 93, 97];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrade);
