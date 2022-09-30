import React from 'react'
import Login from './Login'
import Register from './Register'



const LoginHolder = ({setShowAuth}) => {

  const [currentModel,setCurrentModel] = React.useState('login')

  return (
    <div className='loginHolder'>
        {
            currentModel === 'login' ?
            <Login setShowAuth={setShowAuth} setCurrentModel={setCurrentModel}/>
            :
            <Register setShowAuth={setShowAuth} setCurrentModel={setCurrentModel}/>
        }
    </div>
  )
}

export default LoginHolder