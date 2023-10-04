import React from "react";

const TestimonialItem = ({review, person, imageSrc}) => {
  return (
    <div>
      <p>{review}</p>
      <ul>
        <li>
          <img src={imageSrc} alt={person} />
        </li>
        <li>{person}</li>
      </ul>
    </div>
  );
};

export default TestimonialItem;
