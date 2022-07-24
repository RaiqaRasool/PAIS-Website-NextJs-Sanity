import React, { useState } from 'react';
import Link from 'next/link';
import logo from "../img/logo.png";
import Image from 'next/image';
const Navbar = () => {
    const [toggleMenu,setToggleMenu]=useState(false);
  return (
    <>
    
    <header className="header">
            <Link href="/" className="logo">
            <Image src={logo} alt="logo" width="100px" height="40px"/>
            </Link>
            <div id="menu-btn" className={toggleMenu?"fas fa-times":"fas fa-bars"} onClick={()=>{
                if(toggleMenu)
                setToggleMenu(false)
                else
                setToggleMenu(true)
            }
            }></div>
            {
            <nav className={toggleMenu?"navbar active":"navbar"}>
                <Link href="/">Home</Link>
                <Link href="/blogs">Blogs</Link>
                <Link href="/events">Events</Link>
                <Link href="/workshops">Workshops</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            }
            
    </header>
    </>
  )
}

export default Navbar