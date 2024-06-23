import React from 'react'
import Navbar from '../Componenets/Navbar'
import RectangleBox from '../Componenets/RectangleBox'
import './Projects.css'

function Projects() {
  const projectList = [
    {
      org: 'Personal',
      title: 'Event Management Platform',
      date: 'November 2023',
      link: ' ',
      background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg'
    }, 
    {
      org: 'Personal',
      title: 'Birthday Reminder',
      date: 'September 2023',
      link: ' ',
      background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg'
    }, 
    {
      org: 'Personal',
      title: 'Daily Bonus Collector',
      date: 'October 2021',
      link: ' ',
      background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg'
    }, 
  ];

  return (
    <div className='projects'>
        <Navbar></Navbar>
        <div className="content">
            <h1>Projects</h1>
            <div className="project-list">
              {projectList.map((item, index) => (
                <RectangleBox 
                  key={index}
                  org={item.org}
                  title={item.title}
                  date={item.date}
                  backgroundURL={item.background}
                  link={item.link}
                ></RectangleBox>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Projects