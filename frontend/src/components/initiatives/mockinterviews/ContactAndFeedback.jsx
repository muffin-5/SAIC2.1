import React from 'react'
import mailicon from '../../../assets/mailicon.svg'
import phoneicon from '../../../assets/phoneicon.svg'
import style from './MockInterviews.module.css'

const ContactAndFeedback = () => 
{
  return (
    <>
      <div className={style.mockinterviewsContactAndFeedback}>
        <div className={style.mockinterviewsContactAndFeedbackContainer}>
          <div className={style.mockinterviewsContactAndFeedbackLeft}>
            <p className={style.mockinterviewsContactAndFeedbackLeftH1}>Tell us what you think</p>
            <p className={style.mockinterviewsContactAndFeedbackLeftp}>Please fill a short form to let us know what you think about the initiative</p>
            <div className={style.mockinterviewsContactAndFeedbackButton}>
              <p className={style.mockinterviewsContactAndFeedbackButtonp}>Feedback</p>
            </div>
          </div>
          <div className={style.mockinterviewsContactAndFeedbackLine}></div>
          <div className={style.mockinterviewsContactAndFeedbackRight}>
            <p className={style.mockinterviewsContactAndFeedbackRightH1}>Connect with us</p>
            <p className={style.mockinterviewsContactAndFeedbackRightp}>For any further queries, feel free to reach out to us</p>
            <div className={style.mockinterviewsContactAndFeedbackEmailAndNumber}>
              <div className={style.mockinterviewsContactAndFeedbackEmail}>
                <div className={style.mockinterviewsContactAndFeedbackEmailImg}>
                  <img src={ mailicon } alt="mailicon" />
                </div>
                <p className={style.mockinterviewsContactAndFeedbackEmailp}>example.mec22@itbhu.ac.in</p>
              </div>
              <div className={style.mockinterviewsContactAndFeedbackNumber}>
                <div className={style.mockinterviewsContactAndFeedbackNumberImg}>
                  <img src={ phoneicon } alt="phoneicon" />
                </div>
                <p className={style.mockinterviewsContactAndFeedbackNumberp}>+91-9372887174</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactAndFeedback
