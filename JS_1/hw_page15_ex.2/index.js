let Length = Number(prompt("Enter your room's length"));
let Width = Number(prompt("Enter your room's width"));

if (isNaN(Length) || isNaN(Width)) {
    console.log("Enter numbers only (in cm)")
}
else {
    console.log(`Your room is ${Length/100 * Width/100} sqm`);
}