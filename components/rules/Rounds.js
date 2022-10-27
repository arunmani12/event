import React,{useState,useEffect,useRef} from 'react'
import { AiFillLeftCircle,AiFillRightCircle } from 'react-icons/ai';
import styles from './rules.module.css'


const Rounds = () => {
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
           `Presentation time for each team is 10 mins.`,   
        ],
        Contact:{
            'Student Coordinators':{
                std1:[6379763494,'B Manikandan'],
                std2:[6385453408,'N M Hariharan']
            },
            'Staff Coordinator':[9790662227,'Mrs.Sivasakthi'],
        }
      },
      {
        Heading: "Web Roar",
        Content:[
           ` Round 1: The team will be asked design a webpage as per the topic provided on the spot within
            120mins.`,   
        ],
        Contact:{
            'Student Coordinators':{
                std1:[6379763494,'B Manikandan'],
                std2:[6385453408,'N M Hariharan']
            },
            'Staff Coordinator':[9790662227,'Mrs.Sivasakthi'],
        }
      },
      {
        Heading: "CryptoMot",
        Content:[
            `Round 1:ENCRYPTION- From the given word match the suitable number with each letter within 60seconds.
            EX: A=0,B=1,C=3,.......Z=25.`,
           ` Round 2: WORD FORMATION.- Frame the maximum number of technical words from given letters within 65seconds.`,
            `Round 3: JUMBLED WORD- Find the correct jumbled technical word based on the clue given within 120 seconds of time
            duration.,`
          ],
          Contact:{
            'Student Coordinators':{
                std1:[6379763494,'B Manikandan'],
                std2:[6385453408,'N M Hariharan']
            },
            'Staff Coordinator':[9790662227,'Mrs.Sivasakthi'],
        }
      },
      {
        Heading: "Night Owl Quiz",
        Content:[
            `Round 1: This round will have easy level of General Knowledge and aptitude MCQ's and the
            appropriate teams would qualify to the final round.`,
           ` Round 2: This round will have hard level of General Knowledge and aptitude MCQ's.`,
        ],
        Contact:{
            'Student Coordinators':{
                std1:[6379763494,'B Manikandan'],
                std2:[6385453408,'N M Hariharan']
            },
            'Staff Coordinator':[9790662227,'Mrs.Sivasakthi'],
        }
      },
      {
        Heading: "Hopper's Mystification",
        Content:[
            `Phase 1: Submission of Investigation Report.- After observing the crime scene, each team will be provided with the police report and
            have to submit their investigation report within the time limit provided.`,
            `Phase 2: Discussion with Cops.- Top 4 teams with appropriate investigation report will be discussed with the cops to close
            the case`,
          ],
          Contact:{
            'Student Coordinators':{
                std1:[6379763494,'B Manikandan'],
                std2:[6385453408,'N M Hariharan']
            },
            'Staff Coordinator':[9790662227,'Mrs.Sivasakthi'],
        }
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

          ],
          Contact:{
            'Student Coordinators':{
                std1:[6379763494,'B Manikandan'],
                std2:[6385453408,'N M Hariharan']
            },
            'Staff Coordinator':[9790662227,'Mrs.Sivasakthi'],
        }
      },
      {
        Heading: "Juncture",
        Content:[
            `1. Participants are requested to be assembled 10mins prior to the commencement of the event.`,
            `2. Only 3-4 members per team are allowed in this event.`,
           ` 3. Answers must be revealed by pressing the buzzer only.`,
            `4. If rules are violated, scores will be reduced and the chance will be given to the next team`,
            `5. Loud discussion is prohibited.`,
          ],
          Contact:{
            'Student Coordinators':{
                std1:[6379763494,'B Manikandan'],
                std2:[6385453408,'N M Hariharan']
            },
            'Staff Coordinator':[9790662227,'Mrs.Sivasakthi'],
        }
      },
      {
        Heading: "Mono Effet",
        Content:[
            `1. Participants are requested to be assembled 10mins prior to the commencement of the event.`,
            `2. Only 3 members per team are allowed in this event.`,
            `3. Answer should be conveyed to their respected team mates by action only.`,
            `4. Seeking website during the session will be considered as malpractice.`,
            `5. Usage of Mobile phones is prohibited during the event.`,
          ],
          Contact:{
            'Student Coordinators':{
                std1:[6379763494,'B Manikandan'],
                std2:[6385453408,'N M Hariharan']
            },
            'Staff Coordinator':[9790662227,'Mrs.Sivasakthi'],
        }
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
          <div className={styles["card-holder"]} 
            onTouchMove={touchHandler}
            onTouchEnd={touchEnd} ref={inside}>
            {divContent.map((d, i) => (
              <div className={styles["card"]} key={i}>
                <div className={styles["card-content"]} >
                  <div className={styles["card-body"]}>
                    <h2 style={{marginBottom:'0.7rem'}}>{d.Heading}</h2>
                    {d.Content.map(d=><p key={d}>{d}</p>)}
                    <h3 style={{margin:'1rem 0'}}>Contact</h3>
                    <hr style={{margin:'1rem 0'}}/>
                    <h3>Student Coordinator</h3>
                    <p>{d.Contact['Student Coordinators'].std1[1]} - {d.Contact['Student Coordinators'].std1[0]}</p>
                    <p>{d.Contact['Student Coordinators'].std2[1]} - {d.Contact['Student Coordinators'].std1[0]}</p>
                    <hr style={{margin:'1rem 0'}}/>
                    <h3>Staff Coordinator</h3>
                    <p>{d.Contact['Staff Coordinator'][1]} - {d.Contact['Staff Coordinator'][0]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    );
}

export default Rounds