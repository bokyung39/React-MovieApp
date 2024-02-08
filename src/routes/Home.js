import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "../Home.module.css";
import { RotateLoader } from "react-spinners";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMoives] = useState([]);
  const override = {
    position: "absolute",
    top: "50%",
    right: "50%",
    borderColor: "#E50915",
    textAlign: "center",
  };
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMoives(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <RotateLoader color="#d8d8d8" cssOverride={override} />
      ) : (
        <section>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              {movies.map((movie) => (
                <div className={styles.movie} key={movie.id}>
                  <Movie
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    genres={movie.genres}
                    year={movie.year}
                    rating={movie.rating}
                    backgroundImg={movie.background_image}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;
