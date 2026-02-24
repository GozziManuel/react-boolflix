import axios from "axios";
import { useEffect, useState } from "react";
import { UseMovie } from "../context/MainContext";

export default function CardContainer() {
  const { movie } = UseMovie();
  const [getMovie, setGetMovie] = useState([]);
  const MovieGetApi = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=08221786cbbff2ff487de2a03b273534&query=${movie}`,
      )
      .then((res) => {
        setGetMovie(res.data.results);
      });
  };
  useEffect(MovieGetApi, []);
  console.log(getMovie);
  console.log(
    `https://api.themoviedb.org/3/search/movie?api_key=08221786cbbff2ff487de2a03b273534&query=${movie}`,
  );

  return (
    <>
      <div className="container-sm"></div>
    </>
  );
}
