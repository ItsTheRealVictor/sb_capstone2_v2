import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const Note = ({ id, title, content, onDeleteNote, onUpdateNote }) => {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    onUpdateNote(id, editedTitle, editedContent);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setEditedTitle(title);
    setEditedContent(content);
  };

  const handleDelete = () => {
    onDeleteNote();
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
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
          <Button onClick={handleCancelEdit}>Cancel</Button>
        </div>
      ) : (
        <div>
          <h4>{editedTitle}</h4>
          <p>{editedContent}</p>
          <Button onClick={handleEdit}>Edit</Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default Note;
