import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';

import '../Chatbox.scss';

const ChatboxButtonView = ({ onClick, translations }) => (
  <Tooltip title={translations.buttonTooltip}>
    <IconButton onClick={onClick} className="bg-gray-lighter-2 fixed rounded-full h-16 w-16">
      <ChatIcon />
    </IconButton>
  </Tooltip>
);

export default ChatboxButtonView;
