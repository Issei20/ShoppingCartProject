import React from 'react';
import imageMinecraft from "./wallap.png"


const HomePage = () => {
  return (
    <div className="hpContainer">
      <div className="imgContainerLs">
      <img className="landscapeImg" src={imageMinecraft} alt="minecraft landscape"></img>
      </div>
    </div>
  );
};

export default HomePage;
