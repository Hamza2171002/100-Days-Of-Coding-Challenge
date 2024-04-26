// Question no.73
function updateVariable() {
    var number = 10;
    console.log("Initial value:", number);
    number = 20;
    console.log("Update value:", number);
}
updateVariable();
// Question no.74
function swepValue() {
    var a = 10, b = 20;
    console.log("Swep value: a =", a, "b =", b);
    var temp = a;
    a = b;
    b = temp;
    console.log("after swep value: a =", a, "b =", b);
}
swepValue();
// Question no.75
function useCompondOperators() {
    var x = 5;
    console.log("initial x: ", x);
    x += 2;
    console.log("after addition:", x);
    x -= 1;
    console.log("after subtraction:", x);
    x *= 3;
    console.log("after multiplication:", x);
    x /= 2;
    console.log("after division:", x);
}
useCompondOperators();
