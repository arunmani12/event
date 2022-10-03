import React from "react";
import styles from "./home.module.css";
import { FaChessKing } from "react-icons/fa";
import Event from "../events/Event";



const Home = () => {
  return (
    <div>
      <div className={styles.home}>
        {/* <div className={styles["screen__background"]}>
          <span
            className={`${styles["screen__background__shape"]} ${styles["screen__background__shape4"]}`}
          ></span>
          <span
            className={`${styles["screen__background__shape"]} ${styles["screen__background__shape3"]}`}
          ></span>
          <span
            className={`${styles["screen__background__shape"]} ${styles["screen__background__shape2"]}`}
          ></span>
        </div> */}

        <div className={styles.inside}>
          <div style={{ marginBottom: "1.5rem" }}>
            <FaChessKing
              size={144}
              color="#6C63AC"
              style={{ marginBottom: "0.5rem" }}
            />
            <p style={{ fontWeight: "bold", fontSize: "32px" }}>
              Techfinity'22
            </p>
          </div>

          <p>
            Techies from the Department of IT feel proud to benchmark you all
            over this massive stage of Technical and Non-Technical world...Time
            to gear up your shuttles of talent...Get ready folks..
          </p>

          <button
            style={{ marginTop: "1rem" }}
            className="button login__submit"
          >
            <span className="button__text">Login</span>
          </button>
        </div>
      </div>
      <Event/>
    </div>
  );
};

export default Home;
