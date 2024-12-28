import React ,{useContext} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import myPhoto from '../../images/myphoto.jpg';
import ButtonComponent from '../ButtonComponent';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ListTechnologies from '../person/ListTechnologies';
import Testimonials from '../person/Testimonials';
import Projects from '../person/Projects'
import { GlobalContext } from '../contextstore/global-context-store';

const buttonPortfolioProps = {
  width: { xs: '120px', md: '170px' }, // Set the width of the button
  backgroundColor: 'rgba(84, 182, 137, 1)',
  backgroundHoverColor: 'rgba(94, 192, 147, 1)',
  text: 'Portfolio',
  icon: <ArrowCircleRightIcon />
}

const buttonResumeProps = {
  width: { xs: '120px', md: '170px' }, // Set the width of the button
  backgroundColor: 'rgba(66, 66, 66, 1)',
  backgroundHoverColor: 'rgba(84, 84, 84, 1)',
  text: 'Resume',
  icon: <TextSnippetIcon />
}

const PersonComponent = () => {
  const { isSidebarDarkMode } = useContext(GlobalContext);
  console.log('isSidebarDarkMode..!',isSidebarDarkMode)

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: isSidebarDarkMode?'#111821':'',
      gap: 4
    }}>
      <Box
        sx={{
          height: 'auto',
          width: 'auto',
          backgroundColor: isSidebarDarkMode?'#111821':'#fafafa',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          padding: { xs: 3, md: 6 },
          gap: { xs: 3, md: 10 }
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          flexBasis: { md: '60%' },
        }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '3rem' },
              fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
              color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''
            }}
          >
            Sruthi Bandi
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: '1.5rem',
              fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
              color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''

            }}
          >
            Senior Software Engineer
          </Typography>
          <Typography
            variant="body"
            sx={{
              fontSize: { xs: '0.875rem', md: '1rem' },
              fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
              color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''

            }}
          >
As a software engineer with expertise in both frontend and backend development, I specialize in creating scalable web applications and delivering high-quality solutions. I enjoy sharing insights on software development through my blog. Curious about how I can contribute to your project? Explore  <span style={{ color: '#54B689' }}> portfolio</span> and 
<span style={{ color: '#54B689' }}> online resume</span> to see the work I've done.          </Typography>
          <Box sx={{
            display: 'flex',
            gap: 2,
          }}>
            <ButtonComponent buttonProps={buttonPortfolioProps} />
            <ButtonComponent buttonProps={buttonResumeProps} />
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          flexBasis: { md: '30%' }, // 80% width on mobile, 30% on larger screens
          mx: 'auto',

        }}>


          <img
            src={myPhoto} // Use the dynamic image import
            alt="Profile Image"
            style={{
              width: '100%', // Image takes full width of the box
              objectFit: 'cover',

            }}
          />

        </Box>

      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 6,
        gap: 2
      }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 'bold',
            fontSize: '2rem',
            fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
            color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''

          }}
        >
          What I do
        </Typography>

        <Typography
          variant="body"
          sx={{
            fontSize: '1rem',
            fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
            color:isSidebarDarkMode?'rgba(255, 255, 255, 0.95)':''

          }}
        >
        I’m a software engineer specializing in building scalable, high-performance web applications with expertise in Java, Spring, AWS, Kafka, and React. With experience in both frontend and backend development, I create robust solutions that cater to complex business needs.Want to know how I can help bring your project to life? Explore my project portfolio and online resume to learn more about the work I’ve done.

</Typography>
      </Box>

      <ListTechnologies />
      <Testimonials />
      <Projects />
    </Box>
  )
}

export default PersonComponent;
