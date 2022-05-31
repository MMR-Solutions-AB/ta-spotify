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

export const updatePlayerSuccess = (payload) => {
  return { type: actionTypes.UPDATE_PLAYER_SUCCESS, payload };
};

export const updatePlayerFail = (error) => {
  return { type: actionTypes.UPDATE_PLAYER_FAIL, payload: error };
};

export const playNewSong = (spotifyApi, song) => {
  return async (dispatch) => {
    dispatch(updatePlayerStart());
    try {
      await spotifyApi.play(song);
      const track = await getMyCurrentPlayingTrack(spotifyApi);
      dispatch(play());
      dispatch(updatePlayerSuccess(track));
    } catch (error) {
      dispatch(updatePlayerFail(error));
    }
  };
};

// Updatera palyer komponenten med bild text och progress
export const updateSongInfo = (spotifyApi) => {
  return async (dispatch) => {
    dispatch(updatePlayerStart());
    try {
      const track = await getMyCurrentPlayingTrack(spotifyApi);
      dispatch(updatePlayerSuccess(track));
    } catch (error) {
      dispatch(updatePlayerFail(error));
    }
  };
};

export const updateSongInfoStart = (spotifyApi) => {
  return async (dispatch, getState) => {
    dispatch(updatePlayerStart());
    try {
      const state = getState();
      const { device_id } = state.player;
      const playback = await spotifyApi.getMyCurrentPlaybackState();
      console.log({ playback });

      // Check if a device is playing music right now
      if (playback.body && playback.body.is_playing) {
        console.log({ playback });
        await spotifyApi.transferMyPlayback([device_id], true);
        dispatch(pause());
        dispatch(updateSongInfo(spotifyApi));
      } else {
        await spotifyApi.transferMyPlayback([device_id], true);
        const currentSong = await spotifyApi.getMyCurrentPlayingTrack();
        if (currentSong.body) {
          console.log({ currentSong });
          dispatch(updateSongInfo(spotifyApi));
        } else {
          const id = setInterval(async () => {
            const currentSong = await spotifyApi.getMyCurrentPlayingTrack();
            console.log({ currentSong });
            if (currentSong.body) {
              clearInterval(id);
              dispatch(updateSongInfo(spotifyApi));
            }
          }, 500);
        }
      }
    } catch (e) {
      console.log("errors");
      dispatch(updatePlayerFail(e));
    }
  };
};

// Det här är inte en action
const getMyCurrentPlayingTrack = async (spotifyApi) => {
  const currentSong = await spotifyApi.getMyCurrentPlayingTrack();
  console.log(currentSong);
  const { item } = currentSong.body;
  const duration = item.duration_ms / 1000;
  const progress = currentSong.body.progress_ms / 1000;
  return {
    title: item.title,
    image: item.album.images[1],
    artist: item.artists[0].name,
    duration,
    progress,
  };
};
