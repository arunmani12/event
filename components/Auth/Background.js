import React from 'react'
import { MdCancel } from 'react-icons/md';

const Background = () => {
    // console.log(setShowAuth)

  const onClickHandler = () =>{
    console.log('clicked')
    // setShowAuth(prv=>!prv)
  }  

  return (
    <div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
	</div>
  )
}

export default Background