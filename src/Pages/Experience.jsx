import React from 'react'
import RectangleBox from '../Components/RectangleBox'
import Navbar from '../Components/Navbar'
import './Experience.css'

function Experience() {
  const expList = [
    {
      org: 'Google Student Developers Club',
      title: 'Graphic and UI/UX Designer',
      date: 'October 2022 - August 2024',
      link: ' ',
      background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg',
      imagePath: '/Assets/GDSC.png'
    },
    {
      org: 'Karking.in',
      title: 'Android Developer Intern',
      date: 'September 2023 - January 2024',
      link: ' ',
      background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg',
      imagePath: '/Assets/Karking.png'
    },
    {
      org: 'Jivan Health',
      title: 'User Interface and Experience Designer',
      date: 'January 2024 - April 2024',
      link: ' ',
      background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg',
      imagePath: '/Assets/Jivan.svg'
    },
    {
      org: 'Freelancer.com',
      title: 'Design Freelancer',
      date: 'August 2017 - June 2019',
      link: ' ',
      background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg',
      imagePath: '/Assets/Freelancer.svg'
    },
    
  ];

  return (
    <div className='exp'>
        <Navbar></Navbar>
        <div className="content">
            <h1>Experience</h1>
            <div className="exp-list">
              {expList.map((item, index) => (
                <RectangleBox 
                  key={index}
                  org={item.org}
                  title={item.title}
                  date={item.date}
                  backgroundURL={item.background}
                  link={item.link}
                  imagePath={item.imagePath}
                ></RectangleBox>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Experience