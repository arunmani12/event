import React from "react";
import { BiArrowBack } from "react-icons/bi";
import Background from "./Background";
import { MdCancel } from "react-icons/md";

const Register = ({ setShowAuth,setCurrentModel }) => {
  const onClickHandler = () => {
    setShowAuth((prv) => !prv);
  };

  return (
    <div className="screen">
      <div className="screen__content">
        <form className="login">
          <BiArrowBack onClick={()=>setCurrentModel('login')} color="#777" fontSize={22} />
		  <MdCancel size={24} className='cancel' onClick={onClickHandler}/>

          <div className="login__field">
            <input type="text" className="login__input" placeholder="Email" />
          </div>
          <div className="login__field">
            <input type="text" className="login__input" placeholder="Name" />
          </div>
          <div className="login__field">
            <input
              type="text"
              className="login__input"
              placeholder="College Name"
            />
          </div>
          <div className="login__field">
            <input
              type="text"
              className="login__input"
              placeholder="DOB(20-02-2002)"
            />
          </div>
          <button style={{ margin: "0" }} className="button login__submit">
            <span className="button__text">Register</span>
          </button>
        </form>
      </div>
      <Background />
    </div>
  );
};

export default Register;
