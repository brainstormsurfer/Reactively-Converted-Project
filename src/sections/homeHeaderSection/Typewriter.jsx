import React, { useState, useEffect } from "react";

const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isDeleting) {
        setText((prevText) => prevText.slice(0, -1));
      } else {
        setText((prevText) => words[index].slice(0, prevText.length + 1));
      }
    }, 200);

    // Pause for 2 seconds after a word is fully typed
    if (!isDeleting && text === words[index]) {
      clearInterval(interval);
      setTimeout(() => setIsDeleting(true), 2000);
    }

    // Reset after deleting
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
      setTimeout(() => setIsDeleting(false), 200); // Reset typing speed
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [index, text, isDeleting, words]);
  return (
    <h1 >
      I Am John The <span className="front-line-blinker">{text}</span>
    </h1>
  );
};

export default TypeWriter;
