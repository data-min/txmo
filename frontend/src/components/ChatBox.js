// src/components/ChatBox.js
import React, { useState } from 'react';
import MessageBubble from './MessageBubble';

const ChatBox = ({ messages, onSendMessage }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;

