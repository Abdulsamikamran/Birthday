import React, { useState, useEffect } from "react";
import kiss from "./assets/kissing.gif";

import img1 from "./assets/11.jpg";
import img2 from "./assets/12.jpg";
import img3 from "./assets/13.jpg";
import img4 from "./assets/14.jpg";
import img6 from "./assets/16.jpg";
import img22 from "./assets/22.jpg";
import img33 from "./assets/33.jpg";
import img44 from "./assets/44.jpg";
import img55 from "./assets/55.jpg";
import img66 from "./assets/66.jpg";
import img77 from "./assets/77.jpg";
import img88 from "./assets/88.jpg";
import img99 from "./assets/99.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  // img5,
  img6,
  img22,
  img33,
  img44,
  img55,
  img66,
  img77,
  img88,
  img99,
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-8">
      <div className="font-semibold text-xl text-center">
        To all the memories we made
      </div>
      <div className="font-semibold text-xl justify-center py-4 flex items-center ">
        <div className="  text-center ">along the way</div>
        <img src={kiss} width={32} alt="Kiss emoji" className="ml-2" />
      </div>
      <div className="overflow-hidden">
        {" "}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
