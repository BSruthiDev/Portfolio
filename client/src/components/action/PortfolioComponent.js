import React, { useState ,useContext} from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import NearMeIcon from '@mui/icons-material/NearMe';
import ButtonComponent from '../ButtonComponent';
import ProjectsList from '../../components/json/ProjectsList';
import ListProjects from '../person/ListProjects';
import { GlobalContext } from '../../components/contextstore/global-context-store';



const PortfolioComponent = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const {isSidebarDarkMode} = useContext(GlobalContext);

    const buttonProps = {
        width: '130px', // Set the width of the button
        backgroundColor: 'rgba(84, 182, 137, 1.0)',
        backgroundHoverColor: 'rgba(104, 202, 157, 1.0)',
        text: 'Hire Me',
        icon: <NearMeIcon color="#fff" />,
    };

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

   
    const filterProjects = (tab) => {
        console.log('tab..!!',tab)
        const allProjects = ProjectsList?.projects || []; // Access projects safely

        let filteredProjects = [];
        switch (tab) {
            case 0:
                // All projects, filter by client (Progen, Capgemini)
                filteredProjects = allProjects; 
                break;
            case 1:
                // Salesforce projects only
                filteredProjects = allProjects.filter(project => project.projectHeading === 'Salesforce Developer');
                break;
            case 2:
                // FrontEnd related projects (Full Stack, MERN Stack)
                filteredProjects = allProjects.filter(project => 
                    project.projectHeading === 'Full-Stack Developer' || project.projectHeading === 'MERN Stack Developer'
                );
                break;
            case 3:
                // BackEnd projects (Java Developer)
                filteredProjects = allProjects.filter(project => project.projectHeading === 'Java Developer' || project.projectHeading === 'Full-Stack Developer' || project.projectHeading === 'MERN Stack Developer');
                break;
            default:
                filteredProjects = [];
                break;
        }

        // Return the filtered projects in the desired object structure
        return { projects: filteredProjects };
    };

    const renderContent = () => {
        const filteredProjects = filterProjects(selectedTab);
        return (
            <Box
                sx={{
                    minHeight: '60vh', // Ensures the container occupies enough height
                    backgroundColor: isSidebarDarkMode ? '#111821' : '',
                    padding: 2,
                }}
            >
                <ListProjects ProjectsList={filteredProjects} />
            </Box>
        );
    };



    return (


        <Box sx={{
            width: '99%',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            backgroundColor: isSidebarDarkMode?'#111821':'',

        }}>
            <Box
                sx={{
                    height: '30vh',
                    backgroundColor: isSidebarDarkMode?'#111821': '#fafafa',
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
                        color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''


                    }}
                >
                    portfolio
                </Typography>

                <Typography
                    variant="body"
                    sx={{
                        fontSize: '1rem',
                        fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                        textAlign: 'center',
                        color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''


                    }}
                >
I specialize in creating high-quality software solutions tailored to meet business needs. With expertise in technologies like React, Node.js, Java, Salesforce, and more, I build scalable, efficient, and user-friendly applications. Whether you're looking for a responsive web app, a robust backend solution, or a custom CRM, I can help bring your ideas to life. Let’s work together to turn your vision into reality.

</Typography>

                <ButtonComponent buttonProps={buttonProps} />
            </Box>

            <Box
    sx={{
        padding: { xs: 5, md: 2 }, // Adjusted padding for better responsiveness
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
    }}
>
    <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap', // Allow tabs to wrap to a new line
            justifyContent: 'center', // Center align the tabs
            gap: 2, // Add spacing between rows and columns
        }}
    >
        <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            sx={{
                '.MuiTabs-indicator': {
                    backgroundColor: '#54B689',
                    height: '1px',
                },
                '.MuiTab-root': {
                    color: '#6f6f6f', // Default color for unselected tabs
                    fontWeight: 'bold', // Default weight for unselected tabs
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                    fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','), // Font family
                    textTransform: 'capitalize', // Capitalize first letter
                    minWidth: '100px', // Set minimum width for each tab
                    '&.Mui-selected': {
                        color: '#54B689', // Color for the selected tab
                        fontWeight: 'bold', // Bold for the selected tab
                    },
                },
            }}
        >
            <Tab label="All" />
            <Tab label="Salesforce" />
            <Tab label="FrontEnd" />
            <Tab label="BackEnd" />
           
        </Tabs>
    </Box>
</Box>



            {renderContent()}

           

        </Box>
    )

}

export default PortfolioComponent;
