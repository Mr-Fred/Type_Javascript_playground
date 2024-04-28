"use server"
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export async function fetchMovieByTitle(title: string) {
  // const options = {
  //   method: 'GET',
  //   url: `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`,
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
  //   }
  // };
  // try {
  //   const response = await axios.request(options);
  //   return response.data.results;
  // } catch (error) {
  //   throw error;
  // }
  console.log(title);
}