// Create a function that receives two properties:
// (property1 and property2) and their respective values (value1 and value2).
// The function should return all cars where:
// 	•	property1 is greater than or equal to value1.
// 	•	property2 is less than or equal to value2.


init();

function init() {
  const result = getCarsByTwoProperties("Horsepower", 100, "Cylinders", 6, carsForSale);
  console.log(result);
}

function getCarsByTwoProperties(property1, value1, property2, value2, carsArray) {

  if (typeof property1!== "string" || typeof property2 !== "string") return[];
  if (isNaN(value1) || isNaN (value2)) return[];
  if (!Array.isArray(carsArray)) return[];

  let carsFilter = [];
  
  for (let index = 0; index < carsArray.length; index++) {
    const addCar = carsArray[index];

    if (
      addCar[property1] >= value1 &&
      addCar[property2] <= value2
    ) {
      carsFilter.push(addCar);
    }
  }
  return carsFilter;
}
