import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const controls = useAnimation();

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      controls.start('visible').then(() => {
        localStorage.setItem('hasVisited', 'true');
      });
    } else {
      controls.set('visible');
    }

    const handleBeforeUnload = () => {
      localStorage.removeItem('hasVisited');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [controls]);

  const navItems = [
    { name: 'About Me', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Resume', path: '/resume' },
  ];

  const navbarVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, type: 'spring', stiffness: 50 } }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, type: 'spring', stiffness: 50 }
    })
  };

  return (
    <>
      <motion.div
        className='navbar'
        variants={navbarVariants}
        initial='hidden'
        animate={controls}
      >
        <motion.div
          className='banner top'
          whileHover={{ backgroundColor: '#FF5454' }}
          transition={{ type: 'spring' }}
        ></motion.div>

        <img src={process.env.PUBLIC_URL + '/Assets/dp.jpg'} alt='Profile' />

        <div className='nav'>
          <h1>Navigation</h1>
          <ul>
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={listItemVariants}
                initial="hidden"
                animate={controls}
                whileHover={{ color: '#FF5454', scale: 1.1, fontWeight: 700 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => navigate(item.path)}
                style={{ color: location.pathname === item.path ? '#FF5454' : 'inherit', fontWeight: location.pathname === item.path  ? 700 : 500 }}

              >
                {item.name}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className='banner bottom'
          whileHover={{ backgroundColor: '#FF5454' }}
          transition={{ type: 'spring' }}
          onClick={() => navigate("/contact-me")}
          style={{ backgroundColor: location.pathname === "/contact-me" ? '#FF5454' : '#272727'}}
        >
          Contact Me
        </motion.div>
      </motion.div>
    </>
  );
}

export default Navbar;
