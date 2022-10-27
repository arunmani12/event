import React, { useState, useEffect, useRef } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import styles from "./rules.module.css";
import {rounds as data} from './data'

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
      <h3 className="homeHeading" style={{ margin: "2rem 0",marginLeft:'1%' }}>Rounds</h3>

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
                  <div style={{height:'26rem'}}>
                  {d.Content.map((d) => (
                    <p style={{marginBottom:"3%",fontSize:"0.9rem"}} key={d}>{d}</p>
                  ))}
                  </div>
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
