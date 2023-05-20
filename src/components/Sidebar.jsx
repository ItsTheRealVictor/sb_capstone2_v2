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

const Sidebar = ( {sidebarItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [collections, setCollections] = useState([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const addToSidebar = (title) => {
    setCollections([...collections, title]);
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
      <StyledDrawer variant="persistent" anchor="left" open={isOpen}>
        <div>
          {/* Sidebar content goes here */}
          <h1>Sidebar Content</h1>
          {sidebarItems.map((title, index) => (
            <p key={index}>{title}</p>
          ))}
        </div>
      </StyledDrawer>
    </div>
  );
};

export default Sidebar;
