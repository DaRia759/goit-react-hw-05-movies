import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { Container } from "./Movies.styled";
import { getMovieByName } from "components/api/MoviesAPI";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryText = searchParams.get('query');
  const location = useLocation();

  const fetchQueryMovies = async movieName => {
    try {
      const moviesByName = await getMovieByName(movieName);
      const data = await moviesByName.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error); 
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchQueryMovies(queryText);
  };

  useEffect(() => {
    if (queryText) {
      fetchQueryMovies(queryText);
    } else {
      setMovies([]);
    }
  }, [queryText]);

  const moviesMarkup =
    movies.length > 0 &&
    movies.map(movie => {
      return (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      );
    });

  const updateQueryString = (evt) => {
    const movieIdValue = evt.target.value;
    setSearchParams({ query: movieIdValue });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={queryText || ''}
          onChange={updateQueryString}
        ></input>

        <button type="submit">Search</button>
        <ul>
          {moviesMarkup}
        </ul>
      </form>
    </Container>
  );
};

export default Movies;
