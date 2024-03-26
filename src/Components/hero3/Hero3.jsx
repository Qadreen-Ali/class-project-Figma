import React from 'react'
import "./hero3.css"
import pic4 from "../../Image/bimg.png"
import red from "../../Image/red.png"
import green from "../../Image/green.png"
import purple from "../../Image/purple.png"


const Cards=[{
  title:"What Is Ruby - Gemstone Facts and Information",
  img:`${red}`,
  para:"Ruby is probably the most iconic coloured gemstone inthe world, and its name will forever be linked with its striking, definitive colour..."
},
{
  title:"What Is Ruby - Gemstone Facts and Information",
  img:`${green}`,
  para:"Ruby is probably the most iconic coloured gemstone inthe world, and its name will forever be linked with its striking, definitive colour..."

},
{
  title:"What Is Ruby - Gemstone Facts and Information",
  img:`${purple}`,
  para:"Ruby is probably the most iconic coloured gemstone inthe world, and its name will forever be linked with its striking, definitive colour..."

}
]


function Hero3() {
  return (
    <div className='herocontainer'>
      <img src={pic4} alt="" className="heroimg" />
 <div className="contentcontainer">
 <h1 className="heroTitleHeading">Gemstones Articles</h1>
      <p className="paracontent">Unveiling the World of Gemstones: In-depth Articles
       and Insights on the Beauty, History, and Mystique of Earth's Precious Treasures</p>
 </div>
 <div className="cardcontainer">
  {
    Cards.map((item,ind) => (
      <div className="card1" key={ind}>
        <div>
        <img src={item.img}  className="cardimg" />
        </div>
        <h1 className="cardtitle">{item.title}</h1>
    <p className="cardpara">{item.para}</p>
     <button className="cardbtn">Read More <i className="activebtn fa-solid fa-greater-than"></i></button>
     
  </div>
    ))
  }
  
    
</div>
<button className="viewbtn">View All</button>
 </div>
  )
}

export default Hero3