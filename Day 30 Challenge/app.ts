// Question no.88

function roundToNearestInteger(num: number): number{
    return Math.round(num)
}

console.log(roundToNearestInteger(5.6225));
console.log(roundToNearestInteger(4.342221));



// Question no.89

function convertStringToNumber(str: string): number{

    return parseFloat(str)
}

console.log(convertStringToNumber("6.777"))
console.log(convertStringToNumber("56"));


// Question no.90

function isValueNaN(value: any): boolean{
    return isNaN(value)
}

console.log(isValueNaN("hello"));
console.log(isValueNaN(123));

