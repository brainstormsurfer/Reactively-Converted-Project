import React from "react";

const ProcessItem = ({ title, processStep, icon, description }) => {
  return (
    <div>
      <i className="fas fa-4x process-icon my-2">
        {icon}
        <div className="process-step">{processStep}</div>
      </i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProcessItem;
