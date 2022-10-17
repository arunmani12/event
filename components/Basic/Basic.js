import React from "react";
import Event from "../events/Event";
import styles from "./Basic.module.css";
import Basic from "../card/Basic";
import { url } from "../../global";


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

    console.log(data)


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


  return (
    <div style={{paddingTop:'10rem'}}>
  

      <div className={styles.update}>
       

      <div className={styles.insideCard}>
        <Basic user={user} width='100%' height='16rem'/>
      </div>

        <div className={styles.insideCard}>
          <h2>Basic :-</h2>
          <p>
            {" "}
            Basic techie is able to access all the available Technical and
            Non-Technical events except Paper Presentation and Web Design...So
            for what are you waiting for...?..Time for the Bull&apos;s Eye
            moment...Boost up Techie..!
          </p>
          <button
            type="button"
            style={{ width:'50%' }}
            className="button login__submit"
            onClick={() => displayRazerpay("pro")}
          >
            <span className="button__text">upgrade to pro  &nbsp;&#8377;110</span>
        </button>
        </div>


      </div>

      <Event />
    </div>
  );
};

export default BasicContainer;
