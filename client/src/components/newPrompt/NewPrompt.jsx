import './newPrompt.css'
import React, { useEffect, useRef } from 'react'

const NewPrompt = () => {
  const endRef = useRef(null);

  useEffect(()=> {
    endRef.current.scrollIntoView({behavior : "smooth"});
  },[])
  return (
    <>
    <div className="endChat" ref={endRef}></div>
        <div className="newForm">
          <label htmlFor='file'>
            <img src='/attachment.png' alt='' />
          </label>
          <input type='file' id='file' multiple={false} hidden/>
          <input type='text' placeholder='Ask Anything...'/>
          <button>
            <img src='/arrow.png' alt=''/>
          </button>
        </div>
    </>
  )
}

export default NewPrompt