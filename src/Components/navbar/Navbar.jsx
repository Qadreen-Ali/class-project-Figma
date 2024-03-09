import React from 'react'
import "./navbar.css"
import Logo from "../../Image/logo.png"


function Navbar() {
  return (
    <div className='navbar'>
        <div className="logocontainer">
            <img src={Logo} alt="" className="logo" />
            <p className="gem">GemStones</p>
        </div>
        <div className="menucontainer">
            <ul className="listItem">
                <li className="menuItem home">Home</li>
                <li className="menuItem">Encyclopedia <i class=" menuIcon fa-solid fa-chevron-down"></i></li>
                <li className="menuItem">Articles <i class=" menuIcon fa-solid fa-chevron-down"></i></li>
                <li className="menuItem">Stones <i class="menuIcon fa-solid fa-chevron-down"></i></li>
                <li className="menuItem">Raw Stones <i class="menuIcon fa-solid fa-chevron-down"></i></li>
                <li className="menuItem">Birth Stones <i class=" menuIcon fa-solid fa-chevron-down"></i></li>
            </ul>
        </div>
        <div className="buttoncontainer">
          <h2 className="login">Login</h2>
          <button className="register">Register</button>
        </div>
    </div>
  )
}

export default Navbar