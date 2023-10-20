import { useEffect, useState } from "react";
import axios from "axios";
import "./Moviecast.css";

function MovieCastDetails({ id }) {
  const [hero, setHero] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c5b0d5b97a8679104b26f631af393414&language=en-US`
      )
      .then((res) => setHero(res.data.cast))
      .catch((error) => error);
  });
  return (
    <div className="movie-cast mt-5 font-body">
      <h1 className="text-8xl pl-6 text-white">Cast:</h1>
      <br />
      <div
        key={id}
        className="grid justify-center grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 p-6 gap-5 text-white"
      >
        {hero &&
          hero.slice(0, 19).map((hero) => (
            <>
              <div key={id} className="cast-card">
                <img
                  src={
                    !hero.profile_path
                      ? "https://soilspectroscopy.org/wp-content/uploads/2021/04/image-not-available.jpg"
                      : `https://image.tmdb.org/t/p/w500${hero.profile_path}`
                  }
                  alt={hero.name}
                  className="cast-pic"
                />
                <h2><i className="cast-name">Real Name </i>: {hero.name}</h2>
                <p><i className="cast-name">Character Play </i>: {hero.character}</p>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}
export default MovieCastDetails;
