import 'react'
import PropTypes from 'prop-types'
import MovieCard from "../movieCard/moviecard";
// import "./moviecard.css"; // Make sure your styles are linked

function Movielist({movies}) {
  return (
    <div className="list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            description={movie.description}
            posterURL={movie.posterURL}
            rating={movie.rating}
            trailer={movie.trailer}
          />
        ))
      ) : (
        <p>No movies available.</p>
      )}
    </div>
  );
}

Movielist.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Movielist;