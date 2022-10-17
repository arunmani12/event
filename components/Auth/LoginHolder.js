import React from 'react'
import Loader from '../Loader/Loader'
import Login from './Login'
import Register from './Register'



const LoginHolder = ({setShowAuth}) => {

  const [currentScroll,setCurrentScroll] = React.useState(window?.scrollY)

  window.addEventListener("scroll", () => {
    let scroll = window?.scrollY;
    setCurrentScroll(scroll)
  });


  const [currentModel,setCurrentModel] = React.useState('login')
  const [loading,setLoading] = React.useState(false)

  return (
    <div className='loginHolder' style={{top:currentScroll}}>
      {loading && <Loader/>}
        {
            currentModel === 'login' ?
            <Login setLoading={setLoading} setShowAuth={setShowAuth} setCurrentModel={setCurrentModel}/>
            :
            <Register setLoading={setLoading} setShowAuth={setShowAuth} setCurrentModel={setCurrentModel}/>
        }
    </div>
  )
}

export default LoginHolder