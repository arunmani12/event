import React from 'react'
import LoginHolder from '../components/Auth/LoginHolder'
import Head from '../components/Head'
import Main from '../components/Main'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'


export default function Home() {


  const [showAuth,setShowAuth] = React.useState(false)

  return (
    <>
    <NavBar setShowAuth={setShowAuth}/>
     <div className={styles.container}>
      <Head/>
      {/* <Main/>  */}
      {showAuth && <LoginHolder setShowAuth={setShowAuth}/>}
    </div>
    </>
  )
}
