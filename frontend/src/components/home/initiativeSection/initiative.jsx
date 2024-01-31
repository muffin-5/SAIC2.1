import React from 'react'
import style from './Initiative.module.css'
import arrow from '../../../assets/arrow.svg'
const Initiative = () => {
  return (
   <>
   <div className={style.initContainer}>
    <div className={style.topContainer}>
        <div className={style.topLeft}>

        </div>
        <div className={style.topRight}>

        </div>
    </div>
    <div className={style.midContainer}>
        <p className={style.first}>Take a look</p>
        <p className={style.second}>Our Initiatives</p>
        <div className={style.third}>
        <div className={style.thirdInner} >
        <a href='#' className={style.thirdText}>Student- Alumni Mentorship Program</a>
        <img src={arrow} alt="" />
        </div>
        <div className={style.thirdInner} >
        <a href='#' className={style.thirdText}>Alumni-Guided Mock Interviews</a>
        <img src={arrow} alt="" />
        </div>
        <div className={style.thirdInner} >
        <a href='#' className={style.thirdText}>Alumni Visiting Faculty</a>
        <img src={arrow} alt="" />
        </div>
        <div className={style.thirdInner} >
        <a href='#' className={style.thirdText}>Alumni Newsletter</a>
        <img src={arrow} alt="" />
        </div>
        </div>
    </div>
    <div className={style.bottomContainer}>
        <div className={style.bottomLeft}>

        </div>
        <div className={style.bottomRight}>

        </div>
    </div>
   </div>
   </>
  )
}
export default Initiative
