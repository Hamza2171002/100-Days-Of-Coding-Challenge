//Question no.28

// let age: number = 25

// if(age < 2){
//     console.log("The person is a baby")
// }else if(age < 4){
//     console.log("the person is a toddler")
// }else if(age < 13){
//     console.log("the person is a kid")
// }else if(age < 20){
//     console.log("the person is a teenager")
// }else if(age < 65){
//     console.log("the person is a adult")
// }else{
//     console.log("the person is a elder")
// }

//Question no.29

// let faverite_fruit: string[] = ["apple","banana","mango"]

// if(faverite_fruit.includes("apple")){
//     console.log("you like apple")
// }
// if(faverite_fruit.includes("banana")){
//     console.log("you like banana")
// }
// if(faverite_fruit.includes("mango")){
//     console.log("you like mango")
// }
// if(faverite_fruit.includes("cherry")){
//     console.log("you like cherries")
// }

//Question no.30

// let userNames: string[] = ['admin','ali','zohaib','bilal']
// function greetUsers():void{
//     for(let i in userNames){
//         if(userNames[i].toLowerCase() === 'admin'){
//             console.log("Hellow admin, would you like to see a status report")
//         }else{
//             console.log(`Hello ${userNames[i]} thank you for loging in again`)
//         }
//     }

// }
// greetUsers()


let userNames: string[] = ['admin','ali','nomi','meer']
userNames.forEach(userName =>{
    if(userName == "admin"){
        console.log("Hello admin would you like to see a status report")
    }else{
        console.log(`Hello ${userName} thank you for loging in again`)
    }
})