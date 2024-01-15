import React from "react";

const Home: React.FC = () => {
    return (
        <div style={{ textAlign: "right", marginRight:"200px", backgroundColor: "#E5E7EB" }}>
            <img
            src={require("../../../assets/comming-soon.png")}
            alt=""
            style={{ width: "30%", height: "40%" }}
        />
        </div>
    );
};

export default Home;
