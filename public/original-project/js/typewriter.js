import React, { useState, useEffect } from 'react';

const TypeWriter = ({ text, wait = 3000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      // Current index of word
      const current = wordIndex % text.length;
      // Get full text of current word
      const fullTxt = text[current];

      // Check if deleting
      if (isDeleting) {
        // Remove char
        setCurrentText(fullTxt.substring(0, currentText.length - 1));
      } else {
        // Add char
        setCurrentText(fullTxt.substring(0, currentText.length + 1));
      }

      // Insert txt into element
      // (this is done in React by setting the state)

      // Initial Type Speed
      let typeSpeed = 300;

      if (isDeleting) {
        typeSpeed /= 2;
      }

      // If word is complete
      if (!isDeleting && currentText === fullTxt) {
        // Make pause at end
        typeSpeed = wait;
        // Set delete to true
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        // Move to next word
        setWordIndex(wordIndex + 1);
        // Pause before start typing
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    };

    type();

    return () => {
      clearInterval(type);
    };
  }, [text, wait, wordIndex, isDeleting]);

  return <span className="txt">{currentText}</span>;
};

export default TypeWriter;
