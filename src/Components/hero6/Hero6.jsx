import React from 'react'
import "./hero6.css"
import frame from "../../Image/Frame.png"
import frame1 from "../../Image/Frame (1).png"
import frame2 from "../../Image/Frame (2).png"
import frame3 from "../../Image/Frame (3).png"
import frame4 from "../../Image/Frame (4).png"
import frame5 from "../../Image/Frame (5).png"
const Card =[
  {
    birthImg:`${frame}`,
    birthTitle: "Red Garnet - January",
    birthPara:"arnet is an entire group of minerals that vary in their chemical composition, resulting in a variety of…",
  },
  {
    birthImg:`${frame1}`,
    birthTitle: "Red Garnet - January",
    birthPara:"arnet is an entire group of minerals that vary in their chemical composition, resulting in a variety of…",
  },{
    birthImg:`${frame2}`,
    birthTitle: "Peridot - august",
    birthPara:"arnet is an entire group of minerals that vary in their chemical composition, resulting in a variety of…",
  },{
    birthImg:`${frame3}`,
    birthTitle: "Topaz - December",
    birthPara:"arnet is an entire group of minerals that vary in their chemical composition, resulting in a variety of…",
  },{
    birthImg:`${frame4}`,
    birthTitle: "Turquoise -December",
    birthPara:"arnet is an entire group of minerals that vary in their chemical composition, resulting in a variety of…",
  },{
    birthImg:`${frame5}`,
    birthTitle: "Ruby - July",
    birthPara:"arnet is an entire group of minerals that vary in their chemical composition, resulting in a variety of…",
  },
]
function Hero6() {
  return (
    <div className="birthContainer">
      <div className="birthContent">
        <h1 className="h1birthContentHeading">Birth Gemstones</h1>
<p className="biethcontentpara">Certainly! Here are birthstones for each month along with a brief.</p>
      </div>
      <div className="birthCardContainer">
        {
          Card.map((item,ind)=>(
            <div className="BirthCard">
            <img src={item.birthImg} alt="" className="birthimg" />
            <h1 className="birthtitle">{item.birthTitle}</h1>
            <p className="birthpara">{item.birthPara}</p>
          </div>
          ))
        }
      
      </div>
      <button className="viewbutton">View All</button>
    </div>
  )
}

export default Hero6