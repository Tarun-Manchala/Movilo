import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import MovieView from "../Pages/MovieView";
import Header from "../utils/Header";

function View() {
  const [movie, setMovie] = useState();
  var Api_key = "c5b0d5b97a8679104b26f631af393414";
  var moviesid = useParams();

  const API_URL = `https://api.themoviedb.org/3/movie/${moviesid.id}?api_key=${Api_key}&language=en-US`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => error);
  }, [movie]);
  console.log(movie);
  return (
    <>
      <Header />
      <MovieView {...movie} />
    </>
  );
}

export default View;
