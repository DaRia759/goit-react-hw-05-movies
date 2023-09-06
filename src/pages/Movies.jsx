import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Container } from "./Movies.styled";

const Movies = () => {
    const [movies, setMovies] = useState([
        'movie-1',
        'movie-2',
        'movie-3',
    ]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieId = searchParams.get('movieId') ?? '';

    // useEffect(() => {

    // }, [])

    const updateQueryString = evt => {
        const movieIdValue = evt.target.value;
        if (movieIdValue === '') {
            return setSearchParams({});
        }
        setSearchParams({ movieId: movieIdValue });
    }

    const visibleMovies = movies.filter(movie => movie.includes(movieId));

    return (
        <Container>
            <input
                type="text"
                value={movieId}
                onChange={updateQueryString}
            />

            <button onClick={() => setSearchParams({})}>Search</button>
            <ul>
                {visibleMovies.map(movie => {
                    return (
                    <li>
                        <Link key={movie} to={`${movie}`}>
                            {movie}
                        </Link>      
                    </li>
                );
            })}   
            </ul>
        </Container>
        
    );
};

export default Movies;
