import React, { useState, useEffect } from "react";
import kiss from "./assets/kissing.gif";

// Import all images dynamically using import.meta.glob
const images = Object.values(
  import.meta.glob("./assets/*.jpg", { eager: true, import: "default" })
);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative pt-4">
      <div className="font-semibold text-xl text-center">
        To all the memories we made
      </div>
      <div className="font-semibold text-xl justify-center  flex items-center">
        <div className="text-center">along the way</div>
        <img src={kiss} width={32} alt="Kiss emoji" className="ml-2" />
      </div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-[600px] py-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
