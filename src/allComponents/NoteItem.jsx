import React, { useState } from 'react';

const NoteItem = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note.content);

  const handleSave = () => {
    onEdit(editedNote);
    setIsEditing(false);
  };

  return (
    <div className="note-item-box">
      <div className="note-item">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedNote}
              onChange={(e) => setEditedNote(e.target.value)}
            />
            <button onClick={handleSave} className="save-button">Save</button>
          </>
        ) : (
          <>
            <p className="note-text">{note}</p>
            <div className="button-container">
              <button className="delete-button" onClick={() => onDelete(note)}>
                Delete
              </button>
              <button className="edit-button" onClick={() => setIsEditing(true)}>
                Edit
              </button>
            </div>

          </>
        )}
      </div>
    </div>
  );
};

export default NoteItem;
