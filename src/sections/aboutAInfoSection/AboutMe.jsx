import Award from "./Award"
import { awards } from "../../utils/website_data"

const AboutMe = () => {
  return (
<div class="about-info">
          <img src="img/about.jpg" alt="" class="bio-image" />
          <div class="bio bg-light">
            <h4>Your Project Is In Safe Hands</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis nostrum, eaque velit ipsam facilis sed, quisquam
              nesciunt unde nihil voluptatum commodi consequuntur molestiae?
              Fugiat, perspiciatis reprehenderit. Architecto delectus vitae
              deserunt!
            </p>
          </div>
          {awards.map((award) => {
            return <Award key={award.id} {...award} />;
          })}
        </div>
  )
}

export default AboutMe