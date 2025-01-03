import React ,{useContext} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProjectsList from '../../components/json/ProjectsList';
import ListProjects from './ListProjects';
import ButtonComponent from '../ButtonComponent';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {GlobalContext} from  '../contextstore/global-context-store';

const buttonPortfolioProps = {
    width: '150px', // Set the width of the button
    backgroundColor: 'rgba(84, 182, 137, 1)',
    backgroundHoverColor: 'rgba(94, 192, 147, 1)',
    text: 'Portfolio',
    icon: <ArrowCircleRightIcon />
  }
  

const Projects = () => {

    const { isSidebarDarkMode} = useContext(GlobalContext);


    const filteredProjects = {
        projects: ProjectsList?.projects?.filter(project =>
            ["Progen", "Capgemini"].includes(project.client)
        ) || []
    };
    


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: 6, // Adjust size as needed
                gap: 6
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                    color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''

                }}
            >
                Projects
            </Typography>
           <ListProjects ProjectsList={filteredProjects}></ListProjects>
           <ButtonComponent buttonProps={buttonPortfolioProps} />

        </Box>
    )

}
export default Projects;