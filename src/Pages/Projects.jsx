import React from 'react'
import Navbar from '../Componenets/Navbar'
import RectangleBox from '../Componenets/RectangleBox'
import './Projects.css'

function Projects() {
  return (
    <div className='projects'>
        <Navbar></Navbar>
        <div className="content">
            <h1>Projects</h1>
            <div className="project-list">
                <RectangleBox
                  org="Personal"
                  title="Event Management Platform"
                  date="November 2023"
                ></RectangleBox>
                <RectangleBox
                  org="Personal"
                  title="Birthday Reminder"
                  date="September 2023"
                ></RectangleBox>
                <RectangleBox
                  org="Personal"
                  title="Daily Bonus Collector"
                  date="October 2021"
                ></RectangleBox>
            </div>
        </div>
    </div>
  )
}

export default Projects