let Diameter = Number(prompt("Enter pot diameter"));
let Depth = Number(prompt("Enter pot depth"));

const PI = Math.PI;
let R = 0.5 * Diameter;
let Area = 3.14 * R ** 2;
let Content = Area * Depth;

if (isNaN(Diameter) || isNaN(Depth) || Diameter <= 0 || Depth <= 0) {
  console.log("Please enter valid numbers.");
} else {
  console.log(`The pot content is: ${Content.toFixed(2)}`);
}
