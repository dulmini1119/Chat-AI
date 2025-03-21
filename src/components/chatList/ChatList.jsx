import { Link } from 'react-router-dom';
import './chatList.css';

const ChatList = () => {
  return (
    <div className="chatList">
        <span className='title'>DASHBOARD</span>
        <Link to="/dashboard">create a new Chat</Link>
        <Link to="/">Explore ZC AI</Link>
        <Link to="/">Contact</Link>
        <hr/>
        <span className='title'>RECENT CHATS</span>
        <div className="list">
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
        </div>
        <hr/>
        <div className="upgrade">
            <img src="/logo.png" alt='logo'/>
            <div className="tests">
                <span>Upgrade to ZC AI Pro</span>
                <span>Get Unlimited access to all features</span>
            </div>
        </div>
    </div>
  )
}

export default ChatList