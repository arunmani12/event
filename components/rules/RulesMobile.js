import React, { useState, useEffect, useRef } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import styles from "./mobile.module.css";
import { rules as data } from "./data";

const RulesMobile = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
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
      changeTransform(0, 3 * -100);
    }, []);
    const inside = useRef();
  
  
    const changeTransform = (ms, transform) => {
      inside.current.style.transitionDuration = `${ms}ms`;
      inside.current.style.transform = `translate3d(${transform}%, 0px, 0px)`;
    };
  
    const leftClickHandler = () => {
      // console.log('hi')
      setCurrentIndex((prv) => prv + 1);
      if (currentIndex >= divContent.length - 3) {
        changeTransform(0, -100);
        setTimeout(() => {
          changeTransform(500, -200);
          setCurrentIndex(2);
        }, 25);
      } else changeTransform(500, (currentIndex + 1) * -100);
    };
  
    const rightClickHandler = () => {
      setCurrentIndex((prv) => prv - 1);
      if (currentIndex === 0) {
        changeTransform(0, (divContent.length - 3) * -100);
        setTimeout(() => {
          changeTransform(500, (divContent.length - 4) * -100);
          setCurrentIndex(divContent.length - 4);
        }, 50);
      } else changeTransform(500, (currentIndex - 1) * -100);
    };
  
  
  return (
    <div className={styles.App}>
    
      <div className={styles["card-holder-wrapper"]}>
        <h3 className="homeHeading" style={{ margin: "2rem 0",marginLeft:'1%' }}>Rules</h3>
        <div
          className={styles["card-holder"]}
          ref={inside}
        >
          {divContent.map((d, i) => (
            <div className={styles["card"]} key={i}>
              <div className={styles["card-content"]}>
                <div className={styles["card-body"]} style={{padding:'3%'}}>
                  <h2 style={{ marginBottom: "0.7rem" }}>{d.Heading}</h2>
                  {d.Content.map((d) => (
                    <p key={d}>{d}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{
        width:'100%',
        display:'flex',
        justifyContent:'space-around',
        margin:'2rem auto'
      }}>
      <AiFillLeftCircle
        className={styles.arrow}
        // style={{ position: "absolute", top: "50%", right: "95%" }}
        onClick={rightClickHandler}
      />
      <AiFillRightCircle
        className={styles.arrow}
        // style={{ position: "absolute", top: "50%", left: "95%" }}
        onClick={leftClickHandler}
      />
      </div>
    </div>
  );
};

export default RulesMobile;
