import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [currMovie, setCurrMovie] = useState(null);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setCurrMovie(json.data.movie);

    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={currMovie.medium_cover_image} alt={currMovie.title}></img>
          <h3> Title : {currMovie.title}</h3>
          <h3>
            {" "}
            Genres :{" "}
            {currMovie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </h3>
          <h3> Year : {currMovie.year}</h3>
          <h3> Languages : {currMovie.language}</h3>
          <p>{currMovie.description_full}</p>
          <h3>
            <Link to="/" style={{ textDecoration: "none", color: "aqua" }}>
              Go back
            </Link>
          </h3>
        </div>
      )}
    </div>
  );
}
export default Detail;
