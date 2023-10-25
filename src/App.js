import React, { useState, useEffect } from 'react';
import MarkdownInput from './Components/MarkdownInput';
import Sidebar from './Components/Sidebar';
import NoteDisplay from './Components/NoteDisplay';
import './App.css';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [editedNote, setEditedNote] = useState(null);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const handleSaveNote = () => {
    const updatedNotes = notes.map(note =>
      note.id === editedNote.id ? editedNote : note
    );
    setNotes(updatedNotes);
    const newNote = { id: Date.now(), title: 'Untitled Note', content: 'Write your note here...' };
    setSelectedNote(newNote);
    setEditedNote(newNote);
  };

  const handleInputChange = (title, content) => {
    if (!selectedNote) return;
    const updatedNote = { ...selectedNote, title, content };
    setEditedNote(updatedNote);
  };

  const addNewNote = () => {
      const newNote = { id: Date.now(), title: 'Untitled Note', content: 'Write your note here...' };
      setNotes([newNote, ...notes]);
      setSelectedNote(newNote);
      setEditedNote(newNote);
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setEditedNote(null);
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  console.log("Current selectedNote:", selectedNote);
  return (
    <div className="app w-screen h-screen grid grid-cols-6 gap gap-1">
      <div className="row-span-full col-span-2 bg-stone-800 flex flex-col align-center">
        <Sidebar notes={notes} setSelectedNote={handleNoteClick} />
        <button className="bg-rose-800 text-white p-3 m-1" onClick={addNewNote}>Add a note</button>
      </div>
      <div className="row-span-full col-span-4 bg-stone-800">
        {selectedNote && (
          <>
            <NoteDisplay note={editedNote || selectedNote} />
            <MarkdownInput 
              note={editedNote || selectedNote} 
              onInputChange={handleInputChange} 
              onSave={handleSaveNote} 
            />
          </>
        )}
      </div>
    </div>
  );
}
