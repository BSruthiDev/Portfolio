import { Card, CardContent, Button, Typography, Box } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import Grid from '@mui/material/Grid';
import React,{ useContext }from 'react';
import { GlobalContext } from '../../components/contextstore/global-context-store';


const importImage = (avatar) => {
    try {
        return require(`../../images/${avatar}`);
    } catch (err) {
        return null;  // Fallback for missing images
    }
};

const ListProjects = ({ ProjectsList }) => {
    const { onItemClick ,isSidebarDarkMode} = useContext(GlobalContext);

    return (
        <Box sx={{ display: 'flex',paddingLeft: { xs: 2, md: 4 }, paddingRight: { xs: 2, md: 4 }}}>
            <Grid container spacing={4}>
                {ProjectsList.projects.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Card sx={{
                            backgroundColor: isSidebarDarkMode?'#151e29':'#f5f5f5',
                            borderRadius: 0,
                            '&:hover .overlay': { opacity: 1 },
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Grid container direction={{ xs: 'column', md: 'row' }}>
                            <Grid item md={5} sx={{ display: 'flex', width: '100%', height: {xs:'150px',md:'250px'}, overflow: 'hidden' }}>
    <img
        src={importImage(project.avatar)} // Use the dynamic image import
        alt={project.projectHeading}
        style={{
            width: '100%', // Ensure the image takes up full width
            objectFit: 'cover', // Maintain aspect ratio while filling the container
        }}
    />
</Grid>

                                <Grid item md={6} sx={{ display: 'flex' }}>
                                    <CardContent >
                                        <Typography
                                            variant="h1"
                                            sx={{
                                                fontSize: { xs: '1rem', sm: '1.2rem' },
                                                fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                                fontWeight: 'bold',
                                                marginBottom: 1,
                                                color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''

                                            }}
                                        >
                                            {project.projectHeading}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontSize: { xs: '0.7rem', sm: '0.85rem' },
                                                fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                                lineHeight: 1.6,
                                                color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''

                                            }}
                                        >
                                            {project.description}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontSize: '0.8rem',
                                                fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                                opacity: 0.7,
                                                marginTop: 1,
                                                color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''

                                            }}
                                        >
                                            <strong>Client: </strong>{project.client}
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                            <Box
                                className="overlay"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: isSidebarDarkMode?'rgba(0, 0, 0, 0.5)':'rgba(0, 0, 0, 0.2)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                }}>
                                <Button
                                    variant="body2"
                                    sx={{
                                        backgroundColor: '#424242',
                                        color: '#fff',
                                        fontSize: '0.8rem',
                                        '&:hover': { backgroundColor: '#212121' },
                                    }}
                                    startIcon={<Visibility sx={{ color: '#fff' }} />}
                                    onClick={() => onItemClick('View Project',project.id)}
                                >
                                    View Case Study
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ListProjects;
