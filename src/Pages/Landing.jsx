import React from 'react'
import Navbar from '../Components/Navbar'
import ContentBox from '../Components/ContentBox'
import './Landing.css'
import { motion } from 'framer-motion'

function Landing() {
  const recentList = [
    {
      title: 'PDF Partner',
      content: 'Add a question answer feature to all your PDF Documents',
      link: 'https://pdf-partner.streamlit.app/',
      background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg'
    },
    {
      title: 'ReWriteAI',
      content: 'A LLM service to re-write your messages into formal lingua',
      link: 'https://rewriteai.streamlit.app/',
      background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg'
    },
    {
      title: 'CoherentDC',
      content: 'Simple Landing Page',
      link: 'https://namanver02.github.io/CoherentDC/',
      background: 'https://st5.depositphotos.com/73964430/64907/i/450/depositphotos_649078456-stock-illustration-water-color-oil-painting-fine.jpg'
    },
  ];

  return (
    <div className='landing'>
        <Navbar></Navbar>
        <div className='content'>
          <div className="about">
            <div className='info'>
              <h1>Hey, this is <b>Naman</b>.</h1>
              <h2>I am a Computer Science student with a passion for design and development. I thrive on creating innovative, efficient solutions to everyday problems. My dedication to technology drives me to continuously learn and stay updated with the latest trends, ensuring my work remains impactful and user-friendly.</h2>
              <h3>I am currently very interested in the potential of Generative AI and how it can revolutionize our world. The advancements in this field have the power to transform various industries, enhance creativity, and solve complex problems in ways we never thought possible.</h3>
            </div>
            <div className="logo">
              <img src={process.env.PUBLIC_URL + '/Assets/Logo.png'}></img>
            </div>
          </div>

          <div class="dotted-line"></div>

          <div className='recent-work'>
            <h2>Recent Work</h2>
            <div className='work-grid'>
              {recentList.map((item, index) => (
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
    </div>
  )
}

export default Landing