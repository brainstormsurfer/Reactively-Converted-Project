import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Info from '../sections/InfoSection/Info'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Logos from '../sections/LogosSection/Logos'
import Testimonials from '../components/Testimonials/Testimonials'

const About = () => {
  return (
    <>
<div>
  {/* Header */} 
  {/* <header className="header-inner">
    <div className="container">
      <nav className="main-nav">
        <img src="img/logo.png" alt="My Portfolio" className="logo" />
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html" className="current">About</a></li>
          <li><a href="work.html">Work</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header> */}
   {/* Section A: Info */} 
  {/* <section className="about-a text-center py-3">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="bottom-line" />
      <p className="lead">
        Let me tell you a little about myself and what I do...
      </p>
      <div className="about-info">
        <img src="img/about.jpg" alt className="bio-image" />
        <div className="bio bg-light">
          <h4>Your Project Is In Safe Hands</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis nostrum, eaque velit ipsam facilis sed, quisquam
            nesciunt unde nihil voluptatum commodi consequuntur molestiae?
            Fugiat, perspiciatis reprehenderit. Architecto delectus vitae
            deserunt!
          </p>
        </div>
        <div className="award-1">
          <i className="fas fa-award fa-3x" />
          <h3>Award One</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            magni!
          </p>
        </div>
        <div className="award-2">
          <i className="fas fa-award fa-3x" />
          <h3>Award Two</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            magni!
          </p>
        </div>
        <div className="award-3">
          <i className="fas fa-award fa-3x" />
          <h3>Award Three</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            magni!
          </p>
        </div>
      </div>
    </div>
  </section> */}
   {/* Section B: Progress Bars */} 
  <section className="about-b bg-dark py-3">
    <div className="container">
      <h2 className="section-title">Technical Skills</h2>
      <div className="bottom-line" />
      <h4>Photography:</h4>
      <div className="progress">
        <div style={{width: '100%'}} />
      </div>
      <h4>Adobe Photoshop:</h4>
      <div className="progress">
        <div style={{width: '80%'}} />
      </div>
      <h4>Adobe Illustrator:</h4>
      <div className="progress">
        <div style={{width: '70%'}} />
      </div>
      <h4>HTML &amp; CSS:</h4>
      <div className="progress">
        <div style={{width: '100%'}} />
      </div>
      <h4>Wordpress:</h4>
      <div className="progress">
        <div style={{width: '80%'}} />
      </div>
      <h4>Magento:</h4>
      <div className="progress">
        <div style={{width: '70%'}} />
      </div>
    </div>
  </section>
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
      <p className="lead text-center">Take a look at what my clients say...</p>
      <div className="testimonials">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates officiis quia nostrum nam ab vel laudantium, ea,
            corrupti culpa illum soluta ipsam eos, eius ad error voluptate
            sint? Non, fugit!
          </p>
          <ul>
            <li><img src="img/testimonials//person1.jpg" alt /></li>
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
            <li><img src="img/testimonials//person2.jpg" alt /></li>
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
            <li><img src="img/testimonials//person3.jpg" alt /></li>
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
            <li><img src="img/testimonials//person4.jpg" alt /></li>
            <li>Steve Thompson, Boston</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
   {/* Footer */} 
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
</div>

    </>
  )
}

export default About