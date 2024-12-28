import React, { useState, useEffect } from "react";
import Confetti from "react-confetti"; // Import react-confetti
import "./index.css"; // Or whatever the path is to your Tailwind CSS file
import Carousel from "./Carousel";
import Header from "./Header";
import AnimationParagraphs from "./AnimationParagraphs";
import AnimatedText from "./AnimatedText";
import logo from "./assets/logo.gif";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("question"); // Initial screen state
  const [showMainContent, setShowMainContent] = useState(false); // State to control the visibility of main content
  const [confettiVisible, setConfettiVisible] = useState(true); // State to control confetti visibility
  const [headerVisible, setHeaderVisible] = useState(true); // State to control header visibility

  useEffect(() => {
    if (currentScreen === "main") {
      // Show the main content after 3 seconds and hide the header
      const timer = setTimeout(() => {
        setHeaderVisible(false); // Hide the header after 3 seconds
        setShowMainContent(true); // Show the main content after 3 seconds
        setConfettiVisible(false); // Stop confetti effect
      }, 9000); // 3000 milliseconds = 3 seconds

      return () => clearTimeout(timer); // Clean up the timer when the component unmounts
    }
  }, [currentScreen]); // Run effect when currentScreen changes

  const handleAnswer = (answer) => {
    if (answer === "yes") {
      setCurrentScreen("love"); // Show "I love you too" screen
      setTimeout(() => setCurrentScreen("main"), 5000); // Transition to main app after 5 seconds
    } else {
      setCurrentScreen("sad"); // Show sad screen
      setTimeout(() => setCurrentScreen("main"), 5000); // Transition to main app after 5 seconds
    }
  };

  return (
    <div className="font-custom w-full h-screen text-black">
      {currentScreen === "question" && (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white">
          <h1 className="text-4xl text-center font-bold mb-8">
            Pehlay mujhai ye btao do you love me?
          </h1>
          <div className="flex space-x-4">
            <button
              onClick={() => handleAnswer("yes")}
              className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-700 transition"
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer("no")}
              className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-700 transition"
            >
              No
            </button>
          </div>
        </div>
      )}

      {currentScreen === "love" && (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <h1 className="text-2xl font-bold text-center">
            arrayyy I love you more my princess 💖
          </h1>
        </div>
      )}

      {currentScreen === "sad" && (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-gray-500 to-black text-white">
          <h1 className="text-2xl font-bold text-center">
            pata tha mujhai chalo kia kr saktay hain I still love you...😔
          </h1>
        </div>
      )}

      {currentScreen === "main" && (
        <>
          {confettiVisible && (
            <Confetti
              width={window.innerWidth} // Full width of the window
              height={window.innerHeight} // Full height of the window
            />
          )}

          <div
            className={`${headerVisible ? "opacity-100" : "opacity-0"} 
              ${!headerVisible ? "hidden" : "block"}
              transition-opacity duration-2000`}
          >
            <Header />
          </div>

          <div
            className={`${
              showMainContent ? "opacity-100" : "opacity-0"
            }  bg-gradient-to-r bg-white transition-opacity duration-9000`}
          >
            {showMainContent && (
              <>
                <div className="w-full flex justify-center items-center py-10 h-[100px] bg-blue-600">
                  <img className="w-20" src={logo} alt="" />
                </div>
                <AnimationParagraphs />
                <AnimatedText />
                <Carousel />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
