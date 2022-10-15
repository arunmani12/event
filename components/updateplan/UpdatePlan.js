import React from "react";
import { useRouter } from "next/router";
import Event from "../events/Event";
import styles from "./update.module.css";
import { BiRupee } from "react-icons/bi";

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

const UpdatePlan = ({ user }) => {
  const router = useRouter();


  async function displayRazerpay(plan) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("http://localhost:3000/api/razorpay", {
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


    let options = {
      key: "rzp_test_DyO1hiZxeHObP6",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "pay event",
      description: "Thank you for approch over applying event",
      // image: "http://localhost:1337/logo.svg",
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
    <div>
  

      <div className={styles.update}>
        <div className={styles.insideCard}>
          <h2>Pro :-</h2>
          <p>
            {" "}
            Pro techie is able to access all the available Technical and
            Non-Technical events...So for what are you waiting for...?..Time for
            the Bull's Eye moment...Boost up Techie..!
          </p>
          <div style={{width:'100%'}} className={styles.rupeeHolder}>
            <p>Registration fees : </p>
            <BiRupee />
            <p>200</p>
          </div>


          <button
            type="button"
            style={{ width:'50%' }}
            className="button login__submit"
            onClick={() => displayRazerpay("pro")}
          >
            <span className="button__text">Register</span>
          </button>

        </div>
        <div className={styles.insideCard}>
          <h2>Basic :-</h2>
          <p>
            {" "}
            Basic techie is able to access all the available Technical and
            Non-Technical events except Paper Presentation and Web Design...So
            for what are you waiting for...?..Time for the Bull's Eye
            moment...Boost up Techie..!
          </p>
          <div style={{width:'100%'}} className={styles.rupeeHolder}>
            <p>Registration fees : </p>
            <BiRupee />
            <p>100</p>
          </div>

          <button
            type="button"
            style={{ width:'50%' }}
            className="button login__submit"
            onClick={() => displayRazerpay("basic")}
          >
            <span className="button__text">Register</span>
          </button>

        </div>
      </div>

      <Event />
    </div>
  );
};

export default UpdatePlan;
