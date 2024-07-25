import React from 'react'
import RectangleBox from '../Components/RectangleBox'
import Navbar from '../Components/Navbar'
import './Certifications.css'

function Certifications() {
    const certList = [
        {
          org: 'Amazon Web Services',
          title: 'Solutions Architect - Associate',
          date: 'April 2024',
          link: 'https://www.credly.com/badges/e0509357-4b9d-4d2f-95e0-e58384702a9f/linked_in_profile',
          background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg',
          imagePath: '/Assets/SAA.png'
        },       
        {
          org: 'Amazon Web Services',
          title: 'Cloud Practitioner',
          date: 'December 2023',
          link: 'https://www.credly.com/badges/96b4013e-9edb-4b3e-929f-3aa4d7d65250/linked_in_profile',
          background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg',
          imagePath: '/Assets/CP.png'
        },       
        {
          org: 'IBM',
          title: 'Developing Cloud Native Applications',
          date: 'July 2022',
          link: 'https://www.credly.com/badges/cf60a239-047a-4e39-88c1-e987222e2dc7?source=linked_in_profile',
          background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg',
          imagePath: '/Assets/IBM.png'
        },       
      ];
    
      return (
        <div className='cert'>
            <Navbar></Navbar>
            <div className="content">
                <h1>Certifications</h1>
                <div className="cert-list">
                  {certList.map((item, index) => (
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

export default Certifications
