import React from "react";
import StartIcon from "./../../assets/icons/five-star-rating.png";
import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className={`movie-card`} key={movie.id}>
        <div className="p-0 poster-container">
          <img
            src={movie.poster_path}
            alt={movie.title}
            className="poster-container_img"
          />
        </div>
        <div className="details-container">
          <div className="details-container_info">
            <h5>{movie.title}</h5>
            <p className="mb-0 row mb-2">
              <span className="text-secondary col-8 rating-stars">
                <img src={StartIcon} alt="rating" />
              </span>
              <span className="data mx-0 col-2">5.0</span>
            </p>
            <p className="mb-0 row">
              <span className="text-secondary col-6">Release date : </span>
              <span className="data mx-0 col-6">{movie.release_date}</span>
            </p>
            <p className="mb-0 row">
              <span className="text-secondary  col-6">Vote : </span>
              <span className="data mx-0  col-6">{movie.vote_average}</span>
            </p>
            <p className="mb-0 row">
              <span className="text-secondary col-6">language :</span>
              <span className="details_info mx-0 col-6">
                {movie.original_language}
              </span>
            </p>
            <div class="actions mt-5">
              <button className="btn trailer">
                Trailer <span className="action-icon">⏵</span>
              </button>
              <button className="btn plus mx-2">+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
