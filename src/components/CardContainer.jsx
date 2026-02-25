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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
