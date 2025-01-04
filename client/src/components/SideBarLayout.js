import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import myPhoto from '../images/myphoto.jpg';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import SocialIcons from './SocialIcons';
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';
import ActionList from './ActionList';
import ButtonComponent from './ButtonComponent';
import ContrastIcon from '@mui/icons-material/Contrast';
import IOSSwitch from './IOSSwitch';
import NearMeIcon from '@mui/icons-material/NearMe';
import { GlobalContext } from './contextstore/global-context-store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSalesforce } from '@fortawesome/free-brands-svg-icons';


const SideBarLayout = () => {
  const { isSidebarDarkMode } = useContext(GlobalContext);

  const items = [
    { icon: 'Person', label: 'About Me' },
    { icon: 'Portfolio', label: 'Portfolio' },
    { icon: 'Services', label: 'Services' },
    { icon: 'Resume', label: 'Resume' },
    { icon: 'Contact', label: 'Contact' },
  ];

  const buttonProps = {
    width: '120px', // Set the width of the button
    backgroundColor: isSidebarDarkMode ? '#54B689' : 'rgba(0, 0, 0, 0.3)',
    backgroundHoverColor: isSidebarDarkMode ? '' : 'rgba(0, 0, 0, 0.5)', 
    text: 'Hire Me',
    icon: <NearMeIcon color="#fff" />,
  };

  return (
    <Box
      sx={{
        width: { xs: '100%', md: '20%' }, // Full width on small screens, 20% on larger screens
        backgroundColor: isSidebarDarkMode ? '#1e2a3a' : '#54B689', // Conditional color based on context
        padding: { xs: 1, sm: 3 }, // Adjust padding based on screen size
        color: '#fff',
        overflowY: { md: 'auto' },
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 1, sm: 3 }, // Adjust gap based on screen size
        alignItems: 'center',
      }}
      className={isSidebarDarkMode ? 'custom-scrollbar dark-scrollbar' : 'custom-scrollbar'}
      >
      <Typography
        variant="h1"
        sx={{
          display: { xs: 'none' },
          fontSize: { xs: '1.2rem', sm: '1.5rem' }, // Responsive font size
          color: '#fff',
          fontWeight: 'bold',
          fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
        }}
      >
        Sruthi Bandi
      </Typography>

      <Avatar
        src={myPhoto}
        alt="Profile Image"
        sx={{
          width: { xs: 80, sm: 120, md: 200 }, // Responsive sizes
          height: { xs: 80, sm: 120, md: 200 },
        }}
      />

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '0.9rem', sm: '1rem' },
          color: '#fff',
          fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
          textAlign: 'center',
        }}
      >
        Hi, my name is Sruthi Bandi and I'm a software engineer. Welcome to my personal website!
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <SocialIcons Icon={LinkedIn}  link="https://www.linkedin.com/in/bandisruthi" />
        <SocialIcons Icon={GitHub}  link="https://github.com/BSruthiDev" />
        <SocialIcons Icon={() => <FontAwesomeIcon icon={faSalesforce} />} link="https://www.salesforce.com/trailblazer/sbandi81" />
        </Box>

      <ActionList items={items} color="#fff" />
      <ButtonComponent buttonProps={buttonProps} />

      <Box
        sx={{
          color: '#fff',
          padding: { xs: 1, sm: 2 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 1, // Adds space between icon and text
            alignItems: 'center',
          }}
        >
          <ContrastIcon sx={{ fontSize: '1.5rem' }} /> {/* Adjust icon size here */}
          <Typography
            variant="h6"
            sx={{
              fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
              fontSize: { xs: '0.9rem', sm: '1rem' },
              fontWeight: 'bold',
            }}
          >
            Dark Mode
          </Typography>
        </Box>

        <IOSSwitch />
      </Box>
    </Box>
  );
};

export default SideBarLayout;
