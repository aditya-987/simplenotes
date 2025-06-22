import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);
  const [noteInput, setNoteInput] = useState({ title: '', content: '' });

  // Load notes from localStorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notesapp_notes')) || [];
    setNotes(storedNotes);
    if (storedNotes.length > 0) setActiveNote(storedNotes[0].id);
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem('notesapp_notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),
      title: 'Untitled',
      content: '',
      date: new Date().toLocaleString(),
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
    setNoteInput({ title: newNote.title, content: '' });
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    if (updatedNotes.length > 0) {
      setActiveNote(updatedNotes[0].id);
      setNoteInput({ title: updatedNotes[0].title, content: updatedNotes[0].content });
    } else {
      setActiveNote(null);
      setNoteInput({ title: '', content: '' });
    }
  };

  const handleSelectNote = (id) => {
    setActiveNote(id);
    const note = notes.find((n) => n.id === id);
    setNoteInput({ title: note.title, content: note.content });
  };

  const handleInputChange = (e) => {
    setNoteInput({ ...noteInput, [e.target.name]: e.target.value });
  };

  const handleSaveNote = () => {
    setNotes(
      notes.map((note) =>
        note.id === activeNote ? { ...note, ...noteInput, date: new Date().toLocaleString() } : note
      )
    );
  };

  const activeNoteObj = notes.find((n) => n.id === activeNote);

  return (
    <div className="notes-app-container">
      <div className="notes-sidebar">
        <div className="sidebar-header">
          <h2>Notes</h2>
          <button onClick={handleAddNote}>+</button>
        </div>
        <ul className="notes-list">
          {notes.map((note) => (
            <li
              key={note.id}
              className={note.id === activeNote ? 'active' : ''}
              onClick={() => handleSelectNote(note.id)}
            >
              <div className="note-title">{note.title}</div>
              <div className="note-date">{note.date}</div>
              <button className="delete-btn" onClick={(e) => { e.stopPropagation(); handleDeleteNote(note.id); }}>❌</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="note-main">
        {activeNoteObj ? (
          <div className="note-editor">
            <input
              type="text"
              name="title"
              value={noteInput.title}
              onChange={handleInputChange}
              className="note-title-input"
              placeholder="Title"
            />
            <textarea
              name="content"
              value={noteInput.content}
              onChange={handleInputChange}
              className="note-content-input"
              placeholder="Write your note here..."
            />
            <button className="save-btn" onClick={handleSaveNote}>Save</button>
          </div>
        ) : (
          <div className="no-note"> Nothing to see here! Add a note to get started</div>
        )}
      </div>
    </div>
  );
}

export default App;
