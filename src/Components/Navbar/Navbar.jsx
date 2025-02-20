import React, { useState } from 'react'
import {FaBars, FaReact} from 'react-icons/fa';
import {HiX} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import './Navbar.css'

   const data =[
      {
        label:"HOME",
        to:'/'
      },
      {
        label:"ABOUT",
        to:'/about'
      },
      {
        label:"RESUME",
        to:'/resume'
      },
      {
        label:"SKILLS",
        to:'/skills'
      },
      {
        label:"PORTFOLIO",
        to:'/portfolio'
      },
      {
        label:"CONTACT",
        to:'/contact'
      }
  ]

const Navbar = () => {

  const [toggleIcon, setToggleIcon] =useState(false)

  const handleToggleIcon = ()=>{
    setToggleIcon(!toggleIcon);
    document.body.classList.toggle('no-scroll', !toggleIcon);
  }

  return (
    <div>
         <nav className='navbar'>

         <div className="navbar-container">
            <Link to={'/'} className="navbar-container-logo">
                <FaReact size={30}/>
            </Link>
         </div>

         <ul className={`navbar-container-menu ${toggleIcon ? 'active' : ''} `}>
            {
                data.map((item, key)=>{
                    return(
                        <li key={key} className='navbar-container-menu-item'>

                        <Link className='navbar-container-menu-item-links' to={item.to}>
                               {item.label}
                        </Link>

                 </li>
                    )
                   
                })
            }
         </ul>

         <div className="nav-icon" onClick={handleToggleIcon}>
             {
                toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
             }
         </div>

         </nav>
    </div>
  )
}

export default Navbar
