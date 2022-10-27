import React from "react";

import Event from "../events/Event";
import styles from "./Basic.module.css";
import Perimium from "../card/Permium";



const ProContainer = ({ user }) => {
  

  return (
    <div style={{paddingTop:'10rem'}}>


      <div className={styles.update}>
       

      <div className={styles.insideCard}>
        <Perimium user={user}/>
      </div>

        <div className={styles.insideCard}>
        <h2>My Events :-</h2>
           {!user.events.length  ?<>
              <p>Please scroll down and register for individual events (Basic) by clicking register button</p>
              <p>limit:3</p>
           </>:
           <>
              <p>limit:3</p>
              {user.events.map((d,i)=><p key={d}>{i+1 +"."+" "+ d}</p>)}
           </>}
        </div>
      </div>

      <Event user={user}/>
    </div>
  );
};

export default ProContainer;
