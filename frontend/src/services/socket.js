// src/services/socket.js
import io from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3000'; // Replace with your actual WebSocket server URL

let socket;

export const initSocket = (token) => {
  socket = io(SOCKET_URL, {
    auth: {
      token: token
    }
  });

  socket.on('connect', () => {
    console.log('Connected to WebSocket');
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from WebSocket');
  });

  return socket;
};

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
};

export const subscribeToMessages = (callback) => {
  if (!socket) return true;
  socket.on('new_message', msg => callback(null, msg));
};

export const sendMessage = (message, callback) => {
  if (socket) socket.emit('send_message', message, callback);
};

export const subscribeToMemoUpdates = (callback) => {
  if (!socket) return true;
  socket.on('memo_update', update => callback(null, update));
};

export default {
  initSocket,
  disconnectSocket,
  subscribeToMessages,
  sendMessage,
  subscribeToMemoUpdates,
};