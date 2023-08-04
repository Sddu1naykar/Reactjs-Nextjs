import React from 'react'
import { useHistory } from 'react-router-dom';
const Login = () => {
const validate=()=>
{
    alert("login successfully..")
}

  return (
    <div>
        <form action="">
            <label>Enter Email:</label><br/>
            <input type='email' placeholder='Enter email..'></input>
            <label>Enter Pasword:</label><br/>
            <input type='password' placeholder='Enter Password..'></input><br/>
            <button type="button" onClick={validate}>Login</button>
            
        </form>
    </div>
  )
}

export default Login