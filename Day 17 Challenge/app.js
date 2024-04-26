// Question no.49
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I  enjoy ".concat(hobby, "."));
    });
}
logHobbies("Reading", "Coding", "Cycling");
// Question no.50
var myIdealDay = "My ideal day would involve:\n1. Waking up early and going for jog.\n2. Spending a few hours coding on a personal project.\n3. Ending the day by reading a good book.";
console.log(myIdealDay);
// Question no.51
function calculateArea(width, height) {
    return width * height;
}
var calculateAreaArrow = function (width, height) { return width * height; };
console.log(calculateAreaArrow(5, 7));
