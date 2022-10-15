import React from "react";
import LoginHolder from "../components/Auth/LoginHolder";
import HomeContainer from "../components/home/Home";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";
import BasicContainer from "../components/Basic/Basic";
import ProContainer from "../components/Basic/Pro";
import { url } from "../global";

export default function Home(props) {
  const [showAuth, setShowAuth] = React.useState(false);

  if(props.status && !props.user.user[0].plan){
     return (
      <div style={{width:'100%'}}>
      {showAuth && <LoginHolder setShowAuth={setShowAuth} />}
      <NavBar setShowAuth={setShowAuth} logedIn={true}/>
      <div className={styles.container}>
        <Head />
        <BasicContainer user={props.user.user[0]}/>
      </div>
    </div>
    )
  }

   if(props.status && props.user.user[0].plan==='pro'){
    return (
      <div style={{width:'100%'}}>
      {showAuth && <LoginHolder setShowAuth={setShowAuth} logedIn={true}/>}
      <NavBar setShowAuth={setShowAuth} logedIn={true}/>
      <div className={styles.container}>
        <Head />
        <ProContainer user={props.user.user[0]}/>
      </div>
    </div>
    )
  }

  return (
    <div style={{ width: "100%" }}>
      {showAuth && <LoginHolder setShowAuth={setShowAuth} />}
      <NavBar setShowAuth={setShowAuth} />
      <HomeContainer />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const jwt = ctx.req.cookies.OursiteJWT;

  if (jwt) {
    const data = await fetch(`${url}/api/dashboard`, {
      headers: {
        method: "GET",
        "Content-Type": "application/json",
        Authorization: jwt,
      },
    });
    const user = await data.json();
    if (!user) {
      await fetch(`${url}/api/logout`);
      return {
        props: {
          status: false,
        },
      };
    }
    return {
      props: {
        status: true,
        user,
      },
    };
  } else {
    return {
      props: {
        status: false,
      },
    };
  }
}
