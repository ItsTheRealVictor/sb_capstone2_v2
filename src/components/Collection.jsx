import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';
import { ChromePicker } from 'react-color';
import Note from './Note';

const Collection = ({
  id,
  title,
  backgroundColor,
  notes,
  onDeleteNote,
  onUpdateNote,
  onAddNote,
  onDeleteCollection,
  onUpdateCollection,
  onSaveCollection
}) => {
  const [editingTitle, setEditingTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editingColor, setEditingColor] = useState(false);
  const [editedColor, setEditedColor] = useState(backgroundColor);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');

  const handleEditTitle = () => {
    setEditingTitle(true);
  };

  const handleSaveTitle = () => {
    setEditingTitle(false);
    onUpdateCollection(id, { title: editedTitle, backgroundColor: editedColor, notes });
  };

  const handleCancelEditTitle = () => {
    setEditingTitle(false);
    setEditedTitle(title);
  };

  const handleEditColor = () => {
    setEditingColor(true);
  };

  const handleColorChange = (color) => {
    setEditedColor(color.hex);
  };

  const handleSaveColor = () => {
    setEditingColor(false);
    onUpdateCollection(id, { title: editedTitle, backgroundColor: editedColor, notes });
  };

  const handleCancelEditColor = () => {
    setEditingColor(false);
    setEditedColor(backgroundColor);
  };

  const handleAddNote = () => {
    if (newNoteTitle && newNoteContent) {
      const newNote = {
        id: Date.now(),
        title: newNoteTitle,
        content: newNoteContent
      };
      onAddNote(newNote);
      setNewNoteTitle('');
      setNewNoteContent('');
    }
  };

  const handleDeleteNote = (noteId) => {
    onDeleteNote(id, noteId);
  };

  const handleUpdateNote = (noteId, updatedTitle, updatedContent) => {
    onUpdateNote(id, noteId, updatedTitle, updatedContent);
  };

  const handleDeleteCollection = () => {
    onDeleteCollection(id);
};

const handleSaveCollection = () => {
    onSaveCollection({ id, title: editedTitle, backgroundColor: editedColor, notes });
};



  return (
    <Card style={{ backgroundColor: editedColor }}>
      <CardContent>
        {editingTitle ? (
          <div>
            <TextField
              label="Title"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <Button variant="contained" onClick={handleSaveTitle}>
              Save Title
            </Button>
            <Button onClick={handleCancelEditTitle}>Cancel</Button>
          </div>
        ) : (
          <div>
            <Typography variant="h5" component="div">
              {editedTitle}
            </Typography>
            <Button onClick={handleEditTitle}>Edit Collection Title</Button>
            <Button onClick={handleEditColor}>Edit Background Color</Button>
            {editingColor && (
              <div>
                <ChromePicker color={editedColor} onChange={handleColorChange} />
                <Button variant="contained" onClick={handleSaveColor}>
                  Save Color
                </Button>
                <Button onClick={handleCancelEditColor}>Cancel</Button>
              </div>
            )}
            {notes.map((note) => (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
                onDeleteNote={() => handleDeleteNote(note.id)}
                onUpdateNote={handleUpdateNote}
              />
            ))}
            <TextField
              label="New Note Title"
              value={newNoteTitle}
              onChange={(e) => setNewNoteTitle(e.target.value)}
            />
            <TextField
              label="New Note Content"
              value={newNoteContent}
              onChange={(e) => setNewNoteContent(e.target.value)}
            />
            <Button variant="contained" onClick={handleAddNote}>
              Add Note
            </Button>
            <Button variant="contained" onClick={handleDeleteCollection}>
              Delete Collection
            </Button>
            <Button variant="contained" onClick={() => onSaveCollection({ id, title: editedTitle, backgroundColor: editedColor, notes })}>
    Save Collection
</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Collection;
