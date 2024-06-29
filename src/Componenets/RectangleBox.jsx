import React from 'react'
import { motion } from 'framer-motion'

function RectangleBox({ title, org, date, link, backgroundURL, imagePath }) {
  const style = {
    color: 'black',
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) )`,
    cursor: link != ' ' ? 'pointer' : 'default',
  }

  const hoverStyle = {
    scale: 1.05,
    backgroundImage: `radial-gradient( rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.76)), url(${backgroundURL})`, // Replace with your image URL
    backgroundSize: 'cover', // Ensure the image covers the entire box
    backgroundPosition: 'center', // Center the image
    border: 'none', // Remove border on hover
    color: 'white', // Change text color to white
  }

  const handleClick = () => {
    if(link != ' '){
      window.open(link, '_blank');
    }
    console.log(imagePath);
  }

  return (
    <motion.div 
      class="rect-box"
      style={style}
      whileHover={hoverStyle}
      transition={{type: 'spring', border: {duration: 0}, backgroundImage: {duration: 0}}}
      onClick={handleClick}
    >
        <div className="info">
            <h3 className="org">{org || "Organisation"}</h3>
            <h1 className="title">{title || "Title"}</h1>
            <div className="tools">
                
            </div>
            <h3 className='date'>{date || "Date"}</h3>
        </div>
        <div className="logo">
          <img src={process.env.PUBLIC_URL + `${imagePath}`} alt="logo" className="logo-img" />
        </div>
    </motion.div>
  )
}

export default RectangleBox