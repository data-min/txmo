
// src/components/MemoList.js
import React from 'react';
import MemoItem from './MemoItem';

const MemoList = ({ memos, onMemoClick }) => {
  return (
    <div className="memo-list">
      {memos.map((memo) => (
        <MemoItem key={memo.id} memo={memo} onClick={() => onMemoClick(memo)} />
      ))}
    </div>
  );
};

export default MemoList;

