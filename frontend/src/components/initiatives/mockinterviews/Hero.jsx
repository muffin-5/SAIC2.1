import React from 'react'
import style from './MockInterviews.module.css'
const Hero = () => {
  return (
    <>
      <div className={style.mockinterviewsHero}>
        <div className={style.mockinterviewsHeroContainer}>
            <p className={style.mockinterviewsHeroh1}>Skyrocketing careers: One interview at a time</p>
            <div className={style.mockinterviewsLine}></div>
            <div className={style.mockinterviewsHeroBody}>
                <div className={style.mockinterviewsHeroBodyh}>
                <p className={style.mockinterviewsHeroBodyh2}>Alumni-Guided Mock Interviews</p>
                <p className={style.mockinterviewsHeroBodyh3}>Real-Time Simulation | Resume Verification | GDs</p>
                </div>
                <p className={style.mockinterviewsHeroBodyp}>Annually conducted, this initiative aids students preparing for internships and placements by offering job interview readiness and insights from experienced alumni. Students benefit from resume critiques, realistic interview practice, and alumni feedback, fostering confidence, communication skills, and interview acumen. Beyond student support, these guided mock interviews facilitate alumni engagement, enabling them to contribute to their alma mater while sharing career journeys and valuable navigation advice.</p>
            </div>
            <div className={style.mockinterviewsHeroButtons}>
                <div className={style.mockinterviewsHeroButtons1}>Register</div>
                <div className={style.mockinterviewsHeroButtons2}>Guidelines</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero
