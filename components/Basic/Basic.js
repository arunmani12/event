import React from "react";
import { useRouter } from "next/router";
import Event from "../events/Event";
import styles from "./Basic.module.css";
import Basic from "../card/Basic";
import Perimium from "../card/Permium";
import { BiRupee } from "react-icons/bi";


const BasicContainer = ({ user }) => {
  const router = useRouter();

  return (
    <div>
  

      <div className={styles.update}>
       

      <div className={styles.insideCard}>
        <Basic width='100%' height='16rem'/>
      </div>

        <div className={styles.insideCard}>
          <h2>Basic :-</h2>
          <p>
            {" "}
            Basic techie is able to access all the available Technical and
            Non-Technical events except Paper Presentation and Web Design...So
            for what are you waiting for...?..Time for the Bull's Eye
            moment...Boost up Techie..!
          </p>
        </div>
      </div>

      <Event />
    </div>
  );
};

export default BasicContainer;
