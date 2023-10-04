const ProgressBar = ({ skill, progress }) => {
  return (
    <>
      <h4>{skill}:</h4>
      <div className="progress">
        <div style={{ width: {progress} }} />
      </div>
    </>
  );
};

export default ProgressBar;
