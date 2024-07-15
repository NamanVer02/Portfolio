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
              <h2>I'm a Computer Science student with a passion for design and development. I love to create and solve everyday problems in the simplest way possible.</h2>
              <h3>Currently I am very interested in the prospects of Generative AI and how it can revolutionize the world we know as of today.</h3>
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