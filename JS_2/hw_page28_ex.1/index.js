let number = +prompt("Enter any numer:")
let newNumber = 0

while (number > 0) {
    let leftDigit = number % 10
newNumber = newNumber * 10 + leftDigit
number = parseInt(number / 10)
}

console.log(`Reversed number is: ${newNumber}`)