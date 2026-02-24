import { createContext, useContext } from "react";
import { useState } from "react";

const FilmContext = createContext();

function MovieProvider({ children }) {
  const [movie, setmovie] = useState("");
  const handleValue = (e) => {
    setmovie(e.target.value);
  };
  // ExportList
  const ContextValue = {
    movie,
    handleValue,
  };

  return (
    <FilmContext.Provider value={ContextValue}>{children}</FilmContext.Provider>
  );
}
function UseMovie() {
  return useContext(FilmContext);
}

export { UseMovie, MovieProvider };
