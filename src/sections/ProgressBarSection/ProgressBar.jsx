import React from 'react'

const ProgressBar = () => {
  return (
   <section id="about-b" className="bg-dark py-3">
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

  )
}

export default ProgressBar