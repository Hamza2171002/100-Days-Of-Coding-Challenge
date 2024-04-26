// Question no.127

// const treditionalFunction = function(a: number , b: number){
//     return a + b
// }
// const arrowFuntion = (a: number , b: number) => a + b

// console.log(treditionalFunction(5, 3))
// console.log(arrowFuntion(5, 3))


// Question no.128

// const multiplyPerameters = (...numbers: number[]) => 
//     numbers.reduce((total, number) => total * number , 1)

// console.log(multiplyPerameters(2, 3, 4))


// Question no.129

let myObject ={
    value: "traditionalVsArrow",
    traditionalFunction: function(){
        console.log("traditional function:", this.value)
    },
    arrowFunction: () => {
        console.log("arrow function:", this.value)
    }
}
myObject.traditionalFunction()
myObject.arrowFunction()