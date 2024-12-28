import React, { useContext } from 'react';
import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { GlobalContext } from './contextstore/global-context-store';

const ToggelIOSSwitch = styled((props) =>
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#54B689', // Thumb color when checked
    '& + .MuiSwitch-track': {
      backgroundColor: '#54B689', // Track color when checked
    },
  },
}));

export default function IOSSwitch() {
  const { toggleSidebarDarkMode } = useContext(GlobalContext); // Get the context function
  const [checked, setChecked] = useState(true);  // Default state set to true

  const handleChange = (event) => {
    setChecked(event.target.checked);  // Handle toggle
    toggleSidebarDarkMode(event.target.checked);
  };

  return (
    <div>
      <ToggelIOSSwitch checked={checked} onChange={handleChange} />
    </div>
  );
}
