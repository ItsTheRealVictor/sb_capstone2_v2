import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Personal Website</Typography>
        <Button component={Link} to="/frontpage" color="inherit">Home</Button>
        <Button component={Link} to="/notespage" color="inherit">Notes</Button>
        <Button component={Link} to="/flashcards" color="inherit">Flash cards</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;