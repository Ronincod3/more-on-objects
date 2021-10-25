const addMovieButton = document.querySelector("#add-movie-btn");
const searchMovieButton = document.querySelector("#search-btn");
const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.querySelector("#movie-list");
  if (movies.lenght === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filterMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filterMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    // if(movie.info === undefined) {  // //this is to check if inside of an object the movie.info is empty then do something. 
    // }
    const { info, ...otherProps } = movie; //object destructuring
    console.log(otherProps);
    const { title: movieTitle } = info; //object destructuring
    let {getFormattedTitle} = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie); // binding "movie" to the .this method.
    let text = getFormattedTitle.call(movie) + " - "; //call(), or apply();
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.querySelector("#title").value;
  const extraName = document.querySelector("#extra-name").value;
  const extraValue = document.querySelector("#extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: { title, [extraName]: extraValue },
    id: Math.random(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    }
  };
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.querySelector("#filter-title").value;
  renderMovies(filterTerm);
};

addMovieButton.addEventListener("click", addMovieHandler);
searchMovieButton.addEventListener("click", searchMovieHandler);
