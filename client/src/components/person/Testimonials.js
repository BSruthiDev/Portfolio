import React ,{useContext} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListTestimonials from '../person/ListTestimonials';
import {GlobalContext} from '../contextstore/global-context-store';

const Testimonials = () => {
    const { isSidebarDarkMode } = useContext(GlobalContext);

    return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingLeft: 6, // Adjust size as needed
                    gap:4
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                        paddingBottom: 1,
                        color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''

                    }}
                >
                    Testimonials
                </Typography>
                <ListTestimonials/>

            </Box>
         
    )
}

export default Testimonials;