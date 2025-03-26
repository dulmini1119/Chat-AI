import React, { useState } from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("Human1");
  return (
    <div className='homepage'>
      <img className='orbital' src='/orbital.avif'/>
      <div className='left'>
        <h1>ZC AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>Your intelligent AI assistant for ideas, work, and everything in between..Think faster, create smarter, and get more done with AI. </h3>
          <Link to='/dashboard'>Get Started</Link>
      </div>
      <div className='right'>
        <div className='imgContainer'>
          <div className='bgContainer'>
            <div className='bg'></div>
          </div>
          <img src='/bot.png' alt='bot' className='bot'/>
          <div className="chat">
            <img src={typingStatus === 'Human1' ? "/human1.jpg" : typingStatus === "Human2" ? "/human2.png" : "/bot.png"}/>
          <TypeAnimation
      sequence={[
        'Human1:  What is the full form of CPU?',
        2000, () => {
          setTypingStatus("bot");
        },
        'Bot : CPU standards for Central Processing Unit',
        2000,() => {
          setTypingStatus("Human2");
        },
        'Human2 : What does ROM stand for?',
        2000,() => {
          setTypingStatus("bot");
        },
        'Bot : ROM standards for Read-Only Memory',
        2000,() => {
          setTypingStatus("Human1");
        },
      ]}
      wrapper="span"
      repeat={Infinity}
      cursor={true}
      omitDeletionAnimation={true}
    />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src='/logo.png' alt='logo'/>
        <div className="links">
          <Link to='/'>Terms of Services</Link>
          <span>|</span>
          <Link to='/'>Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage