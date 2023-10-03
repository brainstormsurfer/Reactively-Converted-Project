import SpecialsItem from "./SpecialsItem";
import { specializeItems } from '../../../utils/specializeData'

const Specialize = () => {
  return (
    <section className="home-a text-center py-2">
      <div className="container">
        <h2 className="section-title">I Specialize In</h2>
        <div className="bottom-line" />
        <p className="lead">
          Photography as well as creating digital masterpieces and UI/UX layouts
          for websites and mobile applications
        </p>
        <SpecialsItem />
        <div className="specials">
          {specializeItems.map((item) => (
            <SpecialsItem key={id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialize;
