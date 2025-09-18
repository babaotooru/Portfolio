import React, { useState } from 'react'
import "./styles/header.css"
import useInView from "./useInView";
function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [headerRef, headerVisible] = useInView(0.2);

  return (
    <header ref={headerRef} className={`fade-in-up${headerVisible ? ' animate' : ''}`}>
      <h1 className=''>O.</h1>
      <nav className=''>
        {["home", "skills", "about", "contact"].map((link, index) =>
          <a key={index} href={`#${link}`} className={link === activeLink ? "active" : ""} onClick={() => setActiveLink(link)}>{link.toUpperCase()}</a>
        )}
      </nav>
    </header>
  )
}

export default Header