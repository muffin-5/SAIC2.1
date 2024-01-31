import React from 'react'
import iitbhu from '../../../assets/iitbhuillustration.svg'
// import MockStats from '../../../utility/MockStats'
const LatestStatistics = () => {
  return (
    <>
      <div className="mockinterviewsLatestStatistics">
        <div className="mockinterviewsLatestStatisticsContainer">
          <div className="mockinterviewsLatestStatisticsLeft">
            <p className="mockinterviewsLatestStatisticsh">Latest Statistics</p>
            {/* stats */}
            {/* <LatestStatistics /> */}
          </div>
          <div className="mockinterviewsLatestStatisticsRight">
            {/* illustration */}
            <img className='mockinterviewsLatestStatisticsImg' src={ iitbhu } alt="iitbhuillustration.svg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestStatistics
