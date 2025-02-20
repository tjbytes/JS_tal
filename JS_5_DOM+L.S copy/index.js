function init() {
  const jokesContainer = document.getElementById("jokes-container");
  if (jokesContainer) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row", "g-3");

    for (let i = 0; i < jokes.length; i++) {
      const currentJoke = jokes[i];
      renderJokeToContainer(currentJoke, rowDiv);
    }
    jokesContainer.appendChild(rowDiv);
  }
}

function renderJokeToContainer(currentJoke, jokesContainer) {
  const colDiv = document.createElement("div");
  colDiv.classList.add("col-md-4", "mb-3");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const type = document.createElement("h6");
  type.classList.add("card-text", "text-secondary");
  type.innerText = currentJoke.type;

  const setup = document.createElement("h5");
  setup.classList.add("card-title");
  setup.innerText = currentJoke.setup;

  const punchline = document.createElement("h6");
  punchline.classList.add("card-text", "text-primary");
  punchline.innerText = currentJoke.punchline;

  const saveBtn = document.createElement("button");
  saveBtn.classList.add("btn", "btn-success");
  saveBtn.innerText = "Save to favorites";
  
  saveBtn.addEventListener("click", function () {
    let favorites = JSON.parse(localStorage.getItem("favoritesJokes")) || [];
    if (!favorites.some((favJoke) => favJoke.id === currentJoke.id)) {
      favorites.push(currentJoke);
      localStorage.setItem("favoritesJokes", JSON.stringify(favorites));
      alert("Joke Saved!");
    } else {
      alert("This joke is already in your favorites!");
    }
  });

  cardBody.appendChild(type);
  cardBody.appendChild(setup);
  cardBody.appendChild(punchline);
  cardBody.appendChild(saveBtn);

  cardDiv.appendChild(cardBody);
  colDiv.appendChild(cardDiv);
  jokesContainer.appendChild(colDiv);
}

init();