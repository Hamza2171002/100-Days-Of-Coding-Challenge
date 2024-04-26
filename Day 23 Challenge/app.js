// Question no.67
function addNumberAndString(number1, numberSting) {
    return number1 + Number(numberSting);
}
console.log(addNumberAndString(15, "5"));
// Question no.68
function multiplyDecimals(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiplyDecimals(0.1, 0.2));
// Question no.69
function divideAndRemainder(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return { quotient: quotient, remainder: remainder };
}
console.log(divideAndRemainder(10, 3));
