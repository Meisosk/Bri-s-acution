import React from "react";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <div className="w-full">
      <img
        src={hero}
        alt=""
        className="w-full max-w-full h-auto block mx-auto"
      />
    </div>
  );
}

export default Hero;
