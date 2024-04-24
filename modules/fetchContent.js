const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTM5N2M2NGY4MTIyNjI4YWU5OWEzNGQxZDgwNTliZSIsInN1YiI6IjY2MWY5OGQ4YTM5ZDBiMDE2MzU1OTA5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ULtD_jUm-vYA9E-ikpAvgF4nmJVOWDCysiY4SPJLo9s",
  },
};

// Funktion för att hämta data för de mest visade filmerna just nu
export async function topTrending() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const response = await fetch(url, options);
  if (response.ok) {
    const data = await response.json();

    return data.results.splice(0,10);
  } else if (response.status == 404) {
    throw new Error("Movies not found");
  }
}

// Funktion för att hämta de högst rankade filmerna just nu
export async function topRated() {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  const response = await fetch(url, options);
  if (response.ok) {
    const data = await response.json();

    return data.results.splice(0,10);
  } else if (response.status == 404) {
    throw new Error("Movies not found");
  }
}

// Funktioner för att hämta data beroende på vad användaren söker på
// Hämtar användarens input till searchTerm och använder i URL
export async function searchMovie() {
  const searchTermMovie = document.querySelector("input").value;

  const url = `https://api.themoviedb.org/3/search/movie?query=${searchTermMovie}&include_adult=false&language=en-US&page=1`;

  const response = await fetch(url, options);
  if (response.ok) {
    const data = await response.json();

    return data.results;
  } else if (response.status == 404) {
    throw new Error("Movies not found");
  }
}

export async function searchPerson() {
  const searchTermPerson = document.querySelector("input").value;

  const url = `https://api.themoviedb.org/3/search/person?query=${searchTermPerson}&include_adult=false&language=en-US&page=1`;

  const response = await fetch(url, options);
  if (response.ok) {
    const data = await response.json();

    return data.results;
  } else if (response.status == 404) {
    throw new Error("Person not found");
  }
}
