// HomeStyled.tsx
import styled from 'styled-components';

const mobileBreakpoint = '768px';
const tabletBreakpoint = '1024px';

export const StyledHomeContainer = styled.div`
  text-align: right;
  height: 42.3rem;
  overflow: hidden;

  @media (max-width: ${tabletBreakpoint}) {
    text-align: center;
  }
  @media (max-width: ${mobileBreakpoint}) {
    text-align: center;
  }
`;

export const StyledImage = styled.img`
  padding-right: 100px;
  padding-top: 50px;
  width: 30rem;
  height: 30rem;

  @media (max-width: ${tabletBreakpoint}) {
    width: 80%; /* Adjust the width as needed for tablet */
    height: auto;
    padding-right: 0;
    padding-top: 20px;
  }

  @media (max-width: ${mobileBreakpoint}) {
    width: 100%; /* Adjust the width as needed for mobile */
    padding-right: 0;
    padding-top: 20px;
  }
`;
