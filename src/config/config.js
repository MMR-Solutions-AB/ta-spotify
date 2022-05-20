// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = '22f2ca0810ca46208e9e789ba4844872';
export const liveUri = 'https://techover-spotify.herokuapp.com/';
export const devUri = 'http://localhost:3000/';
export const redirectUrl = devUri; //change to liveUri when published to ex. heroku
export const scopes = [
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
  'streaming',
];

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
