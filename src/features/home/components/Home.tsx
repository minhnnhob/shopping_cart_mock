// Home.tsx
import React from 'react';
import { StyledHomeContainer, StyledImage } from './Home.styled';

const Home: React.FC = () => {
  return (
    <StyledHomeContainer>
      <StyledImage src={require("../../../assets/comming-soon.png")} />
    </StyledHomeContainer>
  );
};

export default Home;
