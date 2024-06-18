import React from 'react'

function RectangleBox({ title, org, date }) {
  return (
    <div class="rect-box">
        <div className="info">
            <h3 className="org">{org || "Organisation"}</h3>
            <h1 className="title">{title || "Title"}</h1>
            <div className="tools">
                
            </div>
            <h3 className='date'>{date || "Date"}</h3>
        </div>
        <div className="logo">

        </div>
    </div>
  )
}

export default RectangleBox