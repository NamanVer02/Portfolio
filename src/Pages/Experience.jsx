import React from 'react'
import RectangleBox from '../Componenets/RectangleBox'
import Navbar from '../Componenets/Navbar'
import './Experience.css'

function Experience() {
  return (
    <div className='exp'>
        <Navbar></Navbar>
        <div className="content">
            <h1>Experience</h1>
            <div className="exp-list">
                <RectangleBox></RectangleBox>
                {/* <RectangleBox></RectangleBox> */}
            </div>
        </div>
    </div>
  )
}

export default Experience