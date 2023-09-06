import { Routes, Route } from "react-router-dom";
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Layout from "./Layout";
import { Container } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={<div>Cast</div>} />
            <Route path='reviews' element={<div>Reviews</div>} />
          </Route>
        </Route> 
      </Routes>
    </Container>
  );
};
