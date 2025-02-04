let num1 = +prompt("Enter the first number:")
let num2 = +prompt("Enter the second number:")

if (num1 < num2) {
for (let i = num1; i <= num2; i++) {
    console.log(i) }
for (let i = num2; i >= num1; i--) {
    console.log(i) }
} else {
    for (let i = num2; i <= num1; i++) {
        console.log(i) }
    for (let i = num1; i >= num2; i--) {
        console.log(i) }
}
    