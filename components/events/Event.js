import React from "react";
import { BiRupee } from "react-icons/bi";
import styles from "./event.module.css";


const Event = () => {
  const priceEvent = [
    {
     url: "/crypto.svg",
      title: "1. Crypto",
      quote:
        "One cartographer does not only understand how to analyse cryptography by old times",
      author: "Matt Harvey",
      about:
        "Master in decrypting problems in life...?Time to test your technical proficiency...Here's your stage to prove your skills in Engineering...Grab up your seat..and stay tunes for the journey of Decryption of words",
    },
    {
        url: "/nightowl.svg",
      title: "2. Night Owl Quiz",
      about:
        "Imagine this...It's pitch dark and way past twelve...You're lying down on the bed, pillow cozy under your neck and eyes fixated on the ceiling fan screeching with a tune you instantly procreate and start jamming inside your head...You are drifting off at the comfort of how warm your bed feels. And at some point you realize, the word 'bed' actually looks like a bed",
    },
  ];

  const normalEvent = [
    {
        url: "/presentation.svg",
      title: "1. Paper Presentation",
      quote:
        "If you don't know what you want to achieve in your presentation your audience never will.",
      author: "Harvey Diamond",
      about:
        "High over your ideas...? Time to implement up your brainy things ahead through presentation and pieces of sheets...Have your stage here to present your brainy stuffs and bag home the price for the best one",
    },
    {
        url: "/programming.svg",
      title: "2. Web Designing",
      quote: "Websites promote you 24/7: No employee will do that,",
      author: "Paul Cookson",
      about:
        "If you think math is hard, try website design! Department of IT is here with yet another creative-amidst-the-techies event.Web designing tests you based on your way with the languages like HTML, CSS, JS , React, etc...",
    },
  ];

  //Crypto

  return (
    <>
    <div className={styles.parent}>
        <h3 className={styles.heading}>Price Event</h3>
      <div className={styles.paidevent}>
        {normalEvent.map((d, i) => (
          <div key={i} className={styles.eventCard}>
            <img src={d.url}/>
            <h3>{d.title}</h3>
            <p>{d.about}</p>
            <br />
            <p>{d.quote}</p>
            <p>-{d.author}</p>

            <div
              style={{
                display: "flex",
                marginTop: "1rem",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <h4>Prices worth of</h4>{" "}
              <BiRupee style={{ marginLeft: "0.5rem" }} /> <h4>8000</h4>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* -------//------- */}
    <div className={styles.parent}>
        <h3 className={styles.heading}>Normal Events</h3>
      <div className={styles.paidevent}>
        {priceEvent.map((d, i) => (
          <div key={i} className={styles.eventCard}>
            <img src={d.url} />
            <h3>{d.title}</h3>
            <p>{d.about}</p>
            <br />
            {d.quote && <p>{d.quote}</p>}
            {d.author && <p>-{d.author}</p>}
            {<p>Does this scenario ring a bell? Or do your nights seamlessly wander with peculiar realisations and conclusions that keep you awake...?

You're already halfway through Night Owl Quiz... Keep your heads awake to steer clear through this General Knowledge, Aptitude and technical quiz...nothing about the textbooks.</p>}
           
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Event;
