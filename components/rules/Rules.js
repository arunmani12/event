import React,{useState,useEffect,useRef} from 'react'
import { AiFillLeftCircle,AiFillRightCircle } from 'react-icons/ai';
import styles from './rules.module.css'


const Rules = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [currrentDirection, setCurrrentDirection] = useState("");
    const [divContent, setdivContent] = useState([])
    useEffect(() => {
      let leftPart = []
      let rightPart = []
      for(let i=0; i<3;i++){
        leftPart[i] = data[i]
        rightPart[i] = data[(data.length-1)-i]
      }
      const dataObj = [...leftPart, ...data,...rightPart.reverse()]
      setdivContent(dataObj)
      setCurrentIndex(3);
      changeTransform(0,3*-33.33)
    }, [])
    const inside = useRef();
  
  
    const data = [
      {
        Heading: "De Paper Festa",
        Content:[
          `1. Participants are requested to bring hard copy in IEEE format`,
          `2. Presentation can have slides upto 15 in count and the soft copy(.ppt) should be sent to our mail
          two days prior the event (E-mail:- techfinity2k22@gmail.com)`,
          `3. Team members count should be 3 or 2 only`,
          `4. Topic : Innovative and should be Technical`
        ]
      },
      {
        Heading: "Web Roar",
        Content:[
            `1.Contestants are requested to be assembled 10mins prior to the commencement of the event.`,
            `2.Two member per team and contestants can use familiar technology for development.`,
           ` 3.Contestants will be allowed to refer the internet for seeking ideas before the commencement of
            the event.`,
            `4.Seeking website during the session will be considered as disqualified.`,
            `5.Usage of Mobile phones is prohibited except for using mobile hotspot during the event.`,
        ]
      },
      {
        Heading: "CryptoMot",
        Content:[
            `1. Participants are requested to be assembled 10mins prior to the commencement of the event.`,
            `2. Only two members per team are allowed in this event.`,
            `3. Usage of Mobile phones is prohibited during the event.`,
            `4. Seeking website during the session will be considered as disqualified.`,
            `5. Each rounds will have eliminations.`,
          ]
      },
      {
        Heading: "Night Owl Quiz",
        Content:[
            `1. Participants are requested to be assembled 10mins prior to the commencement of the event.`,
            `2. Only two members per team are allowed in this event.`,
            `3. Each rounds will have eliminations.`,
            `4. Seeking website during the session will lead to disqualification.`,
            `5. Participants are requested to bring their mobile phones for attending the quiz.`,
          ]
      },
      {
        Heading: "Hopper's Mystification",
        Content:[
            `1. Participants are requested to be assembled 10mins prior to the commencement of the event.`,
            `2. The team can have 3-4 members for this event.`,
            `3. 3-4 teams would be allowed to observe the crime scene at a time.`,
            `4. Photo capturing of the crime scene is prohibited, thus, this behaviour would lead to
            disqualification of the particular team.`,
            `5. Teams should submit the investigation report within the duration provided(Time duration will be
            informed during the event), submission beyond the given duration will not be accepted.`,

          ]
      },
      {
        Heading: "Phantasm Quiz",
        Content:[
            `1. Participants are requested to be assembled 10mins prior to the commencement of the event.`,
            `2. Questions will be based on Hollywood movies, Kollywood movies and Web series(eg:
            MCU,DC,Game of thrones etc.).`,
            `3. Each round contains 25 to 30 questions.`,
            `4. Every participants should bring their Mobile phones.`,
            `5. It is a single participant event.`,

          ]
      },
      {
        Heading: "Juncture",
        Content:[
            `1. Participants are requested to be assembled 10mins prior to the commencement of the event.`,
            `2. Only 3-4 members per team are allowed in this event.`,
           ` 3. Answers must be revealed by pressing the buzzer only.`,
            `4. If rules are violated, scores will be reduced and the chance will be given to the next team`,
            `5. Loud discussion is prohibited.`,
          ]
      },
      {
        Heading: "Mono Effet",
        Content:[
            `1. Participants are requested to be assembled 10mins prior to the commencement of the event.`,
            `2. Only 3 members per team are allowed in this event.`,
            `3. Answer should be conveyed to their respected team mates by action only.`,
            `4. Seeking website during the session will be considered as malpractice.`,
            `5. Usage of Mobile phones is prohibited during the event.`,

          ]
      },
    ];
  
  
  
  
  
    const changeTransform = (ms,transform)=>{
      inside.current.style.transitionDuration = `${ms}ms`;
      inside.current.style.transform = `translate3d(${transform}%, 0px, 0px)`;
    }
  
    const leftClickHandler = () => {
      setCurrentIndex((prv) => prv + 1);
      if (currentIndex>=divContent.length-3) {
        changeTransform(0,0)
        setTimeout(() => {
          changeTransform(500,-33.33)
          setCurrentIndex(1);
        }, 25);
      } else changeTransform(500,(currentIndex+1) * - 33.33)
    };
  
  
    const rightClickHandler = () => {
      setCurrentIndex((prv) => prv - 1);
      if (currentIndex === 0) {
        changeTransform(0,(divContent.length - 3)* -33.33)
        setTimeout(() => {
          changeTransform(500,(divContent.length - 4) * -33.33)
          setCurrentIndex(divContent.length - 4);
        }, 50);
      } else changeTransform(500,(currentIndex - 1) * -33.33)
    };
  
  
  
  
    let touchHandler = (e) => {
      if (window.innerWidth / 2 <
      e.changedTouches[0].clientX) {
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
        <AiFillLeftCircle className={styles.arrow} style={{position:"absolute",top:"50%",right:"95%"}} onClick={rightClickHandler}/>
        <AiFillRightCircle className={styles.arrow} style={{position:"absolute",top:"50%",left:"95%"}} onClick={leftClickHandler} />
        <div className={styles["card-holder-wrapper"]}>
        <h3 style={{margin:'1rem 0'}}>Rounds</h3>
          <div className={styles["card-holder"]} 
            onTouchMove={touchHandler}
            onTouchEnd={touchEnd} ref={inside}>
            {divContent.map((d, i) => (
              <div className={styles["card"]} key={i}>
                <div className={styles["card-content"]} >
                  <div className={styles["card-body"]}>
                    <h2 style={{marginBottom:'0.7rem'}}>{d.Heading}</h2>
                    {d.Content.map(d=><p key={d}>{d}</p>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Rules