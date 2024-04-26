// Question no.61
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["car"] = 0] = "car";
    vehicleType[vehicleType["truck"] = 1] = "truck";
    vehicleType[vehicleType["motorcycle"] = 2] = "motorcycle";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType.car);
var student = {
    name: "Hamza",
    age: 23,
    courses: ["Math", "English", "History"]
};
console.log(student);
var circle = {
    kind: "circle",
    radius: 5
};
var rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
console.log(circle);
console.log(rectangle);
