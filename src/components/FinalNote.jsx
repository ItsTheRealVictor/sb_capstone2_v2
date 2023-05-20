import React from 'react';
import Box from '@mui/system/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SimpleCard = ({ title, content }) => {
  return (
    <Box
      width={400}
      height={150}
      sx={{
        resize: 'both',
        overflow: 'auto',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        padding: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        marginTop: '16px',
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div">{title}</Typography>
        <Typography variant="body1" component="div">{content}</Typography>
      </CardContent>
    </Box>
  );
};

export default SimpleCard;
