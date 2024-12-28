import React, { useContext } from 'react';
import { Avatar } from '@mui/material';
import {GlobalContext} from './contextstore/global-context-store'

const SocialIcons = ({ Icon, link, size = 40 }) => {
  const { isSidebarDarkMode } = useContext(GlobalContext);

  return (
    <Avatar
      sx={{
        backgroundColor: isSidebarDarkMode ? '#54B689':'#ffffff',
        width: { xs: size * 0.75, sm: size, md: size * 1.25 }, // Smaller size on mobile, default on tablet, larger on desktop
        height: { xs: size * 0.75, sm: size, md: size * 1.25 },
        alignItems: 'center',
        margin: { xs: 0.5, sm: 1 }, // Adjust margin for smaller screens
       
      }}
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon
        sx={{
          color: isSidebarDarkMode ? '#ffffff':'#54B689',
          fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' }, // Adjust icon size for responsiveness
        }}
      />
    </Avatar>
  );
};

export default SocialIcons;
