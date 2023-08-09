import styled from 'styled-components';

export const StyledContent = styled.div`
  max-width: 700px;
  margin: 100px auto;
  background: white;
  padding: 40px;
  text-align: justify;
`;

export const StyledImage = styled.img`
  opacity: 0;
  transition: opacity 0.5s;
  &.active {
    opacity: 1;
  }
`;