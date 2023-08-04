import React, { useState } from 'react';
import '../Login/Login.scss';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';

const Login = () => {
   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedin, setLoggedin] = useState(false);
    const [signup, Setsignup] = useState(false);

    const handleHomepage = (event) => {
        event.preventDefault();

        // Regular expressions for name, email, and password validation
        const nameRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,}$/;

        // Validate name, email, and password
        if (name === '' || email === '' || password === '') {
            alert('Please fill all the required fields.');
        } else if (!nameRegex.test(name)) {
            alert(' Please enter a valid name.');
        } else if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
        } else if (!passwordRegex.test(password)) {
            alert(' Please enter a valid password.\ nPassword must contain at least 8 characters including at least one lowercase letter, one uppercase letter, one digit, and one special character (!@#$%^&*()).');
        } else {
            setLoggedin(true);
        }
    };

    if (loggedin) {
        return <Home name={name} />;
    }

// handle signup-page
const handleSignup = (event)=>{
    event.preventDefault();
    Setsignup(true);
}

if(signup)
{
    return <Signup/>;
}
    return (
        <div className='login'>
            <form className='login-form'>
                <h1>LOGIN HERE</h1>

                <input
                    type='text'
                    placeholder='Enter the name..'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br />

                <input
                    type='email'
                    placeholder='Enter the email..'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />

                <input
                    type='password'
                    placeholder='Enter the password..'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br />

                <button onClick={handleHomepage}>Login</button>
            </form>
            <span className='signup-link'>Dont have account Yet <a href='' onClick={handleSignup}>Create_Account</a></span>
        </div>
    );
};

export default Login;
