import React from "react";
import { movies } from "./moviesData";
import MovieCard from "../../components/CardComponent/MovieCard";
import "./AllMovies.scss";

const AllMovies = () => {
  let movieRows = [
    {
      items: [],
    },
  ];
  movies.forEach((movies, index) => {
    if (movieRows[movieRows.length - 1]?.items.length === 3) {
      movieRows.push({
        items: [movies],
      });
    } else {
      movieRows[movieRows.length - 1]?.items.push(movies);
    }
  });

  return (
    <div className={`container my-3`}>
      <div className={`movies-container`}>
        {movieRows.map((movies) => {
          return (
            <>
              <div className="movie-row">
                {movies.items?.map((movie, index) => (
                  <MovieCard movie={movie} />
                ))}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AllMovies;
