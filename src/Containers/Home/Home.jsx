import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'
import './Home.css'
const Home = () => {
    const navigate = useNavigate();

 const  handleNavigateToContactMe = ()=>{
    navigate("/contact")
  }

  return (
    <section id="home" className='home'>

        <div className="home-text">
              <h1>Hi, I am Kunal
                <br/>
                Full Stack Developer
              </h1>
        </div>


        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(550px)"
          }}

          end={{
            transform: "translateX(0px)"
          }}
        >
             <div className="home-contact-me">
                  <button onClick={handleNavigateToContactMe}>Hire Me</button>
            </div>
        </Animate>
       
       
    </section>
  )
}

export default Home
