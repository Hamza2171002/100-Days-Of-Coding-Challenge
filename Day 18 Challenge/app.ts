// Question no.52

let smartPhone = {
    make: "Samsung",
    model: "Galaxy A03",
    specs: {
        storage: "64GB",
        screenSize: "6.5 inches",
        betteryLife: "18 hours"
    }

}

console.log(smartPhone)


// Question no.53

let developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameWork: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
} 
let {languages, frameWork, tools} = developerSkills
console.log(`language: ${languages[0]}, framework: ${frameWork[0]}, tool: ${tools[0]}`)

// Question no.54

function createObjectWithDynamicKey(key: string, value: string){
    let dynamicObject = {}
    dynamicObject[key] = value
    return dynamicObject
}

let userPrefrance = createObjectWithDynamicKey("theme", "dark")
console.log(userPrefrance)