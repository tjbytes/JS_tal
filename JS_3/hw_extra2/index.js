// Create a function that finds the car with the highest Horsepower from the dataset.
// 	•	The function should return the car object with the highest Horsepower.
// 	•	If there are multiple cars with the same Horsepower, return the first one found.

init();

function init() {
  const result = findTheHighestHorsePower(carsForSale);
  console.log(result);
}

function findTheHighestHorsePower(carsArray) {
  if (!Array.isArray(carsArray)) return [];

  let highestHP = carsArray[0];

  for (let index = 1; index < carsArray.length; index++) {
    const addCar = carsArray[index];

    if (addCar["Horsepower"] > 0 && highestHP["Horsepower"] < addCar["Horsepower"]) {
        highestHP = carsArray[index];
      }
    }
    return highestHP;
  }

