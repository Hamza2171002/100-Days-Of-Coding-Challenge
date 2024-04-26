// Question no.73

function updateVariable(){
    let number = 10
    console.log("Initial value:" ,number)

    number = 20 
    console.log("Update value:" ,number);
    
}
updateVariable();


// Question no.74

function swepValue(){
    let a = 10, b = 20
    console.log("Swep value: a =" ,a , "b =", b);
    let temp = a
    a = b
    b = temp
    console.log("after swep value: a =", a , "b =", b);
    
}

swepValue();

// Question no.75

function useCompondOperators(){
    let x = 5
    console.log("initial x: ", x);
    x += 2
    console.log("after addition:", x);
    x -= 1
    console.log("after subtraction:", x);
    x *= 3
    console.log("after multiplication:", x);
    x /= 2
    console.log("after division:", x);
    
}

useCompondOperators();