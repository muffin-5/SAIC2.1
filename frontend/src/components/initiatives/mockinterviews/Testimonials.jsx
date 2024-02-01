import React from 'react'
import arrowleft from '../../../assets/arrowleft.svg'
import arrowright from '../../../assets/arrowright.svg'
import style from './MockInterviews.module.css'
const Testimonials = () => {
  return (
    <>
      <div className={style.mockinterviewsTestimonials}>
        <div className={style.mockinterviewsTestimonialsContainer}>
          <p className={style.mockinterviewsTestimonialsH}>Testimonials</p>
          <div className={style.mockinterviewsTestimonialsCards}>

          </div>
          <div className={style.mockinterviewsTestimonialsCardsController}>
            <img src={ arrowleft } alt='left arrow' />
            <div className={style.mockinterviewsTestimonialsCardsControllerScrollBar}></div>
            <img src={ arrowright } alt='right arrow' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
