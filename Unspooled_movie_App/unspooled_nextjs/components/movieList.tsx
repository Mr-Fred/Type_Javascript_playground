import React from 'react';
import MovieCard from  "@/components/movieCard";

interface MovieListProps {
  movies: {
  id: number;
  image: string;
  title: string;
  rating: number;
  genre: string;
  description: string;
  releaseDate: string;
  }[]
}

export default function MovieList({movies}: MovieListProps) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
      {/* MovieCard components */}
      {movies.map((movie: any) => (
        <MovieCard key={movie.id}  {...movie} />
      ))}
    </div>
  );
};
