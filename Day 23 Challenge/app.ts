// Question no.67

function addNumberAndString(number1:  number, numberSting: string): number
{
    return number1 + Number(numberSting)
}
console.log(addNumberAndString(15, "5"))

// Question no.68

function multiplyDecimals(num1: number, num2: number): number{
    return Math.round((num1 * num2) * 100) / 100
}
console.log(multiplyDecimals(0.1 , 0.2))

// Question no.69

function divideAndRemainder(dividend: number, divisor: number): {quotient: number; remainder: number}
    {
        let quotient = Math.floor(dividend / divisor)
        let remainder = dividend % divisor
        return{quotient, remainder}
    }
    console.log(divideAndRemainder(10, 3))
