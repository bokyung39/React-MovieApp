import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// function Movie({ id, coverImg, title, summary, genres }) {
//   return (
//     <div>
//       <img src={coverImg} alt={title} />
//       <h2>
//         <Link to={`/movie/${id}`}>{title}</Link>
//       </h2>
//       <p>{summary}</p>
//       <ul>
//         {genres.map((g) => (
//           <li key={g}>{g}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function Movie({ id, coverImg, title, summary, genres, year, rating }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
      </Link>
      {/* <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.year}>{year}</p>
        <p className={styles.rating}>
          <span>&#9733;</span> {rating}
        </p>
      </div> */}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
