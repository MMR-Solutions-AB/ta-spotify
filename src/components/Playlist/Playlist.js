import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import SongTable from '../SongTable/SongTable';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Playlist({ spotifyApi, loading }) {
  const { playlistId } = useParams();
  const [playlistInfo, setPlaylistInfo] = useState();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const playlistDetails = await spotifyApi.getPlaylist(playlistId);
      setPlaylistInfo({
        image: playlistDetails.body.images[0].url,
        name: playlistDetails.body.name,
      });

      const allSongs = await spotifyApi.getPlaylistTracks(playlistId);
      const formattedSongs = formatSongData(allSongs.body.items);
      setSongs(formattedSongs);
    };
    getData();
  }, [playlistId]);

  const formatSongData = (songsInPlaylist) => {
    return songsInPlaylist.map((song, i) => {
      const { track } = song;
      track.contextUri = `spotify:playlist:${playlistId}`;
      track.position = i;
      return track;
    });
  };

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
          src={playlistInfo?.image}
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
            {playlistInfo?.name}
          </Typography>
        </Box>
      </Box>
      <SongTable songs={songs} />
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.playlist.loading,
  };
};

export default connect(mapStateToProps)(Playlist);
