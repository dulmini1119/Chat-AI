import React, { useEffect, useRef } from 'react'
import './ChatPage.css'
import NewPrompt from '../../components/newPrompt/NewPrompt';

const ChatPage = () => {
  const endRef = useRef(null);

  useEffect(()=> {
    endRef.current.scrollIntoView({behavior : "smooth"});
  },[])


  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test Message from AI</div>
          <div className="message user">Test Message from User</div>
          <div className="message">Test Message from AI</div>
          <div className="message user">Test Message from User</div>
          <div className="message">Test Message from AI</div>
          <div className="message user">Test Message from User</div>
          <div className="message">Test Message from AI</div>
          <div className="message user">Test Message from User</div>
          <div className="message">Test Message from AI</div>
          <div className="message user">Test Message from User</div>
          <div className="message">Test Message from AI</div>
          <div className="message user">Test Message from User</div>

          <NewPrompt/>

          <div ref={endRef}/>
        </div>
      </div>
    </div>
  )
}

export default ChatPage