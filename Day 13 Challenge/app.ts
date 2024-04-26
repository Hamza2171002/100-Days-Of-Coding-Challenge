//Question no.37

function make_shirt(size: string ="large", message: string ="I love coding"){
    console.log(`Making a ${size} T_shirt with the message "${message}"`)
}
make_shirt();  //Default large and message.
make_shirt("medium");  //Default message , medium size.
make_shirt("small","I love TypeScript");  //Custom message , small size


//Question no.38

function describe_city(city: string , country: string = "Pakistan"){
    console.log(`${city} is in ${country}`)
}
describe_city("Khanewal")
describe_city("Multan")
describe_city("Tokyo","Japan")




//Question no.39

function city_country(city: string, country: string){
    return `${city}, ${country}`
}
console.log(city_country("Lahore", "Pakistan"))
console.log(city_country("Tokyo", "Japan"))
console.log(city_country("Paris", "France"))





