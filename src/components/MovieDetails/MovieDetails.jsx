import React, { useState, useEffect } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { getMovieById } from 'components/api/MoviesAPI';

const MovieDetails = () => {
    const [selectedMovie, setSelectedMovie] = useState({});
    const { movieId } = useParams();
    const location = useLocation();
    const backLink = location.state?.from ?? '/';

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await getMovieById(movieId);
                const data = await response.json();
                setSelectedMovie(data); 
            } catch (error) {
                console.error(error); 
            }
        };
        fetchDetails();
    }, [movieId]);

    return (
        <div>
            <div>
                <Link to={backLink}>
                    <button>
                        Go Back
                    </button>
                </Link>
            </div>
            <div>
                {
                    <img src={selectedMovie.poster_path
                    ? `https://image.tmdb.org/t/p/w185${selectedMovie.poster_path}`
                        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVm-NOFWAwzSDCG2503S24gnb6ij0l6Qz1URGonjsEqkf6fmGza-C7SW9iuHQaJj_7sA&usqp=CAU'}
                        alt={selectedMovie.title}
                    />
                }
            </div>
            <div>
                <h2>{selectedMovie.title}</h2>
                <h3>User Score: </h3>
                {selectedMovie.vote_average}
                <h3>Overviews</h3>
                <span>{selectedMovie.overview}</span>
                <h3>Genres</h3>
                {selectedMovie.genres?.map((genre, index) => {
                    
                    return (
                        <div key={selectedMovie.title + index}>
                            {genre.name}
                        </div>
                    );
                })}
            </div>
            <ul>
                <p>Aditional information:</p>
                <li>
                    <Link to={`/movies/${movieId}/cast`}>Cast</Link>
                </li>
                <li>
                    <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

export default MovieDetails;
