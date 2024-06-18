import React from 'react'
import { motion, spring } from 'framer-motion'

function ContentBox({ height, width, aspectRatio, title, subHeading }) {
  const style = {
    height: height,
    width: width,
    aspectRatio: aspectRatio,
  }

  return (
    <motion.div 
      class="box"
      style={style}
      whileHover={{scale: 1.05, backgroundColor: 'red', color: 'white'}}
      transition={{type: 'spring'}}
    >
        <h1 class="title">{title || "Title"}</h1>
        <h2 class="subheading">{subHeading || "Subheading"}</h2>
    </motion.div>
  )
}

export default ContentBox