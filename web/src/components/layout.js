import React from 'react';
import Nav from './nav';
import Aside from './aside';
import './layout.css';
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";
// import "@fontsource/space-grotesk/700.css"

const Layout = ({children})  => {
  return (
    <div className="container">
      <Aside/>
      <Nav/>
      <main className="content">{children}</main>
    </div>
  )
}

export default Layout
