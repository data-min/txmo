// src/pages/MemoListView.js
import React, { useState, useEffect } from 'react';
import MemoList from '../components/MemoList';
import SearchBar from '../components/SearchBar';
import NewMemoButton from '../components/NewMemoButton';

const MemoListView = () => {
  const [memos, setMemos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // TODO: Fetch memos from the server
    // This is where you'd make an API call to get the memos
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    // TODO: Implement search functionality
    console.log('Searching for:', term);
  };

  const handleMemoClick = (memo) => {
    // TODO: Implement memo viewing/editing
    console.log('Viewing/editing memo:', memo);
  };

  const handleNewMemo = () => {
    // TODO: Implement new memo creation
    console.log('Creating new memo');
  };

  return (
    <div className="memo-list-view">
      <h1>Memos</h1>
      <SearchBar onSearch={handleSearch} />
      <NewMemoButton onClick={handleNewMemo} />
      <MemoList memos={memos} onMemoClick={handleMemoClick} />
    </div>
  );
};

export default MemoListView;