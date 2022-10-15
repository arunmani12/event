import React from "react";
import Background from "./Background";
import { MdCancel } from "react-icons/md";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateEmail } from "../../comman";
import { url } from "../../global";



const Login = ({ setShowAuth, setCurrentModel,setLoading }) => {


  const router = useRouter();

  const [email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");

  const onClickHandler = () => {
    setShowAuth((prv) => !prv);
  };

  const loginHandler = async () => {
    if (!(email.length > 0) || !(DOB.length > 9)) {
      if (!validateEmail(email)) {
        toast("Please enter vaild email");   
        return;
      }
      toast("Register number or dob must not empty");
      return
    }
    setLoading(true)
    const res = await fetch(`${url}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        DOB,
      }),
    });
    let response = await res.json();
    if (response.message == "Success!") {
      setLoading(false)
      router.reload();
    } else {
      setLoading(false)
      toast("email or dob miss match");
    }
  };

  return (
    <div className="screen">
      <ToastContainer />
      <div className="screen__content">
        <MdCancel size={24} className="cancel" onClick={onClickHandler} />
        <form className="login">
          <div className="login__field">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login__input"
              placeholder="Email"
            />
          </div>
          <div className="login__field">
            <input
              type="text"
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
              className="login__input"
              placeholder="DOB(20-02-2002)"
            />
          </div>
          <button
            type="button"
            onClick={loginHandler}
            className="button login__submit"
          >
            <span className="button__text">Login</span>
          </button>
          <p className="switch">Don&apos;t have Account ?</p>
          <button
            type="button"
            style={{ margin: "0" }}
            onClick={() => setCurrentModel("register")}
            className="button login__submit"
          >
            <span className="button__text">Register</span>
          </button>
        </form>
      </div>
      <Background />
    </div>
  );
};

export default Login;
