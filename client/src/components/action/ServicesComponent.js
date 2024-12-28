import React, { useContext } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { GlobalContext } from '../contextstore/global-context-store';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import questionsData from '../json/QuestionAndAnswer.json'

const ServicesComponent = () => {
    const { isSidebarDarkMode } = useContext(GlobalContext);


    const skills = {
        Languages: ['Java', 'JavaScript', 'SQL', 'Node.js'],
        'Front-end Technologies': ['ReactJS (Hooks, Context API)', 'HTML5', 'CSS3', 'JavaScript'],
        'Back-end Technologies': [
            'Java/J2EE (JSP, Servlets, JDBC)',
            'Spring',
            'Spring Boot',
            'Hibernate',
            'GraphQL',
            'Apollo Server',
        ],
        Databases: ['MongoDB', 'MySQL', 'Hibernate ORM'],
        'Cloud Technologies': ['AWS (Lambda, S3, DynamoDB, API Integrations)'],
        Architectures: ['Microservices', 'RESTful APIs'],
        'Containerization/Orchestration': ['Docker', 'Kubernetes'],
        'Messaging Systems': ['Kafka'],
        'Testing Tools': ['JUnit', 'Mockito'],
        'DevOps/CI-CD': ['Jenkins', 'Git'],
        'Design Patterns': ['Singleton', 'Factory'],
        Methodologies: ['Agile', 'Scrum'],
        'Other Tools': ['Jira', 'UML Modeling'],
    };


    return (
        <Box sx={{
            width: '99%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: isSidebarDarkMode ? '#111821' : '',
            gap: 4,
            padding: 2,

        }}>
            <Box
                sx={{
                    height: 'auto',
                    backgroundColor: isSidebarDarkMode ? '#111821' : '#fafafa',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    padding: 4
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '2.5rem',
                        fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                        textAlign: 'center',
                        color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : ''

                    }}
                >
                    Services
                </Typography>

                <Typography
                    variant="body"
                    sx={{
                        fontSize: '1rem',
                        fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                        textAlign: 'center',
                        color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : ''

                    }}
                >
 I have 6+ years of experience in developing web applications, I specialize in building scalable solutions using technologies such as React, Node.js, and MongoDB. You can explore my project portfolio and online resume to learn more about my skills in full-stack development, cloud technologies, and various backend frameworks
                </Typography>
                <Typography
                    variant="body"
                    sx={{
                        fontSize: '1rem',
                        fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                        textAlign: 'center',
                        color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : ''

                    }}
                >
I am currently available for software development work, specializing in both front-end and back-end development, as well as cloud services.</Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    backgroundColor: isSidebarDarkMode ? '#111821' : '#ffffff',
                    borderRadius: 2,
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        textAlign: 'center',
                        fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                        color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '#292929',
                    }}
                >
                    Skill Sets
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center', // Horizontally center the table
                        alignItems: 'center', // Vertically center the table
                        backgroundColor: isSidebarDarkMode ? '#111821' : '',

                    }}
                >
                    <TableContainer
                        component={Paper}
                        sx={{
                            boxShadow: isSidebarDarkMode ? '0 0 10px rgba(0,0,0,0.5)' : '',
                            width: { xs: '90%', md: '60%' }, // Responsive width
                            border: isSidebarDarkMode
                                ? '1px solid rgba(255, 255, 255, 0.05)' // Dark mode border
                                : '1px solid rgba(0, 0, 0, 0.08)',
                            backgroundColor: isSidebarDarkMode ? '#151e29' : '',

                        }}
                    >
                        <Table >
                            <TableHead>
                                <TableRow sx={{
                                    '& > th': {
                                        borderBottom: isSidebarDarkMode
                                            ? '1px solid rgba(255, 255, 255, 0.05)' // Dark mode border
                                            : '1px solid rgba(0, 0, 0, 0.08)', // Light mode border
                                    },
                                }}>
                                    <TableCell
                                        sx={{
                                            fontWeight: 'bold',
                                            color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.85)' : '#111821',
                                            background: '#fafafa', // Background color for category column
                                            borderRight: isSidebarDarkMode
                                                ? '1px solid rgba(255, 255, 255, 0.05)' // Dark mode border between columns
                                                : '1px solid rgba(0, 0, 0, 0.08)',
                                            backgroundColor: isSidebarDarkMode ? '#151e29' : '',

                                        }}
                                    >

                                        <Typography
                                            variant="h1"
                                            sx={{
                                                fontWeight: 'bold',
                                                fontSize: { xs: '0.875rem', md: '1rem' },
                                                fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                                color: '#54B689',
                                                textAlign: 'center'
                                            }}
                                        >
                                            Category
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: 'bold',
                                            color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.85)' : '#111821',
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontWeight: 'bold',
                                                fontSize: { xs: '0.875rem', md: '1rem' },
                                                fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                                color: '#54B689',
                                                textAlign: 'center'
                                            }}
                                        >
                                            Skills
                                        </Typography>


                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.entries(skills).map(([category, skillList]) => (
                                    <TableRow key={category} sx={{

                                        '& > td': {
                                            borderBottom: isSidebarDarkMode
                                                ? '1px solid rgba(255, 255, 255, 0.05)' // Dark mode border
                                                : '1px solid rgba(0, 0, 0, 0.08)', // Light mode border
                                        },

                                    }}>
                                        <TableCell
                                            sx={{
                                                color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.85)' : '#111821',
                                                background: '#fafafa', // Background color for category column
                                                padding: '1rem', // Padding for category column
                                                fontSize: '0.875rem', // Font size for category column
                                                borderRight: isSidebarDarkMode
                                                    ? '1px solid rgba(255, 255, 255, 0.05)' // Dark mode border
                                                    : '1px solid rgba(0, 0, 0, 0.08)',
                                                backgroundColor: isSidebarDarkMode ? '#151e29' : '',

                                            }}
                                        >
                                            <Typography
                                                variant="h1"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    fontSize: { xs: '1rem', md: '1rem' }, // Slightly larger than body text but smaller than the title
                                                    fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                                    color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '#555555',
                                                    wordBreak: { xs: 'break-word' },
                                                }}
                                            >
                                                {category}
                                            </Typography>

                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.75)' : '#333',

                                            }}
                                        >
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontSize: { xs: '1rem', md: '1rem' }, // Slightly larger than body text but smaller than the title
                                                    fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                                    color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '#555555',

                                                }}
                                            >
                                                {skillList.join(', ')}
                                            </Typography>

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>



            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    backgroundColor: isSidebarDarkMode ? '#111821' : '',
                    borderRadius: 2,
                    width: { xs: '90%', md: '60%' },
                    margin: '0 auto',

                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        textAlign: 'center',
                        fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                        color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '#292929',
                        alignItems: 'center'
                    }}
                >
                    FAQs
                </Typography>

                <Typography
                    variant="body"
                    sx={{
                        fontSize: '1rem',
                        fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                        textAlign: 'center',
                        color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '',
                        alignItems: 'center'
                    }}
                >
                    You can use this section to address any queries your potential clients may have.
                </Typography>
                {questionsData.questions.map((item, index) => (
        <Accordion
          key={index}
          sx={{
            backgroundColor: isSidebarDarkMode ? '#151e29' : '#fafafa',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '' }} />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '0.875rem', md: '1rem' },
                fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '#4f4f4f',
                textAlign: 'center',
              }}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body"
              sx={{
                fontSize: '1rem',
                fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                textAlign: 'center',
                color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '',
                alignItems: 'center',
              }}
            >
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

            </Box>

        </Box>
    )
}

export default ServicesComponent;
