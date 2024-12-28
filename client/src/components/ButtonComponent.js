import React ,{ useContext } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { GlobalContext } from '../components/contextstore/global-context-store';


const ButtonComponent = ({buttonProps}) => {
  const { onItemClick } = useContext(GlobalContext);
  const Icon=buttonProps.icon


  const handleDownload = async () => {
    console.log("Downloading...");
  
    try {
      const response = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query GetResume {
              resume
            }
          `,
        }),
      });
  
      const result = await response.json();
        console.log('result....!!',result)
      if (result.data && result.data.resume) {
        const resumeUrl = result.data.resume;
  
        // Trigger file download
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "Sruthi-Resume.pdf"; // Default filename
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        throw new Error("Failed to fetch the resume");
      }
    } catch (error) {
      console.error("Error downloading the resume:", error);
    }
  };
  
  const handleClick = () => {
    console.log('heloo...!')
    if (buttonProps.text === 'Download PDF Version') {
      handleDownload();  // Trigger resume download
    } else if(buttonProps.text ==='Hire Me'){
      onItemClick('Contact');
    }else{
      onItemClick(buttonProps.text);  // Call the original onItemClick function
    }
  };



  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',     // Center vertically if needed
      }}
    >
      <Button
        startIcon={Icon} // Place the icon before the text
        sx={{
          display: 'flex',
          padding: '10px 10px', // Increase padding for larger button
          width: buttonProps.width, // Set the width of the button
          backgroundColor: buttonProps.backgroundColor, // Background color
          borderColor: 'transparent', // Transparent border color
          borderRadius: '8px',
          color: "#fff",
          '&:hover': {
            backgroundColor: buttonProps.backgroundHoverColor, // Darker color on hover
          },
          textTransform: 'none',
          fontFamily: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
          fontSize: '1rem',
          fontWeight: 'bold',
        }}
       onClick={handleClick}
      >
        {buttonProps.text}
      </Button>
    </Box>
  );
};

export default ButtonComponent;
