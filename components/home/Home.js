import React from "react";
import styles from "./home.module.css";
import Event from "../events/Event";



const Home = ({setShowAuth}) => {
  return (
    <div>
      <div className={styles.home}>

        <div className={styles.inside}>
          <p className="homeHeading">Techfinity&apos;22</p>
          <p>
            Techies from the Department of IT feel proud to benchmark you all
            over this massive stage of Technical and Non-Technical world...Time
            to gear up your shuttles of talent...Get ready folks..
          </p>
          <button onClick={()=>setShowAuth(prv=>!prv)}>Login</button>
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
            <img src="/logo.png" />
        </div>
      </div>
      <Event/>
    </div>
  );
};

export default Home;
