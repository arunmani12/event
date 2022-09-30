import React from 'react'
import styles from './NavBar.module.css'

const NavBar = ({setShowAuth}) => {
  return (
    <div className={styles.nav}>
        <h2 style={{cursor:'pointer'}} onClick={()=>setShowAuth(prv=>!prv)}>Login</h2>
    </div>
  )
}

export default NavBar