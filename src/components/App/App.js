import './App.css';
import SideNav from '../SideNav/SideNav';
import Playlist from '../Playlist/Playlist';
import MobileNav from '../MobileNav/MobileNav';
import { Box } from '@mui/material';
import Player from '../Player/Player';
import { Routes, Route } from 'react-router-dom';
import Library from '../Library/Library';
import Home from '../Home/Home';
import Login from '../Login/Login';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-node';
import { fetchUser, fetchPlaylist } from '../../store/actions/index';

function App({ token, fetchUser, fetchPlaylist }) {
  const songs = [
    {
      image: '/Justin-Bieber.png',
      title: 'Holy',
      artist: 'Justin Bieber',
      album: 'No clue',
      duration: 180,
    },
    {
      image: '/Justin-Bieber.png',
      title: 'Holy',
      artist: 'Justin Bieber',
      album: 'No clue',
      duration: 180,
    },
    {
      image: '/Justin-Bieber.png',
      title: 'Holy',
      artist: 'Justin Bieber',
      album: 'No clue',
      duration: 180,
    },
    {
      image: '/Justin-Bieber.png',
      title: 'Holy',
      artist: 'Justin Bieber',
      album: 'No clue',
      duration: 180,
    },
    {
      image: '/Justin-Bieber.png',
      title: 'Holy',
      artist: 'Justin Bieber',
      album: 'No clue',
      duration: 180,
    },
    {
      image: '/Justin-Bieber.png',
      title: 'Holy',
      artist: 'Justin Bieber',
      album: 'No clue',
      duration: 180,
    },
    {
      image: '/Justin-Bieber.png',
      title: 'Holy',
      artist: 'Justin Bieber',
      album: 'No clue',
      duration: 180,
    },
    {
      image: '/Justin-Bieber.png',
      title: 'Holy',
      artist: 'Justin Bieber',
      album: 'No clue',
      duration: 180,
    },
    {
      image: '/Justin-Bieber.png',
      title: 'Holy',
      artist: 'Justin Bieber',
      album: 'No clue',
      duration: 180,
    },
    {
      image: '/Justin-Bieber.png',
      title: 'Holy',
      artist: 'Justin Bieber',
      album: 'No clue',
      duration: 180,
    },
  ];

  const spotifyApi = new SpotifyWebApi();

  useEffect(() => {
    // Set up spotify:
    spotifyApi.setAccessToken(token);

    const getData = async () => {
      fetchUser(spotifyApi);
      fetchPlaylist(spotifyApi);
    };

    if (token) getData();
  }, [token, fetchUser]);

  return (
    <div className='App'>
      {token ? (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              overflowY: 'auto',
            }}
          >
            <SideNav />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route
                path='/search'
                element={<h1 style={{ color: 'white' }}>Search</h1>}
              />
              <Route path='/library' element={<Library />} />
              <Route
                path='/playlist/:playlistId'
                element={<Playlist songs={songs} spotifyApi={spotifyApi} />}
              />
            </Routes>
          </Box>
          <Player />
          <MobileNav />
          <Box
            px={3}
            sx={{
              width: '100%',
              height: 25,
              backgroundColor: 'primary.main',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              fontSize: 14,
              boxSizing: 'border-box',
            }}
          >
            Made with ❤️ by Techover Academy 👨‍💻
          </Box>
        </Box>
      ) : (
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (data) => dispatch(fetchUser(data)),
    fetchPlaylist: (data) => dispatch(fetchPlaylist(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
