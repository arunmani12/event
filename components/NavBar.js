import React from "react";
import styles from "./NavBar.module.css";
import { AiOutlineLogin } from "react-icons/ai";

const NavBar = ({ setShowAuth }) => {

  
  let logoutHandler = async() =>{
   
}

  return (
    <div className={styles.nav}>
      <AiOutlineLogin
        onClick={() => setShowAuth((prv) => !prv)}
        cursor="pointer"
        color="#6C63AC"
      />{" "}
      <h2
        style={{ cursor: "pointer", marginLeft: "0.4rem" }}
        onClick={() => setShowAuth((prv) => !prv)}
      >
        Login
      </h2>
    </div>
  );
};

export default NavBar;
