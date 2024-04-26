// Question no.79

let car = {
    make: "toyota",
    module: "corolla",
    year: 2021
}

console.log(car.make);


// Question no.80


let car1 = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car.color = "blue"; 
car.year = 2021; 


console.log(car); 

// Question no.81


function logObjectProperties(obj: object) {
    for (let property in obj) {
        
        console.log(`${property}: ${obj[property]}`);

    }
}

logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });