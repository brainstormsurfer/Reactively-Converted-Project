import Award from "./Award";
import { awards } from "../../utils/website_data";

const AboutMe = () => {
  return (
    <div className="about-info">
      <img src="../../../src/assets/img/about.jpg" alt="bio-image" className="bio-image"/>
      <div className="bio bg-light">
        <h4>Your Project Is In Safe Hands</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          nostrum, eaque velit ipsam facilis sed, quisquam nesciunt unde nihil
          voluptatum commodi consequuntur molestiae? Fugiat, perspiciatis
          reprehenderit. Architecto delectus vitae deserunt!
        </p>
      </div>
      {awards.map((award) => (
        <Award key={award.id} {...award} />
      ))}
    </div>
  );
};

export default AboutMe;
