import React from 'react';
import { Grid } from '@material-ui/core';

import Dropdown from './Dropdown';
import './Chatbox.scss';
import ChatboxButton from './ChatboxButton';

const ChatboxView = ({ isToggle, translations, currentUser, onItemClick, messages, onChange, messageValue, onSubmit, users, onClickRound }) => (
  <>
  <Grid container>
    <Grid item>
      <div
      style={{display: isToggle ? 'block': 'none'}}
      className={"w-64 h-64 bg-gray-400 chatbox"}>
        <Dropdown onItemClick={onItemClick} users={users} />
        {currentUser.name}
        {messages.map(message => (
          <p key={message.id} className="my-4">
            <span className="mr-3">{message.username}</span>{message.text}
          </p>
        ))}

        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="inputChatbox"
            onChange={onChange('messageValue')}
            value={messageValue}
          />
        </form>
      </div>
    </Grid>
  </Grid>

  </>
);

export default ChatboxView;
