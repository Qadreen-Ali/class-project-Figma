import React from 'react'
import "./hero5.css"
import backimg from "../../Image/backimg.png"
import ruby from "../../Image/ruby.png"
import meral from "../../Image/meral.png"
import mada from "../../Image/mada.png"

const  Card=[{
    title:"Ruby",
    img:`${ruby}`,
    para:"Immerse yourself in the allure of Sri Lanka's gemstone treasure trove, where the island's fertile soil reveals a spectrum of vibrant sapphires, including the famed Ceylon blue. Renowned for centuries, these ethereal gems reflect the rich history and geological splendor that make Sri Lanka a gemstone paradise.",
},
{
    title:"Meral",
    img:`${meral}`,
    para:"From the lush green brilliance of Brazilian emeralds to the captivating hues of amethysts, aquamarines, tourmalines, and topazes, Brazil stands as a vibrant mosaic of gemstone diversity. The country's rich geological landscape reveals an extraordinary array of precious stones.",
},
{
    title:"Madagascar",
img:`${mada}`,
para:" From the mesmerizing blues of sapphires to the fiery allure of rubies, the spectrum extends to vibrant tourmalines and the iridescent beauty of labradorites. Madagascar's unique geological landscape blesses it with an extraordinary variety of gemstones.",
}
];

function Hero5() {
  return (
    <div className='rawcontainer'>
        <img src={backimg} alt="" className="backimg" />
       <div className="rawContent">
       <h1 className="rawTitle">Raw Gemstones</h1>
       <p className="rawpara">Embark on a global gemstone odyssey, from Sri Lanka's dazzling sapphires to Colombia's lush emeralds, exploring the
        countries with the richest variety of precious stones.</p>
       </div>
       <div className="rawCardContainer">
        {
            Card.map((item,ind) =>(
                <div className="rawCard" key={ind}>
                <div className="rawCardleft">
                    <h1 className="rawCardTitle">{item.title}</h1>
                    <p className="rawCardPara">{item.para}</p>
                </div>
                <div className="rawCardright">
                    <img src={item.img} alt="" className="rawCardImg" />
                </div>
                </div>
            ))
        }
       
       
       </div>
       <button className="viewbtn">View All</button>

    </div>
  )
}

export default Hero5