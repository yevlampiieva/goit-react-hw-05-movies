import { MovieCard } from 'components/MovieCard/MovieCard';
import { StyledMoviesList, StyledMovieItem } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <StyledMoviesList>
      {movies.map(movie => (
        <StyledMovieItem key={movie.id}>
          <MovieCard movie={movie} />
        </StyledMovieItem>
      ))}
    </StyledMoviesList>
  );
};
