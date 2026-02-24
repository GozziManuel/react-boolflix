import { UseMovie } from "../context/MainContext";

export default function CardContainer() {
  const { movies } = UseMovie();
  console.log(movies);

  return (
    <>
      <div className="container-sm">
        <div className="row g-3 my-5">
          {movies.map((element, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="cardcontainer">
                  <img
                    src={`https://image.tmdb.org/t/p/w342/${element.poster_path}`}
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
