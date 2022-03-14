import React from 'react';
import imageMinecraft from "./wallap.png"


const HomePage = () => {
  return (
    <div className="hpContainer">
      <div className="imgContainerLs">
        <h1 className="homeTitle">The best diamond market, start shopping now !</h1>
      <img className="landscapeImg" src={imageMinecraft} alt="minecraft landscape"></img>
      
      </div>
    </div>
  );
};

export default HomePage;
