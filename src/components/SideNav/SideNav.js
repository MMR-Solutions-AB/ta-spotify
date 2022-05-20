import React, { useEffect } from 'react';
import { Box, Divider } from '@mui/material';
import NavItem from '../NavItem/NavItem';
import NavPlaylist from '../NavPlaylist/NavPlaylist';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { connect } from 'react-redux';

function SideNav({ playlists, loading }) {
  const renderPlaylists = () => {
    if (loading) return 'Loading';
    return playlists?.map((playlist) => {
      return (
        <NavPlaylist key={playlist.id} id={playlist.id} name={playlist.name} />
      );
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        width: 230,
        height: '100%',
        display: {
          xs: 'none',
          md: 'flex',
        },
        flexDirection: 'column',
      }}
    >
      <Box p={3}>
        <img src='/Spotify_Logo.png' alt='logo' width={'75%'} />
      </Box>

      <NavItem name='Home' active Icon={HomeRoundedIcon} target='/' />
      <NavItem name='Search' Icon={SearchRoundedIcon} target='/search' />
      <Box px={3} py={1}>
        <Divider sx={{ backgroundColor: '#ffffff40' }} />
      </Box>

      <Box sx={{ overflowY: 'auto', flex: 1 }}>{renderPlaylists()}</Box>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    playlists: state.playlist.items,
    loading: state.playlist.loading,
  };
};

export default connect(mapStateToProps)(SideNav);
