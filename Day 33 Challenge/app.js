// Question no.97
// function getCurrentDate(): string{
//     const now = new Date();
//     const day = String(now.getDate()).padStart(2, '0')
//     const month = String(now.getMonth() + 1).padStart(2, '0')
//     const year = now.getFullYear()
//     return `${day}-${month}-${year}`
// }
// console.log(getCurrentDate());
// Question no.98
// function daysUntil(): number{
//     const today = new Date()
//     const newYear = new Date(today.getFullYear() + 1, 0, 1)
//     const diff = newYear.getTime() - today.getTime()
//     const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
//     return days
// }
// console.log(daysUntil() + " days unti new year.");
// Question no.99
function getNextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var nextBirthday = getNextBirthday(10, 18);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
