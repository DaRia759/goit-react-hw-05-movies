import { useEffect, useState } from "react";
import { getTrending } from "components/api/MoviesAPI";
import { PageContainer } from "./Home.styled";
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
    const [moviesList, setMoviesList] = useState([]); 
    const location = useLocation();

  useEffect(() => {
    const asyncWrapper = async () => {
        try {
            await getTrending()
                .then(response => response.json())
                .then(response => setMoviesList(response.results));
      } catch (error) {
        console.error('Sorry, something went wrong. Try again');
      }
    }
    asyncWrapper();
  }, []);
    
    const moviesMarkup = moviesList.map(movie => {
        if (movie.title) {
            return (
                <li>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                        {movie.title}
                    </Link>
                </li>
            )
        } else {
            return '';
        }
    });

  return (
    <PageContainer>
          <div>
              <h1>Movies on trend for today:</h1>
              <ul>{moviesMarkup}</ul>
      </div>
    </PageContainer>
  );
};

export default Home;
