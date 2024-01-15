import React from "react";

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: "right", maxWidth: "100%", overflow: "hidden" }}>
      <img
        src={require("../../../assets/comming-soon.png")}
        alt=""
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
};

export default Home;
