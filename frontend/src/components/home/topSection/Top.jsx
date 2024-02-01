import React from 'react'
import topimage from '../../../assets/tricsl 3.png'
import style from './Top.module.css'
const Top = () => {
  return (
    <>
    <div className={style.heroContainer}>
      <div className={style.heroImage}>
        <img src={topimage} alt="Image" />
      </div>
      <div className={style.heroText}>
        <p id={style.text1}>Connect. Engage. Celebrate</p>
        <div className={style.text2}>
        <p >Strengthening the IIT (BHU) fraternity,</p>
        <p >student to alumni</p>
        </div>
        <a className={style.text3} href="">Know More</a>
      </div>
    </div>
    </>
  )
}

export default Top
