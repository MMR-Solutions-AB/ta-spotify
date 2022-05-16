import React from 'react';
import { Avatar, Box, Typography, Grid, Divider } from '@mui/material';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import { formatTime } from '../../utils/functions';

export default function SongTable({ songs }) {
  const renderSongs = () => {
    return songs.map((song, i) => {
      return (
        <Grid
          key={i}
          px={2}
          py={1}
          container
          sx={{
            width: '100%',
            color: 'text.secondary',
            fontSize: 14,
            borderRadius: 1,
            cursor: 'pointer',
            '&:hover': { background: '#ffffff15' },
          }}
        >
          <Grid
            item
            sx={{
              width: 35,
              display: 'flex',
              alignItems: 'center',
              fontSize: 16,
            }}
          >
            {i + 1}
          </Grid>
          <Grid
            item
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Avatar src='/Justin-Bieber.png' alt='logo' variant='square' />
            <Box>
              <Typography sx={{ fontSize: 16, color: 'white' }}>
                {song.title}
              </Typography>
              <Typography sx={{ fontSize: 14 }}>{song.artist}</Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            {song.album}
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            {formatTime(song.duration)}
          </Grid>
        </Grid>
      );
    });
  };
  return (
    <Box
      p={{ xs: 3, md: 4 }}
      sx={{
        flex: 1,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Grid
        px={2}
        py={1}
        container
        sx={{ width: '100%', color: 'text.secondary', fontSize: 14 }}
      >
        <Grid item sx={{ width: 35, display: 'flex', alignItems: 'center' }}>
          #
        </Grid>
        <Grid
          item
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          TITLE
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
          }}
        >
          ALBUM
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <AccessTimeRoundedIcon sx={{ width: 20, height: 20 }} />
        </Grid>
      </Grid>
      <Box pb={2}>
        <Divider
          sx={{ backgroundColor: '#ffffff40', width: '100%', height: 1 }}
        />
      </Box>
      {renderSongs()}
    </Box>
  );
}
