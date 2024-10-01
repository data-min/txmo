// src/components/MessageBubble.js
import React from 'react';

const MessageBubble = ({ message }) => {
  return (
    <div className={`message-bubble ${message.sender}`}>
      <p>{message.text}</p>
      <span className="timestamp">{new Date(message.timestamp).toLocaleTimeString()}</span>
    </div>
  );
};

export default MessageBubble;
