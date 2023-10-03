import React from 'react'
import Navbar from '../Navbar'
import Header from './Header';

const Header = () => {
  return (
  <div>
  <header id="header-inner">
    <div className="container">
      <Navbar />
      {/* <nav id="main-nav">
        <img src="img/logo.png" alt="My Portfolio" id="logo" />
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html" className="current">About</a></li>
          <li><a href="work.html">Work</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav> */}
    </div>
  </header>
</div>

  )
}

export default Header