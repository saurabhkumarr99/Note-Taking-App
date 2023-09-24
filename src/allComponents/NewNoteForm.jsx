import React, { useState } from "react";

const NewNoteForm = ({ addNote }) => {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim() === "") return; // Prevent adding empty notes

    addNote(note);
    setNote(""); // Clear the input field after adding a note
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button type="submit" className="add-note-button">Add Note</button>
    </form>
  );
};

export default NewNoteForm;
