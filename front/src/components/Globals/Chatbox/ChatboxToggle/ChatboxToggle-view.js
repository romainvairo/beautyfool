import React from 'react';
import { Grid } from '@material-ui/core';

import Chatbox from '../'
import ChatboxButton from '../ChatboxButton';


const ChatboxToggleView = ({ isToggle, setIsToggle }) => (
  <>
    {isToggle ?
      <Chatbox/> : <ChatboxButton onClick={setIsToggle}/>
    }
  </>
);

export default ChatboxToggleView;
