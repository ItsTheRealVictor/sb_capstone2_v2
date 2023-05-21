import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';

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

  const handleDeleteNote = () => {
    onDeleteNote(id);
  };

  return (
    <Card>
      <CardContent>
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
