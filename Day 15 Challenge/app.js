//Question no.43
// let magicians: string[] =["Hamoon","Zakoota","Herry Poter"]
// function make_great(magicians: string[]): string[] {
//     let greatMagicians = [];
//     magicians.forEach(magician =>{
//         greatMagicians.push(`${magician} the Great`)
//     })
//     return greatMagicians
// }
// let greatMagicians = make_great(magicians.slice()); //Creat a new modified array
// console.log("Orignal magicians;")
// show-magicians(magicians); // shows orignal names
// Question no.44
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(', '), "."));
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
// Question no.45
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
