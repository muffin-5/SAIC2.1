import React from 'react'
import topimage from '../../../assets/home.png'
import './Top.css'
const Top = () => {
  return (
    <>
    <div className="heroContainer">
      <div className="heroImage">
        <img src={topimage} alt="Image" />
      </div>
      <div className="heroText">
        <p id='text1'>Connect. Engage. Celebrate</p>
        <div className="text2">
        <p >Strengthening the IIT (BHU) fraternity,</p>
        <p >student to alumni</p>
        </div>
        <a className='text3' href="">Know More</a>
      </div>
    </div>
    </>
  )
}

export default Top
