// Question no.112

const countries = new Map<string, string>()

countries.set("USA", "Washington, D.C.")
countries.set("Pakistan", "Karachi")
countries.set("Japan", "Tokyo")

console.log(countries);


// Question no.113

function logCapitalOfCanada(countries: Map<string, string>): void{
    if(countries.has("Canada")){
        console.log(`The capital of Canada is ${countries.get("Canada")}`);
        
    }else{
        console.log("Canada is not in the map.");
        
    }
}
// Assuming countries map from question no.112
logCapitalOfCanada(countries);


// Question no.114

const students = new Map<number, string>();
students.set(1, "Ali")
students.set(2, "Qasim")
students.set(3, "Noman")

students.forEach((name, id) =>{
    console.log(`Student ID: ${id}, Name: ${name}`);
    
})