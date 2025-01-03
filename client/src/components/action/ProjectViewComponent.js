import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import FactoryIcon from '@mui/icons-material/Factory';
import GroupsIcon from '@mui/icons-material/Groups';
import LinkIcon from '@mui/icons-material/Link';
import NearMeIcon from '@mui/icons-material/NearMe';
import ButtonComponent from '../ButtonComponent';
import ProjectsList from '../../components/json/ProjectsList.json';
import { GlobalContext } from '../contextstore/global-context-store';

const ProjectViewComponent = ({ projectId }) => {
    const { projects } = ProjectsList;
    const { isSidebarDarkMode } = useContext(GlobalContext);
    const project = projects.find((p) => p.id === projectId);

    if (!project) {
        return (
            <Typography variant="h6" sx={{ color: 'red', textAlign: 'center', marginTop: 4 }}>
                Project not found!
            </Typography>
        );
    }

    const buttonProps = {
        width: '130px',
        backgroundColor: 'rgba(84, 182, 137, 1.0)',
        backgroundHoverColor: 'rgba(104, 202, 157, 1.0)',
        text: 'Hire Me',
        icon: <NearMeIcon color="#fff" />,
    };

    return (
        <Box sx={{ width: 'auto', display: 'flex', flexDirection: 'column', gap: 2, backgroundColor: isSidebarDarkMode ? '#111821' : '' }}>
            {/* Header Section */}
            <Box sx={{
                height: { xs: '20vh', md: '10vh' },
                backgroundColor: isSidebarDarkMode ? '#111821' : '#fafafa',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: { xs: 2, sm: 4 },
            }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '1.5rem', sm: '2rem' },
                        fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                        textAlign: 'center',
                        color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '',
                    }}
                >
                    Case Study: {project.projectHeading}
                </Typography>

                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.3rem' },
                        fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                        textAlign: 'center',
                        color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '',
                    }}
                >
                    {project.description}
                </Typography>
            </Box>

            {/* Project Details Section */}
            <Box sx={{
                backgroundColor: isSidebarDarkMode ? '#151e29' : '#fafafa',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                margin: { xs: '10px 20px', md: '40px 60px 0' },
                padding: { xs: 4, sm: 4, md: 6 },
                border: '1px solid rgba(0, 0, 0, 0.025)',
                gap: 4,
            }}>
                {/* Left side: Avatar */}
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={require(`../../images/${project.avatar}`)}
                        alt="Project Avatar"
                        style={{ maxWidth: '80%', height: 'auto', objectFit: 'cover' }}
                    />
                </Box>

                {/* Right side: Project Info */}
                <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', color: '#4f4f4f', gap: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '', fontSize: '1.25rem', fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(',') }}>
                        Client: {project.client}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1rem', color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '', fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(',') }}>
                        <FactoryIcon sx={{ marginRight: 1 }} />
                        <strong>Industry:</strong> {project.industry}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1rem', color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '', fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(',') }}>
                        <GroupsIcon sx={{ marginRight: 1 }} />
                        <strong>Size:</strong> {project.size}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1rem', color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '', fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(',') }}>
                        <LinkIcon sx={{ marginRight: 1 }} />
                        <strong>Website:</strong> <a href={project.website}>{project.website}</a>
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1rem', color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '', fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(',') }}>
                        {project.projectOverview}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '', fontSize: '1rem', fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(',') }}>
                        Project Requirements
                    </Typography>
                    <Typography variant="body" sx={{ fontSize: '1rem', color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '', fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(',') }}>
                        {project.projectRequirements}
                    </Typography>
                </Box>
            </Box>

            {/* Additional Sections */}
            {['projectOverview', 'theChallenge', 'theApproachAndSolution'].map((key, index) => {
                const sectionHeading = {
                    projectOverview: 'Project Overview',
                    theChallenge: 'The Challenge',
                    theApproachAndSolution: 'The Approach & Solution',
                }[key];

                return (
                    <Box key={index} sx={{ display: 'flex', flexDirection: 'column', paddingLeft: { xs: 4, sm: 6 }, paddingTop: 2, gap: 2 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: { xs: '1.5rem', sm: '1.8rem' },
                                fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '#292929',
                            }}
                        >
                            {sectionHeading}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '1rem',
                                fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '#4f4f4f',
                            }}
                        >
                            {project[key] || 'Content not available.'}
                        </Typography>
                    </Box>
                );
            })}

            {/* Call-to-Action Section */}
            <Box sx={{
                width: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                paddingTop: 4,
                backgroundColor: isSidebarDarkMode ? '#111821' : ''
            }}>
                <Box sx={{
                    backgroundColor: isSidebarDarkMode ? '#151e29' : '#fafafa',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    padding: 4
                }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                            textAlign: 'center',
                            color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : ''
                        }}
                    >
                        Want me to help with your project?
                    </Typography>
                    <Typography variant="body" sx={{ fontSize: '1rem', color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '', fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','), textAlign: 'center' }}>
                        I specialize in creating high-quality software solutions tailored to meet business needs. With expertise in technologies like React, Node.js, Java, Salesforce, and more, I build scalable, efficient, and user-friendly applications. Whether you're looking for a responsive web app, a robust backend solution, or a custom CRM, I can help bring your ideas to life. Let’s work together to turn your vision into reality.
                    </Typography>
                    <ButtonComponent buttonProps={buttonProps} />
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectViewComponent;
