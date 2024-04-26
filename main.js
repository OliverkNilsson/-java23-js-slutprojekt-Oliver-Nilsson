import { displayMovies, displayPerson } from "./modules/displayContent.js";
import {
  topTrending,
  topRated,
  searchMovie,
  searchPerson,
} from "./modules/fetchContent.js";

const topRatedButton = document.getElementById("topRated");
const topTrendingButton = document.getElementById("topTrending");
const searchButton = document.getElementById("searchButton");
const listDiv = document.getElementById("listDiv");
const pageText = document.getElementById('pageText');

const errorCard = document.createElement("div");
errorCard.id = "errorCard";

// Knapp för att visa de mest visade filmerna just nu
topTrendingButton.addEventListener("click", (event) => {
  event.preventDefault();

  pageText.innerText = "Top 10 trending movies: ";

  topTrending()
    .then(displayMovies)
    .catch((error) => {
      errorCard.innerText =
        "ERROR: " + error.message + "! Try again or come back later!";
      listDiv.append(errorCard);
    });
});

// Knapp för att visa de högt rankade filmerna just nu
topRatedButton.addEventListener("click", (event) => {
  event.preventDefault();

  pageText.innerText = "Top 10 rated movies: ";

  topRated()
    .then(displayMovies)
    .catch((error) => {
      listDiv.innerHTML = "";
      errorCard.innerText =
        "ERROR: " + error.message + "! Try again or come back later!";
      listDiv.append(errorCard);
    });
});

// Knapp för att söka på antingen personer eller filmer
// Använder en dropdown select för att se om det är person eller film
// som söks på och beroende på det kör jag searchMovie elr searchPerson
searchButton.addEventListener("click", (event) => {
  event.preventDefault();

  pageText.innerText = "Search results: ";

  const selection = document.getElementById("dropdown").value;
  if (selection == "movie") {
    searchMovie()
      .then(displayMovies)
      .catch((error) => {
        listDiv.innerHTML = "";
        errorCard.innerText =
          "No movies found by that name, try something else!";
        listDiv.append(errorCard);
      });
  } else if (selection == "person") {
    console.log(searchPerson());
    searchPerson()
      .then(displayPerson)
      .catch((error) => {
        listDiv.innerHTML = "";
        errorCard.innerText =
          "No person found by that name, try something else!";
        listDiv.append(errorCard);
      });
  }
});
