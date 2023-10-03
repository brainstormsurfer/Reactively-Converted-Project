
const StatsItem = ({title, icon, statsNumber}) => {
  return (
    <div>
      <ul>
        <li>
          <i className="fas fa-3x">{icon}</i>
        </li>
        <li className="stats-title">{title}</li>
        <li className="stats-number">{statsNumber}</li>
      </ul>
    </div>
  );
};

export default StatsItem;
