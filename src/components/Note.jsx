import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const Note = ({ id, title, content, onDeleteNote, onUpdateNote }) => {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleEditNote = () => {
    setEditing(true);
  };

  const handleSaveNote = () => {
    setEditing(false);
    onUpdateNote(id, editedTitle, editedContent);
  };

  const handleCancelEditNote = () => {
    setEditing(false);
    setEditedTitle(title);
    setEditedContent(content);
  };

  return (
    <div>
      {editing ? (
        <div>
          <TextField
            label="Title"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <TextField
            label="Content"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <Button variant="contained" onClick={handleSaveNote}>
            Save Note
          </Button>
          <Button onClick={handleCancelEditNote}>Cancel</Button>
        </div>
      ) : (
        <div>
          <h4>{editedTitle}</h4>
          <p>{editedContent}</p>
          <Button onClick={handleEditNote}>Edit Note</Button>
          <Button onClick={() => onDeleteNote(id)}>Delete Note</Button>
        </div>
      )}
    </div>
  );
};

export default Note;
