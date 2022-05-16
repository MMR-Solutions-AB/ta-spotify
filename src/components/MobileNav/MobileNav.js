import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import { useNavigate } from 'react-router-dom';

const MobileNav = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        sx={{ background: 'background.paper' }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{
            color: 'text.secondary',
          }}
          value='home'
          label='Home'
          icon={<HomeIcon />}
          onClick={() => {
            navigate('/');
          }}
        />
        <BottomNavigationAction
          sx={{
            color: 'text.secondary',
          }}
          value='seach'
          label='Search'
          icon={<SearchIcon />}
          onClick={() => {
            navigate('/search');
          }}
        />
        <BottomNavigationAction
          sx={{
            color: 'text.secondary',
          }}
          value='playlist'
          label='Library'
          icon={<ListIcon />}
          onClick={() => {
            navigate('/library');
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default MobileNav;
