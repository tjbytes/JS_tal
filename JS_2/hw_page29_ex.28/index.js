let arr2000 = [];
let arr2001 = [];
let sum = 0;

for (i = 1; i <= 5; i++) {
  arr2000.push(+prompt("Enter the daily temperature of July 2000:"));
}

for (i = 0; i < arr2000.length; i++) {
  arr2000[i];
  sum = sum + arr2000[i];
}

let average = sum / arr2000.length;

console.log(`The daily average temperature in July 2000 was: ${average}°C`);

for (i = 1; i <= 5; i++) {
  arr2001.push(+prompt("Enter the daily temperature of July 2001:"));
}

for (i = 0; i < arr2001.length; i++) {
  if (arr2001[i] > average) {
    console.log(`Day ${i + 1}: ${arr2001[i]}°C`);
  }
}