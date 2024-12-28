import React ,{useContext} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialsInfo from '../../components/json/TestimonialsInfo';
import { Card, CardContent } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import {GlobalContext} from  '../contextstore/global-context-store';

const importImage = (avatar) => {
    try {
        return require(`../../images/${avatar}`);
    } catch (err) {
        return null;  // Fallback for missing images
    }
};

const ListTestimonials = () => {

    const { isSidebarDarkMode } = useContext(GlobalContext);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 3000,
        rows: 1,
       
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {TestimonialsInfo.testimonials.map((testimonial, index) => (
                <div key={index}>
                    <Card sx={{
                        backgroundColor: isSidebarDarkMode ? '#151e29' : '#f5f5f5',
                        padding: { xs: 2, md: 3 },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: 3,
                        margin: '0 20px',
                        border:isSidebarDarkMode?'1px solid rgba(0, 0, 0, 0.025)':''

                    }}>
                        <CardContent>
                            <Typography variant="body2"
                                sx={{
                                    fontSize: '1rem',
                                    fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                    marginBottom: 2,
                                    color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''

                                }}
                            >
                                {testimonial.description}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Avatar
                                    sx={{ width: 80, height: 80 }}
                                    src={importImage(testimonial.avatar)}
                                    alt={testimonial.name}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                                    <Typography variant="body"
                                        sx={{
                                            fontSize: '0.8rem',
                                            fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                            opacity: 0.7,
                                            color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''

                                        }}
                                    >
                                        {testimonial.name}
                                    </Typography>
                                    <Typography variant="body"
                                        sx={{
                                            fontSize: '0.8rem',
                                            fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
                                            opacity: 0.7,
                                            color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''

                                        }}
                                    >
                                        {testimonial.title}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </Slider>
    );
}

export default ListTestimonials;
