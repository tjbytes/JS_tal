let brand = "ferrari";
let model = "spider";
let color = "black";

let carBrand = prompt("What car brand you're looking for?");
let carModel = prompt("What model?");
let carColor = prompt("What is your preferred color?");

if (carBrand !== "" && carModel !== "" && carColor !== "") {
  if (
    carBrand.toLowerCase() === brand &&
    carModel.toLowerCase() === model &&
    carColor.toLowerCase() === color
  ) {
    console.log(`We found a nice car for you! -> ${brand} ${model} ${color}`);
  } else {
    console.log("No matching results :(");
  }
} else {
  console.log("Missing values!");
}
