// import React from 'react'
// import Header from '../components/layouts/Header'
// import Specialize from '../components/Specialize/Specialize'
// import Stats from '../components/Stats/Stats'
// import Process from '../components/Process/Process'
// import Footer from '../layouts/Footer'
import "../styles/main.css";
import TypeWriter from "../components/Typewriter.jsx";

import logo from '../assets/img/logo.png';
import Navbar from "../layouts/Navbar";

const Home = () => {
  const words = ["Photographer", "Designer", "UI/UX Dev"];
  const navLinks = [
    { href: "index.html", current: true, text: "Home" },
    { href: "about.html", text: "About" },
    { href: "work.html", text: "Work" },
    { href: "contact.html", text: "Contact" },
  ];
  return (
    <>
      {/* <!-- Header --> */}
      <header className="header-home">
        <div className="container">          
          <Navbar logoSrc={logo} links={navLinks} />
          <div className="header-content">
            <h1>
              <TypeWriter words={words} wait={3000} />
            </h1>
            <p className="lead">
              I specialize in graphic design, UI/UX and photography
            </p>
            <a href="work.html" className="btn-light">
              View My Work
            </a>
          </div>
        </div>
      </header>

      {/* <!-- Section A: Specialize --> */}
      <section className="home-a text-center py-2">
        <div className="container">
          <h2 className="section-title">I Specialize In</h2>
          <div className="bottom-line" />
          <p className="lead">
            Photography as well as creating digital masterpieces and UI/UX
            layouts for websites and mobile applications
          </p>
          <div className="specials">
            <div>
              <i className="fas fa-file-alt fa-2x" />
              <h3>Concepting</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quclassNameem.
              </p>
            </div>
            <div>
              <i className="fas fa-desktop fa-2x" />
              <h3>UI/UX</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quclassNameem.
              </p>
            </div>
            <div>
              <i className="fas fa-object-ungroup fa-2x" />
              <h3>Visual Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quclassNameem.
              </p>
            </div>
            <div>
              <i className="fas fa-thumbs-up fa-2x" />
              <h3>Interaction</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quclassNameem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section B: Stats --> */}
      <section className="home-b text-center py-2">
        <div className="stats">
          <div>
            <ul>
              <li>
                <i className="fas fa-users fa-3x" />
              </li>
              <li className="stats-title">Clients</li>
              <li className="stats-number">100</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className="fas fa-award fa-3x" />
              </li>
              <li className="stats-title">Awards</li>
              <li className="stats-number">3</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className="fas fa-hourglass-start fa-3x" />
              </li>
              <li className="stats-title">Hours Worked</li>
              <li className="stats-number">3500</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className="fas fa-code-branch fa-3x" />
              </li>
              <li className="stats-title">Projects Completed</li>
              <li className="stats-number">135</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- Section C: Process --> */}
      <section className="home-c text-center py-2">
        <div className="container">
          <h2 className="section-title">My Creative Process</h2>
          <div className="bottom-line" />
          <p className="lead">
            All of my UI/UX and design projects are based off of a practiced
            formula to get the result that I am looking for
          </p>
          <div className="process">
            <div>
              <i className="fas fa-file-alt fa-4x process-icon my-2">
                <div className="process-step">1</div>
              </i>
              <h3>Discuss The Project</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                voluptas laborum repellendus dolorum! Harum, cupiditate.
              </p>
            </div>
            <div>
              <i className="fas fa-desktop fa-4x process-icon my-2">
                <div className="process-step">2</div>
              </i>
              <h3>Brainstorming ^ Concept</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                voluptas laborum repellendus dolorum! Harum, cupiditate.
              </p>
            </div>
            <div>
              <i className="fas fa-object-ungroup fa-4x process-icon my-2">
                <div className="process-step">3</div>
              </i>
              <h3>UI/UX Planning</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                voluptas laborum repellendus dolorum! Harum, cupiditate.
              </p>
            </div>
            <div>
              <i className="fas fa-thumbs-up fa-4x process-icon my-2">
                <div className="process-step">4</div>
              </i>
              <h3>Interaction</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                voluptas laborum repellendus dolorum! Harum, cupiditate.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer --> */}
      <footer className="main-footer">
        <div className="footer-content container">
          <p>Copyright © 2019. All Rights Reserved</p>
          <div className="social">
            <i className="fab fa-twitter" />
            <i className="fab fa-facebook" />
            <i className="fab fa-instagram" />
            <i className="fab fa-linkedin" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
{
  /* <Header />
 <Specialize />
 <Stats />
 <Process />
 <Footer /> */
}
