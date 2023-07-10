import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';
import Sidebar from '../pages/Sidebar';
const Layout = ({ children }) => {
  return (
    <div>
    <Navbar />
    <Sidebar />
    <div>{children}</div>
  </div>
  );
};

export default Layout;
