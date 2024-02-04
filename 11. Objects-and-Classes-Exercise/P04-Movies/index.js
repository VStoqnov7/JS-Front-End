function movies(input) {
  const movies = {};

  for (const line of input) {
    if (line.startsWith("addMovie")) {
      const movieName = line.replace("addMovie ", "");
      movies[movieName] = {};
    } else if (line.includes("directedBy")) {
      const [movieName, director] = line.split(" directedBy ");
      if (movies[movieName]) {
        movies[movieName].director = director;
      }
    } else if (line.includes("onDate")) {
      const [movieName, date] = line.split(" onDate ");
      if (movies[movieName]) {
        movies[movieName].date = date;
      }
    }
  }

  for (const movieName in movies) {
    if (movies[movieName].director && movies[movieName].date) {
      console.log(JSON.stringify({ name: movieName, ...movies[movieName] }));
    }
  }
}
