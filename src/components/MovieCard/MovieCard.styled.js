import styled from 'styled-components';

export const StyledPoster = styled.img`
  width: 100%;
  object-fit: cover;
  /* transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1); */

  /* &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  } */
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
`;

export const StyledTitle = styled.h2`
  padding: 5px;
  margin: 0;
  text-align: center;
`;
