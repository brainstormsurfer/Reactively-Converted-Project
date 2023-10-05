import { aboutLogos } from "../utils/website_data";
import { Info, SkillBars, AboutLogo,  Testimonials } from '../sections'

const About = () => {
  return (
      <div>
        {/* Section A: Info */}
        <Info />
        {/* Section B: Progress Bars */}
        <SkillBars />
        {/* Section C: Logos */}
        <section className="about-c py-4 bg-light">
          <div className="container">
            <div className="about-logos">
              {aboutLogos.map((logo) => (
                <AboutLogo key={logo.id} {...logo} />
              ))}
            </div>
          </div>
        </section>
        {/* Section D: Testimonials */}
        <Testimonials />              
      </div>
  );
};

export default About;
