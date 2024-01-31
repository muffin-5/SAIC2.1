import React from 'react'
import iitbhu from '../../../assets/iitbhuillustration.svg'
// import MockStats from '../../../utility/MockStats'
import style from './MockInterviews.module.css'
const LatestStatistics = () => {
  return (
    <>
      <div className={style.mockinterviewsLatestStatistics}>
        <div className={style.mockinterviewsLatestStatisticsContainer}>
          <div className={style.mockinterviewsLatestStatisticsLeft}>
            <p className={style.mockinterviewsLatestStatisticsh}>Latest Statistics</p>
            {/* stats */}
            {/* <LatestStatistics /> */}
          </div>
          <div className={style.mockinterviewsLatestStatisticsRight}>
            {/* illustration */}
            <img className={style.mockinterviewsLatestStatisticsImg} src={ iitbhu } alt="iitbhuillustration.svg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestStatistics
