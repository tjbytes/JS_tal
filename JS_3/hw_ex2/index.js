// Create a function that receive a car Origin & car Miles_per_Gallon and
// return all the cars that meet the relevant request.

function init() {
  const carOrigin = prompt("Enter car origin:");
  const MPG = +prompt("Enter desired miles per gallon:");
  const result = getCarsByOriginMpg(carOrigin, MPG, carsForSale);
  console.log(`Cars made in ${carOrigin} with ${MPG} miles per gallon:`,result);
}

function getCarsByOriginMpg(carOrigin, MPG, carsArray) {
  if (typeof carOrigin !== `string`) return;
  if (typeof MPG !== `number`) return;
  if (!Array.isArray(carsArray)) return;

  let carResult = [];

  for (let index = 0; index < carsArray.length; index++) {
    const addCar = carsArray[index];

    if (addCar.Origin === carOrigin && addCar.Miles_per_Gallon === MPG) {
      carResult.push(addCar);
    }
  }
  return carResult;
}

init();
