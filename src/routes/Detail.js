import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { RotateLoader } from "react-spinners";
import styles from "../Detail.module.css";
import "../index.css";
import { BsArrowLeft } from "react-icons/bs";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [currMovie, setCurrMovie] = useState(null);
  const override = {
    position: "absolute",
    top: "50%",
    right: "50%",
    borderColor: "#E50915",
    textAlign: "center",
  };
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setCurrMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <RotateLoader color="#d8d8d8" cssOverride={override} />
      ) : (
        <div>
          <div
            className={styles.backgroundImg}
            style={{
              backgroundImage: `url(${currMovie.background_image})`,
            }}
          >
            <div className={styles.wrapper}>
              <div className={styles.movieInfo}>
                <h1>{currMovie.title}</h1>
                <h3>
                  {currMovie.year} |
                  {currMovie.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                  &nbsp;&nbsp;{" "}
                  <span style={{ color: "#ffc107" }}>&#9733; </span>
                  &nbsp;{currMovie.rating}
                </h3>
                <p>{currMovie.description_full}</p>
              </div>
              <div className={styles.cover}>
                <img
                  className={styles.coverImg}
                  src={currMovie.large_cover_image}
                  alt={currMovie.title}
                ></img>
              </div>
            </div>
          </div>
          <h1>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              &nbsp;&nbsp;
              <BsArrowLeft />
            </Link>
          </h1>
        </div>
      )}
    </div>
  );
}
export default Detail;
