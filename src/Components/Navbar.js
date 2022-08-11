import React from 'react';
import '../App.css';
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {

    const location = useLocation();

  return (
    <div className='navbar'>
        <Link style={{textDecoration: 'none'}} className='link' to={'/'}><div className={location.pathname === '/' ? 'bg-blue' : '.link'}>Home</div></Link>
        <Link style={{textDecoration: 'none'}} className='link' to={'/features'}><div className={location.pathname === '/features' ? 'bg-blue' : ''}>Features</div></Link>
        <Link style={{textDecoration: 'none'}} className='link' to={'/theme'}><div className={location.pathname === '/theme' ? 'bg-blue' : ''}>Theme</div></Link>
        <Link style={{textDecoration: 'none'}} className='link' to={'/pricing'}><div className={location.pathname === '/pricing' ? 'bg-blue' : ''}>Pricing</div></Link>
    </div>
  )
}

export default Navbar;