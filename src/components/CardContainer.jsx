import { UseMovie } from "../context/MainContext";

export default function CardContainer() {
  const { movies, series } = UseMovie();
  console.log(movies);

  return (
    <>
      <div className="container-sm">
        <h2>Films</h2>
        <div className="row g-3 my-5">
          {movies.map((element, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="cardcontainer">
                  <img
                    src={
                      element.poster_path === null
                        ? "/notfoundimg.jpg"
                        : `https://image.tmdb.org/t/p/w342/${element.poster_path}`
                    }
                    alt="Img not founded"
                  />
                  <div className="info px-3">
                    <p className="mb-1">
                      <strong>Title: </strong>
                      {element.title}
                    </p>
                    <p className="mb-1">
                      <strong>Original Title: </strong>
                      {element.original_title}
                    </p>
                    <p className="mb-1">
                      <strong>Rating: </strong>
                    </p>
                    <p className="mb-1">
                      <strong>Overview: </strong>
                      {element.overview}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h2>Serie TV</h2>
        <div className="row g-3 my-5">
          {series.map((element, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="cardcontainer">
                  <img
                    src={
                      element.poster_path === null
                        ? "/notfoundimg.jpg"
                        : `https://image.tmdb.org/t/p/w342/${element.poster_path}`
                    }
                    alt="Img not founded"
                  />
                  <div className="info px-1">
                    <p className="mb-1">
                      <strong>Title: </strong>
                      {element.name}
                    </p>
                    <p className="mb-1">
                      <strong>Original Title: </strong>
                      {element.original_name}
                    </p>
                    <p className="mb-1">
                      <strong>Original Title: </strong>
                      {element.original_name}
                    </p>
                    <p className="mb-1">
                      <strong>Rating: </strong>
                    </p>
                    <p className="mb-1">
                      <strong>Overview: </strong>
                      {element.overview}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
