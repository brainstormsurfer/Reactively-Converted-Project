// import Header from "../components/layouts/Header";
// import Footer from "../components/layouts/Footer";
import Info from "../sections/aboutAInfoSection/Info";
// import Testimonials from "../components/Testimonials/Testimonials";
import SkillBars from "../sections/aboutBProgressBarSection/SkillBars";
import { aboutLogos } from "../utils/website_data";
import AboutLogo from "../sections/aboutCLogosSection/AboutLogo";
import Testimonials from "../sections/aboutDTestimonialsSection/Testimonials";
const About = () => {
  return (
    <>
      <div>
        {/* <Header /> */}
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
        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default About;
