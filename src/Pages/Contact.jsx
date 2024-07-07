import React from 'react'
import ContentBox from '../Components/ContentBox'
import Navbar from '../Components/Navbar'
import './Contact.css'

function Contact() {
  let contactList = [
    {
      title: 'Email',
      content: 'namanver.2002@gmail.com',
      link: ' ',
      background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg'
    },
    {
      title: 'Phone',
      content: '+91-8219763511',
      link: ' ',
      background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg'
    },
    {
      title: 'LinkedIn',
      content: 'namanver.02',
      link: 'https://www.linkedin.com/in/namanver02/',
      background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg'
    },
    {
      title: 'Github',
      content: 'NamanVer02',
      link: 'https://github.com/NamanVer02',
      background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg'
    },
    {
      title: 'Behance',
      content: 'Naman Verma',
      link: 'https://www.behance.net/namanverma10',
      background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg'
    },
  ];

  return (
    <div className='contact'>
        <Navbar></Navbar>
        <div className="content">
            <h1>Contact Me</h1>
            <div className="contact-grid">
              {contactList.map((item, index) => (
                <ContentBox 
                  key={index}
                  title={item.title}
                  subHeading={item.content}
                  backgroundURL={item.background}
                  link={item.link}
                ></ContentBox>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Contact