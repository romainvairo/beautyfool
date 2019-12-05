import React from 'react';

import Dropdown from './Dropdown';

const ChatboxView = ({ translations, currentUser, onItemClick, messages, onChange, messageValue, onSubmit, users }) => (
  <div className="absolute w-64 h-64 bottom-0 right-0 bg-gray-400">
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
        className="absolute bottom-0 right-0"
        onChange={onChange('messageValue')}
        value={messageValue}
      />
    </form>
  </div>
);

export default ChatboxView;
