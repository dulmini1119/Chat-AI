import React from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='left'>
        <h1>ZC AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. </h3>
          <button>Get Started</button>
      </div>
      <div className='right'></div>
    </div>
  )
}

export default Homepage