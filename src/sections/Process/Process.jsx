import { processItems } from "../../utils/homepage_data"
import ProcessItem from "./ProcessItem"

const Process = () => {
  return (
<section className="home-c text-center py-2">
  <div className="container">
    <h2 className="section-title">
      My Creative Process
    </h2>
    <div className="bottom-line" />
    <p className="lead">
      All of my UI/UX and design projects are based off of a practiced
      formula to get the result that I am looking for
    </p>
    <div className="process">
    {processItems.map((item) => <ProcessItem key={item.id} {...item}/>)}
    </div>
  
  </div>
</section>

  )
}

export default Process