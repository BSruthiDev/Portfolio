import React,{useContext} from 'react';
import { Box, Typography } from '@mui/material';
import {GlobalContext} from  '../contextstore/global-context-store';


// Reusable component for displaying phone, email, and location
const InfoDisplay = ({ icon: Icon, text }) => {
      const { isSidebarDarkMode } = useContext(GlobalContext);
  
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Icon sx={{  color:isSidebarDarkMode?'rgba(255, 255, 255, 0.7)': '#4f4f4f',fontSize: '1.2rem' }} />
      <Typography variant="body1" sx={{ fontSize: { xs: '0.8rem', md: '0.8rem' }, color:isSidebarDarkMode?'rgba(255, 255, 255, 0.7)':'#4f4f4f', fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
 }}>
        {text}
      </Typography>
    </Box>
  );
};

// Example usage of InfoDisplay component

export default InfoDisplay;
