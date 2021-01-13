import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import '../styles/_base.scss';

function Layout({children}) {
  return (
    <div className="container">
      <Header/>
      <Sidebar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
