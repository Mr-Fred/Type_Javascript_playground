import {getMovies} from "./lib/movies.js";


export const moviesHandler = async(req, res) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  try{
    const {upcoming, popular, topRated, nowPlaying} = await getMovies();
    res.render("pages/home.ejs", {
      upcoming: upcoming,
      popular: popular,
      topRated: topRated,
      nowPlaying: nowPlaying, 
      IMG_PATH: IMG_PATH
    });
  } catch{
    res.status(404).send("Movies not found");
  }
}

export const getMovieByIdHandler = async(req, res) => { 
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  res.render("pages/movie.ejs", {
    movie: JSON.parse(req.body.movie),
    IMG_PATH: IMG_PATH
  });
}

// export {
//   moviesHandler,
//   getMovieByIdHandler
// }