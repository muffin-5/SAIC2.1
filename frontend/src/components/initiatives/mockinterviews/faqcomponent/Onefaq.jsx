import styles from "./Onefaq.module.css";
import mockinterviewsplus from "../../../../assets/mockinterviewsplus.svg";

function Faq(params) {
  return (
    <div className={styles.mockinterviewsfaq_frame}>
      <div className={styles.mockinterviewsfaq_div}>
        <img src={mockinterviewsplus} alt="+" />
      </div>
      <p className={styles.mockinterviewsfaq_textwrapper2}>{params.question}</p>
    </div>
  );
}

export default Faq;
