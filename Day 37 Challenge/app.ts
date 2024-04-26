// Question no.109

// const curretTime = new Date()
// if(curretTime.getHours() < 12){
//     console.log("Good Morning");
    
// }



// Question no.110

// function assignGrade(scores: number): string{
//     if(scores >= 90){
//         return "A"
//     } else if(scores >= 80){
//         return "B"
//     } else if(scores >= 70){
//         return "C"
//     } else if(scores >= 60){
//         return "D"
//     }else{
//         return "F"
//     }
// }

// console.log(assignGrade(85));
// console.log(assignGrade(55));



// Question no.111

function categorizeAge(age: number): string{
    if(age < 13){
        return "Child"
    }else if(age < 19){
        return "Teenager"
    }else {
        return "Adult"
    }
}

console.log(categorizeAge(12));
console.log(categorizeAge(18));
console.log(categorizeAge(25));



