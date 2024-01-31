import React from 'react'
import arrowleft from '../../../assets/arrowleft.svg'
import arrowright from '../../../assets/arrowright.svg'
const Testimonials = () => {
  return (
    <>
      <div className="mockinterviewsTestimonials">
        <div className="mockinterviewsTestimonialsContainer">
          <p className="mockinterviewsTestimonialsH">Testimonials</p>
          <div className="mockinterviewsTestimonialsCards">

          </div>
          <div className="mockinterviewsTestimonialsCardsController">
            <img src={ arrowleft } alt="left arrow" />
            <div className="mockinterviewsTestimonialsCardsControllerScrollBar"></div>
            <img src={ arrowright } alt="right arrow" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
