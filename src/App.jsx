
import './App.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const menu = [
  { 
    id : nanoid(),
    category : "Shakes",
    imgLink : "assests/image1.jpeg",
    title : "Buttermilk Pancakes",
    price : "$15.99",
    desc : "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
  },
  {
    id : nanoid(),
    category: "Lunch",
    imgLink : "assests/image2.jpeg",
    title : "Diner Double",
    price : "$13.99",
    desc : "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
  },
  {
    id : nanoid(),
    category: "Breakfast",
    imgLink : "assests/image3.jpeg",
    title : "Godzilla Milkshake",
    price : "$6.99",
    desc : "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
  },
  {
    id : nanoid(),
    category: "Shakes",
    imgLink : "assests/image4.jpeg",
    title : "Country Delight",
    price : "$20.99",
    desc : "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"
  },
  {
     id : nanoid(),
    category: "Lunch",
     imgLink : "assests/image5.jpeg",
    title : "Egg Attack",
    price : "$22.99",
    desc : "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
  },
  {
    id : nanoid(),
    category: "Breakfast",
    imgLink : "assests/image6.jpeg",
    title : "Oreo Dream",
    price : "$18.99",
    desc : "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
  },
  {
    id : nanoid(),
    category: "Shakes",
    imgLink : "assests/image7.jpeg",
    title : "Bacon Overflow",
    price : "$8.99",
    desc : "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
  },
  {
    id : nanoid(),
    category: "Lunch",
    imgLink : "assests/image8.jpeg",
    title : "American Classic",
    price : "$12.99",
    desc : "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
  },
  {
    id : nanoid(),
    category: "Breakfast",
    imgLink : "assests/image9.jpeg",
    title : "Quarantine Buddy",
    price : "$16.99",
    desc : "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
  },
]

function App() {
  const [currentMenu, setCurrentMenu] = useState(menu);
  
  return (
    <div>
      <h1>Our Menu</h1>
      <div className='line'>
      </div>

      <button onClick={()=>{setCurrentMenu(menu)}}>All</button>
      <button onClick={()=>{
        setCurrentMenu(
          menu.filter(i => i.category === "Breakfast")
        )
      }
      }>Breakfast</button>
      <button onClick={()=>{
        setCurrentMenu(
          menu.filter(i => i.category === "Lunch")
        )
      }
      }>Lunch</button>
      <button onClick={()=>{
        setCurrentMenu(
          menu.filter(i => i.category === "Shakes")
        )
      }
      }>Shakes</button>
    
      <div className="main">
      {
        currentMenu.map((item) => {
          const {id,imgLink, title,category, price, desc} = item;
          return(
            <article key={id} className='items'>
            <img src={imgLink} alt={title}/>
             <h3>{title}</h3>
             <span>{price}</span>
             <p>{desc}</p>
             </article>
          )
        })
      }
      </div>
    </div>
  )
}

export default App
