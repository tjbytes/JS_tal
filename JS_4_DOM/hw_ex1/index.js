// 1. in our last lesson exercise ( drawing cars ), support new 3 buttons
// - Show Cars for Rent: will draw only the cars for rent
// - Show Cars for Sale: will draw only the cars for sale
// - Show all cars: will show all the cars together
// * Note, that will required a short refactor to the code to support drawing an array which passed as parameter to the function
// * When clicking each button the Table will be cleaned and then the new data will be drawn

function clearTable() {
  document.getElementById("table-cars-headers").innerHTML = "";
  document.getElementById("table-cars-body").innerHTML = "";
}

function loadTable(carsList) {
  clearTable();

  // Create Headers
  const firstElement = carsList[0];
  const fields = Object.keys(firstElement);
  console.log(firstElement);
  console.log(fields);

  const theadTD = document.getElementById("table-cars-headers");
  if (theadTD) {
    for (let index = 0; index < fields.length; index++) {
      const th = document.createElement("th");
      th.innerText = fields[index].replaceAll("_", " ");
      theadTD.append(th);
    }
  }

  // Create Body
  const tBody = document.getElementById("table-cars-body");
  if (tBody) {
    for (let index = 0; index < carsList.length; index++) {
      const currentCar = carsList[index];
      const tr = document.createElement("tr");

      for (let index = 0; index < fields.length; index++) {
        const currentField = fields[index];
        tr.append(getTD(currentCar[currentField], "-"));
      }
      tBody.append(tr)
    }
  }
}

function getTD(value, defaultValue = "-") {
  const currentTD = document.createElement("td");
  currentTD.innerHTML = value || defaultValue;
  return currentTD;
}

function searchCars() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const searchAttribute = document.getElementById("selectMenu").value;

  const filteredCars = carsForRent.concat(carsForSale).filter(car => {
    const valueToCheck = car[searchAttribute];
    return (
      (valueToCheck !== null ? valueToCheck.toString() : "").includes(searchTerm)
    );
  });

  loadTable(filteredCars);
}