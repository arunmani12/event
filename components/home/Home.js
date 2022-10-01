import React from 'react'
import styles from './home.module.css'
import {FaChessKing} from 'react-icons/fa'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles["screen__background"]}>
			<span className={`${styles["screen__background__shape"]} ${styles["screen__background__shape4"]}`}></span>
			<span className={`${styles["screen__background__shape"]} ${styles["screen__background__shape3"]}`}></span>		
			<span className={`${styles["screen__background__shape"]} ${styles["screen__background__shape2"]}`}></span>
			<span className={`${styles["screen__background__shape"]} ${styles["screen__background__shape1"]}`}></span>
	   </div>

     <div className={styles.inside}>
       <FaChessKing size={144} color='#6C63AC' style={{marginBottom:'1.5rem'}}/>

       <p>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM</p>

       <button style={{ marginTop: "1rem" }} className="button login__submit">
            <span className="button__text">Login</span>
        </button>
     </div>

    </div>
  )
}

export default Home
