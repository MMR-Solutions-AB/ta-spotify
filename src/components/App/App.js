import './App.css';
import SideNav from '../SideNav/SideNav';
import Playlist from '../Playlist/Playlist';
import { Box } from '@mui/material';

function App() {
  const mockData = [
    { name: 'Rock', playlistId: 123, image: '/Justin-Bieber.png' },
    { name: 'Pop', playlistId: 646, image: '/Justin-Bieber.png' },
    { name: 'Hip hop', playlistId: 834, image: '/Justin-Bieber.png' },
    { name: 'X-mas', playlistId: 5503, image: '/Justin-Bieber.png' },
    { name: 'Code life', playlistId: 4832, image: '/Justin-Bieber.png' },
  ];
  return (
    <div className='App'>
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
          <Playlist />
        </Box>
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
    </div>
  );
}

export default App;
