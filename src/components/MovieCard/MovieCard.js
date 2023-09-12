import { StyledPoster, StyledTitle } from './MovieCard.styled';

export const MovieCard = ({ movie: { poster_path, title } }) => {
  return (
    <>
      <StyledPoster
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
      />
      <StyledTitle>{title}</StyledTitle>
    </>
  );
};
