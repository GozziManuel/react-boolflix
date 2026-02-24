import { UseMovie } from "../context/MainContext";

export default function Navbar() {
  const { handleValue, movie } = UseMovie();
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <input
                class="form-control me-2"
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
