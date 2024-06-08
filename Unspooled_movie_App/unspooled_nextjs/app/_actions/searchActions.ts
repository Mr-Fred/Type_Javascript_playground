"use server"
import dotenv from 'dotenv';

dotenv.config();

export async function fetchMovieByTitle(title: string) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
    }
  };

  const url = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`;
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data)
    return data.results;
  } catch (error) {
    throw error;
  }
}

