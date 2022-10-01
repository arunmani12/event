import React from "react";
import styles from "./Card.module.css";
import {AiFillPropertySafety} from "react-icons/ai"

const Perimium = () => {
  return (
    <div
      className={`${styles.Card} ${styles["eth-card"]} ${styles.Basic}`}
    >
      <div style={{width:'100%'}}>
        <div className={styles.inside}>
          <AiFillPropertySafety fontSize={32} />
          <p style={{ marginLeft: "10px" }}>Pro Plan</p>
        </div>

        <h3 className={styles.id}>AAMEC_IT_01</h3>
        <h3 className={styles.name}>Arunmani</h3>
      </div>

      <div>
        <p>Anjali ammal engeering college</p>
      </div>
    </div>
  );
};

export default Perimium;