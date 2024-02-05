import React from "react";
import styles from "./FAQs.module.css";
import Faq from "../faqcomponent/Onefaq.jsx";
import mockinterviewsleftarrow_vector from "../../../../assets/mockinterviewsleftarrow_vector.svg";

const FAQs = () => {
  return (
    <div className={styles.mockinterviewsfaqs}>
      <div className={styles.mockinterviewsfaqstextwrapper}>
        Frequently Asked Questions
      </div>
      <Faq question="Is there accomodation available on campus?" />
      <Faq question="Is there accomodation available on campus?" />
      <Faq question="Is there accomodation available on campus?" />
      <Faq question="Is there accomodation available on campus?" />

      <div className={styles.mockinterviewsfaqsframe2}>
        <div className={styles.mockinterviewsfaqstestwrapper3}>View more</div>
        <img
          className={styles.mockinterviewsfaqsvector}
          alt="Vector"
          src={mockinterviewsleftarrow_vector}
        />
      </div>
    </div>
  );
};

export default FAQs;
