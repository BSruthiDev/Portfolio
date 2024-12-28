import React, { useState,useEffect,useRef,useContext} from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import SideBarLayout from './components/SideBarLayout';
import MainContentLayout from './components/MainContentLayout';
import GlobalContextProvider from './components/contextstore/global-context-store';
import { useMediaQuery } from '@mui/material';
import {GlobalContext} from './components/contextstore/global-context-store'


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [sidebarHeight, setSidebarHeight] = useState(0);
  const { isSidebarDarkMode } = useContext(GlobalContext);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle sidebar open/close
  };

  const isMobile = useMediaQuery('(max-width:960px)'); 

  useEffect(() => {
    if (sidebarRef.current) {
      setSidebarHeight(sidebarRef.current.clientHeight); // Get height of the sidebar
    }
  }, [sidebarOpen]);


  return (
    <GlobalContextProvider>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        {/* Header for Mobile */}
        <Box
          sx={{
           backgroundColor: isSidebarDarkMode ? '#1e2a3a' : '#54B689',
            display: { xs: 'flex', md: 'none' }, // Show only on mobile
            alignItems: 'center',
            padding: '16px',
            color: 'white',
            position: 'fixed', // Keep it at the top in mobile view
            top: 0, // Align to top
            width: '100%', // Full width header on mobile
            zIndex: 2, // Keep it above the sidebar
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              left: '16px',
            }}
            onClick={toggleSidebar}
          >
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              margin: '0 auto', // Center the name
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            Sruthi Bandi
          </Typography>
        </Box>

        {/* Sidebar */}
        {sidebarOpen ? (
          <Box
          ref={sidebarRef}
            sx={{
              width: '100%',
              height: 'auto', // Adjust the height of the sidebar when open
              position: 'absolute', // Sidebar over the content
              zIndex: 1,
              top: '56px', // Align the sidebar below the header
              transition: 'height 0.3s ease-in-out'
            }}
          >
            <SideBarLayout />
          </Box>
        ) : null}
    {!isMobile && <SideBarLayout />}
    {isMobile ? (<Box 
    style={{
      width: '100%', // Ensure it takes up the full width of the viewport
      marginTop: isMobile ? `${sidebarOpen ? sidebarHeight + 56 : 56}px` : '56px', // Dynamically adjust marginTop
      transition: 'margin-top 0.3s ease-in-out',
      zIndex: 0, // Ensure it stays below the sidebar in mobile view
    }}>
      <MainContentLayout/>
      </Box>) : <MainContentLayout />}
      </Box>
    </GlobalContextProvider>
  );
}

export default App;
