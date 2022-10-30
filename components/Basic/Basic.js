import React from "react";
import Event from "../events/Event";
import styles from "./Basic.module.css";
import Basic from "../card/Basic";
import { url } from "../../global";
import {useRouter} from "next/router";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const BasicContainer = ({ user }) => {

  const router = useRouter()

  const [number,setNumber] = React.useState('')

  async function displayRazerpay(plan) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch(`${url}/api/razorpay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.Name,
        email: user.email,
        plan: plan,
      }),
    }).then((t) => t.json());

    console.log(data);

    let options = {
      key: "rzp_live_hZtN2aKvtd1Z0i",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Techfinity'22",
      description: "Thank you for approch over applying event",
      image: "/logo.png",
      handler: function () {
        router.reload("/");
      },
      prefill: {
        name: user.Name,
        email: user.email,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const addNumber = async () =>{
    if(number.length<10){
      alert('please enter valid number')
    }
    const res = await fetch(`${url}/api/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        DOB:user.DOB,
        number,
      }),
    });
    let response = await res.json();
    if (response.message == "okie") {
      router.reload();
    } else {
      alert(
        "something went  wrong "
      );
    }
  };


  return (
    <div style={{ paddingTop: "10rem" }}>

      <div className={styles.update}>
        <div className={styles.insideCard}>
          <Basic user={user} width="100%" height="16rem" />
        </div>

        <div className={styles.insideCard}>
          <h2>My Events :-</h2>
           {!user.events.length  ?<>
              <p>Please scroll down and register for individual events (Basic) by clicking register button</p>
              <p>limit:2</p>
           </>:
           <>
              <p>limit:2</p>
              {user.events.map((d,i)=><p key={d}>{i+1 +"."+" "+ d}</p>)}
           </>}
        </div>

      </div>

      {
          !(user.number) &&  
          <div className={styles.info}>
            <h3>Sorry for the incovinent</h3>
            <p>we forgot to get your number</p>
            <p style={{marginBottom:'1rem'}}>Mobile Number</p>
            <input value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button
            type="button"
            style={{ width: "auto",marginTop:'1rem',padding:'6px 20px' }}
            className="button login__submit"
            onClick={addNumber}
          >
            <span className="button__text">
              AddNumber
            </span>
          </button>
          </div>
      }

      <div className={styles.info}>
        <h3>Please Note</h3>

        <p>BASIC -  Basic techie is able to access all the available Technical and
          Non-Technical events except Paper Presentation and Web Design </p>

        <hr style={{margin:'1rem 0'}}/>
        
        <p>PRO -  Pro techie is able to access all the available Technical and
          Non-Technical events including Paper Presentation and Web Design </p>

        <button
            type="button"
            style={{ width: "auto",marginTop:'1rem' }}
            className="button login__submit"
            onClick={() => displayRazerpay("pro")}
          >
            <span className="button__text">
              upgrade to pro &nbsp;&#8377;110
            </span>
          </button>
      </div>


      <Event user={user}/>
    </div>
  );
};

export default BasicContainer;
