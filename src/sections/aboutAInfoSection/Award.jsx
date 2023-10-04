import React from "react";

const Award = ({ id, title, icon, description }) => {
  return (
    <div className={id}>
      <i className="fas fa-award fa-3x">{icon}</i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Award;
