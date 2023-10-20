import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../Pages/MovieCard";
import Header from "../utils/Header";

const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');

const curr_date = year +"-"+ month +"-"+ day ;

console.log(curr_date);

function Upcoming() {
  var Api_key = "c5b0d5b97a8679104b26f631af393414";
  const [up, setUp] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=3`
      )
      .then((res) => {
        setUp(res.data.results);
        console.log(res.data);
      })
      .catch((error) => error);
  });
  return (
    <>
      <Header />
      <div className="mt-10 ">
        <div className="grid grid-cols-1 place-content-center p-5 xl:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4">
          {" "}
          {up &&
            up.map((items) => (
              (items.release_date > curr_date) ?
              <>
                <MovieCard key={items.id} {...items} />
              </>: null
            ))}
        </div>
      </div>
    </>
  );
}

export default Upcoming;
