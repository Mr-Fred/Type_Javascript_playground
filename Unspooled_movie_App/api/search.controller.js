import {fetchMovieByTitle} from './lib/movies.js';

export const searchHandler = async (req, res) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  try {
    let searchResult = await fetchMovieByTitle(req.body.query);
    searchResult = searchResult.filter(movie => movie.poster_path !== null && movie.backdrop_path !== null)
    return res.render("pages/search.ejs", {
      searchResult: searchResult,
      IMG_PATH: IMG_PATH,
      searchTerm: req.body.query,
    });
  } catch (error) {
    throw error;
  }

}
