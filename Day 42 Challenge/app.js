"use strict";
// Question no.124
// const person ={
//     name: "Ali",
//     getName: function(){
//         return this.name
//     },
// }
// console.log(person.getName())
// Question no.125
// const rectangle = {
//     length: 6,
//     width: 5,
//     calculateArea: function(){
//         return this.length * this.width
//     }
// }
// console.log(rectangle.calculateArea())
// Question no.126
const myObject = {
    property: "Value",
    outerMethod: function () {
        console.log(this.property);
        const innerMethod = () => {
            console.log(this.property);
        };
        innerMethod();
    },
};
myObject.outerMethod();
