import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import LoginButton from './LoginButton'
import LoginInput from './LoginInput'
import Logo from './Logo'

import './LoginPage.css'


const isUsernameValid = (username) => {
    return username.length > 0 && username.length < 10 && !username.includes(' ');
}



const LoginPage = () => {
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

     const handleLogin = () => {
        navigate('/map');
     }

  return (
    <div className='l_page_main_container'>
         <div className='l_page_box'>
             <Logo/>
             <LoginInput username={username} setUsername={setUsername}/>
             <LoginButton disabled={!isUsernameValid} onClickHandler={handleLogin}/>
         </div>
    </div>
  )
}

export default LoginPage