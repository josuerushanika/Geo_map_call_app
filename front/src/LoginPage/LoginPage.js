import React, {useState} from 'react'
import './LoginPage.css'

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

const LoginButton = () => {
    return <button className='l_page_login_button'>Login</button>
}

const LoginPage = () => {
    const [username, setUsername] = useState("");

  return (
    <div className='l_page_main_container'>
         <div className='l_page_box'>
             <Logo/>
             <LoginInput username={username} setUsername={setUsername}/>
             <LoginButton/>
         </div>
    </div>
  )
}

export default LoginPage