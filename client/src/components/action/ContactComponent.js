import React, { useState,useContext } from 'react';
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';
import SocialIcons from '../SocialIcons';
import { Box, TextField,Button, Typography } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { GlobalContext } from '../contextstore/global-context-store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSalesforce } from '@fortawesome/free-brands-svg-icons';

const buttonPortfolioProps = {
  width: '130px', // Set the width of the button
  backgroundColor: 'rgba(84, 182, 137, 1)',
  backgroundHoverColor: 'rgba(94, 192, 147, 1)',
  text: 'Send',
  icon: <ArrowCircleRightIcon />
}




const ContactComponent = () => {
      const { isSidebarDarkMode} = useContext(GlobalContext);
  
  const [emailDetails, setEmailDetails] = useState({ name: '', email: '', message: '' });

  const sendEmail = async () => {

    console.log('emailDetails...!!',emailDetails)

    try {
      const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation SendEmail($name: String!, $email: String!, $message: String!) {
              sendEmail(input: { name: $name, email: $email, message: $message }) {
                success
                message
              }
            }
          `,
          variables: {
            name: emailDetails.name,
            email: emailDetails.email,
            message: emailDetails.message,
          },
        }),
      });
  
      const result = await response.json();
      if (result.data?.sendEmail?.success) {
        alert('Email sent successfully!');
        setEmailDetails({ name: '', email: '', message: '' }); // Reset the form
      } else {
        alert(`Error: ${result.data?.sendEmail?.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send the email.');
    }
  
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('name...!!',value)
    setEmailDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value, // Dynamically update the corresponding field
    }));
  };

  return (
    <Box sx={{
      width: '99%',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      backgroundColor: isSidebarDarkMode?'#111821':'',
      height: { xs: 'auto', md: '100vh' },
    }}>
      <Box
        sx={{
          height: { xs: 'auto', md: '35vh' },
          backgroundColor: isSidebarDarkMode?'#111821': '#fafafa',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
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
          Contact
        </Typography>

        <Typography
  variant="body1"
  sx={{
    fontSize: '1rem',
    fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
    textAlign: 'center',
    color: isSidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : '',
  }}
>
I’m a software engineer skilled in both frontend and backend development, with expertise in building scalable web applications. I work with technologies like JavaScript, ReactJS, Node.js, Spring Boot, and GraphQL, and have experience with databases like MongoDB, MySQL, and PostgreSQL. I also use tools like Docker, Kubernetes, and AWS for cloud integration.Want to learn how I can contribute to your project? Check out my
  <span style={{ color: '#54B689' }}> portfolio</span> and 
  <span style={{ color: '#54B689' }}> online resume</span>
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
          I'm a software engineer specialised in frontend and backend development for complex scalable web apps
        </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <SocialIcons Icon={LinkedIn}  link="https://www.linkedin.com/in/sruthi-bandi-b023937a/"/>
          <SocialIcons Icon={GitHub} link="https://github.com/Sbandi1991?tab=repositories" />
          <SocialIcons Icon={() => <FontAwesomeIcon icon={faSalesforce} />} link="https://www.salesforce.com/trailblazer/sbandi81" />
          </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 'bold',
            fontSize: '2rem',
            fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
            textAlign: 'center',
            color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''
          }}
        >
          Get In Touch
        </Typography>

        <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          justifyContent: 'center',
          width: '100%',
          maxWidth: { xs: 'auto', md: '600px' },
          
          
        }}
      >
        <TextField
          label=" Name"
          variant="outlined"
          fullWidth
          size="small"
           name="name"
          onChange={handleChange}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          size="small"
           name="email"
          onChange={handleChange}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
          }}
        />
       </Box>
       <Box sx={{ width: '100%', maxWidth: '600px' }}>
          <TextField
            label="Your Message"
            variant="outlined"
            multiline
            rows={6}
            fullWidth
             name="message"
             sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
            }}
            onChange={handleChange}
          />
        </Box>
        
       
        <Button
          onClick={sendEmail}
          startIcon={buttonPortfolioProps.icon}
          variant="contained"
          sx={{
            width: buttonPortfolioProps.width,
            backgroundColor: buttonPortfolioProps.backgroundColor,
            '&:hover': { backgroundColor: buttonPortfolioProps.backgroundHoverColor },
            textTransform: 'none',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          {buttonPortfolioProps.text}
        </Button>

      
        <Box sx={{ height: '50px' }}></Box>
      </Box>

    </Box>
  )
}

export default ContactComponent;
