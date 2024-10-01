// src/components/MemoItem.js
import React from 'react';

const MemoItem = ({ memo, onClick }) => {
  return (
    <div className="memo-item" onClick={onClick}>
      <h3>{memo.title}</h3>
      <p>{memo.content.substring(0, 50)}...</p>
      <span className="timestamp">{new Date(memo.timestamp).toLocaleDateString()}</span>
    </div>
  );
};

export default MemoItem;

