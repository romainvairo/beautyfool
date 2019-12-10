import React from 'react';
import classNames from 'classnames';
import { Grid, IconButton, Tooltip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import Dropdown from '../Dropdown';
import './ChatboxInterface.scss';

const ChatboxInterfaceView = ({ currentUser, mySocketId, translations, isAdmin, onClose, onItemClick, messages, onChange, messageValue, onSubmit, users }) => (
  <Grid container className="chatbox-interface">
    <Grid container item className="w-64 h-64 bg-gray-400 rounded-lg">
      <Grid xs={12} container item justify="space-between" className="h-12">
        <Grid item>
          <Tooltip title={translations.dropdownTooltip}>
            <div>
              { isAdmin && <Dropdown onItemClick={onItemClick} users={users} /> }
            </div>
          </Tooltip>
        </Grid>
        <Grid item>
          {currentUser.name}
        </Grid>
        <Grid item>
          <Tooltip title={translations.closeButton}>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>

      <Grid xs={12} container item className="overflow-auto h-40 messages">
        {messages.map(message => (
          <Grid
            key={message.id}
            container
            justify={mySocketId !== message.socketId ? 'flex-end' : 'flex-start'}
          >
            <Grid item className="mt-4">
              <span
                className={
                  classNames(
                    (mySocketId !== message.socketId ? 'bg-blue-400 mr-2' : 'bg-white ml-2'),
                    'rounded-full py-2 px-4'
                  )
                }
              >
                {message.text}
              </span>
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Grid xs={12} item className="h-6">
        <form onSubmit={onSubmit} className="text-center mb-1 pl-2 pr-2">
          <input
            type="text"
            className="input-chatbox w-full pl-2 rounded-lg"
            placeholder={translations.placeholder}
            onChange={onChange('messageValue')}
            value={messageValue}
          />
        </form>
      </Grid>
    </Grid>
  </Grid>
);

export default ChatboxInterfaceView;
