import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import jsonFile from "./assets/json.js";
import MovieList from "./components/movieList/movielist.jsx"
import Filter from "./components/filter/filter.jsx";
import AddMovie from "./components/addMovie/AddMovie.jsx";
import MovieDetails from "./components/movieDetails/movieDetails.jsx";

function App() {
  const [movies, setMovies] = useState(jsonFile);

  // callback function
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]); // ✅ Correct way to update state
  };

  // callback function for filtering by title
  const handleMovieFilter = (title) => {
    const films = jsonFile.filter((movie) =>
      movie.title.toLowerCase().startsWith(title.toLowerCase())
    );
    setMovies(films);
  };

  // callback function for rating
  const handleRatingFilter = (rating) => {
    const films = jsonFile.filter((movie) => movie.rating >= rating);
    setMovies(films);
  };

  return (
    <Router>
      <div className="app">
        <AddMovie handleAddMovie={handleAddMovie} />
        <Filter
          handleMovieFilter={handleMovieFilter}
          handleRatingFilter={handleRatingFilter}
        />
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;