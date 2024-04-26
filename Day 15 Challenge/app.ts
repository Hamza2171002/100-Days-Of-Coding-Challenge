//Question no.43


// Question no.44

function make_sandwich(...items: string[]){
    console.log(`Making a sandwich with: ${items.join(', ')}.`)
}
make_sandwich("ham","cheese")
make_sandwich("turkey","lettuce","tomato")
make_sandwich("avocado","sprouts","mustard","mayo")


// Question no.45

function make_car(manufacturer: string, model: string, ...options: [string, any][]):object{
    let car = {manufacturer , model}
    options.forEach(([key, value]) =>car[key] = value)
    return car
}
console.log(make_car("Toyota","Corolla",["color","red"],["year",2020]))
console.log(make_car("Ford","Fiesta",["color","blue"],["sunroof",true]))