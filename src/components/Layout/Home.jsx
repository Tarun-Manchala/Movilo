import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../utils/Header";
import MovieCard from "../Pages/MovieCard";
import Footer from "../utils/Footer";

function Home() {
  const [items, setItems] = useState();
  var Api_key = "c5b0d5b97a8679104b26f631af393414";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-IN`
      )
      .then((response) => {
        setItems(response.data.results);
      })
      .catch((error) => error);
  });

  return (
    <>
      <Header />
      <div className="mt-10 ">
        <div className="grid grid-cols-1 place-content-center p-5 xl:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4">
          {items &&
            items.map((items) => (
              <>
                <>
                  <MovieCard key={items.id} {...items} />
                </>
              </>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
