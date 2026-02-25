import { UseMovie } from "../context/MainContext";
import { useState } from "react";

export default function Navbar() {
  const { searchMovies, searchSeries } = UseMovie();
  const [movie, setmovie] = useState("");
  const handleValue = (e) => {
    setmovie(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(movie);
    searchSeries(movie);
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand titlenavbar" href="#">
          BoolFix
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <form onSubmit={handleSubmit}>
                <input
                  className="form-control me-2"
                  placeholder="Search"
                  aria-label="Search"
                  //
                  onChange={handleValue}
                  value={movie}
                />
                <button className="btn btn-outline-success">Search</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
