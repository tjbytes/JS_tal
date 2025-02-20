function loadFavorites() {
  const favoritesContainer = document.getElementById("favorite-jokes-container");
  if (!favoritesContainer) return;

  const favoritesJokes =
    JSON.parse(localStorage.getItem("favoritesJokes")) || [];
  if (favoritesJokes.length === 0) {
    favoritesContainer.innerHTML = "<p>No Favorite Jokes Saved Yet...</p>";
    return;
  }

  favoritesContainer.innerHTML = "";

  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row", "g-3");

  for (let i = 0; i < favoritesJokes.length; i++) {
    const joke = favoritesJokes[i];

    const favoriteJokesCard = document.createElement("div");
    favoriteJokesCard.classList.add("card", "mb-3");

      const colDiv = document.createElement("div");
      colDiv.classList.add("col-md-4");

      favoriteJokesCard.innerHTML = `
        <div class="card-body">
            <h6 class="card-text text-secondary">${joke.type}</h6>
            <h5 class="card-title">${joke.setup}</h5>
            <h6 class="card-text text-primary">${joke.punchline}</h6>
            <button class="btn btn-danger" onclick="removeJoke(${joke.id})">Remove</button>
        </div>
    `;
      colDiv.appendChild(favoriteJokesCard);
      rowDiv.appendChild(colDiv);
    }
    favoritesContainer.appendChild(rowDiv);
  }
function removeJoke(id){
    let favorites=JSON.parse(localStorage.getItem("favoritesJokes")) || [];
    favorites=favorites.filter(joke=>joke.id !== id)
    localStorage.setItem("favoritesJokes", JSON.stringify(favorites))

    loadFavorites();
}

loadFavorites();
