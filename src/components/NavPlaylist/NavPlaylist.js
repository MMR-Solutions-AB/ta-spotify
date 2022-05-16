import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavPlaylist({ name, id }) {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => {
        navigate(`/playlist/${id}`);
      }}
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
