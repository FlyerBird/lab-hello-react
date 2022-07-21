
import React from 'react';
import logo from '../images/ironhack-logo-xs.png'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img className='App-logo'  src= {logo} alt="Ironhack Logo" />
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