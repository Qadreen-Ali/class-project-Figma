import React from 'react'
import "./hero4.css"
import h1logo from "../../Image/logo.png"
import group from "../../Image/gimg.png"

function Hero4() {
  return (
    <div className="heroXContainer">
        <h1 className="heroTitle">Gemstones</h1>
        <div className="gemstonecontainer">
            <div className="gemstoneleft">
                <h1 className="gemstonetitle">The Most Rarest Gemstones <img className='h1titleimg' src={h1logo} alt="" /></h1>
                <p className="gemstonepara">"Embark on a journey through the rarest treasures of the Earth with our collection of the most elusive gemstones. Each one is a marvel
                 of nature, boasting exquisite colors, exceptional clarity, and a scarcity that adds to its allure. Discover the mystique 
                 of these precious stones, from the mesmerizing blue hues of benitoite to the enchanting pink of musgravite. Our curated selection showcases nature's masterpieces, captivating
                  collectors and enthusiasts alike with the extraordinary beauty found only in the world's most elusive gemstones.</p>
                  <button className="gembtn">See All</button>
            </div>
            <div className="gemstoneright">
                <img className='gemstoneimg' src={group} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero4