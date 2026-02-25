import axios from "axios";
import { createContext, use, useContext } from "react";
import { useState } from "react";

const FilmContext = createContext();

function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  function searchMovies(search) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=08221786cbbff2ff487de2a03b273534&query=${search}`,
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }
  const [series, setSeries] = useState([]);
  function searchSeries(search) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=08221786cbbff2ff487de2a03b273534&query=${search}`,
      )
      .then((res) => {
        setSeries(res.data.results);
      });
  }
  // ExportList
  const ContextValue = {
    searchMovies,
    movies,
    searchSeries,
    series,
  };

  return (
    <FilmContext.Provider value={ContextValue}>{children}</FilmContext.Provider>
  );
}
function UseMovie() {
  return useContext(FilmContext);
}

export { UseMovie, MovieProvider };
