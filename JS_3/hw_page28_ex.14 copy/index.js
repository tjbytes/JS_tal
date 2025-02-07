// Create a function that receive cars array
// and return the average of the HP between all the cars

init();

function init() {
  const avgHP = calculateAverageHP(carsForSale);
  console.log(`The average cars horsepower is: ${avgHP.toFixed(2)}`);
}

function calculateAverageHP(carArray) {
  if (!Array.isArray(carArray)) return;

  let sumHP = 0;
  let carCount = 0;

  for (let index = 0; index < carArray.length; index++) {
    const carHP = carArray[index].Horsepower;

    if (carHP >= 0);
    {
      sumHP = sumHP + carHP;
      carCount++;
    }
    }
    if (carCount > 0) {
      return sumHP / carCount;
  }
}
