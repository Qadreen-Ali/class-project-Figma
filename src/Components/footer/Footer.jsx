import React from 'react'
import "./footer.css"
import footerlogo from "../../Image/logo.png"
import facebook from "../../Image/facebook.png"
import google from "../../Image/google.png"
import instagram from "../../Image/instagram.png"

function Footer() {
  return (
    <div className='footerContainer'>
        <div className="leftFooter">
            <h1 className="footerlogo"><img className='footerimg' src={footerlogo} alt="" />Gemstones</h1>
            <p className="footerpara">Unveiling Earth's Treasures: Explore the Radiance
             of Gemstones - Your Ultimate Guide to the World of Precious and Semi-Precious Gems</p>
             <div className="footerIcons">
<img src={facebook} alt="" />
<img src={google} alt="" />
<img src={instagram} alt="" />
             </div>
        </div>
        <div className="rightFooter">
           <div className="footermenu">
            <ul>
              <li>Home</li>
              <li>Encyclopedia</li>
              <li>About Us</li>
              <li>Articles</li>
              <li>Raw Gemstones</li>
              <li>Gemstones</li>
              <li>BirthStones</li>
            </ul>
           
           </div>
       
        <div className="footerButton">
<input type="text" placeholder="Submit Your email for Notifications" />
        <button>Submit</button>
        </div>
        </div>
    </div>
  )
}

export default Footer