import React from 'react'
import Background from './Background'
import { MdCancel } from 'react-icons/md';




const Login = ({setShowAuth,setCurrentModel}) => {

    const onClickHandler = () =>{
        setShowAuth(prv=>!prv)
    }  

  return (
    <div className="screen">
		<div className="screen__content">
        <MdCancel size={24} className='cancel' onClick={onClickHandler}/>
			<form className="login">
				<div className="login__field">
					<input type="text" className="login__input" placeholder="Email"/>
				</div>
				<div className="login__field">
					<input type="text" className="login__input" placeholder="DOB(20-02-2002)"/>
				</div>
				<button className="button login__submit">
					<span className="button__text">Login</span>
				</button>	
                <p className='switch'>Don't have Account ?</p>	
                <button style={{margin:'0'}} onClick={()=>setCurrentModel('register')} className="button login__submit">
					<span className="button__text">Register</span>
				</button>		
			</form>
		</div>
		<Background/>
	</div>
  )
}

export default Login