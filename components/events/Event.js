import React from "react";
import { BiRupee } from "react-icons/bi";
import { url } from "../../global";
import styles from "./event.module.css";
import { useRouter } from "next/router";
import Rules from "../rules/Rules";
import Rounds from "../rules/Rounds";
import RoundsMobile from "../rules/RoundsMobile";
import RulesMobile from "../rules/RulesMobile";

const Event = ({ user }) => {
  const router = useRouter();

  const priceEvent = [
    {
      url: "/crypto.svg",
      title: "1. CryptoMot (Jumbled Words)",
      name: "CryptoMot",
      quote: `"One cartographer does not only understand how to analyse cryptography by old times"`,
      author: "Matt Harvey",
      about:
        "Master in decrypting problems in life...?Time to test your technical proficiency...Here's your stage to prove your skills in Engineering...Grab up your seat..and stay tunes for the journey of Decryption of words",
      plan: "basic",
    },
    {
      url: "/nightowl.svg",
      title: "2. Night Owl Quiz (Tech and GK Quiz)",
      name: "Night Owl Quiz",
      quote:
        "Does this scenario ring a bell? Or do your nights seamlessly wander with peculiar realisations and conclusions that keep you awake...?You're already halfway through Night Owl Quiz... Keep your heads awake to steer clear through this General Knowledge, Aptitude and technical quiz...nothing about the textbooks.",
      about:
        "Imagine this...It's pitch dark and way past twelve...You're lying down on the bed, pillow cozy under your neck and eyes fixated on the ceiling fan screeching with a tune you instantly procreate and start jamming inside your head...You are drifting off at the comfort of how warm your bed feels. And at some point you realize, the word 'bed' actually looks like a bed",
      plan: "basic",
    },
  ];

  const normalEvent = [
    {
      url: "/presentation.svg",
      title: "1. De Paper Fest (Paper Presentation)",
      name: "De Paper Fest",
      quote: `"If you don't know what you want to achieve in your presentation your audience never will."`,
      author: "Harvey Diamond",
      about:
        "High over your ideas...? Time to implement up your brainy things ahead through presentation and pieces of sheets...Have your stage here to present your brainy stuffs and bag home the price for the best one",
      plan: "pro",
    },
    {
      url: "/programming.svg",
      title: "2. Web Roar (Web Designing)",
      name: "Web Roar",
      quote: `Web Roar tests you based on your way with the languages like HTML, CSS, JS , React, etc...The limelight falls on recreation and creativity in design aspects, inclusive of both User Interface(UI) and User Experience(UX).So folks, sit back and put your fingers to work...It's time for your website to roar`,
      about:
        "If you think math is hard, try website design! Department of IT is here with yet another creative-amidst-the-techies event",
      plan: "pro",
    },
  ];

  const nonTechnicalEvents = [
    {
      url: "/fandom.svg",
      title: "1.Phantasm Quiz (Fantasy Quiz)",
      name: "Phantasm Quiz",
      quote: `Come..join us on Phantasm Quiz - a trick or treat for cine-philes and fanatics like you all...! The quiz will cover fandoms based on books, movies, TV/web series, video games and comics...You do not want to miss out on this, if anything..!`,
      about:
        "What is the address of the fictional character in Avengers? What made the Justice league to be broken into two pieces...? ",
      plan: "basic",
    },
    {
      url: "/direction.svg",
      title: "2.Hopper's Mystification (Crime Investigation)",
      name: "Hopper's Mystification",
      quote: `"Mysteries abound where most seek for answers"`,
      author: "Ray Bradbury",
      about:
        "Hopper and the peers are ready with detective lenses to solve mysteries not only using logic but also cryptographic techniques to decode the secrets and figure out the prime suspect...Like Sherlock would say, it's your turn to know what other people don't know",
      plan: "basic",
    },
  ];

  const nonTechnicalEventsTwo = [
    {
      url: "/connection.svg",
      title: "3.Juncture (Connection)",
      name: "Juncture",
      quote: `"Juncture" is a medley of Fantasy concepts and elusive puzzles. Approach the questions from a entertainment point of view and be able to show off your entertainment proficiency.Keep in mind to look at the bigger picture in order to piece it together...Good Luck...!`,
      about:
        "Are you fond of solving puzzles..? Are you passionate about Fantasies..? Then you are in for a treat.",
      plan: "basic",
    },
    {
      url: "/acting.svg",
      title: "4. Mono Effet(Mono Acting)",
      name: "Mono Effet",
      quote: `"Acting is not about being someone different. It's finding the similarity in what is apparently different, then finding myself in there."`,
      author: "Meryl Streep",
      about:
        "Are you a best in expressing out as act...?..Want a stage to act over...?...Come up with us to express your technical and non-technical strength as a actor...",
      plan: "basic",
    },
  ];

  //Crypto

  // console.log(user);

  const registerForEvent = async (event) => {
    if (checkstatus(event) === "Registered") {
      return;
    }

    const res = await fetch(`${url}/api/registerevent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        DOB: user.DOB,
        event,
      }),
    });
    let response = await res.json();
    if (response.message == "okie") {
      // setLoading(false)
      router.reload();
    } else {
      alert("something went to wrong");
      // setLoading(false)
      // toast("email or dob miss match");
    }
  };

  const checkstatus = (name) => {
    const isFound = user.events.filter((d) => d === name);
    if (isFound.length) {
      return "Registered";
    } else {
      return "Register";
    }
  };

  const [currentWidth, setCurrentWidth] = React.useState();

  React.useEffect(() => {
    setCurrentWidth(window?.innerWidth);
  }, []);

  if (typeof window != "undefined") {
    window.addEventListener("resize", () => {
      setCurrentWidth(window?.innerWidth);
    });
  }

  return (
    <>
      <div className={styles.parent}>
        <p className="homeHeading" style={{ fontSize: "2rem" }}>
          Cash Price Events
        </p>
        <div className={styles.paidevent}>
          {normalEvent.map((d, i) => (
            <div key={i} className={styles.eventCard}>
              <img src={d.url} />
              <h3>{d.title}</h3>
              <p>{d.about}</p>
              <br />
              <p>{d.quote}</p>
              {d.author && <p>-{d.author}</p>}

              <div
                style={{
                  display: "flex",
                  marginTop: "1rem",
                  // background:'#fff',
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <h4>Price worth</h4>{" "}
                <BiRupee
                  color="rgb(232, 51, 99)"
                  style={{ marginLeft: "0.5rem" }}
                />{" "}
                <h4>8000</h4>
              </div>
              {user && user.plan === "pro" && (
                <button
                  style={{
                    left: "7rem",
                    cursor: "pointer",
                    backgroundColor:
                      checkstatus(d.name) === "Registered"
                        ? "rgb(232, 154, 175)"
                        : "rgb(232, 51, 99)",
                    borderColor:
                      checkstatus(d.name) === "Registered"
                        ? "rgb(232, 154, 175)"
                        : "rgb(232, 51, 99)",
                  }}
                  onClick={() => registerForEvent(d.name)}
                  className={styles.plan}
                >
                  {checkstatus(d.name)}
                </button>
              )}
              <button className={styles.plan}>{d.plan}</button>
            </div>
          ))}
        </div>
      </div>

     


      <div style={{ margin: "1rem auto",width:'90%',paddingBottom:'2rem' }} className={styles.eventCard}>
         <p>Overall Event Queries : Mohnish(9150830225)</p>
         <hr style={{ margin: "1rem auto" }}/>
         <p>For Technical Issues : Arunmani(8610435514)</p>
                  {/* <h3>Staff Coordinator</h3> */}
                  
      </div>
    

      {currentWidth >= 550 ? (
        <>
          <Rules />
          <Rounds />
        </>
      ) : (
        <>
          <RoundsMobile />
          <RulesMobile />
        </>
      )}

      {/* -------//------- */}
      <div className={styles.parent}>
        <h3 className="homeHeading" style={{ fontSize: "2rem" }}>
          Normal Events
        </h3>
        <div className={styles.paidevent}>
          {priceEvent.map((d, i) => (
            <div key={i} className={styles.eventCard}>
              <img src={d.url} />
              <h3>{d.title}</h3>
              <p>{d.about}</p>
              <br />
              {d.quote && <p>{d.quote}</p>}
              {d.author && <p style={{ marginTop: "0.5rem" }}>-{d.author}</p>}
              {d.title === "2. Night Owl Quiz" && (
                <p>
                  Does this scenario ring a bell? Or do your nights seamlessly
                  wander with peculiar realisations and conclusions that keep
                  you awake...? You&apos;re already halfway through Night Owl
                  Quiz... Keep your heads awake to steer clear through this
                  General Knowledge, Aptitude and technical quiz...nothing about
                  the textbooks.
                </p>
              )}
              {user && (
                <button
                  style={{
                    left: "7rem",
                    cursor: "pointer",
                    backgroundColor:
                      checkstatus(d.name) === "Registered"
                        ? "rgb(232, 154, 175)"
                        : "rgb(232, 51, 99)",
                    borderColor:
                      checkstatus(d.name) === "Registered"
                        ? "rgb(232, 154, 175)"
                        : "rgb(232, 51, 99)",
                  }}
                  onClick={() => registerForEvent(d.name)}
                  className={styles.plan}
                >
                  {checkstatus(d.name)}
                </button>
              )}
              <button className={styles.plan}>{d.plan}</button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.parent}>
        <h3 className="homeHeading" style={{ fontSize: "2rem" }}>
          Non Technical Events
        </h3>
        <div className={styles.paidevent}>
          {nonTechnicalEvents.map((d, i) => (
            <div key={i} className={styles.eventCard}>
              <img src={d.url} />
              <h3>{d.title}</h3>
              <p>{d.about}</p>
              <br />
              {d.quote && <p>{d.quote}</p>}
              {d.author && <p style={{ marginTop: "0.5rem" }}>-{d.author}</p>}
              {d.title === "2. Night Owl Quiz" && (
                <p>
                  Does this scenario ring a bell? Or do your nights seamlessly
                  wander with peculiar realisations and conclusions that keep
                  you awake...? You&apos;re already halfway through Night Owl
                  Quiz... Keep your heads awake to steer clear through this
                  General Knowledge, Aptitude and technical quiz...nothing about
                  the textbooks.
                </p>
              )}
              {user && (
                <button
                  style={{
                    left: "7rem",
                    cursor: "pointer",
                    backgroundColor:
                      checkstatus(d.name) === "Registered"
                        ? "rgb(232, 154, 175)"
                        : "rgb(232, 51, 99)",
                    borderColor:
                      checkstatus(d.name) === "Registered"
                        ? "rgb(232, 154, 175)"
                        : "rgb(232, 51, 99)",
                  }}
                  onClick={() => registerForEvent(d.name)}
                  className={styles.plan}
                >
                  {checkstatus(d.name)}
                </button>
              )}
              <button className={styles.plan}>{d.plan}</button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.parent} style={{ marginTop: "-1.8rem" }}>
        <div className={styles.paidevent}>
          {nonTechnicalEventsTwo.map((d, i) => (
            <div key={i} className={styles.eventCard}>
              <img src={d.url} />
              <h3>{d.title}</h3>
              <p>{d.about}</p>
              <br />
              {d.quote && <p>{d.quote}</p>}
              {d.author && <p style={{ marginTop: "0.5rem" }}>-{d.author}</p>}
              {d.title === "2. Night Owl Quiz" && (
                <p>
                  Does this scenario ring a bell? Or do your nights seamlessly
                  wander with peculiar realisations and conclusions that keep
                  you awake...? You&apos;re already halfway through Night Owl
                  Quiz... Keep your heads awake to steer clear through this
                  General Knowledge, Aptitude and technical quiz...nothing about
                  the textbooks.
                </p>
              )}

              {user && (
                <button
                  style={{
                    left: "7rem",
                    cursor: "pointer",
                    backgroundColor:
                      checkstatus(d.name) === "Registered"
                        ? "rgb(232, 154, 175)"
                        : "rgb(232, 51, 99)",
                    borderColor:
                      checkstatus(d.name) === "Registered"
                        ? "rgb(232, 154, 175)"
                        : "rgb(232, 51, 99)",
                  }}
                  onClick={() => registerForEvent(d.name)}
                  className={styles.plan}
                >
                  {checkstatus(d.name)}
                </button>
              )}
              <button className={styles.plan}>{d.plan}</button>
            </div>
          ))}
        </div>
      </div>

      <section className="contact-area" id="contact">
        <div className="container-footer">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-content text-center">
                <a href="#">
                  <img style={{ width: "8rem" }} src="/logo.png" alt="logo" />
                </a>
                <p>
                  Anjalai Ammal Mahalingam Engineering College | Information
                  Technology
                </p>
                <div className="hr"></div>
                <h6>Kovilvenni | Thanjavur - Nagapattinam Highway</h6>
                <h6>
                  Event queries +91 91508 30225<span>|</span>Technical queries
                  +91 86104 35514
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Event;
