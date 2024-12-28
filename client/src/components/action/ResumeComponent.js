import React,{useContext} from 'react';
import { Box, Typography, Divider, Avatar } from '@mui/material';
import ButtonComponent from '../ButtonComponent';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PlaceIcon from '@mui/icons-material/Place';
import InfoDisplay from '../resume/InfoDisplay';
import myPhoto from '../../images/myphoto.jpg';
import workExperiences from '../../components/json/workExperiences.json';
import ProjectDetails from '../../components/json/ProjectDetails.json'
import ProfileData from '../../components/json/ProfileData.json';
import {GlobalContext} from  '../contextstore/global-context-store';

const buttonResumeProps = {
    width: '250px', // Set the width of the button
    backgroundColor: 'rgba(84, 182, 137, 1)',
    backgroundHoverColor: 'rgba(94, 192, 147, 1)',
    text: 'Download PDF Version',
    icon: <TextSnippetIcon />
}

const ResumeComponent = () => {
    const phoneNumber = '+1 (647) 896-3980'; 
    const email = 'bandisruthi1991@gmail.com'; 
    const location = 'Cambridge';
    const { isSidebarDarkMode } = useContext(GlobalContext);

  
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 3,
                    backgroundColor: isSidebarDarkMode ? '#111821' :''
                }}
            >
                <Box
                    sx={{
                        height: 'auto', // Responsive height
                        backgroundColor: isSidebarDarkMode ? '#111821' :'#fafafa',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        padding: { xs: 2, md: 4 }, // Responsive padding
                        alignItems: 'center', // Center content
                        textAlign: 'center' // Center text
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: { xs: '1.5rem', md: '2rem' }, // Responsive font size
                            fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                            color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''

                        }}
                    >
                        Online Resume
                    </Typography>
                    <ButtonComponent buttonProps={buttonResumeProps} />
                </Box>
                <Box
                    sx={{
                        backgroundColor: isSidebarDarkMode ? '#151e29' : '#fafafa',
                        display: 'flex',
                        flexDirection: 'column',// Stack column on small screens
                        margin: { xs: '10px 20px', md: '20px 50px 0' }, // Responsive margin
                        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)', // Uniform shadow on all sides
                        height:'auto', // Responsive height
                        padding: { xs: 4, md: 7 },// Responsive padding
                        gap: 5
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }, // Stack column on small screens
                        gap: { xs: 3, md: 5 }, // Responsive gap
                        justifyContent: 'space-between',
                        flexGrow: { xs: 0, md: 1 },
                    }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,


                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: { xs: '2rem', md: '2.5rem' }, // Responsive font size
                                    fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                    color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)': '#54B689'
                                }}
                            >
                                SRUTHI BANDI
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '1.2rem', md: '1.5rem' }, // Responsive font size
                                    fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                    color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''
                                }}
                            >
                                Software Engineer
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: 2
                        }}>
                            <Divider orientation={{ xs: 'horizontal', md: 'vertical' }} flexItem
                                sx={{
                                    borderColor: 'rgba(0, 0, 0, 0.08)',
                                    borderWidth: { xs: '0 0 1px 0', md: '0 0 0 1px' }, // Light border similar to CSS
                                    backgroundColor: 'transparent', // Ensures no background color interferes
                                    width: { xs: '100%', md: 'auto' }, // Full width for horizontal divider
                                    height: { xs: 'auto', md: '100%' }, // Full height for vertical divider
                                }}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1,
                                    flexWrap: 'wrap',
                                }}
                            >

                                <InfoDisplay icon={ContactPhoneIcon} text={phoneNumber} />
                                <InfoDisplay icon={ContactMailIcon} text={email} />
                                <InfoDisplay icon={PlaceIcon} text={location} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Divider orientation="vertical" sx={{ borderColor: 'rgba(0, 0, 0, 0.08)', height: '100%' }} />
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 3 }}>
                            <Avatar alt="Sruthi Bandi" src={myPhoto} sx={{ width: 100, height: 100 }} />
                            <Typography variant="body1" sx={{
                                fontSize: '0.875rem', color: '#4f4f4f', fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                color:isSidebarDarkMode?'rgba(255, 255, 255, 0.7)':''
                            }}>
                               Full-Stack Developer with a proven track record of building scalable, responsive, and user-centric web and enterprise applications. Proficient in modern Front-end technologies like ReactJS, HTML5, CSS3, and JavaScript, with expertise in Back-end frameworks such as Java/J2EE (Spring, Spring Boot, Hibernate) and Node.js. Skilled in developing dynamic APIs using GraphQL, integrating third-party services, and optimizing performance. Experienced in Salesforce (Apex, Lightning Web Components, Flows) for robust CRM solutions, along with AWS cloud services, Microservices architecture, and containerization tools like Docker and Kubernetes. Proficient in Kafka for real-time data pipelines and event-driven systems, with strong expertise in databases (MongoDB, MySQL), testing frameworks (JUnit, Mockito), and Agile methodologies.
                               
                                 </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }, // Stack column on small screens
                        gap: { xs: 3, md: 5}, // Responsive gap
                    }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,


                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1rem', md: '1.5rem' }, // Responsive font size
                                    fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                     color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':'#54B689'
                                }}
                            >
                                WORK EXPERIENCES
                            </Typography>
                            {workExperiences.workExperience.map((experience, index) => (
                                <div key={index}>
                                     <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '1rem', md: '1rem' },
                        fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                        color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '#292929',
                    }}
                >
                    {experience.title} at {experience.company}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: '0.875rem',
                        fontWeight: 'bold',
                        fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                        color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.7)' : '#4f4f4f',
                        paddingLeft: '10px', // Adds space between the company name and duration
                    }}
                >
                    {experience.duration}
                </Typography>
            </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: '0.875rem',
                                            color: '#4f4f4f',
                                            fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                            color:isSidebarDarkMode?'rgba(255, 255, 255, 0.7)':'',
                                            paddingTop:'10px'
                                        }}
                                    >
                                        {experience.description}
                                    </Typography>
                                </div>
                            ))}
                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1rem', md: '1.5rem' }, // Responsive font size
                                    fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                     color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':'#54B689'
                                }}
                            >
                                PROJECTS
                            </Typography>
                            {ProjectDetails.projectdetail.map((project, index) => (
                                <div key={index}>
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: { xs: '1rem', md: '1rem' },
                                            fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                             color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':'#292929',
                                        }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: '0.875rem',
                                            color: '#4f4f4f',
                                            fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                              color:isSidebarDarkMode?'rgba(255, 255, 255, 0.7)':'',
                                              paddingTop:'10px'

                                        }}
                                    >
                                        {project.description}
                                    </Typography>
                                </div>
                            ))}
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: 2
                        }}>
                            <Divider orientation={{ xs: 'horizontal', md: 'vertical' }} flexItem
                                sx={{
                                    borderColor: 'rgba(0, 0, 0, 0.08)',
                                    borderWidth: { xs: '0 0 1px 0', md: '0 0 0 1px' }, // Light border similar to CSS
                                    backgroundColor: 'transparent', // Ensures no background color interferes
                                    width: { xs: '100%', md: 'auto' }, // Full width for horizontal divider
                                    height: { xs: 'auto', md: '100%' }, // Full height for vertical divider
                                }}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2
                                }}
                            >
                                {/* SKILLS Section */}
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: '1rem', md: '1.5rem' }, // Responsive font size
                                        fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                        color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)': '#54B689'
                                    }}
                                >
                                    SKILLS
                                </Typography>

                                {ProfileData.skills.sections.map((section, index) => (
                                    <Box key={index}>
                                        {/* Section Title (e.g., Technical, Professional) */}
                                        <Typography
                                            variant="h1" // Change to h2 to keep it visually distinct but smaller than the main title
                                            sx={{
                                                fontWeight: 'bold',
                                                fontSize: { xs: '1rem', md: '1rem' }, // Slightly larger than body text but smaller than the title
                                                fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                                 color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':'#292929',
                                                marginBottom: '8px' // Adding some space between title and items
                                            }}
                                        >
                                            {section.title}
                                        </Typography>

                                        {/* Section Items (e.g., list of skills) */}
                                        {section.items.map((item, idx) => (
                                            <Box key={idx}>
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        fontSize: { xs: '0.875rem', md: '0.875rem' },
                                                        fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                                        color:isSidebarDarkMode?'rgba(255, 255, 255, 0.7)': '#292929',
                                                        marginBottom: '4px'
                                                    }}
                                                >
                                                    {item}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                ))}

                                {/* EDUCATION Section */}
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: '1rem', md: '1.5rem' },
                                        fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                        color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)': '#54B689'
                                    }}
                                >
                                    EDUCATION
                                </Typography>

                                {ProfileData.education.map((edu, index) => (
                                    <Box key={index}>
                                        <Typography
                                            variant="h1"
                                            sx={{
                                                fontWeight: 'bold',
                                                fontSize: { xs: '1rem', md: '1rem' },
                                                fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                               color:isSidebarDarkMode?'rgba(255, 255, 255, 0.7)':'#292929'
                                            }}
                                        >
                                            {edu.degree}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontSize: { xs: '0.875rem', md: '0.875rem' },
                                                fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                                color:isSidebarDarkMode?'rgba(255, 255, 255, 0.7)':'#292929'
                                            }}
                                        >
                                            {edu.institution} ({edu.years})
                                        </Typography>
                                    </Box>
                                ))}

                                {/* LANGUAGES Section */}
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: '1rem', md: '1.5rem' },
                                        fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                        color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':'#54B689'
                                    }}
                                >
                                    LANGUAGES
                                </Typography>

                                {ProfileData.languages.map((lang, index) => (
                                    <Box key={index}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontSize: { xs: '0.875rem', md: '0.875rem' },
                                                fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                                color:isSidebarDarkMode?'rgba(255, 255, 255, 0.7)':'#292929'
                                            }}
                                        >
                                            {lang.language} ({lang.proficiency})
                                        </Typography>
                                    </Box>
                                ))}

                                {/* INTERESTS Section */}
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: '1rem', md: '1.5rem' },
                                        fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                        color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)': '#54B689'
                                    }}
                                >
                                    INTERESTS
                                </Typography>

                                {ProfileData.interests.map((interest, index) => (
                                    <Typography
                                        key={index}
                                        variant="body1"
                                        sx={{
                                            fontSize: { xs: '0.875rem', md: '0.875rem' },
                                            fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                            color:isSidebarDarkMode?'rgba(255, 255, 255, 0.7)': '#292929'
                                        }}
                                    >
                                        {interest}
                                    </Typography>
                                ))}
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Box >
        </>
    );
}

export default ResumeComponent;
