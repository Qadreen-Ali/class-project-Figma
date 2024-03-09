import React from 'react'
import "./herosection.css"
import Heroimg from "../../Image/heroimg.png"

function Herosection() {
  return (
    <div className='herosection'>
        <img  className="heroimage"
        src={Heroimg} alt=""
         />
    <div className="herocontent">
    <h1 className="heroheading">Discover the World of  Gemstones</h1>
        <p className="heropara">Unveiling Earth's Treasures: Explore the
         Radiance of Gemstones - Your Ultimate Guide to the World of Precious 
         and Semi-Precious Gems</p>
         <button className="herobutton">Get Started</button>
    </div>
    </div>
  )
}

export default Herosection