let sum = 0;
let count = 0;
let number = +prompt("Enter a number:");

while (number !== 0) {
  if (number > 0) {
    sum += number;
    count++;
  }
  number = +prompt("Enter a number:");
}

if (count === 0) {
  console.log("Don't enter only 0!");
} else {
  let average = sum / count;
  console.log(`The average of all numbers entered is: ${average}`);
}
