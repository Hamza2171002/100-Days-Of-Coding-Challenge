//Question no.16
// let guests: string[] = ["Saad", "Asad", "Noman", "Zubair"]
// console.log("Good news! I found a bigger dinner table!")
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var places = ['Italy', 'Germany', 'Agra', 'Eifal Towar', 'Time Square'];
//print your array in its orignal order
console.log('orignal ' + places);
console.log('copy ' + __spreadArray([], places, true).sort());
console.log('orignal ' + places);
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
console.log('orignal ' + places);
console.log('orignal ' + places.reverse());
console.log('orignal ' + places.reverse());
console.log('orignal ' + places.sort());
console.log('orignal ' + places.sort().reverse());
