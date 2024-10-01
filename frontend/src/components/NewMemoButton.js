// src/components/NewMemoButton.js
import React from 'react';

const NewMemoButton = ({ onClick }) => {
  return (
    <button className="new-memo-button" onClick={onClick}>
      + New Memo
    </button>
  );
};

export default NewMemoButton;
