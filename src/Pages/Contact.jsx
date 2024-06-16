import React from 'react'
import ContentBox from '../Componenets/ContentBox'
import Navbar from '../Componenets/Navbar'

function Contact() {
  return (
    <div className='contact'>
        <Navbar></Navbar>
        <div className="content">
            <h1>Contact Me</h1>
            <div className="contact-grid">
                <ContentBox></ContentBox>
                <ContentBox></ContentBox>
                <ContentBox></ContentBox>
                <ContentBox></ContentBox>
                <ContentBox></ContentBox>
                <ContentBox></ContentBox>
            </div>
        </div>
    </div>
  )
}

export default Contact