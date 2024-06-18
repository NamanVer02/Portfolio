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
                <RectangleBox
                  org="Google Student Developers Club"
                  title="Graphic and UI/UX Designer"
                  date="October 2022 - Present"
                ></RectangleBox>
                <RectangleBox
                  org="Karking.in"
                  title="Flutter Developer"
                  date="September 2023 - January 2024"
                ></RectangleBox>
                <RectangleBox
                  org="Jivan Health"
                  title="User Interface and Experience Designer"
                  date="January 2024 - April 2024"
                ></RectangleBox>
                <RectangleBox
                  org="Freelancer.com"
                  title="Design Freelancer"
                  date="August 2017 - June 2019"
                ></RectangleBox>
            </div>
        </div>
    </div>
  )
}

export default Experience