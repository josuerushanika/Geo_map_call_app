import React, {useState} from 'react'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
      return <p className='logo'>
          GeoCall
        </p>
}

const LoginInput = (props) => {
    const { username, setUsername } = props;
      const handleValueChange = (e) => {
         setUsername(e.target.value);
      }

     return <input className='l_page_input' value={username} onChange={handleValueChange}/>
};

const LoginButton = ({onClickHandler}) => {
    return <button onClick={onClickHandler} className='l_page_login_button'>Login</button>
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
             <LoginButton onClickHandler={handleLogin}/>
         </div>
    </div>
  )
}

export default LoginPage