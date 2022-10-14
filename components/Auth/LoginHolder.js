import React from 'react'
import Loader from '../Loader/Loader'
import Login from './Login'
import Register from './Register'



const LoginHolder = ({setShowAuth}) => {

  const [currentModel,setCurrentModel] = React.useState('login')
  const [loading,setLoading] = React.useState(false)

  return (
    <div className='loginHolder'>
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