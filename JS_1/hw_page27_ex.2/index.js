let number1 = Number(prompt("Insert number 1:"))
let number2 = Number(prompt("Insert number 2:"))

if (!isNaN(number1) && !isNaN(number2)) {  
  let numbers = [number1, number2]
  numbers.sort((a, b) => a - b)

for (let i = numbers[0]; i <= numbers[1]; i++)
  console.log(i)
} else {
  console.log("Invalid input")
}