import React, { useState } from 'react';
import Box from '@mui/system/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ExampleCard = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [newCard, setNewCard] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSave = () => {
    const card = { title, content };
    setNewCard(card);
    setTitle('');
    setContent('');
  };

  const handleEdit = () => {
    setTitle(newCard.title);
    setContent(newCard.content);
    setNewCard(null);
  };

  const handleDelete = () => {
    setNewCard(null);
  };

  return (
    <Box
      width={400}
      height={300}
      sx={{
        resize: 'both',
        overflow: 'auto',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        padding: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      {newCard ? (
        <Box
          width="100%"
          height="100%"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardContent>
            <Typography variant="h6" component="div">{newCard.title}</Typography>
            <Typography variant="body1" component="div">{newCard.content}</Typography>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" onClick={handleEdit}>Edit</Button>
            <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
          </Box>
        </Box>
      ) : (
        <CardContent>
          <TextField
            label="Card Title"
            value={title}
            onChange={handleTitleChange}
            fullWidth
          />
          <TextField
            label="Main Content"
            value={content}
            onChange={handleContentChange}
            multiline
            rows={4}
            fullWidth
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
            <Button variant="contained" onClick={handleSave}>Save</Button>
          </Box>
        </CardContent>
      )}
    </Box>
  );
};

export default ExampleCard;
