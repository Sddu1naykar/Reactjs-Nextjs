import React, { useState } from 'react';
import styles from '../styles/sass/Signup.module.scss';
import Head from 'next/head';
import { message, Progress } from 'antd';
import { useRouter } from 'next/router';

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSignup = (event) => {
    event.preventDefault();

    if (name !== '' && email !== '' && password !== '' && confirmPassword !== '') {
      if (password === confirmPassword) {
        setShowSuccess(true);
        setTimeout(() => {
          // alert('Signup successful....');
          setName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setShowSuccess(false);
          router.push('/Login');
        }, 2000);
      } else {
        message.error('Passwords do not match');
      }
    } else {
      message.error('Please fill all the required fields');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Signup</title>
      </Head>
{/* 
      <div className={styles.msgsuccess}> */}
        {/* Success message showing */}
        {/* If showSuccess is true, the message will be displayed */}
        {/* {showSuccess && <p>Signup successful...</p>} */}
      {/* </div> */}
      <div className={styles.msgsuccess}>
      {/* success message showing */}
      {/* if showSuccess is true, the message will be displayed */}
      {showSuccess && (
        <div className={styles.progress}>
          <Progress type="circle" percent={100} width={80} />
          <p>Account Created Successfully  ...</p>
        </div>
      )}
    </div>
      <form className={styles['login-container']}>
        <h1 className={styles.title}>SIGNUP HERE</h1>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br/>
        <input
          className={styles.input}
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <input
          className={styles.input}
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <input
          className={styles.input}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        /><br/>
        <button className={styles.button} onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
