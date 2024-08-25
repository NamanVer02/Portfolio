import React from 'react'
import Navbar from '../Components/Navbar'
import './Resume.css'

function Resume() {
  return (
    <div className='resume'>
        <Navbar></Navbar>
        <div className="content">
            <h1>Resume</h1>
            <iframe src="https://drive.google.com/file/d/1OITxprhS375U_180AT2XX--S5hk8gyKG/preview" width="auto" height="100%" allow="autoplay" title='resume'></iframe>
        </div>
    </div>
  )
}

export default Resume
