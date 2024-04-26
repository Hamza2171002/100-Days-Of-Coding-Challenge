// Question no.61

enum vehicleType{
    car,
    truck, 
    motorcycle,
}
console.log(vehicleType.car)

// Question no.62


interface Student{
    name: string
    age: number
    courses: string[]
}
let student: Student = {
    name: "Hamza",
    age: 23,
    courses: ["Math", "English", "History"]
}
console.log(student)


// Question no.63

type Shape = {
    kind: "circle" | "rectangle"
    radius?: number  // only for radius
    width?: number  // onlyb for rectangle
    height?: number  // only for rectangle
}
let circle: Shape = {
    kind: "circle",
    radius: 5
}
let rectangle: Shape ={
    kind: "rectangle",
    width: 10,
    height: 20
}
console.log(circle)
console.log(rectangle)