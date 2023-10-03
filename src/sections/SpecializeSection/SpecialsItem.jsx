
const SpecialsItem = ({title, icon, description}) => {
  return (
        <div>
          <div className="fas fa-2x">{icon}</div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>      
      )
}

export default SpecialsItem