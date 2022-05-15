import { Box } from '@mui/material';
import React from 'react';
export default function NavItem({ name, Icon, active, target }) {
  return (
    <Box
      px={3}
      py={1}
      sx={{
        color: active ? 'white' : 'text.secondary',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': { color: 'white' },
        transition: 'color 0.2s ease-in-out',
        fontSize: 14,
      }}
    >
      {Icon && <Icon sx={{ fontSize: 28, marginRight: 1 }} />}
      {name}
    </Box>
  );
}
