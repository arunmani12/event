import React from "react";
import { useRouter } from "next/router";
import Event from "../events/Event";
import styles from "./Basic.module.css";
import Basic from "../card/Basic";
import Perimium from "../card/Permium";



const ProContainer = ({ user }) => {
  const router = useRouter();

  return (
    <div>
  

      <div className={styles.update}>
       

      <div className={styles.insideCard}>
        <Perimium/>
      </div>

        <div className={styles.insideCard}>
          <h2>Pro :-</h2>
          <p>
            {" "}
            Pro techie is able to access all the available Technical and
            Non-Technical events...So for what are you waiting for...?..Time for
            the Bull's Eye moment...Boost up Techie..!
          </p>
        </div>
      </div>

      <Event />
    </div>
  );
};

export default ProContainer;
