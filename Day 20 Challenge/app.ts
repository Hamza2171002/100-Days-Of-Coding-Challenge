// Question no.58

function averageScore(...scores: number[]){
    let total = scores.reduce((sum , score) => sum + score, 0)
    return total / scores.length
}

console.log(averageScore(80, 90, 99, 79))

// Questin no.59

function makeAdder(valueToAdd: number): (number) => number {
    return function(number: number): number {
        return number + valueToAdd
    }

}

let addFive = makeAdder(5)
console.log(addFive(15))


// Question no.60

let userProfile = (function(){
    let name = "Hamza"
    let age = 24
    return{
        displayInfo: function(){
            console.log(`Name: ${name}, Age: ${age}`)
        }
    }
})()
userProfile.displayInfo()