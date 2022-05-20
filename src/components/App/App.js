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
import { fetchUser, fetchPlaylist, addDevice } from '../../store/actions/index';

const setupSpotifyConnect = (token, addDevice, spotifyApi) => {
  const player = new window.Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: (cb) => {
      cb(token);
    },
    volume: 0.5,
  });

  // Ready
  player.addListener('ready', ({ device_id }) => {
    addDevice(device_id);
    spotifyApi.transferMyPlayback([device_id]);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  player.addListener('initialization_error', ({ message }) => {
    console.error(message);
  });

  player.addListener('authentication_error', ({ message }) => {
    console.error(message);
  });

  player.addListener('account_error', ({ message }) => {
    console.error(message);
  });

  player.connect();
};

function App({ token, fetchUser, fetchPlaylist, spotifyApi, addDevice }) {
  useEffect(() => {
    const getData = async () => {
      fetchUser(spotifyApi);
      fetchPlaylist(spotifyApi);
    };
    if (token) {
      window.onSpotifyWebPlaybackSDKReady = () => {
        setupSpotifyConnect(token, addDevice, spotifyApi);
      };
      getData();
    }
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
                element={<Playlist spotifyApi={spotifyApi} />}
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
    addDevice: (device_id) => dispatch(addDevice(device_id)),
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
