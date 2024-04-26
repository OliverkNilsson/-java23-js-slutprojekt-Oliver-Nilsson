const listDiv = document.getElementById("listDiv");
const imgUrl = "https://image.tmdb.org/t/p/w200";

export function displayMovies(movieContentArray) {
  listDiv.innerHTML = "";
  console.log(movieContentArray);

  for (const movieContent of movieContentArray) {
    let title = movieContent.title;
    let release = movieContent.release_date;
    let plot = movieContent.overview;
    let posterPath = movieContent.poster_path;

    let posterImgEl = document.createElement("img");
    posterImgEl.alt = "Picture not available right now!";
    posterImgEl.src = imgUrl + posterPath;
    posterImgEl.id = "posterImg";

    let contentCardEl = document.createElement("div");
    contentCardEl.id = "contentCard";

    let movieTitleEl = document.createElement("h2");
    movieTitleEl.innerText = title;
    if (!title) {
      movieTitleEl.innerText = "Title not available right now!";
    }

    let releaseDateEl = document.createElement("h6");
    releaseDateEl.innerText = "Release: " + release;
    if (!release) {
      releaseDateEl.innerText = "Release: Not available right now!";
    }

    let moviePlotEl = document.createElement("p");
    moviePlotEl.innerText = plot;
    if (!plot) {
      moviePlotEl.innerText = "Plot not available right now!";
    }
    contentCardEl.append(posterImgEl);
    contentCardEl.append(movieTitleEl);
    contentCardEl.append(releaseDateEl);
    contentCardEl.append(moviePlotEl);
    listDiv.append(contentCardEl);
  }
}

export function displayPerson(personContentArray) {
  listDiv.innerHTML = "";
  console.log(personContentArray);

  for (const personContent of personContentArray) {
    let picturePath = personContent.profile_path;
    let name = personContent.name;
    let occupation = personContent.known_for_department;
    let knownFor = personContent.known_for;

    let ulEl = document.createElement("ul");
    ulEl.style.color = "white";

    let personCardEl = document.createElement("div");
    personCardEl.id = "personCard";

    let profileImgEl = document.createElement("img");
    profileImgEl.src = imgUrl + picturePath;
    profileImgEl.alt = "Picture not available!";
    profileImgEl.style.color = "white";

    let nameLabelEl = document.createElement("h2");
    nameLabelEl.innerText = name;
    if (!name) {
      nameLabelEl.innerText = "Name not available!";
    }

    let occupationLabelEl = document.createElement("h3");
    occupationLabelEl.innerText = occupation;
    if (!occupation) {
      occupationLabelEl.innerText = "Occupation not available!";
    }

    for (const media of knownFor) {
      let mediaType = media.media_type;
      let movieTitle = media.original_title;
      let seriesTitle = media.original_name;

      if (mediaType == "movie") {
        let liEl = document.createElement("li");
        liEl.innerText = mediaType.toUpperCase() + ": " + movieTitle;
        ulEl.append(liEl);
      } else if (mediaType == "tv") {
        let liEl = document.createElement("li");
        liEl.innerText = mediaType.toUpperCase() + ": " + seriesTitle;
        ulEl.append(liEl);
      }

      console.log(mediaType, movieTitle, seriesTitle);
    }

    personCardEl.append(profileImgEl);
    personCardEl.append(nameLabelEl);
    personCardEl.append(occupationLabelEl);
    personCardEl.append(ulEl);
    listDiv.append(personCardEl);
  }
}
