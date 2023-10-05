import React, { useState, useEffect } from "react";
const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(200);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isDeleting) {
        setText((prevText) => prevText.slice(0, -1));
      } else {
        setText((prevText) => words[index].slice(0, prevText.length + 1));
      }

      if (!isDeleting && text === words[index]) {
        clearInterval(interval);
        setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting letters
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTypingSpeed(200); 
      }
    }, typingSpeed);

    return () => clearInterval(interval); 
  }, [index, text, isDeleting, words, typingSpeed]);

  return (
    <h1>
      I Am John The <span className="front-line-blinker">{text}</span>
    </h1>
  );
};
export default TypeWriter;
