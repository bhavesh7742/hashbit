import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { movies } from "../data";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} style={{ width: "300px" }} />
      <p>{movie.description}</p>
      <button onClick={() => navigate(`/book/${movie.id}`)}>Book Seat</button>
    </div>
  );
};

export default MovieDetails;
