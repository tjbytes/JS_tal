let number = +prompt("Enter a number:");
let max = -1;

while (number > 0) {
  if (number > max) {
    max = number;
  }
  number = +prompt("Enter a number:");
}
  if (max === -1) {
    console.log("Enter some positive numbers");
  } else {
    console.log(`The highest number entered is: ${max}`);
  }