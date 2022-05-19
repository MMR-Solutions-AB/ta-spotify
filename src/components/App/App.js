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
import { fetchUser } from '../../store/actions/index';

function App({ token, fetchUser }) {
  const mockData = [
    { name: 'Rock', playlistId: 123, image: '/Justin-Bieber.png' },
    { name: 'Pop', playlistId: 646, image: '/Justin-Bieber.png' },
    { name: 'Hip hop', playlistId: 834, image: '/Justin-Bieber.png' },
    { name: 'X-mas', playlistId: 5503, image: '/Justin-Bieber.png' },
    { name: 'Code life', playlistId: 4832, image: '/Justin-Bieber.png' },
  ];

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
            <SideNav playlists={mockData} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route
                path='/search'
                element={<h1 style={{ color: 'white' }}>Search</h1>}
              />
              <Route
                path='/library'
                element={<Library playlists={mockData} />}
              />
              <Route
                path='/playlist/:playlistId'
                element={<Playlist songs={songs} />}
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

const mapDispatch = (dispatch) => {
  return {
    fetchUser: (data) => dispatch(fetchUser(data)),
  };
};

const mapState = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapState, mapDispatch)(App);
