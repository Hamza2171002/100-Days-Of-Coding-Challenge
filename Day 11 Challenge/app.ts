//Question no.31

// let userNames: string[] = []
// if(userNames.length === 0){
//     console.log("we need to find some users!")
// }else{
    
// }


//Question no.32

// let current_users: string[] = ["ali","noman","sajid","asjid"]
// let new_users: string[] = ["hamza","noman","bilal","sajid"]

// new_users.forEach(newUser =>{
//     if(current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())){
//         console.log(`${newUser} will need to inter a new username.`)

//     }else{
//         console.log(`${newUser} is available`)
//     }
// })


//Question no.33

let numbers: number[] = [1,2,3,4,5,6,7,8,9]
numbers.forEach(number =>{
    let ordinal = "th"
    if(number === 1){
        ordinal = "st"
    }else if(number === 2){
        ordinal = "nd"
    }else if(number === 3){
        ordinal = "rd"
    }
    console.log(`${number}${ordinal}`)
})













