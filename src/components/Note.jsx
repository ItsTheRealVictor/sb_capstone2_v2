import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';

const Note = ({ title, content, onDelete, onUpdateNote }) => {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleEditNote = () => {
    setEditing(true);
  };

  const handleSaveNote = () => {
    setEditing(false);
    onUpdateNote(editedTitle, editedContent);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setEditedTitle(title);
    setEditedContent(content);
  };

  const handleDeleteNote = () => {
    onDelete();
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };

  return (
    <Card>
      <CardContent>
        {editing ? (
          <div>
            <TextField
              label="Title"
              value={editedTitle}
              onChange={handleTitleChange}
            />
            <TextField
              label="Content"
              value={editedContent}
              onChange={handleContentChange}
            />
            <Button variant="contained" onClick={handleSaveNote}>
              Save Note
            </Button>
            <Button onClick={handleCancelEdit}>Cancel</Button>
          </div>
        ) : (
          <div>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
            <Button onClick={handleEditNote}>Edit Note</Button>
            <Button onClick={handleDeleteNote}>Delete Note</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Note;
