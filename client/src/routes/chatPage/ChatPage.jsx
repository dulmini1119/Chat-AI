
import './ChatPage.css'
import NewPrompt from '../../components/newPrompt/NewPrompt';

const ChatPage = () => {



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

        </div>
      </div>
    </div>
  )
}

export default ChatPage