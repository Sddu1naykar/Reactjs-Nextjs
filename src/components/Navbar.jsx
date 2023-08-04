import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import Login from './Login';

function Navbar() {
    const login=()=>{
        return(
            <div>
                alert("login sucessfully...")
            </div>
        )
    }
    return (
        <div className='container'>
            <div className='nav'>
                <h5>LA-COLLECTION</h5>
                <a to="/home">Home</a>
                <a to="/home">About</a>
                <a to="/home">Contact</a>
                <a to="/home" onClick={login}>Login</a>
            </div>
            {/* home page */}
                
            <div className='home'>
           
              <img src='Laptop-pic-1024x679.jpg'></img> 

            </div>
            <div>
                <footer className='footer'>
                    <h4>For more information contact-567567567</h4>
                </footer>
            
            </div>



        </div>


    );
}

export default Navbar;
