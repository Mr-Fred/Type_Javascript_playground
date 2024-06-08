import {type CardProps} from '@/components/MediaCard'
import {extractYear, roundToDecimal} from '@/app/utils/utilities'


export interface TmdbMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export async function fetchMovies(){

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTA2MWI3MzgzZWIyZjk4NmFlMTc4MDlhZjdlN2MyNyIsInN1YiI6IjY2MTI0ODI2ZGY4NmE4MDE3ZTU0NTUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aYev7plrL_mIkOAxYJaWsKTmJkVVERktvK7G-hebBhY'
    }
  };
  
  try {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    const data = await response.json()
    
    return data.results
  } catch (error) {
    console.error(error)
  }
}

export function formatMovie(movie: TmdbMovie): CardProps {

  return{
    title: movie.original_title,
    year: movie.release_date ? extractYear(movie.release_date) : null,
    rating: roundToDecimal(movie.vote_average),
    image: movie.backdrop_path
}}