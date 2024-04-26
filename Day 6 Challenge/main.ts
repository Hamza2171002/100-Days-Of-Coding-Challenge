//Question no.16
// let guests: string[] = ["Saad", "Asad", "Noman", "Zubair"]
// console.log("Good news! I found a bigger dinner table!")

//Adding more guests
// guests.unshift("Hassan")
// guests.splice(guests.length / 2, 0, "Ali")
// guests.push("Asjid")
// guests.forEach(guest => {
    // console.log(`Dear ${guest}, would you like to join me for dinner?`)
// })


//Question no.17

// let guests: string[] = ["Saad", "Asad", "Noman", "Zubair"]
// console.log("Unfortunatetly, I can only invite two pepole for dinner.")
// while (guests.length > 2){
    // let removedGuest = guests.pop()
    // console.log(`Sorry, ${removedGuest}, I can't invite you for dinner.`)
// }
// guests.forEach(guest =>{
    // console.log(`Dear ${guest}, you're still invited to dinner.`)
// })
// guests.splice(0, guests.length)
// console.log(guests);  //show an empty list.


//Question no.18

let places :string[] = ['Italy','Germany','Agra','Eifal Towar','Time Square'];
//print your array in its orignal order
console.log('orignal ' + places)
console.log('copy ' + [...places].sort())
console.log('orignal ' + places)
console.log('copy ' + [...places].sort().reverse())
console.log('orignal ' + places)
console.log('orignal ' + places.reverse())
console.log('orignal ' + places.reverse())
console.log('orignal ' + places.sort())
console.log('orignal ' + places.sort().reverse())