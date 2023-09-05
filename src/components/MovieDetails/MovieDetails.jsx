import { useEffect, useParams } from "react";

const MovieDetails = () => {
    const { movieId } = useParams();

    // useEffect(() => {

    // }, [])

    return <>
        Movie Details: {movieId}
    </>;
};

export default MovieDetails;