import * as actionTypes from "./actionTypes";

export const addDevice = (device_id) => {
  return { type: actionTypes.ADD_DEVICE_ID, payload: device_id };
};

export const play = () => {
  return { type: actionTypes.PLAY };
};

export const pause = () => {
  return { type: actionTypes.PAUSE };
};

export const setProgress = (progress) => {
  return { type: actionTypes.SET_PROGRESS, payload: progress };
};

export const updatePlayerStart = () => {
  return { type: actionTypes.UPDATE_PLAYER_START };
};

export const updatePlayerFail = (error) => {
  return { type: actionTypes.UPDATE_PLAYER_FAIL, payload: error };
};

export const updatePlayerSuccess = (payload) => {
  return { type: actionTypes.UPDATE_PLAYER_SUCCESS, payload };
};

export const playNewSong = (spotifyApi, song = {}) => {
  return async (dispatch) => {
    dispatch(updatePlayerStart());
    try {
      await spotifyApi.play(song);
      const data = await getMyCurrentPlayingTrack(spotifyApi);
      dispatch(updatePlayerSuccess(data));
      dispatch(play());
    } catch (e) {
      dispatch(updatePlayerFail(e));
    }
  };
};

export const updateSongInfo = (spotifyApi) => {
  return async (dispatch) => {
    dispatch(updatePlayerStart());
    try {
      const song = await getMyCurrentPlayingTrack(spotifyApi);
      dispatch(updatePlayerSuccess(song));
    } catch (error) {
      dispatch(updatePlayerFail(error));
    }
  };
};

export const updateSongInfoStart = (spotifyApi) => {
  return async (dispatch) => {
    dispatch(updatePlayerStart());
    try {
      const data = await spotifyApi.getMyCurrentPlaybackState();
      if (data.body && data.body.is_playing) {
        const song = formatSongInfo(data.body.item, data.body.progress_ms);
        dispatch(updatePlayerSuccess(song));
      } else {
        const data = await spotifyApi.getMyRecentlyPlayedTracks({ limit: 1 });
        if (data.body) {
          const song = formatSongInfo(data.body.items[0].track, 0);
          dispatch(updatePlayerSuccess(song));
        }
      }
    } catch (error) {
      dispatch(updatePlayerFail(error));
    }
  };
};

const getMyCurrentPlayingTrack = async (spotifyApi) => {
  const currentSong = await spotifyApi.getMyCurrentPlayingTrack();
  const item = currentSong.body.item;
  const duration = item.duration_ms / 1000;
  const progress = currentSong.body.progress_ms / 1000;
  return {
    title: item.name,
    image: item.album.images[1],
    artist: item.artists[0].name,
    duration,
    progress,
  };
};

const formatSongInfo = (item, progress_ms) => {
  return {
    title: item.name,
    image: item.album.images[1],
    artist: item.artists[0].name,
    duration: item.duration_ms / 1000,
    progress: progress_ms / 1000,
  };
};
