import React, { useEffect, useState } from "react";
import axios from "../data/axios";
import requests from "../data/requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button banner__button__red">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h2 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h2>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;