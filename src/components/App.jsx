import { NavLink, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import Home from 'pages/HomePage';
import MovieDetails from 'pages/MovieDetailsPage';
import Movies from 'pages/MoviesPage';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <StyledLink to={'/'}>Home</StyledLink>
          </li>
          <li>
            <StyledLink to={'/movies'}>Movies</StyledLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
