import { UseMovie } from "../context/MainContext";

export default function Navbar() {
  const { handleValue, movie } = UseMovie();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                //
                onChange={handleValue}
                value={movie}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
