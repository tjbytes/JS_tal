let arr = []
let sum = 0

for (i = 1; i <= 30; i++) {
arr.push(+prompt("Enter the daily temperature of July 2000:"))
}

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
    sum = sum + arr[i]
}

let average = sum / arr.length

console.log(`The daily average temperature in July 2000 was: ${average}`)