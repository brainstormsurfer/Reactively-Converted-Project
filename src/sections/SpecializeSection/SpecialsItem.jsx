
const SpecialsItem = ({title, icon, description}) => {
  return (
        <div>
          <i className="fas fa-2x">{icon}</i>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>      
      )
}

export default SpecialsItem