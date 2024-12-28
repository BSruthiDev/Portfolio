import React from 'react';
import Box from '@mui/material/Box';
import ServicesComponent from './action/ServicesComponent';
import ResumeComponent from './action/ResumeComponent';
import PortfolioComponent from './action/PortfolioComponent';
import PersonComponent from './action/PersonComponent';
import ContactComponent from './action/ContactComponent';
import ProjectViewComponent from './action/ProjectViewComponent'
import { useContext } from "react";
import { GlobalContext } from '../components/contextstore/global-context-store';

const MainContentLayout = () => {

    const { actionString,actionData}=useContext(GlobalContext)


    const renderContent = () => {
      console.log('actionString...!',actionString)
        switch (actionString) {
          case 'About Me':
            return <PersonComponent />;
          case 'Portfolio':
            return <PortfolioComponent />;
          case 'Services':
            return <ServicesComponent />;
          case 'Resume':
            return <ResumeComponent />;
          case 'Contact':
            return <ContactComponent />;
            case 'View Project':
              return <ProjectViewComponent projectId={actionData} />; 
              default:
            return 'No content found';
        }
      };
    
    return (
      <Box
      sx={{
         width: {xs:'auto',md:'80%'},
          overflowY: 'auto',
          overflowX: 'hidden',
      }}>
        {renderContent()}
            
        </Box>
    )
}

export default MainContentLayout;