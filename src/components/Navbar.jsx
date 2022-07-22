
import React from 'react';
import logo from '../images/ironhack-logo-xs.png';
import menu from '../images/menu-top-xs.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='top'>
          <img className='App-logo'  src= {logo} alt="Ironhack Logo" />
          <img className='Burger'  src= {menu} alt="Burger Menu" />
        </div>
        
        <h1>Say Hello to <br></br> ReactJS</h1>
        <p>You will learn how to use <br></br>
            the most popular frontend library, <br></br>
            and become a super Ninja developer.
        </p>

        <button>Awesome!</button>
    </nav>
  )
}

export default Navbar;