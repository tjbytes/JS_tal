let value1 = Number(prompt("Enter value 1"));
let value2 = Number(prompt("Enter value 2"));
let value3 = Number(prompt("Enter value 3"));

if(isNaN(value1) || isNaN(value2) || isNaN(value3)) {
    console.log("No valid values")
}
else {
    console.log(`The sum is: ${value1 + value2 + value3}`);
}




