// Question no.76

function addNumber(num1: number, num2: number): number{
    return num1 + num2
}
console.log(addNumber(4, 7))



// Question no.77

function greetUser(name: string = "Rehman"){
    console.log(`Hello ${name}`)
}
greetUser("Ali")
greetUser()


// Question no.78

function squareDeclaration(number: number): number{
    return number * number
}

const squareExpression = function(number: number): number{
    return number * number
}

console.log(squareDeclaration(5));
console.log(squareExpression(7));

