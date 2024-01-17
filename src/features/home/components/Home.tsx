import React from 'react';


const Home: React.FC = () => {
  return (
    <div  style={{ textAlign: 'right',  overflow: 'hidden' }}>

     <img src={require("../../../assets/comming-soon.png")} style={{maxWidth: "20rem",height: "20rem",}}  />
    </div>
  );
};

export default Home;
