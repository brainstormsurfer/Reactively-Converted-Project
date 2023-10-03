import React from 'react'

const Stats = () => {
  return (
   <section id="home-b" className="text-center py-2">
  <div className="stats">
    <div>
      <ul>
        <li><i className="fas fa-users fa-3x" /></li>
        <li className="stats-title">Clients</li>
        <li className="stats-number">100</li>
      </ul>
    </div>
    <div>
      <ul>
        <li><i className="fas fa-award fa-3x" /></li>
        <li className="stats-title">Awards</li>
        <li className="stats-number">3</li>
      </ul>
    </div>
    <div>
      <ul>
        <li><i className="fas fa-hourglass-start fa-3x" /></li>
        <li className="stats-title">Hours Worked</li>
        <li className="stats-number">3500</li>
      </ul>
    </div>
    <div>
      <ul>
        <li><i className="fas fa-code-branch fa-3x" /></li>
        <li className="stats-title">Projects Completed</li>
        <li className="stats-number">135</li>
      </ul>
    </div>
  </div>
</section>

  )
}

export default Stats