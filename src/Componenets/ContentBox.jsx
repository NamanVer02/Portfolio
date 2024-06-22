import React from 'react'
import { color, motion, spring } from 'framer-motion'

function ContentBox({ height, width, aspectRatio, title, subHeading, backgroundURL, link }) {
  const style = {
    height: height,
    width: width,
    aspectRatio: aspectRatio,
    color: 'black',
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) )`,
    cursor: link != ' ' ? 'pointer' : 'default'
  }

  const hoverStyle = {
    scale: 1.05,
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.7) ), url(${backgroundURL})`, // Replace with your image URL
    backgroundSize: 'cover', // Ensure the image covers the entire box
    backgroundPosition: 'center', // Center the image
    border: 'none', // Remove border on hover
    color: 'white' // Change text color to white
  }

  const handleClick = () => {
    if(link != ' '){
      window.open(link, '_blank');
    }
  }

  return (
    <motion.div 
      onClick={link != ' ' ? handleClick : undefined}
      className="box"
      style={style}
      whileHover={hoverStyle}
      transition={{type: 'spring', border: {duration: 0}, backgroundImage: {duration: 0}}}
    >
        <h1 className="title">{title || "Title"}</h1>
        <h2 className="subheading">{subHeading || "Subheading"}</h2>
    </motion.div>
  )
}

export default ContentBox