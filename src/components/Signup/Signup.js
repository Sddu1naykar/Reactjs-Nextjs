import { useEffect, useState } from "react";
import React from "react";
import "../Signup/Signup.scss";
import Login from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { addSignupDetails } from "../Redux/Signuslice";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [backLogin, setGobackLogin] = useState(false);
  const dispatch = useDispatch();

  // Fetching data from the store
  const signupData = useSelector((state) => state.signup);
  console.log(signupData); // Print the fetched data in the console log

  const handleSignup = (event) => {
    event.preventDefault();

    // Perform signup logic here, e.g., create a new user with the provided credentials

    if (name !== "" && email !== "" && password !== "") {
      const signupDetails = {
        name: name,
        email: email,
        password: password,
      };

      dispatch(addSignupDetails(signupDetails));

      alert("Signup successful! Please log in with your new credentials.");
      setName("");
      setEmail("");
      setPassword("");

      console.log(signupDetails); // Print the user data when the Signup button is clicked

      // Call function to navigate to login
      gobackLogin();
    } else {
      alert("Invalid signup details. Please try again.");
    }
  };

  const gobackLogin = () => {
    setGobackLogin(true);
  };

  if (backLogin) {
    return <Login />;
  }

  return (
    <div className="Signup-container">
      <form className="signup-form">
        <h1>SIGNUP HERE</h1>

        <input
          type="text"
          placeholder="Enter the name.."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <input
          type="email"
          placeholder="Enter the email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="Enter the password.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
