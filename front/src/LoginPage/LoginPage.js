import { useNavigate } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import LoginButton from './LoginButton'
import LoginInput from './LoginInput'
import Logo from './Logo'

import './LoginPage.css'


const isUsernameValid = (username) => {
    return username.length > 0 && username.length < 10 && !username.includes(' ');
}

const locationOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const LoginPage = () => {

  const [username, setUsername] = useState("");
   const [locationErrorOccurred, setLocationErrorOccurred] = useState(false);

  const navigate = useNavigate();

   const handleLogin = () => {
      navigate('/map');
   }


const onSucess = (position) => {
  console.log(position);
}

const onError = (error) => {
    console.log("Error occurred when trying to get location");
    console.log(error);
    setLocationErrorOccurred(true);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSucess, onError, locationOptions);
 }, [])
 
  return (
    <div className='l_page_main_container'>
         <div className='l_page_box'>
             <Logo/>
             <LoginInput username={username} setUsername={setUsername}/>
             
             <LoginButton disabled={!isUsernameValid(username) || locationErrorOccurred} onClickHandler={handleLogin}/>
         </div>
    </div>
  )
}

export default LoginPage