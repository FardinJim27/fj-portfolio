import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [ 
          "Fullstack Web Developer",
          "Software Developer",
          "Django Developer",
          "MERN Stack Developer",
          "Blockchain Developer",
          "Machine Learning Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
