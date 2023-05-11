import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box ">
        <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1 year working</span>
        </div>

        <div className="about__box ">
        <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">completed</h3>
            <span className="about__subtitle">35 + projects</span>
        </div>

        <div className="about__box ">
        <i class='bx bx-support about__icon' ></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default info
