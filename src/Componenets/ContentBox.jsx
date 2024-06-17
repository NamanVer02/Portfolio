import React from 'react'

function ContentBox({ height, width, aspectRatio, title, subHeading }) {
  const style = {
    height: height,
    width: width,
    aspectRatio: aspectRatio,
  }

  return (
    <div class="box" style={style}>
        <h1 class="title">{title || "Title"}</h1>
        <h2 class="subheading">{subHeading || "Subheading"}</h2>
    </div>
  )
}

export default ContentBox