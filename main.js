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

// Knapp för att visa de mest visade filmerna just nu
topTrendingButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(topTrending());
  topTrending().then(displayMovies);
});

// Knapp för att visa de högt rankade filmerna just nu
topRatedButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(topRated());
  topRated().then(displayMovies);
});

// Knapp för att söka på antingen personer eller filmer
// Använder en dropdown select för att se om det är person eller film
// som söks på och beroende på det kör jag searchMovie elr searchPerson
searchButton.addEventListener("click", (event) => {
  event.preventDefault();

  const selection = document.getElementById("dropdown").value;
  console.log(selection);
  if (selection == "movie") {
    searchMovie().then(displayMovies);
  } else if (selection == "person") {
    console.log(searchPerson());
    searchPerson().then(displayPerson);
  }
});
