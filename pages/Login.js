import React, { useState } from 'react';
import { message, Progress } from 'antd';
import styles from '../styles/sass/Login.module.scss';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { VscAccount } from 'react-icons/vsc';
import Index from '.';

const Login = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    if (name !== '' && email !== '' && password !== '') {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setName('');
        setEmail('');
        setPassword('');
        
        router.push('/');
      }, 2000);
    } else {
      message.error('Please fill all required fields');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
      </Head>

      <div className={styles.msgsuccess}>
      {/* success message showing */}
      {/* if showSuccess is true, the message will be displayed */}
      {showSuccess && (
        <div className={styles.progress}>
          <Progress type="circle" percent={100} width={80} />
          <p>Login successful...</p>
        </div>
      )}
    </div>
      <form className={styles['login-container']}>
        <VscAccount className={styles.accountIcon} />
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
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <button className={styles.button} onClick={handleLogin}>Login</button>
        
      </form>
    </div>
  );
};

export default Login;
