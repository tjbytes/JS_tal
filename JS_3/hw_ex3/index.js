// Create function that receive car property, one of the following:
// "Miles_per_Gallon", "Cylinders", "Displacement", "Horsepower","Weight_in_lbs","Acceleration"
// and value which can be a number.

// and the function return all the cars that meet the request for example getCarByProperty(1000,"Weight_in_lbs") =>
// will return all the cars that has weight 1000 and below.

//getCarByProperty(12,"Cylinders") => will return all the cars that has number of Cylinders 12 and below.

init();

function init() {
  const property = prompt("Enter car property:");
  const value = +prompt("Enter property value:");

  const result = getCarByPropertyAndValue(property, value, carsForSale);

  console.log(`Matching cars with ${property} <= ${value}`, result);
}

function getCarByPropertyAndValue(property, value, carsArray) {
  if (typeof property !== "string") return[];
  if (isNaN(value)) return[];
  if (!Array.isArray(carsArray)) return[];

  let carsFilter = [];

  for (let index = 0; index < carsArray.length; index++) {
    let addCar = carsArray[index];

    if (addCar[property] <= value) {
      carsFilter.push(addCar);
    }
  }
  return carsFilter;
}
