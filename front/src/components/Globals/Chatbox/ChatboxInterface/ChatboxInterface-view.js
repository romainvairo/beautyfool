import React from 'react';
import classNames from 'classnames';
import { Grid, IconButton, Tooltip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import Dropdown from '../Dropdown';
import './ChatboxInterface.scss';

const ChatboxInterfaceView = ({ currentUser, mySocketId, translations, isAdmin, onClose, onItemClick, messages, onChange, messageValue, onSubmit, users, sendMessage }) => (
  <Grid container className="chatbox-interface">
    <Grid container item className="chatbox-all w-64 h-64 rounded-lg">
      <Grid xs={12} container item justify="space-between" className="h-12">
        <Grid xs={3} item>
          <Tooltip title={translations.dropdownTooltip}>
            <div>
              { isAdmin && <Dropdown onItemClick={onItemClick} users={users} /> }
            </div>
          </Tooltip>
        </Grid>
        <Grid xs={6} item className="truncate py-3">
          <span>
            {currentUser.name}
          </span>
        </Grid>
        <Grid xs={3} item className="text-right">
          <Tooltip title={translations.closeButton}>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>

      <Grid xs={12} container item id="chat-messages" className="input-chatBox-send overflow-auto messages px-2">
        {messages.map(message => (
          <Grid
            key={message.id}
            container
            direction="column"
            alignItems={mySocketId !== message.socketId ? 'flex-end' : 'flex-start'}
          >
            <Grid item className={classNames(
              (mySocketId !== message.socketId ? 'bg-blue-400' : 'bg-white'),
              'mb-4 py-2 px-4 message-container inline-block'
            )}>
              <span
                className="message break-words"
              >
                {message.text}
              </span>
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Grid xs={12} item className="h-6">
        <form onSubmit={onSubmit} className="text-center pl-2 pr-2">
          <input
            type="text"
            className="input-chatbox font-bold pl-2 mb-8 rounded-lg border-solid border border-black"
            placeholder={translations.placeholder}
            onChange={onChange('messageValue')}
            value={messageValue}
          />
          <button className="text-xl pl-4" onClick={onSubmit}><i className="fas fa-arrow-circle-left"></i></button>
        </form>
      </Grid>
    </Grid>
  </Grid>
);

export default ChatboxInterfaceView;
