import { useParams } from "react";
import { Link, Outlet } from "react-router-dom";

const MovieDetails = () => {
    const { movieId } = useParams();

    // useEffect(() => {

    // }, [])

    return (
        <>
            <h1>Movie Details: {movieId}</h1>
            <ul>
                <li>
                    <Link to={`/movies/${movieId}/cast`}>Cast</Link>
                </li>
                <li>
                    <Link to={`/movies/${movieId}/reviews`}>Reviews</Link></li>
            </ul>
            <Outlet />
        </>
    );
};

export default MovieDetails;
