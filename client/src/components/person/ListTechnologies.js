import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; // Use the standard Grid
import Typography from '@mui/material/Typography';
import TechnologiesInfo from '../../components/json/TechnologiesInfo.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNodeJs,
  faJs,
  faJava,
  faReact,
  faHtml5,
  faCss3,
  faSalesforce,
  faAws,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'; // Import brand icons

import { faDatabase } from '@fortawesome/free-solid-svg-icons'; // Import faDatabase from solid icons

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ButtonComponent from '../ButtonComponent';
import { GlobalContext } from '../contextstore/global-context-store';

// Button service properties
const buttonServiceProps = {
  width: '150px',
  backgroundColor: 'rgba(84, 182, 137, 1)',
  backgroundHoverColor: 'rgba(94, 192, 147, 1)',
  text: 'Services',
  icon: <ArrowCircleRightIcon />,
};

// Mapping technology names to FontAwesome icons
const techIconMap = {
  'Node.js': faNodeJs,
  JavaScript: faJs,
  Java: faJava,
  React: faReact,
  HTML5: faHtml5,
  CSS3: faCss3,
  Database: faDatabase,
  Salesforce: faSalesforce,
  AWS: faAws,
  GitHub: faGithub,
};

const ListTechnologies = () => {
  const { isSidebarDarkMode } = useContext(GlobalContext);

  return (
    <>
      <Box sx={{ paddingLeft: 6 }}>
        <Grid container spacing={4}>
          {TechnologiesInfo.technologies.slice(0, 8).map((tech) => (
            <Grid item sm={6} md={3} key={tech.id}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {/* Dynamically render the correct FontAwesome icon */}
                {techIconMap[tech.name] && (
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <FontAwesomeIcon
                      icon={techIconMap[tech.name]}
                      size="2x"
                      color="#54B689"
                    />
                  </Box>
                )}
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: '1rem',
                    fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                    marginBottom: 1,
                    fontWeight: 'bold',
                    color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '',
                  }}
                >
                  {tech.name}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '0.8rem',
                    fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                    marginBottom: 1,
                    color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '',
                  }}
                >
                  {tech.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ButtonComponent buttonProps={buttonServiceProps} />
      </Box>
    </>
  );
};

export default ListTechnologies;
