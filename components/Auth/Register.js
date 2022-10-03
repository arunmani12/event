import React from "react";
import { BiArrowBack } from "react-icons/bi";
import Background from "./Background";
import { MdCancel } from "react-icons/md";
import {useState} from 'react'
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateEmail } from "../../comman";


const Register = ({ setShowAuth,setCurrentModel }) => {

  const [email, setEmail] = useState('');
  const [DOB, setDOB] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [Name, setName] = useState('');

  const router = useRouter()


  const onClickHandler = () => {
    setShowAuth((prv) => !prv);
  };

  
  const registerHandler = async () => {

    if (!(email.length>0) || !(DOB.length>=10) ||!(collegeName.length>4) || !(Name.length>4)) {
      if (!validateEmail(email)) {
        toast("Please enter vaild email");   
        return;
      }
      toast("enter vaild data");
      return
    }


    const res = await fetch(`http://localhost:3000/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        DOB,
        collegeName,
        Name
      }),
    });
    let response = await res.json();
    if (response.message == "Success!") {
       console.log(response)
	     router.reload()

    } else {
      console.log('please check data')
    }
  };


  return (
    <div className="screen">
      <ToastContainer />
      <div className="screen__content">
        <form className="login">
          <BiArrowBack onClick={()=>setCurrentModel('login')} color="#777" fontSize={22} />
		      <MdCancel size={24} className='cancel' onClick={onClickHandler}/>

          <div className="login__field">
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="login__input" placeholder="Email" />
          </div>
          <div className="login__field">
            <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} className="login__input" placeholder="Name" />
          </div>
          <div className="login__field">
            <input
              type="text"
              className="login__input"
              placeholder="College Name"
              value={collegeName}
              onChange={(e)=>setCollegeName(e.target.value)}
            />
          </div>
          <div className="login__field">
            <input
              type="text"
              className="login__input"
              placeholder="DOB(20-02-2002)"
              value={DOB}
              onChange={(e)=>setDOB(e.target.value)}
            />
          </div>
          <button type='button' onClick={registerHandler} style={{ margin: "0" }} className="button login__submit">
            <span className="button__text">Register</span>
          </button>
        </form>
      </div>
      <Background />
    </div>
  );
};

export default Register;