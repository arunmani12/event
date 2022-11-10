import react from "react";
// import { useState,useEffect } from "react";
import styles from './clock.module.css'

export default function Clock () {

    // const [days, setDays] = useState(0)
    // const [min, setMin] = useState(0)
    // const [sec, setSec] = useState(0)
    // const [hours, setHours] = useState(0)
    // const [currentWidth,setCurrentWidth] = useState()

   

    // useEffect(() => {
    //     setInterval(()=>{
    //         var countDownDate = new Date("2022-11-11").getTime();

    //         var now = new Date().getTime();
    //         var timeleft = countDownDate - now;
           

    //         setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)))
    //         setHours(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    //         setMin(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)))
    //         setSec(Math.floor((timeleft % (1000 * 60)) / 1000))
          
    //     },1000)
    // })


    // useEffect(() => {
    //     setCurrentWidth(window?.innerWidth)
    //   }, [])
    
    
    //   if(typeof window!='undefined'){
    //     window.addEventListener('resize', () => {
    //       setCurrentWidth(window?.innerWidth)
    //     });
    //   }
    
    // function calName(name){
    //     if(currentWidth>=600){
    //       return name
    //     }else{
    //       return name[0]
    //     }
    // }


    return (
      <div>
        <h2 className={styles.heading} >EVENT POSTPONED - STAY TUNED </h2>
        <p className={styles.para}>As per the weather forecasting department predictions 11.11.2022 may be expected heavy rain. We are caring about the welfare of our friends. Due to the unpredictable conditions we are forced to postpone the Symposium date.The date will be announced on 13.11.2022 Sunday (Tentative date:15.11.2022). Kindly accept the inconvenience and be ready to attend the TECHFINITY22 a grand technical event on the rescheduled date.</p>
         {/* <div className={styles.Clock}>
         <div><span style={{
            color:"rgb(232, 51, 99)"
         }}>{days}</span> {calName('DAYS')}</div>
         <div><span style={{
            color:"rgb(232, 51, 99)"
         }}>{hours}</span> {calName('HOURS')}</div>
         <div><span style={{
            color:"rgb(232, 51, 99)"
         }}
         >{min}</span> {calName('MINUTES')}</div>
         <div><span style={{
            color:"rgb(232, 51, 99)"
         }}
         >{sec}</span> {calName('SECONDS')}</div>
       </div> */}


      </div>
    )
}