import React, { useState, useEffect } from 'react';

const TypeWriter = ({ words, wait }) => {
  const [txt, setTxt] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const current = wordIndex % words.length;
      const fullTxt = words[current];

      if (isDeleting) {
        setTxt((prevTxt) => {
          if (prevTxt.length === 0) {
            setIsDeleting(false);
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            return '';
          }
          return prevTxt.slice(0, -1);
        });
      } else {
        setTxt((prevTxt) => {
          if (prevTxt === fullTxt) {
            setIsDeleting(true);
            return prevTxt;
          }
          return fullTxt.slice(0, prevTxt.length + 1);
        });
      }
    };

    const timeoutId = setTimeout(type, wait);

    return () => clearTimeout(timeoutId);
  }, [txt, wordIndex, isDeleting, words, wait]);

  return (
    <h1>
      I Am John The <span className="txt">{txt}</span>
    </h1>
  );
};

export default TypeWriter;
