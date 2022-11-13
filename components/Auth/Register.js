import React from "react";
import { BiArrowBack } from "react-icons/bi";
import Background from "./Background";
import { MdCancel } from "react-icons/md";
import {useState} from 'react'
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateEmail } from "../../comman";
import { url } from "../../global";


const Register = ({ setShowAuth,setCurrentModel ,setLoading}) => {

  const [email, setEmail] = useState('');
  const [DOB, setDOB] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [Name, setName] = useState('');
  const [number, setNumber] = useState('');

  const router = useRouter()


  const onClickHandler = () => {
    setShowAuth((prv) => !prv);
  };

  
  const registerHandler = () => {

    toast("REG closded")
  };


  return (
    <div className="screen">
      <ToastContainer style={{width:'100vw',overflowX:'hidden'}}/>
      <div className="screen__content">
        <form className="login">
          <BiArrowBack onClick={()=>setCurrentModel('login')} color="#777" fontSize={22} />
		      <MdCancel size={24} className='cancel' onClick={onClickHandler}/>
            <h2 style={{display:'flex',marginLeft:'4rem',marginTop:'60%'}} > REGISTRATION IS CLOSED </h2>
          
          
          
          

          

         
        </form>
      </div>
      <Background />
    </div>
  );
};

export default Register;
