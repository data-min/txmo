// src/pages/ChatInterface.js
import React, { useState, useEffect } from 'react';
import ChatBox from '../components/ChatBox';
import NewMemoButton from '../components/NewMemoButton';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // TODO: Fetch chat history from the server
    // This is where you'd make an API call to get the chat history
  }, []);

  const handleSendMessage = (message) => {
    const newMessage = {
      text: message,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };
    setMessages([...messages, newMessage]);
    // TODO: Send message to the server
  };

  const handleNewMemo = () => {
    // TODO: Implement new memo creation
    console.log('Creating new memo from chat');
  };

  return (
    <div className="chat-interface">
      <h1>Chat</h1>
      <ChatBox messages={messages} onSendMessage={handleSendMessage} />
      <NewMemoButton onClick={handleNewMemo} />
    </div>
  );
};

export default ChatInterface;