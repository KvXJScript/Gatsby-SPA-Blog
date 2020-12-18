import React from 'react';
import Header from './header';
import Footer from './Footer';
import '../styles/_base.scss';

function Layout({children}) {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
