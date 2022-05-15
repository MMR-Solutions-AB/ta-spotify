import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import SongTable from '../SongTable/SongTable';

export default function Playlist({ songs }) {
  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        flex: 1,
        overflowY: 'auto',
      }}
    >
      <Box
        p={{ xs: 3, md: 4 }}
        sx={{
          width: '100%',
          background:
            'linear-gradient(0deg, rgba(17,38,25,1) 0%, rgba(24,115,38,1) 100%);',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          gap: 3,
          boxSizing: 'border-box',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Avatar
          src='/Justin-Bieber.png'
          alt='logo'
          variant='square'
          sx={{
            width: { xs: '100%', md: 235 },
            height: { xs: '100%', md: 235 },
            boxShadow: 15,
          }}
        />
        <Box sx={{ color: 'white' }}>
          <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>
            PLAYLIST
          </Typography>
          <Typography sx={{ fontSize: { xs: 42, md: 72 }, fontWeight: 900 }}>
            Code life
          </Typography>
        </Box>
      </Box>
      <SongTable songs={songs} />
    </Box>
  );
}
