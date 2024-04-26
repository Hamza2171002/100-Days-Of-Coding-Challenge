//Question no.37
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love coding"; }
    console.log("Making a ".concat(size, " T_shirt with the message \"").concat(message, "\""));
}
make_shirt(); //Default large and message.
make_shirt("medium"); //Default message , medium size.
make_shirt("small", "I love TypeScript"); //Custom message , small size
//Question no.38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Khanewal");
describe_city("Multan");
describe_city("Tokyo", "Japan");
//Question no.39
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
