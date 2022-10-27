import React, { useState, useEffect, useRef } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import styles from "./rules.module.css";

const Rounds = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currrentDirection, setCurrrentDirection] = useState("");
  const [divContent, setdivContent] = useState([]);
  useEffect(() => {
    let leftPart = [];
    let rightPart = [];
    for (let i = 0; i < 3; i++) {
      leftPart[i] = data[i];
      rightPart[i] = data[data.length - 1 - i];
    }
    const dataObj = [...leftPart, ...data, ...rightPart.reverse()];
    setdivContent(dataObj);
    setCurrentIndex(3);
    changeTransform(0, 3 * -33.33);
  }, []);
  const inside = useRef();

  const data = [
    {
      Heading: "De Paper Festa",
      Content: [
        `Every team will need to present their topic using projector display, simultaneously the soft copy will be cross checked by the Coordinators.`,
      ],
      Contact: {
        "Student Coordinators": {
          std1: [8610175322, "Mr.B.Shyam"],
          std2: [9025662094, "Mr.S.Sakthivel"],
        },
        "Staff Coordinator": [9442141013, "Mrs.Kalaivaazhi Vijayaragavan"],
      },
    },
    {
      Heading: "Web Roar",
      Content: [
        ` Round 1: The team will be asked to design a webpage as per the topic provided on the spot within
            120minutes.`,
      ],
      Contact: {
        "Student Coordinators": {
          std1: [6379763494, "Mr.B.Manikandan"],
          std2: [6385453408, "Mr.N.M.Hariharan"],
        },
        "Staff Coordinator": [9790662227, "Mrs.V.Sivasakthi"],
      },
    },
    {
      Heading: "CryptoMot",
      Content: [
        `Round 1:ENCRYPTION- From the given word match the suitable number with each letter within 60seconds.
            EX: A=0,B=1,C=3,.......Z=25.`,
        `Round 2: WORD FORMATION.- Frame the maximum number of technical words from given letters within 65seconds.`,
        `Round 3: JUMBLED WORD- Find the correct jumbled technical word based on the clue given within 120 seconds of time
            duration.,`,
      ],
      Contact: {
        "Student Coordinators": {
          std1: [8110898874, "Mr.J.Murugavasan"],
          std2: [9345535345, "Mr.A.Naveen"],
        },
        "Staff Coordinator": [8807503495, "Mrs.G.Jeyasri"],
      },
    },
    {
      Heading: "Night Owl Quiz",
      Content: [
        `Round 1: This round will have easy level of General Knowledge and aptitude MCQ's and the
            appropriate teams would qualify to the final round.`,
        `Round 2: This round will have hard level of General Knowledge and aptitude MCQ's.`,
      ],
      Contact: {
        "Student Coordinators": {
          std1: [9360632998, "Mr.T.Sriharan"],
          std2: [8438469318, "Mr.M.Bhagavathy Vignesh"],
        },
        "Staff Coordinator": [9940829020, "Mr.B.Venkatesh"],
      },
    },
    {
      Heading: "Hopper's Mystification",
      Content: [
        `Phase 1: Submission of Investigation Report.- After observing the crime scene, each team will be provided with the police report and
            have to submit their investigation report within the time limit provided.`,
        `Phase 2: Discussion with Cops.- Top 4 teams with appropriate investigation report will be discussed with the cops to close
            the case`,
      ],
      Contact: {
        "Student Coordinators": {
          std1: [9150830225, "Mr.R.Mohnishkumar"],
          std2: [9894348292, "Mr.M.Michael Daniel"],
        },
        "Staff Coordinator": [9894919289, "Mr.R.Rama Rajesh"],
      },
    },
    {
      Heading: "Phantasm Quiz",
      Content: [
        `Round 1: This round will have 25 to 30 questions on the Fantasy concept and contestants submitting correct answers within the given time period will be qualified to the next round.`,
        `Round 2: This is the final round with 25 to 30 questions on the Fantasy concept. Contestants with correct answers will be declared as winners.`,
      ],
      Contact: {
        "Student Coordinators": {
          std1: [6379282653, "Mr.K.Bala"],
          std2: [8637672031, "Mr.V.Balakumar"],
        },
        "Staff Coordinator": [9894409982, "Mrs.K.Sowndarya"],
      },
    },
    {
      Heading: "Juncture",
      Content: [
        `Round 1: “Fandom Juncture”- In this round, the team has to connect the pictures related to fantasy and has to frame the answer. Top teams will be qualified to the second round.`,
        `Round 2: “Lyrical Juncture”- In this round, the team has to find the missing lyrics of a song and have to sing correctly. Top teams will be qualified to the final round.`,
        `Round 3: “Grand Finale”- In this round, five pictures will be shown one by one to the team and they need to find the correct answer by connecting them together. Best teams will be announced as winners.`,
      ],
      Contact: {
        "Student Coordinators": {
          std1: [7010329374, "Mr.K.Yogeshwaran"],
          std2: [9360606179, "Mr.H.Sheik Riyas"],
        },
        "Staff Coordinator": [8610829348, "Mrs.M.C.Jayaprasanna"],
      },
    },
    {
      Heading: "Mono Effet",
      Content: [
        `Round 1: In this round, one of the team member need to find Non-Technical Words and express it by acting in front of their respected team mates. Top teams will be qualified to the second round.`,
        `Round 2: In this round, one of the team member need to find Technical Words and express it by acting in front of their respected team mates. Top teams will be qualified to the final round.`,
        `Round 3: This is the final round, where one of the team member need to find combination of both Technical and Non-Technical Words and express it by acting in front of their respective team mates. Top teams will be declared as winners.`,
      ],
      Contact: {
        "Student Coordinators": {
          std1: [7708052396, "Mr.R.B.Guru Ashok Raj"],
          std2: [6380892874, "Mr.A.Sivasubramanian"],
        },
        "Staff Coordinator": [9842617040, "Mrs.J.Sathiya Jothi"],
      },
    },
  ];

  const changeTransform = (ms, transform) => {
    inside.current.style.transitionDuration = `${ms}ms`;
    inside.current.style.transform = `translate3d(${transform}%, 0px, 0px)`;
  };

  const leftClickHandler = () => {
    setCurrentIndex((prv) => prv + 1);
    if (currentIndex >= divContent.length - 3) {
      changeTransform(0, 0);
      setTimeout(() => {
        changeTransform(500, -33.33);
        setCurrentIndex(1);
      }, 25);
    } else changeTransform(500, (currentIndex + 1) * -33.33);
  };

  const rightClickHandler = () => {
    setCurrentIndex((prv) => prv - 1);
    if (currentIndex === 0) {
      changeTransform(0, (divContent.length - 3) * -33.33);
      setTimeout(() => {
        changeTransform(500, (divContent.length - 4) * -33.33);
        setCurrentIndex(divContent.length - 4);
      }, 50);
    } else changeTransform(500, (currentIndex - 1) * -33.33);
  };

  let touchHandler = (e) => {
    if (window.innerWidth / 2 < e.changedTouches[0].clientX) {
      setCurrrentDirection("right");
      if (currrentDirection != "right") {
        rightClickHandler();
      }
    } else {
      setCurrrentDirection("left");
      if (currrentDirection != "left") {
        leftClickHandler();
      }
    }
  };

  let touchEnd = () => {
    setCurrrentDirection("");
  };

  return (
    <div className={styles.App}>
      {/* use can use arrow icons :) */}
      <AiFillLeftCircle
        className={styles.arrow}
        style={{ position: "absolute", top: "50%", right: "95%" }}
        onClick={rightClickHandler}
      />
      <AiFillRightCircle
        className={styles.arrow}
        style={{ position: "absolute", top: "50%", left: "95%" }}
        onClick={leftClickHandler}
      />
      <div className={styles["card-holder-wrapper"]}>
        <div
          className={styles["card-holder"]}
          onTouchMove={touchHandler}
          onTouchEnd={touchEnd}
          ref={inside}
        >
          {divContent.map((d, i) => (
            <div className={styles["card"]} key={i}>
              <div className={styles["card-content"]}>
                <div className={styles["card-body"]}>
                  <h2 style={{ marginBottom: "0.7rem" }}>{d.Heading}</h2>
                  {d.Content.map((d) => (
                    <p key={d}>{d}</p>
                  ))}
                  <h3 style={{ margin: "1rem 0" }}>Contact</h3>
                  <hr style={{ margin: "1rem 0" }} />
                  <h3>Student Coordinator</h3>
                  <p>
                    {d.Contact["Student Coordinators"].std1[1]} -{" "}
                    {d.Contact["Student Coordinators"].std1[0]}
                  </p>
                  <p>
                    {d.Contact["Student Coordinators"].std2[1]} -{" "}
                    {d.Contact["Student Coordinators"].std1[0]}
                  </p>
                  <hr style={{ margin: "1rem 0" }} />
                  <h3>Staff Coordinator</h3>
                  <p>
                    {d.Contact["Staff Coordinator"][1]} -{" "}
                    {d.Contact["Staff Coordinator"][0]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rounds;
