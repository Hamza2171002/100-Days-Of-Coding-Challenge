// Questin no.70

function printNumbersWithLet(){
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}
printNumbersWithLet()


// Questin no.71

let age = 25
age = 26
console.log(age)

const Name = "Hamza"
try{
    Name = "Ali"
}catch (error){
    console.log("Error: can't reassign a `const` - declared variable");
    
}


// Questin no.72

{
    let blockLet = "visible inside the block"
    const blockConst = "also only inside the block"
    console.log(blockLet)
    console.log(blockConst)
}

try {
    console.log(blocklet);
    
} catch (error) {
    console.log("`blocklet` is not accessible outside of the block");
    
}

try {
    console.log(blockConst);
} catch (error) {
    console.log("`blockConst` is not accessible outside of the block");
}