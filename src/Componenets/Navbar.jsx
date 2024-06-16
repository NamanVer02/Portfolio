import React from 'react'
import Image from '../Assets/dp.jpg'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  let navigate = useNavigate();
  let location = useLocation();

  const navItems = [
    { name: 'About Me', path: '/about-me' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact Me', path: '/contact-me' }
  ];
  
  return (
    <>
      <div className='navbar'>
          <motion.div className='banner top'
            whileHover={{backgroundColor: '#FF5454'}}
            transition={{type: 'spring'}}
          >Settings</motion.div>

          <img src={Image}></img>

          <div className='nav'>
            <h1>Navigation</h1>
            <ul>
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ color: '#FF5454', scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  onClick={() => navigate(item.path)}
                  style={{ color: location.pathname === item.path ? '#FF5454' : 'inherit' }}
                >
                  {item.name}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <motion.div className='banner bottom'
            whileHover={{backgroundColor: '#FF5454'}}
            transition={{type: 'spring'}}
          >Contact Me</motion.div>
      </div>
    </>
  )
}

export default Navbar