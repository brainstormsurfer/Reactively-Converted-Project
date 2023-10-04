import React from 'react'
import { image1 } from 'https://github.com/brainstormsurfer/html-to-react_conversion-exercise/blob/0883934ac2a27d18f28af5b8784351dfeb42b105/src/assets/img/items/item1.png';

const Gallerist = () => {
  return (
    <section className="text-center py-3">
    <div className="container">
      <h2 className="section-title">My Work</h2>
      <div className="bottom-line"></div>
      <p className="lead">
        Check out some of my projects
      </p>
      <div className="items">
        <div className="item">
          <div className="item-image">
            <img src="../assets/img/items/item1.png" alt="" />
          </div>
          <div className="item-text">
            <div className="item-text-wrap">
              <p className="item-text-category">Design</p>
              <h2 className="item-text-title">Great Gradients</h2>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-image">
            <img src="../assets/img/items/item2.png" alt="" />
          </div>
          <div className="item-text">
            <div className="item-text-wrap">
              <p className="item-text-category">UI/UX</p>
              <h2 className="item-text-title">World Experience</h2>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-image">
            <img src="../assets/img/items/item3.png" alt="" />
          </div>
          <div className="item-text">
            <div className="item-text-wrap">
              <p className="item-text-category">Photography & Design</p>
              <h2 className="item-text-title">Vanishing</h2>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-image">
            <img src="../assets/img/items/item4.png" alt="" />
          </div>
          <div className="item-text">
            <div className="item-text-wrap">
              <p className="item-text-category">Design</p>
              <h2 className="item-text-title">Gap INC</h2>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-image">
            <img src="../assets/img/items/item5.png" alt="" />
          </div>
          <div className="item-text">
            <div className="item-text-wrap">
              <p className="item-text-category">Mobile UI Design</p>
              <h2 className="item-text-title">Face THe Experience</h2>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-image">
            <img src="../assets/img/items/item6.png" alt="" />
          </div>
          <div className="item-text">
            <div className="item-text-wrap">
              <p className="item-text-category">Design Concept</p>
              <h2 className="item-text-title">Bezier Curves</h2>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-image">
            <img src="../assets/img/items/item7.png" alt="" />
          </div>
          <div className="item-text">
            <div className="item-text-wrap">
              <p className="item-text-category">Photography</p>
              <h2 className="item-text-title">Dock Ponder</h2>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-image">
            <img src="../assets/img/items/item8.png" alt="" />
          </div>
          <div className="item-text">
            <div className="item-text-wrap">
              <p className="item-text-category">Web Applications</p>
              <h2 className="item-text-title">Restaurant App</h2>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-image">
            <img src="../assets/img/items/item9.png" alt="" />
          </div>
          <div className="item-text">
            <div className="item-text-wrap">
              <p className="item-text-category">Social Network Concept</p>
              <h2 className="item-text-title">FriendFeed</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Gallerist