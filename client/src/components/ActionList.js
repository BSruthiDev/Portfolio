import React, { useContext } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LaptopWindows from '@mui/icons-material/LaptopWindows';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { GlobalContext } from '../components/contextstore/global-context-store';

const iconMapping = {
  Person: <PersonIcon />,
  Portfolio: <LaptopWindows />,
  Services: <WorkIcon />,
  Resume: <TextSnippetIcon />,
  Contact: <ContactMailIcon />,
};

const ActionList = ({ items, color }) => {
  const { onItemClick, actionString, isSidebarDarkMode } = useContext(GlobalContext);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Keep it vertical
        justifyContent: { xs: 'center', sm: 'flex-start' }, // Center on smaller screens
        alignItems: 'center',
        gap: { xs: 0.5, sm: 1 }, // Reduced spacing between items
        flexWrap: { xs: 'wrap', sm: 'nowrap' }, // Wrap items on smaller screens
      }}
    >
      {items.map((item, index) => {
        const isActive = item.label === actionString;

        return (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'row', // Keep icon and label in a row
              alignItems: 'center',
              gap: 0.3, // Reduce space between icon and label
              color: isActive
                ? isSidebarDarkMode
                  ? '#54B689' // Active color in dark mode
                  : 'rgba(0, 0, 0, 0.5)' // Active color in light mode
                : isSidebarDarkMode
                  ? '#ffffff' // Default color in dark mode
                  : color, // Apply active color
              textAlign: 'center', // Center align text
              cursor: 'pointer',
              '&:hover': {
                color: isSidebarDarkMode ? '#54B689' : 'rgba(0, 0, 0, 0.5)', // Hover effect
              },
            }}
            onClick={() => onItemClick(item.label)}
          >
            <Box
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem' }, // Smaller icons on mobile
              }}
            >
              {iconMapping[item.icon]}
            </Box>
            <Typography
              sx={{
                fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                fontSize: { xs: '0.8rem', sm: '1rem' }, // Smaller text on mobile
                fontWeight: 'bold',
              }}
            >
              {item.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default ActionList;
