import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Info from "../sections/aboutAInfoSection/Info";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Logos from "../sections/aboutCLogosSection/Logos";
import Testimonials from "../components/Testimonials/Testimonials";
import SkillBars from "../sections/aboutBProgressBarSection/SkillBars";

const About = () => {
  return (
    <>
      <div>
        <Header />
        {/* Section A: Info */}
        <Info />
        {/* Section B: Progress Bars */}
        <SkillBars />
        {/* Section C: Logos */}
        <section className="about-c py-4 bg-light">
          <div className="container">
            <div className="about-logos">
              <img src="img/about-logos/logo-envato.png" alt />
              <img src="img/about-logos/logo-wordpress.png" alt />
              <img src="img/about-logos/logo-woocommerce.png" alt />
              <img src="img/about-logos/logo-magento.png" alt />
            </div>
          </div>
        </section>
        {/* Section D: Testimonials */}
        <section className="about-d py-4">
          <div className="container">
            <h2 className="section-title">Testimonials</h2>
            <div className="bottom-line" />
            <p className="lead text-center">
              Take a look at what my clients say...
            </p>
            <div className="testimonials">
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates officiis quia nostrum nam ab vel laudantium, ea,
                  corrupti culpa illum soluta ipsam eos, eius ad error voluptate
                  sint? Non, fugit!
                </p>
                <ul>
                  <li>
                    <img src="img/testimonials//person1.jpg" alt />
                  </li>
                  <li>Sam Smith, New York</li>
                </ul>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates officiis quia nostrum nam ab vel laudantium, ea,
                  corrupti culpa illum soluta ipsam eos, eius ad error voluptate
                  sint? Non, fugit!
                </p>
                <ul>
                  <li>
                    <img src="img/testimonials//person2.jpg" alt />
                  </li>
                  <li>Sara Williams, Michigan</li>
                </ul>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates officiis quia nostrum nam ab vel laudantium, ea,
                  corrupti culpa illum soluta ipsam eos, eius ad error voluptate
                  sint? Non, fugit!
                </p>
                <ul>
                  <li>
                    <img src="img/testimonials//person3.jpg" alt />
                  </li>
                  <li>Jill Johnson, London</li>
                </ul>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates officiis quia nostrum nam ab vel laudantium, ea,
                  corrupti culpa illum soluta ipsam eos, eius ad error voluptate
                  sint? Non, fugit!
                </p>
                <ul>
                  <li>
                    <img src="img/testimonials//person4.jpg" alt />
                  </li>
                  <li>Steve Thompson, Boston</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default About;
