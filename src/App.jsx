import React, { useState } from 'react';
import './index.css'; // Assuming you have an 'App.css' file for styling
import NewNoteForm from './allComponents/NewNoteForm';
import NoteList from './allComponents/NoteList';

const App = () => {
    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        setNotes((prevNotes) => {
            return [note,...prevNotes];
        });
        console.log(note);
    };

    const onDelete = (noteToDelete) => {
        const updatedNotes = notes.filter((note) => note !== noteToDelete);
        setNotes(updatedNotes);
    };

    const onEdit = (index, editedNote) => {
        const updatedNotes = [...notes];
        updatedNotes[index]= editedNote;
        setNotes(updatedNotes);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Note Taking App</h1>
            </header>

            <div className="note-form-box">
                <main className="App-content">
                    <NewNoteForm addNote={addNote} />
                </main>
            </div>

            <div className="note-items-box">
                <NoteList notes={notes} onDelete={onDelete} onEdit={onEdit}/>
            </div>
        </div>
    );
};

export default App;


