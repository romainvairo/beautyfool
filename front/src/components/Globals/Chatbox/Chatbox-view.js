import React from 'react';

import ChatboxInterface from './ChatboxInterface'
import ChatboxButton from './ChatboxButton';
import './Chatbox.scss';

const ChatboxView = ({ isToggle, setIsToggle }) => (
  <div className="chatbox fixed">
    {
      isToggle
        ? <ChatboxInterface onClose={setIsToggle} />
        : <ChatboxButton onClick={setIsToggle} />
    }
  </div>
);

export default ChatboxView;
