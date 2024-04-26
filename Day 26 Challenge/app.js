// Question no.76
function addNumber(num1, num2) {
    return num1 + num2;
}
console.log(addNumber(4, 7));
// Question no.77
function greetUser(name) {
    if (name === void 0) { name = "Rehman"; }
    console.log("Hello ".concat(name));
}
greetUser("Ali");
greetUser();
// Question no.78
function squareDeclaration(number) {
    return number * number;
}
var squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(5));
console.log(squareExpression(7));
