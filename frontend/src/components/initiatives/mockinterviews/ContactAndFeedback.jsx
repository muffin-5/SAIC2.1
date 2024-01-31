import React from 'react'
import mailicon from '../../../assets/mailicon.svg'
import phoneicon from '../../../assets/phoneicon.svg'
const ContactAndFeedback = () => 
{
  return (
    <>
      <div className="mockinterviewsContactAndFeedback">
        <div className="mockinterviewsContactAndFeedbackContainer">
          <div className="mockinterviewsContactAndFeedbackLeft">
            <p className="mockinterviewsContactAndFeedbackLeftH1">Tell us what you think</p>
            <p className="mockinterviewsContactAndFeedbackLeftp">Please fill a short form to let us know what you think about the initiative</p>
            <div className="mockinterviewsContactAndFeedbackButton">
              <p className="mockinterviewsContactAndFeedbackButtonp">Feedback</p>
            </div>
          </div>
          <div className="mockinterviewsContactAndFeedbackLine"></div>
          <div className="mockinterviewsContactAndFeedbackRight">
            <p className="mockinterviewsContactAndFeedbackRightH1">Connect with us</p>
            <p className="mockinterviewsContactAndFeedbackRightp">For any further queries, feel free to reach out to us</p>
            <div className="mockinterviewsContactAndFeedbackEmailAndNumber">
              <div className="mockinterviewsContactAndFeedbackEmail">
                <div className="mockinterviewsContactAndFeedbackEmailImg">
                  <img src={ mailicon } alt="mailicon" />
                </div>
                <p className="mockinterviewsContactAndFeedbackEmailp">example.mec22@itbhu.ac.in</p>
              </div>
              <div className="mockinterviewsContactAndFeedbackNumber">
                <div className="mockinterviewsContactAndFeedbackNumberImg">
                  <img src={ phoneicon } alt="phoneicon" />
                </div>
                <p className="mockinterviewsContactAndFeedbackNumberp">+91-9372887174</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactAndFeedback
