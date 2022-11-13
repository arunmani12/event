import React from "react";
import styles from "./home.module.css";
import Event from "../events/Event";
import Clock from "../countdown/Clock";



const Home = ({setShowAuth}) => {
  return (
    <div>
      
      <div className={styles.home}>
          
        <div className={styles.inside}>
          <h3 style={{display:'flex',marginBottom:'1rem'}} >REGISTRATION CLOSED</h3>
          <h3 className={styles.simpleHeading}>Department Of Information Technology</h3>
          <h4 className={styles.simpleHeading}>Proudly Presents,</h4>
          <p className="homeHeading tech">Techfinity&apos;22</p>
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
      <Clock/>
      <Event/>
    </div>
  );
};

export default Home;
