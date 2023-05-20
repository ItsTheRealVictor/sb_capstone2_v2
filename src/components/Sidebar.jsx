import React, { useState } from 'react';
import { styled } from '@mui/system';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
  },
}));

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={toggleSidebar}
        style={{ position: 'absolute', top: 0, left: isOpen ? '240px' : 0, zIndex: 1 }}
      >
        {isOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      </Button>
      <StyledDrawer
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <div>
          {/* Sidebar content goes here */}
          <h1>Sidebar Content</h1>
          <p>Some links or other items can be placed here.</p>
        </div>
      </StyledDrawer>
      {/* Main content goes here */}

    </div>
  );
};

export default Sidebar;