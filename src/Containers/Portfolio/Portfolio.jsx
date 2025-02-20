import React, { useState } from 'react'
import Header from '../../Components/PageHeaderContent/Header';
import { BsInfoCircleFill } from 'react-icons/bs';
import './Portfolio.css'
import ImageOne from '../../images/image-1.jpeg'
import ImageTwo from '../../images/image-2.jpg'


const PortfolioData = [
  {
    id:1,
    name: "TradeTrack",
    image : ImageOne
  },
  {
    id:2,
    name: "Ecommerce Full stack",
    image : ImageTwo
  }
]

const filterData = [
  {
    filterId : 1,
    label :'Development'
  }
]

    

const Portfolio = () => {

  const [hoveredvalue, setHoveredvalue] = useState(null)

  function handleHover(index){
   setHoveredvalue(index)
  }
   console.log(hoveredvalue)

  return (
    <section className="portfolio">
    <Header headerText="My Portfolio" icon={<BsInfoCircleFill size={40}/>} />

        <div className='portfolio-content'>

           <ul className='content-filter'>

            {
              filterData.map((item) => (
                <li key={item.filterId} >
                  {
                    item.label
                  }
                </li>
              ))
            }

           </ul>

        </div>

        <div className="portfolio-content-cards">

          {
            PortfolioData.map((item, index) =>(
              <div className="portfolio-content-items" key={item.id}
                onMouseEnter={()=>handleHover(index)}
                onMouseLeave={()=>handleHover(null)}
              >

                <div className="portfolio-content-img-wrapper">
                  <p>
                    <img alt="dummy" src={item.image}></img>
                  </p>
                </div>

                <div className="Overlay">

                  {
                    index === hoveredvalue && (
                      <div className='Overlay-content'>
                        <p>{item.name}</p>
                        <button>Visit</button>
                      </div>
                    )
                  }

                </div>
                   
              </div>
            ))
          }

        </div>




  </section>
  )
}

export default Portfolio
