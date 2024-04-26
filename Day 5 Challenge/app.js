//Question no.13
// let transsportation :string[] = ['motorcycle','car','train','cycle'];
// for(let i=0; i<transsportation.length; i++){
// console.log('I would like to own a' + transsportation[i])
// }
//Question no.14
// let list :string[] = ['saad','ubaid','usman'];
// for(let i=0; i<list.length; i++){
// console.log('Dear Mr. ' + list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you')
// }
//Question no.15
var list = ['saad', 'ubaid', 'usman'];
for (var i = 0; i < list.length; i++) {
    console.log('Dear Mr. ' + list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you\n');
}
var absent_guest = 'saad';
var new_guest = 'ali';
list[0] = new_guest;
for (var i = 0; i < list.length; i++) {
    console.log('Dear Mr. ' + list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you\n');
}
console.log("".concat(absent_guest, " is not coming to the party."));
