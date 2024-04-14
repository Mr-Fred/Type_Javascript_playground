import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.TMDB_KEY;

async function fetchMovieById(id) {

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function fetchMovieByTitle(title) {

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${title}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function fetchPopularMovies() {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTA2MWI3MzgzZWIyZjk4NmFlMTc4MDlhZjdlN2MyNyIsInN1YiI6IjY2MTI0ODI2ZGY4NmE4MDE3ZTU0NTUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aYev7plrL_mIkOAxYJaWsKTmJkVVERktvK7G-hebBhY'
    }
  };
  try{
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
  }

async function fetchNowPlayingMovies(page = 1) {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTA2MWI3MzgzZWIyZjk4NmFlMTc4MDlhZjdlN2MyNyIsInN1YiI6IjY2MTI0ODI2ZGY4NmE4MDE3ZTU0NTUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aYev7plrL_mIkOAxYJaWsKTmJkVVERktvK7G-hebBhY'
    }
  };
  try{
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
}

async function fetchTopRatedMovies(page = 1) {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/top_rated',
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTA2MWI3MzgzZWIyZjk4NmFlMTc4MDlhZjdlN2MyNyIsInN1YiI6IjY2MTI0ODI2ZGY4NmE4MDE3ZTU0NTUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aYev7plrL_mIkOAxYJaWsKTmJkVVERktvK7G-hebBhY'
    }
  };
  
  try{
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
}

async function fetchUpcomingMovies(page = 1) {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/upcoming',
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTA2MWI3MzgzZWIyZjk4NmFlMTc4MDlhZjdlN2MyNyIsInN1YiI6IjY2MTI0ODI2ZGY4NmE4MDE3ZTU0NTUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aYev7plrL_mIkOAxYJaWsKTmJkVVERktvK7G-hebBhY'
    }
  };

  try{
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
}

const movieUrls = {
  popular: '/movie/popular',
  nowPlaying: '/movie/now_playing',
  topRated: '/movie/top_rated',
  upcoming: '/discover/movie'

}

const options = {
  method: 'GET',
  baseUrl: 'https://api.themoviedb.org/3',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
  }
}

const getMovies = async () => {
  let movies = {}
  const today = new Date();
  const threeMonthsFromToday = new Date(today.getTime() + (3 * 30 * 24 * 60 * 60 * 1000));

  const formattedToday = today.toISOString().split('T')[0]; // YYYY-MM-DD format
  const formattedThreeMonthsFromToday = threeMonthsFromToday.toISOString().split('T')[0];

  for(const url in movieUrls){
    options.url = `${options.baseUrl}${movieUrls[url]}`;
    try{
      if(url === 'upcoming'){
        options.params = {
          'primary_release_date.gte': formattedToday,
          'primary_release_date.lte': formattedThreeMonthsFromToday,
          language: 'en-US',
          page: '1'
        };
      }
      const response = await axios.request(options);
      movies[url] = response.data.results;
      await new Promise(resolve => setTimeout(resolve, 1000)); // To avoid rate limiting
    } catch (error) {
      return error;
    }
  }
  return movies;
}

export {
  getMovies,
  fetchMovieById,
  fetchMovieByTitle,
  fetchPopularMovies,
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
};

