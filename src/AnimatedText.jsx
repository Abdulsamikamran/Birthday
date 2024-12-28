import React, { useState, useEffect } from "react";

const adjectives = [
  "Mera Bacha",
  "Mera Shehzada",
  "My World",
  "My Life",
  "My Pumpkin",
  "Meri Jaaaan",
  "And Most Importantly My Loving Wife!",
];

const AnimatedText = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [loop, setLoop] = useState(true);

  useEffect(() => {
    let timeout;

    if (loop) {
      if (isDeleting) {
        if (charIndex > 0) {
          timeout = setTimeout(() => {
            setCharIndex((prev) => prev - 1);
            setDisplayedText(
              "💙" + adjectives[currentWord].slice(0, charIndex) + "💙"
            ); // Add blue heart emoji after each word
          }, 100); // Adjust this value to control the speed of deletion
        } else {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % adjectives.length); // Go to next word, loop if needed
        }
      } else {
        if (charIndex < adjectives[currentWord].length) {
          timeout = setTimeout(() => {
            setCharIndex((prev) => prev + 1);
            setDisplayedText(
              "💙" + adjectives[currentWord].slice(0, charIndex + 1) + "💙"
            ); // Add blue heart emoji after each word
          }, 300); // Adjust this value to control the speed of addition
        } else {
          setIsDeleting(true);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWord, loop]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoop(true);
    }, 800); // This controls how long the full loop waits before restarting
    return () => clearTimeout(timeout);
  }, [loop]);

  return <div className="text-2xl font-bold text-center">{displayedText}</div>;
};

export default AnimatedText;
