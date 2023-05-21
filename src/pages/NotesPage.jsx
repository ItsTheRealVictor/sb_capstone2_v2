import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import Note from '../components/Note';
import Sidebar from '../components/Sidebar';

function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [showNote, setShowNote] = useState(false);

  const handleCreateNote = () => {
    setShowNote(true);
  };

  const handleCancelNote = () => {
    setShowNote(false);
    setNewNote({ title: '', content: '' });
  };

  const handleSaveNote = () => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    setShowNote(false);
    setNewNote({ title: '', content: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleUpdateNote = (index, updatedTitle, updatedContent) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = { ...updatedNotes[index], title: updatedTitle, content: updatedContent };
    setNotes(updatedNotes);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, noteIndex) => noteIndex !== index);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <Sidebar/>
      {!showNote && (
        <Button variant="contained" onClick={handleCreateNote}>
          Create New Note
        </Button>
      )}

      {showNote && (
        <div>
          <Card>
            <CardContent>
              <TextField
                label="Title"
                name="title"
                value={newNote.title}
                onChange={handleChange}
              />
              <TextField
                label="Content"
                name="content"
                value={newNote.content}
                onChange={handleChange}
              />
            </CardContent>
          </Card>
          <Button variant="contained" onClick={handleSaveNote}>
            Save Note
          </Button>
          <Button onClick={handleCancelNote}>Cancel</Button>
        </div>
      )}

      {notes.map((note, index) => (
        <Note
          key={index}
          title={note.title}
          content={note.content}
          onDelete={() => handleDeleteNote(index)}
          onUpdateNote={(updatedTitle, updatedContent) =>
            handleUpdateNote(index, updatedTitle, updatedContent)
          }
        />
      ))}
    </div>
  );
}

export default NotesPage;
