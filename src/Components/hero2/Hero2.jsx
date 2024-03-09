import React, { useState } from "react";
import "./hero2.css";
// import pic1 from "../../Image/vector.png"
import filter from "../../Image/filter.png"
import c1 from "../../Image/card1.png"
import c2 from "../../Image/card2.png"
import c3 from "../../Image/card3.png"
import c4 from "../../Image/card4.png"
import c5 from "../../Image/card5.png"

const cards = [
    {
      title: "Ruby",
      img: `${c1}`
  
    },
    {
      title: "Emerald",
      img: `${c2}`
  
    },
    {
      title: "Sapphire",
      img: `${c3}`
  
    },
    {
      title: "Pearl",
      img: `${c4}`
  
    },
  
    {
      title: "Alexandrite",
      img: `${c5}`
  
    },
  
  ];
  



function Hero2() {
    const [searchTerm, setSearchTerm] =useState('');
    const [filteredCards, setFilteredCards] = useState(cards);

    const handleSearch=(e)=>{
        setSearchTerm(e.target.value);
        const filtered=cards.filter(item=>item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setFilteredCards(filtered);
    };

    // const handleSearch=(e)=>{
    //     setSearchTerm(e.target.value);
      
    //     const flitered=cards.filter(item=>item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
      
    //     setFilteredCards(flitered)
      
      
    //     }
  return (

    <div className='topsearchgem'>
        <h1 className="title">Gemstone Encyclopedia</h1>
    
    <div className="filtercontainer">
<img className='leftsideimg' src={filter} alt="" />
<input type="text" placeholder='Search for gems...'  onChange={handleSearch}/>
 
  <img src={filter} alt="" className="filter" />
  </div>
  <h2 className="subheading">Top Searched gemstones </h2>
  <div className="cardContianer">


{
  filteredCards.map((item,ind)=>(


    <div className="card">
    <img src={item.img} alt="" />

    <h3 className="cardtitel">{item.title}</h3>


  </div>
  
  ))
}
</div>


</div>
)
}


export default Hero2