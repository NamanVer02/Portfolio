import React from 'react'
import ContentBox from '../Componenets/ContentBox'
import Navbar from '../Componenets/Navbar'
import './Contact.css'

function Contact() {
  let contactList = [
    {
      title: 'Email',
      content: 'namanver.2002@gmail.com',
      link: 'www.google.com',
      background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg'
    }
  ];

  return (
    <div className='contact'>
        <Navbar></Navbar>
        <div className="content">
            <h1>Contact Me</h1>
            <div className="contact-grid">
              {contactList.map((item) => (
                <ContentBox 
                  title={item.title}
                  subHeading={item.content}
                  backgroundURL={item.background}
                ></ContentBox>
              ))}
                <ContentBox title="Email" subHeading="namanver.2002@gmail.com"></ContentBox>
                <ContentBox title="LinkedIn" subHeading="namanver.02"></ContentBox>
                <ContentBox title="Github" subHeading="NamanVer02"></ContentBox>
            </div>
        </div>
    </div>
  )
}

export default Contact