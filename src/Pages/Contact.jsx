import React from 'react'
import ContentBox from '../Componenets/ContentBox'
import Navbar from '../Componenets/Navbar'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <Navbar></Navbar>
        <div className="content">
            <h1>Contact Me</h1>
            <div className="contact-grid">
                <ContentBox title="Email" subHeading="namanver.2002@gmail.com"></ContentBox>
                <ContentBox title="LinkedIn" subHeading="namanver.02"></ContentBox>
                <ContentBox title="Github" subHeading="NamanVer02"></ContentBox>
            </div>
        </div>
    </div>
  )
}

export default Contact