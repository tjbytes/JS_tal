let number = Number(prompt("enter number:"))
let sum = 0

while (number > 0) {
  sum = sum + (number % 10)
  number = parseInt (number/10)
}

console.log(`Sum is: ${sum}`)