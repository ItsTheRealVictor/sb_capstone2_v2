import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';
import { ChromePicker } from 'react-color';
import Note from './Note';

const Collection = ({ title, notes, onCreateNote }) => {
  const [showNoteForm, setShowNoteForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedBackgroundColor, setEditedBackgroundColor] = useState('#ffffff');

  const handleCreateNote = () => {
    setShowNoteForm(true);
  };

  const handleCancelNote = () => {
    setShowNoteForm(false);
    setNewNote({ title: '', content: '' });
  };

  const handleSaveNote = () => {
    onCreateNote({
      ...newNote,
      backgroundColor: editedBackgroundColor,
    });
    setShowNoteForm(false);
    setNewNote({ title: '', content: '' });
  };

  const handleEditCollection = () => {
    setShowEditForm(true);
  };

  const handleCancelEdit = () => {
    setShowEditForm(false);
    setEditedTitle(title);
  };

  const handleSaveEdit = () => {
    // Handle saving the edited collection
    // You can add the logic here to save the edited title and background color
    setShowEditForm(false);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleBackgroundColorChange = (color) => {
    setEditedBackgroundColor(color.hex);
  };

  return (
    <div>
      <div style={{ backgroundColor: editedBackgroundColor }}>
        <Typography variant="h5" component="div">
          {editedTitle}
        </Typography>

        {notes.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            content={note.content}
            backgroundColor={editedBackgroundColor}
          />
        ))}

        {!showNoteForm && (
          <Button variant="contained" onClick={handleCreateNote}>
            Create New Note for {editedTitle}
          </Button>
        )}

        <Button variant="contained" onClick={handleEditCollection}>
          Edit Collection
        </Button>

        {showNoteForm && (
          <div>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  New Note
                </Typography>
                <TextField
                  label="Title"
                  value={newNote.title}
                  onChange={(e) =>
                    setNewNote((prevNote) => ({
                      ...prevNote,
                      title: e.target.value,
                    }))
                  }
                />
                <TextField
                  label="Content"
                  value={newNote.content}
                  onChange={(e) =>
                    setNewNote((prevNote) => ({
                      ...prevNote,
                      content: e.target.value,
                    }))
                  }
                />
              </CardContent>
            </Card>
            <Button variant="contained" onClick={handleSaveNote}>
              Save Note
            </Button>
            <Button onClick={handleCancelNote}>Cancel</Button>
          </div>
        )}

        {showEditForm && (
          <div>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  Edit Collection
                </Typography>
                <TextField
                  label="Title"
                  value={editedTitle}
                  onChange={handleTitleChange}
                />
                <div style={{ marginTop: '1rem' }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Background Color
                  </Typography>
                  <ChromePicker
                    color={editedBackgroundColor}
                    onChangeComplete={handleBackgroundColorChange}
                  />
                </div>
              </CardContent>
            </Card>
            <Button variant="contained" onClick={handleSaveEdit}>
              Save Collection
            </Button>
            <Button onClick={handleCancelEdit}>Cancel</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
