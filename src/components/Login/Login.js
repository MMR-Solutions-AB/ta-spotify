import { Button, Box } from '@mui/material';
import { accessUrl } from '../../config/config';

const Login = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img
        src='/Spotify_Logo.png'
        style={{ marginBottom: 300, width: '70%', maxWidth: 500 }}
        alt='Logo'
      />
      <Button href={accessUrl} color='primary' variant='contained' size='large'>
        Login to spotify
      </Button>
    </Box>
  );
};

export default Login;
