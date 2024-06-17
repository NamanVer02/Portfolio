import React from 'react'

function RectangleBox({ title, subHeading, org, date }) {
  return (
    <div class="rect-box">
        <div className="info">
            <h3 className="org">{org || "Organisation"}</h3>
            <h1 className="title">{title || "Title"}</h1>
            <h2 className="subheading">{subHeading || "Subheading"}</h2>
            <h3 className='date'>{date || "Date"}</h3>
        </div>
        <div className="logo">
            
        </div>
    </div>
  )
}

export default RectangleBox