import React from "react";
import LoginHolder from "../components/Auth/LoginHolder";
import HomeContainer from "../components/home/Home";
import Perimium from "../components/card/Permium";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  console.log(props);

  const [showAuth, setShowAuth] = React.useState(false);

  if (!props.status) {
    return (
      <div style={{width:'100%'}}>
       {showAuth && <LoginHolder setShowAuth={setShowAuth} />}
        <NavBar setShowAuth={setShowAuth} />
        <HomeContainer/>
      </div>
    );
  }

  return (
    <div style={{width:'100%'}}>
      {showAuth && <LoginHolder setShowAuth={setShowAuth} />}
      <NavBar setShowAuth={setShowAuth} />
      <div className={styles.container}>
        <Head />
        {/* <Main/>  */}
        {/* <Basic/> */}
        <Perimium />
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const jwt = ctx.req.cookies.OursiteJWT;
  console.log(jwt);

  if (jwt) {
    const data = await fetch(`http://localhost:3000/api/dashboard`, {
      headers: {
        method: "GET",
        "Content-Type": "application/json",
        Authorization: jwt,
      },
    });
    const user = await data.json();
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
