import React from "react";
import styles from "./Card.module.css";
import { SiProtonvpn } from "react-icons/si";

const Basic = ({width,height}) => {
  return (
    <div
      className={`${styles.Card} ${styles["gradient-bg-welcome"]} ${styles.Basic}`}
    >
      <div style={{width:'100%'}}>
        <div className={styles.inside}>
          <SiProtonvpn fontSize={32} />
          <p style={{ marginLeft: "10px" }}>Basic Plan</p>
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

export default Basic;
