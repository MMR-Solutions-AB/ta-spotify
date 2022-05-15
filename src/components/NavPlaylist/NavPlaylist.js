import { Box } from '@mui/material';
import React from 'react';
export default function NavPlaylist({ name, id }) {
  return (
    <Box
      px={3}
      py={1}
      sx={{
        color: 'text.secondary',
        cursor: 'pointer',
        '&:hover': { color: 'white' },
        fontSize: 14,
      }}
    >
      {name}
    </Box>
  );
}
