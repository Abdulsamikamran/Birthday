import React, { useState } from "react";
import love from "./assets/love-letter.gif";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <header className="text-center w-full flex-col h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <h1 className="text-4xl font-bold">Happy Birthday, My Love!</h1>

      {/* Show spinner while image is loading */}
      {!isLoaded && (
        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      )}

      <img
        src={love}
        width="200px"
        alt=""
        onLoad={() => setIsLoaded(true)}
        className={`${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      />

      <div className="font-bold">Aik pyar bhara khat aya hai apky naam</div>
    </header>
  );
};

export default Header;
