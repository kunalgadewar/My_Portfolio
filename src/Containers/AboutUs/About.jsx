import React from 'react';
import Header from '../../Components/PageHeaderContent/Header';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDatabase, FaDev } from 'react-icons/fa6';
import './About.css';


const personalDetails =[

{
  label:"Name",
  value:"Kunal"
},
{
  label:"Nationality",
  value:"Indian"
},
{
  label:"Age",
  value:"23"
},
{
  label:"Email",
  value:"kunalgadewar03@gmail.com"
},
{
  label:"Contact",
  value:"+91 7569116369"
}


]

const Summary="Passionate and detail-oriented Frontend Developer with a strong foundation in creating responsive, user-friendly interfaces using modern web technologies. Skilled in HTML, CSS, JavaScript, and popular frameworks like React, I specialize in transforming design concepts into engaging digital experiences. Committed to clean code practices, cross-browser compatibility, and continuous learning to deliver high-quality web applications that prioritize both functionality and aesthetic appeal.";

const About = () => {
  return (
    <section className="about">
      <div className='about'>
      <Header headerText="About Me" icon={<BsInfoCircleFill size={40}/>} />
      </div>

      <div className="content">
       
       <div className='personalWrapper'>

       <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(-900px)"
          }}

          end={{
            transform: "translateX(0px)"
          }}
        >
           <h3>Front End Developer</h3>
           <p>{Summary}</p>

           </Animate>

           <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(500px)"
          }}

          end={{
            transform: "translateX(0px)"
          }}
          >
           <h3 className='personalText'>PersonalDetails</h3>

           <ul>
           {
            personalDetails.map((item,i)=>{
              return(
              <li key={i}>
              <span className='title'>{item.label}</span>
              <span className='value'>{item.value}</span>
              </li>
              )
            })
           }
           </ul>
           </Animate>

       </div>


       <div className='serviceWrapper'>

       <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(600px)"
          }}

          end={{
            transform: "translateX(0px)"
          }}
          >
        <div className="innerContent">

             <div className='child-1'> <FaDatabase size={60} color="var( --yellow-theme-main-color)"/></div>
             <div className='child-2'> <FaDev size={60} color="var( --yellow-theme-main-color)"/></div>
             <div className='child-3'> <DiAndroid size={60} color="var( --yellow-theme-main-color)"/></div>
             <div className='child-4'> <DiApple size={60} color="var( --yellow-theme-main-color)"/></div>

        </div>
        </Animate>
       </div>

      
      </div>
      
    </section>
  );
}

export default About;
