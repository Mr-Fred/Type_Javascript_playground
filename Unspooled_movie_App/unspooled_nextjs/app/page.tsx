import Navbar from "@/components/navbar";

import HeaderBar from "@/components/headerBar";
import MovieList from "@/components/movieList";

export default function Home() {
  const movies = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "The Shawshank Redemption",
      rating: 5,
      genre: "Drama",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through friendship.",
      releaseDate: "1994-09-23",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "The Godfather",
      rating: 5,
      genre: "Crime Drama",
      description:
        "The story of the Corleone family under patriarch Vito Corleone, focusing on the transformation of his youngest son, Michael, from reluctant family outsider to ruthless mafia boss.",
      releaseDate: "1994-09-23",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "The Dark Knight",
      rating: 5,
      genre: "Action, Crime, Thriller",
      description:
        "When the menacing Joker emerges from criminal shadows, he forces Batman to confront the very nature of heroism and villainy.",
      releaseDate: "1994-09-23",
    },

    {
      id: 4,
      image: "https://via.placeholder.com/150",
      title: "The Lord of the Rings: The Return of the King",
      rating: 5,
      genre: "Fantasy, Adventure",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw attention away from Frodo and Sam, who are sneaking deep into Mordor to destroy the One Ring.",
      releaseDate: "1994-09-23",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      title: "Pulp Fiction",
      rating: 4.5,
      genre: "Crime, Comedy, Drama",
      description:
        "The lives of two mob hit men, a boxer, and a gangster's wife intertwine in a series of violent events.",
      releaseDate: "1994-09-23",
    },
  ];
  
  return (
    <>
      <HeaderBar />
      <Navbar/>
      <MovieList movies={movies} />
    </>
  );
}
