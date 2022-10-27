import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { AiOutlineLogin } from "react-icons/ai";
import { useRouter } from "next/router";
import { url } from "../global";
import Loader from "./Loader/Loader";



const NavBar = ({ setShowAuth,logedIn=false }) => {

  const [loading,setLoading] = useState(false)


  const router = useRouter();
  
  const logoutHandler = async() =>{
    setLoading(true)
    const res = await fetch(`${url}/api/logout`);
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    let response = await res.json();
    if (response.message == "Success") {
      setLoading(false)
      router.reload();
    } else {
      setLoading(false)
      toast("something went to wrong");
    }
  }


  const [currentWidth,setCurrentWidth] = React.useState()

  React.useEffect(() => {
    setCurrentWidth(window?.innerWidth)
  }, [])


  if(typeof window!='undefined'){
    window.addEventListener('resize', () => {
      setCurrentWidth(window?.innerWidth)
    });
  }

  function calName(){
    if(currentWidth>=500){
      return 'ANJALAI AMMAL MAHALINGAM ENGEERING COLLEGE'
    }else{
      return 'AAMEC'
    }
  }

  return (
    <>
    {loading && <Loader/>}
    <div className={styles.nav}>
      <p>{calName()}</p>
      {/* <AiOutlineLogin
        onClick={() => setShowAuth((prv) => !prv)}
        cursor="pointer"
        color="#6C63AC"
      />{" "} */}
      {!logedIn && <h2
        style={{ cursor: "pointer", marginLeft: "0.4rem" }}
        onClick={() => setShowAuth((prv) => !prv)}
      >
        Login
      </h2>}
      {
        logedIn && <h2
        style={{ cursor: "pointer", marginLeft: "0.4rem" }}
        // onClick={() => setShowAuth((prv) => !prv)}
        onClick={logoutHandler}
      >
        Logout
      </h2>
      }
    </div>
    </>
  );
};

export default NavBar;
