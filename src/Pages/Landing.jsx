import React from 'react'
import Navbar from '../Componenets/Navbar'
import ContentBox from '../Componenets/ContentBox'
import './Landing.css'

function Landing() {
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
            <div className="logo"></div>
          </div>

          <div class="dotted-line"></div>

          <div className='recent-work'>
            <h2>Recent Work</h2>
            <div className='work-grid'>
              <ContentBox></ContentBox>
              <ContentBox></ContentBox>
              <ContentBox></ContentBox>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Landing