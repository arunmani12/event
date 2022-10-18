import React from "react";
import styles from "./Card.module.css";
import { SiProtonvpn } from "react-icons/si";

const Basic = ({user}) => {

  const calcId = () =>{
    if(user.planId){
      var id = user.planId.toString()
      if(id.length===1){
        id = 0 + id
      }
      return id
    }
    return '01'
  }

  return (
    <div
      className={`${styles.Card} ${styles["gradient-bg-welcome"]} ${styles.Basic}`}
    >
      <div style={{width:'100%'}}>
        <div className={styles.inside}>
          <SiProtonvpn fontSize={32} />
          <p style={{ marginLeft: "10px" }}>Basic</p>
        </div>

        <h3 className={styles.id}>AAMEC_IT_{calcId()}</h3>
        <h3 className={styles.name}>{user.Name}</h3>
      </div>

      <div>
        <p>Anjalai Ammal Mahalingam Engineering College</p>
      </div>
    </div>
  );
};

export default Basic;
