import React, { useState } from 'react';
import '../index.css';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onDelete, onEdit }) => {
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = (query) => {
    const filtered = notes.filter((note) =>
      note.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Filtered Notes:", filtered);
    setFilteredNotes(filtered);
    document.getElementById("searchResult").innerHTML = filtered;
  };


  return (
    <div className="note-list-container">
      <div className="note-form-box">
        Live Search :
        <input
          type="text"
          placeholder="Search notes..."
          onChange={(e) => handleSearch(e.target.value)}
        /> <br /><br />
        Filtered Notes:<div id="searchResult"></div></div>
        {notes.length > 0 && (
        <>
          <div>All Notes</div>
          <br />
        </>
      )}
      {notes.map((note, index) => (
        <NoteItem key={index} note={note} onDelete={onDelete} onEdit={(editedNote) => onEdit(index, editedNote)} />
      ))}
    </div>
    
  );
};


export default NoteList;
